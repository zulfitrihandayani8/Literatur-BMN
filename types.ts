export interface Regulation {
  title: string;
  url: string;
}

export interface CycleData {
  id: number;
  title: string;
  description: string;
  content: string[]; // Array of paragraphs for narrative
  regulations: Regulation[];
}

export interface ScopeData {
  definition: string;
  sources: {
    title: string;
    description?: string;
    items?: string[];
  }[];
  principles: {
    title: string;
    description: string;
  }[];
}

export interface Comment {
  id: string; // ID internal (timestamp string)
  docId?: string; // ID dokumen dari Firestore (khusus top-level)
  name: string;
  content: string;
  date: string;
  timestamp?: any; // Firestore timestamp
  replies?: Comment[];
}