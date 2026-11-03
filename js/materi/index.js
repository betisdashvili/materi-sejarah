// Daftar sub-materi. Isi lengkap tiap materi ada di file JS masing-masing (properti "file").
window.KATEGORI = {
  fisik: { judul: "Perjuangan Fisik", deskripsi: "Pertempuran bersenjata rakyat dan tentara melawan upaya Sekutu dan Belanda yang ingin kembali berkuasa.", gambar: "images/kategori-fisik.jpg" },
  diplomasi: { judul: "Perjuangan Diplomasi", deskripsi: "Perundingan dan perjanjian untuk memperoleh pengakuan kedaulatan Indonesia di mata dunia.", gambar: "images/kategori-diplomasi.jpg" }
};
window.MATERI_LIST = [
  // Perjuangan Fisik
  { id: "pertempuran-surabaya", kategori: "fisik", judul: "Pertempuran Surabaya", ringkasan: "Perlawanan arek-arek Surabaya melawan pasukan Sekutu yang melahirkan Hari Pahlawan.", gambar: "images/pertempuran-surabaya.jpg", file: "pertempuran-surabaya.js" },
  { id: "pertempuran-medan-area", kategori: "fisik", judul: "Pertempuran Medan Area", ringkasan: "Perlawanan rakyat Medan melawan Sekutu dan NICA yang membatasi wilayah kota.", gambar: "images/pertempuran-medan-area.jpg", file: "pertempuran-medan-area.js" },
  { id: "pertempuran-ambarawa", kategori: "fisik", judul: "Pertempuran Ambarawa", ringkasan: "Pengepungan Sekutu di Ambarawa di bawah pimpinan Kolonel Soedirman.", gambar: "images/pertempuran-ambarawa.jpg", file: "pertempuran-ambarawa.js" },
  { id: "bandung-lautan-api", kategori: "fisik", judul: "Bandung Lautan Api", ringkasan: "Rakyat dan TRI membakar kota sendiri agar tidak dipakai musuh.", gambar: "images/bandung-lautan-api.jpg", file: "bandung-lautan-api.js" },
  { id: "puputan-margarana", kategori: "fisik", judul: "Puputan Margarana", ringkasan: "Perang habis-habisan pasukan Ngurah Rai melawan Belanda di Bali.", gambar: "images/puputan-margarana.jpg", file: "puputan-margarana.js" },
  { id: "peristiwa-westerling", kategori: "fisik", judul: "Peristiwa Westerling", ringkasan: "Pembantaian rakyat Sulawesi Selatan oleh pasukan khusus Belanda (1946-1947).", gambar: "images/peristiwa-westerling.jpg", file: "peristiwa-westerling.js" },
  { id: "serangan-umum-1-maret", kategori: "fisik", judul: "Serangan Umum 1 Maret 1949", ringkasan: "Serangan TNI ke Yogyakarta yang membuktikan bahwa TNI masih ada.", gambar: "images/serangan-umum-1-maret.jpg", file: "serangan-umum-1-maret.js" },
  // Perjuangan Diplomasi
  { id: "perundingan-hooge-veluwe", kategori: "diplomasi", judul: "Perundingan Hooge Veluwe", ringkasan: "Perundingan di Belanda pada April 1946 yang berakhir tanpa kesepakatan.", gambar: "images/hooge-veluwe.jpg", file: "perundingan-hooge-veluwe.js" },
  { id: "perundingan-linggarjati", kategori: "diplomasi", judul: "Perundingan Linggarjati", ringkasan: "Perundingan RI dan Belanda yang mengakui Jawa, Sumatra, dan Madura.", gambar: "images/linggarjati.jpg", file: "perundingan-linggarjati.js" },
  { id: "perjanjian-renville", kategori: "diplomasi", judul: "Perjanjian Renville", ringkasan: "Perjanjian di atas kapal USS Renville yang mempersempit wilayah Republik.", gambar: "images/renville.jpg", file: "perjanjian-renville.js" },
  { id: "perjanjian-roem-royen", kategori: "diplomasi", judul: "Perjanjian Roem–Royen", ringkasan: "Kesepakatan Mei 1949 yang membuka jalan kembalinya pemerintah RI ke Yogyakarta.", gambar: "images/roem-royen.jpg", file: "perjanjian-roem-royen.js" },
  { id: "konferensi-meja-bundar", kategori: "diplomasi", judul: "Konferensi Meja Bundar", ringkasan: "Perundingan di Den Haag yang berujung pada pengakuan kedaulatan 1949.", gambar: "images/kmb.jpg", file: "konferensi-meja-bundar.js" }
];
