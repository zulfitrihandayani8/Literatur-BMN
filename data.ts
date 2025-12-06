import { CycleData, ScopeData } from './types';

export const scopeData: ScopeData = {
  definition: "Barang Milik Negara/Daerah adalah semua barang yang dibeli atau diperoleh atas beban APBN/APBD maupun dari perolehan lain yang sah.",
  sources: [
    {
      title: "Perolehan melalui APBN/APBD",
      description: "Barang yang dibeli atau diperoleh dari pendanaan pemerintah pusat/daerah."
    },
    {
      title: "Perolehan Lainnya yang Sah",
      items: [
        "Hibah/sumbangan atau bentuk sejenis.",
        "Perjanjian/kontrak, termasuk hibah dengan perjanjian atau perolehan melalui kerja sama.",
        "Peraturan perundang-undangan yang menetapkan penyerahan atau penambahan aset.",
        "Putusan pengadilan berkekuatan hukum tetap yang menyebabkan barang menjadi milik negara/daerah."
      ]
    }
  ],
  principles: [
    { title: "Fungsional", description: "Sesuai fungsi dan kebutuhan tugas pemerintahan." },
    { title: "Kepastian Hukum", description: "Memiliki dasar hukum yang jelas." },
    { title: "Transparansi", description: "Dapat diakses dan diawasi publik." },
    { title: "Efisiensi", description: "Memberikan manfaat optimal dengan biaya minimal." },
    { title: "Akuntabilitas", description: "Dapat dipertanggungjawabkan." },
    { title: "Kepastian Nilai", description: "Memiliki nilai wajar yang dapat diukur." }
  ]
};

export const cycles: CycleData[] = [
  {
    id: 1,
    title: "Perencanaan Kebutuhan dan Penganggaran",
    description: "Menentukan kebutuhan BMN/BMD dan mengusulkannya dalam anggaran.",
    content: [
      "### Pengertian Perencanaan Kebutuhan (Pasal 9)",
      "Perencanaan Kebutuhan Barang Milik Negara/Daerah (BMN/BMD) adalah proses penentuan kebutuhan barang untuk mendukung tugas dan fungsi K/L/PD, dilakukan dengan mempertimbangkan ketersediaan barang yang sudah ada.",
      "### Prinsip Penyusunan Perencanaan Kebutuhan",
      "Perencanaan kebutuhan BMN/BMD harus mempertimbangkan:",
      "• Tugas dan fungsi unit kerja.",
      "• Ketersediaan barang yang ada, termasuk kondisi dan kapasitasnya.",
      "### Ruang Lingkup Perencanaan Kebutuhan",
      "Perencanaan kebutuhan meliputi perencanaan untuk:",
      "• Pengadaan – penambahan barang baru.",
      "• Pemeliharaan – menjaga keandalan barang.",
      "• Pemanfaatan – optimalisasi aset yang tidak digunakan langsung.",
      "• Pemindahtanganan – pengalihan kepemilikan.",
      "• Penghapusan – pengeluaran barang dari daftar barang.",
      "### Fungsi dan Peran",
      "Perencanaan kebutuhan menjadi dasar penting dalam:",
      "• Pengusulan anggaran kebutuhan baru (new initiative).",
      "• Penetapan angka dasar (baseline).",
      "• Penyusunan Rencana Kerja dan Anggaran (RKA).",
      "### Standar sebagai Dasar Perencanaan",
      "Perencanaan kebutuhan (kecuali untuk penghapusan) disusun berpedoman pada:",
      "• Standar Barang – jenis dan spesifikasi teknis barang.",
      "• Standar Kebutuhan – jumlah ideal barang sesuai jabatan/tugas.",
      "• Standar Harga – nilai harga barang yang digunakan untuk perhitungan anggaran.",
      "### Mekanisme Perencanaan Kebutuhan (Pasal 10)",
      "1. Pengumpulan Usulan: Kuasa Pengguna Barang (KPB) menyusun usulan, kemudian Pengguna Barang (PB) menghimpun seluruh usulan tersebut.",
      "2. Penyampaian Usulan: Pengguna Barang menyampaikan usul rencana kebutuhan BMN/BMD kepada Pengelola Barang.",
      "3. Penelaahan dan Penetapan: Pengelola Barang dan Pengguna Barang melakukan penelaahan dengan memperhatikan data barang yang dimiliki. Hasilnya ditetapkan sebagai Rencana Kebutuhan BMN/BMD."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-zzKGELaYS7jhiwubJNbjAclgZ16MJJDZvacIP9VDgzs?e=ldFqbr"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQDEThDWDF7WTa7olhr7VCubATznrTFStp2AjWaIhKT8xzM?e=x2wg9r"
      },
      {
        title: "PMK Nomor 153/PMK.06/2021 tentang Perencanaan Kebutuhan BMN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQBOX6nQfW7RRLpvGqzsd5P5AVIoLw_Uwb90064WB_pWoNk?e=FmXddL"
      },
      {
        title: "PMK Nomor 138 Tahun 2024 tentang Standar Barang & Kebutuhan",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAXd7pkndXeTK8f7dqGhlpqAbkyjdO7sMK2GYCjkrGyTmE?e=MEpOFH"
      }
    ]
  },
  {
    id: 2,
    title: "Pengadaan",
    description: "Proses memperoleh barang/jasa untuk memenuhi kebutuhan pemerintah.",
    content: [
      "### Prinsip Pengadaan (Pasal 12)",
      "Pengadaan BMN/BMD wajib dilaksanakan dengan mematuhi enam prinsip utama:",
      "• Efisien: Menghasilkan barang/jasa dengan penggunaan sumber daya minimal namun tetap memenuhi kebutuhan.",
      "• Efektif: Memberikan manfaat maksimal dan tepat sasaran sesuai tugas dan fungsi.",
      "• Transparan dan Terbuka: Informasi pengadaan dapat diakses publik dan tidak bersifat tertutup.",
      "• Bersaing: Memberikan kesempatan yang sama bagi penyedia untuk berkompetisi secara sehat.",
      "• Adil / Non-diskriminatif: Tanpa keberpihakan kepada pihak tertentu, perlakuan setara bagi semua peserta.",
      "• Akuntabel: Seluruh proses dapat dipertanggungjawabkan dari aspek hukum, teknis, dan administrasi.",
      "### Ketentuan Pelaksanaan Pengadaan (Pasal 13)",
      "Pelaksanaan pengadaan BMN/BMD mengikuti seluruh ketentuan peraturan perundang-undangan yang berlaku, seperti aturan pengadaan barang/jasa pemerintah. Ketentuan dalam PP 27/2014 (dan perubahannya) dapat menjadi pengecualian, apabila secara khusus diatur berbeda dalam PP tersebut."
    ],
    regulations: [
      {
        title: "Perpres Nomor 16 Tahun 2018 tentang Pengadaan Barang/Jasa Pemerintah",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD0wkGZVE1eTatmwo_TD5MSAXoHnjniSIdJLlyB5cGNJck?e=Z0yuYg"
      },
      {
        title: "Perpres Nomor 12 Tahun 2021 (Perubahan Perpres 16/2018)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQBof4QXyA4SQJzHCvt8qegyAdELUffcXCqUK8nLFmJZC0E?e=9upgTl"
      },
      {
        title: "Perpres Nomor 46 Tahun 2025 (Perubahan Kedua Perpres 16/2018)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQBik8yRU8aCQYZevRxFDHUJAbhT3_f2RiKzocWDcyzmS-I?e=k8ZIZD"
      }
    ]
  },
  {
    id: 3,
    title: "Penggunaan",
    description: "Penetapan BMN untuk digunakan institusi sesuai tugas dan fungsi.",
    content: [
      "### Penetapan Status Penggunaan (PSP) - Pasal 14",
      "Status Penggunaan BMN/BMD ditetapkan oleh:",
      "• Pengelola Barang: untuk Barang Milik Negara (BMN).",
      "• Gubernur/Bupati/Walikota: untuk Barang Milik Daerah (BMD).",
      "### Barang yang Tidak Memerlukan PSP (Pasal 15)",
      "Penetapan status penggunaan tidak dilakukan untuk:",
      "• Persediaan (barang habis pakai/siap pakai).",
      "• Konstruksi dalam pengerjaan (KDP).",
      "• Barang yang direncanakan untuk dihibahkan sejak awal pengadaan.",
      "• BMN dari dana dekonsentrasi/tugas pembantuan yang direncanakan untuk diserahkan.",
      "• BMN/BMD lainnya yang dikecualikan oleh Pengelola Barang/Kepala Daerah.",
      "### Tata Cara Penetapan Status Penggunaan (Pasal 17)",
      "• Untuk BMN: Pengguna Barang melaporkan BMN yang diterima disertai usul penggunaan kepada Pengelola Barang. Pengelola kemudian menetapkan statusnya.",
      "• Untuk BMD: Pengguna Barang melapor ke Pengelola, yang kemudian mengajukan usul penetapan kepada Kepala Daerah (Gubernur/Bupati/Walikota).",
      "### Penetapan Tanpa Usulan",
      "Dalam kondisi tertentu (misal: percepatan untuk barang strategis atau situasi mendesak), Pengelola Barang dapat menetapkan status penggunaan secara langsung tanpa menunggu usulan dari Pengguna Barang."
    ],
    regulations: [
      {
        title: "PMK Nomor 40 Tahun 2024 tentang Tata Cara Penggunaan BMN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQBzH0cSxRTWT5g_4By2wTj6Af-E9XvovkiaINaOSdozjZY?e=sHdd9m"
      },
      {
        title: "PMK Nomor 53/PMK.06/2021 tentang BMN dari Aset Lain-lain",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQCZvRBJ96GLTo9l4tRZTYurAbmi5DXnBOtq7iycoTI_nR0?e=Y6f5no"
      }
    ]
  },
  {
    id: 4,
    title: "Pemanfaatan",
    description: "Optimalisasi BMN yang tidak dipergunakan langsung untuk tugas pokok.",
    content: [
      "### Kriteria Pemanfaatan (Pasal 26)",
      "Pemanfaatan BMN/BMD adalah pendayagunaan barang yang tidak digunakan secara langsung untuk pelaksanaan tugas dan fungsi, guna menghasilkan manfaat ekonomi, nilai tambah, atau optimalisasi aset.",
      "### Pihak yang Berwenang",
      "• Pengelola Barang: Untuk BMN dalam penguasaan Pengelola.",
      "• Pengelola Barang dengan Persetujuan Kepala Daerah: Untuk BMD dalam penguasaan Pengelola.",
      "• Pengguna Barang dengan Persetujuan Pengelola Barang: Untuk BMN/BMD dalam penguasaan Pengguna.",
      "### Prinsip Pemanfaatan",
      "Harus memperhatikan pertimbangan teknis yang objektif, kepentingan negara/daerah (efektivitas), dan kepentingan umum (tidak merugikan publik).",
      "### Bentuk-Bentuk Pemanfaatan (Pasal 27)",
      "• Sewa: Pemanfaatan untuk jangka waktu tertentu dengan imbalan uang.",
      "• Pinjam Pakai: Penyerahan penggunaan barang tanpa imbalan, antar instansi pemerintah.",
      "• Kerja Sama Pemanfaatan (KSP): Kerja sama untuk meningkatkan penerimaan negara/daerah.",
      "• Bangun Guna Serah (BGS) / Bangun Serah Guna (BSG): Pihak ketiga membangun di atas tanah negara, memanfaatkan, lalu menyerahkan kembali (atau menyerahkan dulu baru memanfaatkan).",
      "• Kerja Sama Penyediaan Infrastruktur (KSPI): Pemanfaatan untuk mendukung pembangunan infrastruktur."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-dQ3BURksSK11oiZKmMETActkt60DTVmzhfxKqhOOx9E?e=3Kr8uq"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAWr5E6YTuKQJgrpN-SvQgiAaZCwlNMN9kKw5lFIrdnW_k?e=hwS8sx"
      },
      {
        title: "PMK Nomor 115/PMK.06/2020 tentang Pemanfaatan BMN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQBhj4GT11dLSokLxOxSg3EmAcg1bcvmB9gV4M_JjvOKFj8?e=86ZESw"
      },
      {
        title: "PMK Nomor 40/PMK.06/2024 (Tata Cara Penggunaan BMN)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAUImCxbw2wQLSXtKpvit7_ASL5qE88ZbGjGdiRGrGXTcI?e=TMruDJ"
      }
    ]
  },
  {
    id: 5,
    title: "Pengamanan dan Pemeliharaan",
    description: "Upaya melindungi, menjaga kondisi, dan menjamin keberlangsungan aset.",
    content: [
      "### PENGAMANAN (Pasal 42–44)",
      "Pengelola dan Pengguna Barang wajib melakukan pengamanan atas BMN/BMD.",
      "Tiga Jenis Pengamanan:",
      "• Pengamanan Administrasi: Pencatatan, penatausahaan, dokumentasi.",
      "• Pengamanan Fisik: Pagar, CCTV, pengawasan, perawatan fisik.",
      "• Pengamanan Hukum: Sertifikasi tanah, bukti kepemilikan kendaraan (BPKB), penyelesaian sengketa.",
      "### Pengamanan Kepemilikan",
      "• Tanah: Wajib disertipikatkan atas nama Pemerintah RI/Daerah.",
      "• Bangunan: Wajib memiliki bukti kepemilikan.",
      "• Bukti kepemilikan harus disimpan dengan tertib dan aman oleh Pengelola (untuk Tanah/Bangunan) atau Pengguna Barang (selain Tanah/Bangunan).",
      "### PEMELIHARAAN (Pasal 46–47)",
      "Tanggung jawab pemeliharaan melekat pada pihak yang menguasai barang (Pengelola/Pengguna/Kuasa Pengguna).",
      "• Pedoman: Dilaksanakan berdasarkan Daftar Kebutuhan Pemeliharaan Barang (DKPB).",
      "• Biaya: Dibebankan pada APBN/APBD (pembiayaan normal) atau Pihak Ketiga (jika dalam skema pemanfaatan seperti Sewa/KSP).",
      "• Pelaporan: Kuasa Pengguna Barang membuat Daftar Hasil Pemeliharaan Barang (DHPB) dan melaporkannya secara berkala untuk evaluasi."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-dQ3BURksSK11oiZKmMETActkt60DTVmzhfxKqhOOx9E?e=3Kr8uq"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAWr5E6YTuKQJgrpN-SvQgiAaZCwlNMN9kKw5lFIrdnW_k?e=hwS8sx"
      }
    ]
  },
  {
    id: 6,
    title: "Penilaian",
    description: "Proses menentukan nilai wajar aset untuk kebutuhan laporan keuangan dan transaksi.",
    content: [
      "### Tujuan Penilaian (Pasal 48)",
      "Penilaian BMN/BMD dilakukan untuk:",
      "• Penyusunan neraca Pemerintah Pusat/Daerah (menggunakan Standar Akuntansi Pemerintahan).",
      "• Pemanfaatan BMN/BMD.",
      "• Pemindahtanganan BMN/BMD.",
      "Catatan: Penilaian tidak dilakukan untuk Pemanfaatan Pinjam Pakai dan Pemindahtanganan Hibah.",
      "### Pelaksana Penilaian",
      "1. Tanah/Bangunan (Pasal 50): Dilakukan oleh Penilai Pemerintah atau Penilai Publik yang ditetapkan Pengelola Barang. Tujuannya untuk mendapatkan nilai wajar.",
      "2. Selain Tanah/Bangunan (Pasal 51):",
      "   • BMN: Tim/Penilai yang ditetapkan Pengguna Barang.",
      "   • BMD: Tim/Penilai yang ditetapkan Kepala Daerah.",
      "### Output Penilaian",
      "• Jika dilakukan oleh Penilai Profesional: Menghasilkan Nilai Wajar.",
      "• Jika dilakukan oleh Tim: Menghasilkan Nilai Taksiran.",
      "### Penilaian Kembali (Revaluasi)",
      "Dalam kondisi tertentu, Pengelola Barang dapat melakukan penilaian kembali atas nilai BMN/BMD yang sudah tercatat di neraca (diatur lebih lanjut dengan Perpres)."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-dQ3BURksSK11oiZKmMETActkt60DTVmzhfxKqhOOx9E?e=3Kr8uq"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAWr5E6YTuKQJgrpN-SvQgiAaZCwlNMN9kKw5lFIrdnW_k?e=hwS8sx"
      }
    ]
  },
  {
    id: 7,
    title: "Pemindahtanganan",
    description: "Pengalihan kepemilikan BMN kepada pihak lain (Penjualan, Hibah, Tukar-menukar, dll).",
    content: [
      "### Bentuk Pemindahtanganan (Pasal 54)",
      "BMN/BMD yang tidak diperlukan untuk tugas dapat dipindahtangankan melalui: Penjualan, Tukar Menukar, Hibah, atau Penyertaan Modal Pemerintah (PMP).",
      "### Persetujuan Pemindahtanganan (Pasal 55)",
      "Memerlukan Persetujuan DPR/DPRD jika objeknya:",
      "• Tanah/Bangunan.",
      "• Selain Tanah/Bangunan dengan nilai > Rp100 Miliar (untuk BMN) atau > Rp5 Miliar (untuk BMD).",
      "Pengecualian (Tidak perlu persetujuan DPR/DPRD) jika: Tidak sesuai tata ruang, untuk pegawai negeri, kepentingan umum, atau dikuasai negara berdasarkan putusan pengadilan.",
      "### Penjualan (Pasal 60–63)",
      "Dilakukan jika barang berlebih atau lebih menguntungkan dijual. Prinsip utamanya adalah melalui Lelang. Hasil penjualan disetor ke Kas Negara/Daerah.",
      "### Tukar Menukar (Pasal 64–67)",
      "Dilakukan untuk pemenuhan operasional atau optimalisasi barang. Mitra bisa Pemda, BUMN/D, atau Swasta.",
      "### Hibah (Pasal 68–71)",
      "Diberikan untuk kepentingan sosial, budaya, keagamaan, kemanusiaan, atau pendidikan non-komersial. Syarat: Bukan rahasia negara dan tidak menguasai hajat hidup orang banyak.",
      "### Penyertaan Modal Pemerintah (PMP) - Pasal 72–74",
      "Dilakukan untuk pendirian atau perbaikan struktur modal BUMN/BUMD. Memerlukan penetapan melalui PP (untuk Pusat) atau Perda (untuk Daerah)."
    ],
    regulations: [
      {
        title: "PMK Nomor 111/PMK.06/2016 tentang Tata Cara Pemindahtanganan BMN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQDCqqw8zixJSYnaeKJa6AVzAVcpq-F4Vxh4TJ81XOaxxP0?e=Fali64"
      },
      {
        title: "PMK Nomor 165/PMK.06/2021 (Perubahan PMK 111)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQC37R3-idsPRoGCFlHAwISwASSUsnIfS_Hn6G0M1Tyf0vY?e=tdLVtl"
      }
    ]
  },
  {
    id: 8,
    title: "Pemusnahan",
    description: "Tindakan menghilangkan fisik barang yang tidak dapat digunakan lagi.",
    content: [
      "### Alasan Pemusnahan (Pasal 77)",
      "Pemusnahan dilakukan jika BMN/BMD tidak dapat digunakan, tidak dapat dimanfaatkan, dan tidak dapat dipindahtangankan, atau karena alasan lain sesuai aturan (misal: barang berbahaya).",
      "### Pelaksana Pemusnahan",
      "• BMN pada Pengguna: Oleh Pengguna Barang dengan persetujuan Pengelola.",
      "• BMN pada Pengelola: Oleh Pengelola Barang.",
      "• BMD: Oleh Pengguna/Pengelola dengan persetujuan Kepala Daerah.",
      "### Cara Pemusnahan (Pasal 79)",
      "Dapat dilakukan dengan cara dibakar, dihancurkan, ditimbun, ditenggelamkan, atau cara lain yang menghilangkan fisik/fungsi barang.",
      "Wajib dibuat Berita Acara Pemusnahan (BAPem) dan dilaporkan ke Pengelola Barang/Kepala Daerah."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-dQ3BURksSK11oiZKmMETActkt60DTVmzhfxKqhOOx9E?e=3Kr8uq"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAWr5E6YTuKQJgrpN-SvQgiAaZCwlNMN9kKw5lFIrdnW_k?e=hwS8sx"
      },
      {
        title: "PMK Nomor 83/PMK.06/2016 tentang Pemusnahan & Penghapusan BMN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQC1MV3CqoKHQZQ3hJCskSdgAdt6EFkd0jCOKioYA69wQDQ?e=6L7YA3"
      }
    ]
  },
  {
    id: 9,
    title: "Penghapusan",
    description: "Penghapusan BMN dari Daftar Barang karena sudah tidak berada dalam penguasaan.",
    content: [
      "### Ruang Lingkup Penghapusan",
      "Meliputi penghapusan dari Daftar Barang Pengguna (DBP), Daftar Barang Kuasa Pengguna (DBKP), dan Daftar Barang Milik Negara (DBMN).",
      "### Penghapusan dari DBP/DBKP (Pasal 82)",
      "Dilakukan jika barang sudah tidak berada dalam penguasaan Pengguna/Kuasa Pengguna.",
      "• BMN: Ditetapkan Pengguna setelah persetujuan Pengelola.",
      "• BMD: Ditetapkan Pengelola setelah persetujuan Kepala Daerah.",
      "Pengecualian: Pengalihan Status Penggunaan, Pemindahtanganan, dan Pemusnahan tidak memerlukan persetujuan penghapusan tersendiri (karena sudah paket persetujuan di awal).",
      "### Penghapusan dari DBMN (Pasal 83)",
      "Dilakukan jika terjadi peralihan kepemilikan (misal: dijual/hibah), pemusnahan total, atau sebab lain (hilang/susut)."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-dQ3BURksSK11oiZKmMETActkt60DTVmzhfxKqhOOx9E?e=3Kr8uq"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAWr5E6YTuKQJgrpN-SvQgiAaZCwlNMN9kKw5lFIrdnW_k?e=hwS8sx"
      },
      {
        title: "PMK Nomor 83/PMK.06/2016 tentang Pemusnahan & Penghapusan BMN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQDyOiGQzfAST6u2aUFK03BrAZUkXYenYiVNw-m8KMDJ92U?e=gUT3PY"
      }
    ]
  },
  {
    id: 10,
    title: "Penatausahaan",
    description: "Pencatatan, inventarisasi, dan pelaporan BMN/BMD.",
    content: [
      "### PEMBUKUAN (Pasal 84)",
      "• Pengelola Barang wajib mencatat BMN dalam Daftar Barang Pengelola.",
      "• Pengguna/Kuasa Pengguna Barang wajib mencatat BMN dalam Daftar Barang Pengguna/Kuasa Pengguna.",
      "• Pembukuan dilakukan sesuai kodefikasi barang yang ditetapkan Menteri Keuangan (untuk BMN) atau Mendagri (untuk BMD).",
      "### INVENTARISASI (Pasal 85)",
      "• Umum: Dilakukan minimal 1 kali dalam 5 tahun (Sensus BMN).",
      "• Khusus: Untuk Persediaan dan Konstruksi Dalam Pengerjaan (KDP), inventarisasi dilakukan setiap tahun.",
      "• Hasil inventarisasi wajib dilaporkan maksimal 3 bulan setelah selesai.",
      "### PELAPORAN (Pasal 87–88)",
      "• Tingkat Satker (KPB): Menyusun Laporan Semesteran & Tahunan, disampaikan ke Pengguna Barang.",
      "• Tingkat Pengguna (PB): Menghimpun laporan satker, menyusun Laporan Barang Pengguna (Semesteran/Tahunan) untuk bahan neraca Kementerian/Lembaga.",
      "• Tingkat Pengelola: Menghimpun laporan PB, menyusun Laporan BMN (LBMN) sebagai bahan Neraca Pemerintah Pusat."
    ],
    regulations: [
      {
        title: "PMK Nomor 118 Tahun 2023 tentang Pedoman Pengelolaan BMN dengan SIMAN",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQBh00OlEL3oSZXWaL5JDc77AV0uXVluHrWuvrzGRAXGe4U?e=jGMkVJ"
      },
      {
        title: "PMK Nomor 40 Tahun 2024 (Tata Cara Penggunaan BMN)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAUImCxbw2wQLSXtKpvit7_ASL5qE88ZbGjGdiRGrGXTcI?e=TMruDJ"
      }
    ]
  },
  {
    id: 11,
    title: "Pembinaan, Pengawasan, dan Pengendalian",
    description: "Tindakan untuk memastikan pengelolaan BMN berjalan sesuai ketentuan.",
    content: [
      "### PEMBINAAN (Pasal 90)",
      "• Menteri Keuangan: Melakukan pembinaan pengelolaan BMN dan menetapkan kebijakan umum/teknis.",
      "• Menteri Dalam Negeri: Melakukan pembinaan pengelolaan BMD dan menetapkan kebijakan daerah yang selaras.",
      "### PENGAWASAN & PENGENDALIAN (Pasal 91–94)",
      "Dilakukan oleh Pengguna Barang (melalui pemantauan & penertiban) dan Pengelola Barang (melalui pemantauan & investigasi).",
      "• Objek Wasdal: Penggunaan, Pemanfaatan, Pemindahtanganan, Penatausahaan, Pemeliharaan, dan Pengamanan.",
      "• Audit: Pengguna/Pengelola Barang dapat meminta APIP (Aparat Pengawasan Intern Pemerintah) untuk melakukan audit tindak lanjut atas hasil pemantauan/penertiban."
    ],
    regulations: [
      {
        title: "PP Nomor 27 Tahun 2014 tentang Pengelolaan BMN/D",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQD-dQ3BURksSK11oiZKmMETActkt60DTVmzhfxKqhOOx9E?e=3Kr8uq"
      },
      {
        title: "PP Nomor 28 Tahun 2020 (Perubahan PP 27/2014)",
        url: "https://kemenpkp-my.sharepoint.com/:b:/g/personal/zulfitri_handayani_pkp_go_id/IQAWr5E6YTuKQJgrpN-SvQgiAaZCwlNMN9kKw5lFIrdnW_k?e=hwS8sx"
      }
    ]
  }
];