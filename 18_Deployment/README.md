# Build 
sebelum project react memasuki kedalam tahap deployment, project tersbut haruslah dibuatkan build menjadi sebuah app yang sudah di build. karena dengan membuild sebuah project 
akan ada beberapa hal yang dilakukan kepada project dari tahap development ke tahap production / sudah di build antara lain : 
1. code bundling / penggabungan code
    proses build akan menggabungkan kode javascript kedalam format yang sudah dioptimalkan untuk produksi. dengan dilakukannya penggabungan menjadi satu modul atau lebih,
    ini akan mengurangi beban server dengan cara mengurangi jumlah request http yang dilakukan ketika web dibuka
2. minifikas
    dalam minifikasi terjadi beberapa perubahan didalam kode yang sudah dibuat, seperti penghapusan komentar, spasi kosong yang tidak perlu, dan bahkan nama variabel yang panjang
    agar mengecilkan ukuran dari file namun tetap menjaga fungsionalitas kode
3. tree shaking / pemangkasan pohon
    proses tree shaking ini bertujuan untuk menghilangkan kode yang tidak digunakan, artinya modul dan fungsi yang tidak digunakan akan dihapus
4. optimisasi aset
5. penamaan berkas dengan hash
    bertujuan agar ketika terjadi perubahan pada file di web yang baru (terjadi perubahan) maka browser akan memperbarui file yang dirubah
6. ekstraksi css

# run build
untuk mem-build sebuah react project, tergantung dari package manager yang digunakan, namun pada dasarnya cukup sederhana
jika menggunakan npm dapat menggunakan perintah 'npm run build'
namun jika menggunakan yarn dapat menggunakan 'yarn build'
didalam folder project yang akan di deploy. tergantung dari bagaimana kita membuat project react kita, apakah menggunakan vite atau cra, namun hasil dari build 
akan tersimpan di folder build atau didalam folder dist.

# deployment
ketika kita akan mendeploy project yang sudah siap untuk dipublikasikan dan digunakan, pastikan untuk mempublikasi project yang sudah melalui proses build (di folder build / dist) 
kemudian, kita dapat menggunakan salah satu dari beberapa penyedia layanan untuk membuat website front end kita online, salah satunya ialah netlify, vercel, dan lainnya.
untuk mendeploy web kita dengan netlify, pertama kita harus membuat akun netlifiy, kemudian install netlify cli menggunakan npm
kemudian kita login kedalam akun netlify kita menggunakan cli dengan command netlify login
kemudian netlify init didalam folder project kita. setelah itu kita harus menspesifikasikan bahwa yang ingin kita deploy adalah project yang berada didalam folder build atau dist
setelah itu kita bisa mengatur nama domain atau pengaturan lain tentang web kita. jika sudah selesai maka jalankan perintah netlify deploy --prod