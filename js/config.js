// ============================================================
// 📝 FILE KONFIGURASI - Edit data di sini untuk update profil
// ============================================================

const PROFILE = {
  // --- Info Dasar ---
  name: "Dian Bagus Dermawan",
  nickname: "Dian",
  tagline: "Engineering Student • Rollingstock Engineering • Fashion Enthusiast",
  university: "Politeknik Negeri Madiun",
  faculty: "Jurusan Teknik",
  program: "D-IV Perkeretaapian",
  semester: "V",

  // --- Foto Profil ---
  // Ganti path ini dengan foto kamu (taruh file di folder assets/img/)
  photo: "assets/img/profile-placeholder.svg",

  // --- Bio / Tentang ---
  bio: `Halo kenalin aku Dian Bagus Dermawan, biasa dipanggil Dian. Aku seorang mahasiswa jurusan teknik, program studi D-IV Perkeretaapian 
  Politeknik Negeri Madiun.
  Aku memiliki ketertarikan yang besar terhadap dunia engineering mulai dari desain mekanikal hingga sistem kontrol. 
  Disisi lain, aku juga memiliki ketertarikan di dunia fashion.`,

  // --- TRACK RECORD ---
  Experiences: [
    {
      title: "Sekretaris II",
      organization: "Himpunan Mahasiswa Jurusan Teknik (HMJT)",
      period: "2026 – 2027",
      description: "Bertanggung jawab dalam administrasi dan koordinasi kegiatan himpunan.",
      current: true
    },
    {
      title: "Sekretaris IV",
      organization: "Himpunan Mahasiswa Jurusan Teknik (HMJT)",
      period: "2025 – 2026",
      description: "Mengelola dokumentasi dan mendukung kegiatan organisasi himpunan.",
      current: false
    },
    {
      title: "Anggota Tim Tambak Kreasi",
      organization: "Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa)",
      period: "2025",
      description: "Berkontribusi dalam program pemberdayaan masyarakat dan penguatan kapasitas organisasi.",
      current: false
    }
  ]

  // --- Skills ---
  skills: [
    { name: "Microsoft Word", icon: "📝", level: "Mahir" },
    { name: "Microsoft Excel", icon: "📊", level: "Mahir" },
    { name: "Microsoft PowerPoint", icon: "📽️", level: "Mahir" },
    { name: "Canva", icon: "🎨", level: "Mahir" },
    { name: "CapCut", icon: "🎬", level: "Mahir" },
    { name: "AutoCAD", icon: "📐", level: "Menengah" },
    { name: "SolidWorks", icon: "⚙️", level: "Dasar" }
  ],

  // --- Proyek / Portfolio ---
  projects: [
    {
      title: "Ecogreen-Furniture Berbasis Sampah",
      description: "Pemberdayaan Masyarakat Desa Tambakmas Madiun Bersiklus PDCA Untuk Membangun Usaha Kreatif yang Berdampak Active-Income Melalui Produksi Ecogreen-Furniture Berbasis Sampah.",
      tags: ["Pengabdian Masyarakat", "PDCA", "Publikasi Jurnal"],
      link: "https://journal.pnm.ac.id/index.php/dikemas/article/view/1013/530",
      linkText: "Lihat Publikasi"
    }
    // Tambahkan proyek lainnya di sini:
    // {
    //   title: "Nama Proyek",
    //   description: "Deskripsi proyek.",
    //   tags: ["Tag1", "Tag2"],
    //   link: "https://...",
    //   linkText: "Lihat Detail"
    // }
  ],

  // --- Sosial Media & Kontak ---
  social: {
    email: "dianajalo88@gmail.com",
    instagram: "https://www.instagram.com/drmwn_iyan.db/",
    tiktok: "https://www.tiktok.com/@drmwn_iyan",
    linkedin: "#", // Ganti dengan link LinkedIn kamu nanti
    github: ""     // Opsional: tambahkan link GitHub kalau ada
  },

  // --- Gemini AI Chatbot ---
  gemini: {
    // Masukkan API Key kamu dari https://aistudio.google.com/apikey
    apiKey: "AQ.Ab8RN6K-FbT6YXjl3ws1WM1_4n_Y2mfLbY14G64PcdLABurD7Q",
    // Model yang digunakan
    model: "gemini-4-hydrogen",
    // Bahasa chatbot
    language: "id",
    // Pesan pembuka
    welcomeMessage: "Halo! 👋 Saya asisten AI Dian. Tanya apa saja tentang Dian — pengalaman, skill, atau proyek-proyeknya!"
  }
};
