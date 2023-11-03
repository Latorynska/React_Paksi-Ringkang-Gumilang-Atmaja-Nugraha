# apa itu autentikasi
secara sederhana, autentikasi pada software (bukan hanya pada react) merupakan salah satu cara identifikasi pengguna untuk mengakses suatu data 
autentikasi diperlukan untuk menjaga kerahasiaan data, dan keaslian dari suatu data / informasi. suatu data akan memiliki nilai jika data tersebut merupakan data 
yang asli / nyata / sah, dan oleh karena itu autentikasi merupakan salah satu cara untuk menjadi bukti bahwa suatu data sah, baik dari segi kepemilikan, 
informasi pembuat dan beberapa hal lainnya. selain dari itu, autentikasi menjadi salah satu faktor pengaman akan suatu sistem apabila sistem tersebut memang sistem 
yang memerlukan pengamanan untuk mengaksesnya.

# autentikasi pada react
dalam react autentikasi secara alur sama dengan autentikasi pada aplikasi berbasis web lainnya, yaitu adanya proses memasukkan credential yang akan menjadi kunci 
dari suatu akun dan akan dilakukan verifikasi data / pengambilan data pada database, baik itu menggunakan axios, fetch, atau tool serupa yang sudah include sebagai 
3rd party penyedia jasa seperti firebase. informasi autentikasi umumnya akan disimpan dalam bentuk token dalam format JWT atau JSON Web Token agar user tidak perlu 
melakukan login kembali, namun masih memiliki informasi identitas tentang dirinya yang akan diterima oleh backend / server. data yang disimpan pada localstorage 
web, biasanya sudah berbentuk token, bukan credential yang user masukkan karena masalah keamanan, dimana token biasanya menggunakan enkripsi dan pengolahan 
yang dilakukan oleh backend agar data tersebut valid, dapat dikenali, namun juga tetap aman untuk disimpan di web / client side

# proses 
autentikasi pada React dimulai ketika pengguna memasukkan informasi kredensialnya, seperti alamat email dan kata sandi, pada formulir masuk (login form). Setelah 
pengguna mengklik tombol masuk, aplikasi akan mengirimkan data ini ke server atau backend melalui permintaan HTTP. Pada sisi server, sistem akan memeriksa kredensial 
ini dengan data yang ada di database untuk memastikan kecocokan.
Jika kredensial yang dimasukkan oleh pengguna benar, server akan menghasilkan token autentikasi, biasanya dalam bentuk JWT. Token ini kemudian dikirim kembali ke 
aplikasi React dan disimpan di local storage atau dalam cookie di browser pengguna. Token ini berfungsi sebagai tanda bukti bahwa pengguna telah berhasil melewati 
proses autentikasi.
Dengan token ini, pengguna dapat mengakses bagian-bagian terbatas dari aplikasi yang memerlukan autentikasi. Setiap kali pengguna mengakses fitur atau halaman yang 
dilindungi, aplikasi akan mengirimkan token ini ke server bersama permintaan untuk memverifikasi keasliannya. Server kemudian memeriksa tanda tangan digital token 
untuk memastikan bahwa token tersebut valid dan berasal dari sumber yang sah.