# Apa itu API
API atau Application Programming Interface adalah sekumpulan atau set aturan dan prosedur yang dibuat agar memungkinkan berbagai macam 
software bahkan hardware agar dapat saling berinteraksi, berbagi data, atau menjalankan suatu fungsi tertentu. API sendiri 
dibuat agar suatu sistem database dapat diakses bukan hanya oleh satu sistem operasi atau suatu teknologi yang terkhusus, namun juga agar 
dapat berfungsi pada berbagai macam platform untuk mengakses data melalui aturan yang sudha ditetapkan. jadi, API dapat menjadi penjembatan 
untuk memenuhi kebutuhan berbagai macam teknologi front-end ataupun sistem lainnya agar dapat mengakses data pada suatu database / sistem.

# REST
representational State Transfer, yang merupakan arsitektur pengembangan web dengan API. poin dari REST ini sendiri beberapa diantaranya 
adalah stateless, yaitu setiap permintaan atau request dari client ke server harus mengandung semua informasi yang diperlukan untuk 
memahami dan memproses permintaan tersebut seperti metode http yang digunakan, informasi yang dikirimkan dan seterusnya. point kedua ialah 
resource based, atau fokus pada sumber daya atau layanan tertentu dengan identifier yang unik agar sumber daya (data) yang dibutuhkan dapat 
memiliki informasi yang diperlukan tergantung pada metode http yang digunakan seperti get, post, put dst.
poin ketiga ialah representation, data yang dikirim ataupun diterima dari klien ke server atau sebaliknya akan direpresentasikan dengan data 
bentuk representasi data yang disetujui atau diadaptasi dari kedua sistem seperti json atau xml.

# API response
dalam response sebuah API pada sederhananya akan terbagi menjadi 3 bagian utama, status line (berisi versi http, kode status http misal, 
status 200 untuk OK, dan kemudian alasan dari status seperti OK, bad gateway, dst). kemudian bagian selanjutnya ialah bagian header,
bagian header ini berisi informasi dari data yang diterima atau dikirimkan seperti ada content-type misal 'application/json' untuk json dan 
text/xml untuk xml, kemudian ada content-length, dan date. kemudian bagian terakhir adalah bagian body dimana bagian ini berisi data aktual 
atau data asli yang diterima ataupun dikirimkan oleh client-server, jika json maka akan berisi object JSON.