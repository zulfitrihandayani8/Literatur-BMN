import React, { useState, useEffect } from 'react';
import { Comment } from '../types';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  updateDoc,
  doc,
  getDoc
} from 'firebase/firestore';

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State form utama
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State form balasan
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyName, setReplyName] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const [isReplySubmitting, setIsReplySubmitting] = useState(false);

  // Real-time listener dari Firestore
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id, // Simpan Document ID Firestore untuk update nanti
        id: doc.data().id // Simpan juga ID internal yang lama (timestamp string)
      })) as Comment[];
      
      setComments(fetchedComments);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching comments: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Handle Main Submit (Komentar Baru)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "comments"), {
        id: Date.now().toString(),
        name: name.trim(),
        content: content.trim(),
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        timestamp: serverTimestamp(),
        replies: []
      });
      
      setName('');
      setContent('');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Gagal mengirim komentar. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper: Mencari Top-Level Document ID yang membawahi sebuah reply
  // Karena struktur nested, kita perlu tahu dokumen mana yang harus di-update
  const findParentDocId = (commentsList: Comment[], targetId: string): string | null => {
    for (const comment of commentsList) {
      // Cek apakah target adalah top-level comment itu sendiri
      if (comment.id === targetId) return comment.docId || null;

      // Cek apakah target ada di dalam replies (recursive)
      if (hasReplyId(comment.replies || [], targetId)) {
        return comment.docId || null;
      }
    }
    return null;
  };

  const hasReplyId = (replies: Comment[], targetId: string): boolean => {
    for (const reply of replies) {
      if (reply.id === targetId) return true;
      if (reply.replies && hasReplyId(reply.replies, targetId)) return true;
    }
    return false;
  };

  // Handle Reply Submit
  const handleReplySubmit = async (e: React.FormEvent, targetInternalId: string) => {
    e.preventDefault();
    if (!replyName.trim() || !replyContent.trim()) return;

    setIsReplySubmitting(true);

    const parentDocId = findParentDocId(comments, targetInternalId);

    if (!parentDocId) {
      alert("Komentar induk tidak ditemukan.");
      setIsReplySubmitting(false);
      return;
    }

    const newReply: Comment = {
      id: Date.now().toString(),
      name: replyName.trim(),
      content: replyContent.trim(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      replies: []
    };

    try {
      // 1. Ambil dokumen terbaru dari Firestore untuk memastikan data konsisten
      const commentRef = doc(db, "comments", parentDocId);
      const commentSnap = await getDoc(commentRef);

      if (commentSnap.exists()) {
        const commentData = commentSnap.data() as Comment;
        
        // 2. Fungsi rekursif untuk menyisipkan balasan di memori
        const addReplyRecursive = (list: Comment[]): Comment[] => {
            return list.map(c => {
              if (c.id === targetInternalId) {
                return {
                  ...c,
                  replies: [newReply, ...(c.replies || [])]
                };
              } else if (c.replies && c.replies.length > 0) {
                return {
                  ...c,
                  replies: addReplyRecursive(c.replies)
                };
              }
              return c;
            });
        };

        // Jika target adalah top-level doc itu sendiri
        let updatedReplies;
        if (commentData.id === targetInternalId) {
            updatedReplies = [newReply, ...(commentData.replies || [])];
        } else {
            // Jika target adalah salah satu reply di dalamnya
            updatedReplies = addReplyRecursive(commentData.replies || []);
        }

        // 3. Update Firestore
        await updateDoc(commentRef, {
            replies: updatedReplies
        });

        // Reset Form
        setReplyingTo(null);
        setReplyName('');
        setReplyContent('');
      }
    } catch (error) {
      console.error("Error updating reply: ", error);
      alert("Gagal membalas komentar.");
    } finally {
      setIsReplySubmitting(false);
    }
  };

  // Komponen untuk merender satu item komentar beserta balasannya
  const CommentItem = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
    const isReplying = replyingTo === comment.id;

    return (
      <div className={`flex flex-col ${isReply ? 'mt-3' : 'mt-4'}`}>
        <div className={`flex gap-4 p-4 rounded-xl ${isReply ? 'bg-slate-50 dark:bg-slate-800/50 border-l-4 border-l-primary-300 dark:border-l-primary-600' : 'bg-slate-50 dark:bg-slate-800/50'} border border-slate-200 dark:border-slate-700 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-sm`}>
          <div className="flex-shrink-0">
            <div className={`rounded-full flex items-center justify-center font-bold uppercase border border-primary-100 dark:border-slate-600 ${isReply ? 'w-8 h-8 text-xs bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400' : 'w-10 h-10 bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-sm'}`}>
              {comment.name.charAt(0)}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{comment.name}</h4>
              <span className="text-xs text-slate-500 dark:text-slate-400">{comment.date}</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words">{comment.content}</p>
            
            {/* Tombol Balas */}
            <div className="mt-2 flex items-center gap-3">
               <button 
                  onClick={() => {
                    setReplyingTo(isReplying ? null : comment.id);
                    setReplyName('');
                    setReplyContent('');
                  }}
                  className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 flex items-center gap-1 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  {isReplying ? 'Batal' : 'Balas'}
                </button>
            </div>
          </div>
        </div>

        {/* Form Balasan */}
        {isReplying && (
           <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="mt-3 ml-14 p-4 bg-white dark:bg-slate-900 rounded-xl border border-primary-200 dark:border-slate-700 shadow-md animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="mb-3">
                 <input
                    type="text"
                    value={replyName}
                    onChange={(e) => setReplyName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="Nama Anda"
                    required
                    autoFocus
                    disabled={isReplySubmitting}
                 />
              </div>
              <div className="mb-3">
                 <textarea
                    rows={2}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                    placeholder="Tulis balasan..."
                    required
                    disabled={isReplySubmitting}
                 />
              </div>
              <div className="flex justify-end gap-2">
                 <button 
                    type="button" 
                    onClick={() => setReplyingTo(null)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    disabled={isReplySubmitting}
                 >
                    Batal
                 </button>
                 <button 
                    type="submit"
                    className="px-3 py-1.5 text-xs font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    disabled={isReplySubmitting}
                 >
                    {isReplySubmitting ? (
                      <>
                        <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : 'Kirim Balasan'}
                 </button>
              </div>
           </form>
        )}

        {/* Render Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-8 md:ml-12 border-l-2 border-primary-100 dark:border-slate-700 pl-4 space-y-2">
             {comment.replies.map(reply => (
                <CommentItem key={reply.id} comment={reply} isReply={true} />
             ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card-white rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-heading font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        Diskusi & Pertanyaan
      </h3>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
            placeholder="Tulis nama Anda"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Komentar</label>
          <textarea
            id="content"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm resize-none placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
            placeholder="Bagikan pendapat atau pertanyaan Anda mengenai BMN..."
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-primary-900/10 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
             <>
               <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
               Mengirim...
             </>
          ) : 'Kirim Komentar'}
        </button>
      </form>

      <div className="space-y-4">
        {loading ? (
            <div className="flex justify-center py-8">
                <svg className="animate-spin h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <p>Belum ada komentar. Jadilah yang pertama berkomentar!</p>
          </div>
        ) : (
          comments.map((comment) => (
             <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;