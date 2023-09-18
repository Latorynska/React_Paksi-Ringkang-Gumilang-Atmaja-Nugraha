# Routes
dalam react js, routing dalam react ini digunakan untuk membuat page menjadi sebuah single page application atau SPA, SPA itu sendiri 
bekerja agar ketika user berpindah page dalam web app tidak me-load kembali seluruh halaman, namun hanya bagian yang memang perlu dirubah saja, 
kasusnya ialah dalam sebuah page, bagian header dan footer tidak perlu di load dan di render kembali, karena fungsi dan tampilannya memang 
jarang untuk dirubah walaupun berpindah halaman. oleh karena itu Multi Page Application akan merender kembali seluruh halaman ketika user 
berpinah page. yang dimana akan berpengaruh pada performa, bandwith internet, dan keseluruhan pengalaman penggunakan ketika menggunakan 
aplikasi. tapi, SPA sendiri bukan berarti tidak memiliki kekurangan dari segi performa, karena ketika page pertama kali di load 
(keseluruhan page ketika landing pertama kali) kan memerlukan waktu yang sedikit lebih lama karena akan meload terlebih dahulu 
library javascript yang digunakan oleh react js dan dependency lainnya. dalam penggunaan routes sendiri, kita dapat menggunakan 
kata kunci 'exact' agar setiap url yang diambil guna menampilkan komponen menjadi lebih spesifiki dan tidak me-load halaman yang 
memang ditujukan untuk url tersebut.

# URL params 
seperti namanya, yaitu URL, dan parameter, artinya kita bisa menggunakan url yang dikirim sebagai sebuah parameter yang nanti dapat digunakan 
untuk mengambil nilai tertentu, bedanya dengan url biasanya, dengan param ini kita tidak perlu menuliskan nama variable nya di url, 
contoh : ?id=123, dalam routing di react ini bisa diatur lewat penulisan code seperti setiap url yang memiliki pattern tertentu 
sperti /home/:id artinya, setiap nilai setelah slash home itu akan diterima sebagai parameter id.

# History
dalam penggunaan url dan navigasi page dalam halaman web, react route sendiri sudah menerapkan history, dimana setiap user meng-klik link 
untuk mengubah page yang tampil, maka satu url akan di push kedalam history barangkali user ingin berpindah ke halaman sebelumnya atau selanjutnya. maka dari itu ada perbedaan dari Link dan redirect pada react, dalam penggunaan link, url baru akan di-push kedalam history 
sedangkan redirect cara kerjanya akan menimpa history.

# Kesimpulan
Dalam pengembangan aplikasi web dengan React JS, routing memegang peran penting dalam menciptakan pengalaman pengguna yang mulus dan efisien. Routing memungkinkan kita untuk mengubah tampilan halaman tanpa harus me-load ulang seluruh aplikasi, sehingga menciptakan efek single page application (SPA) yang menghemat waktu dan bandwidth internet.

SPA memiliki keunggulan dalam kinerja dan pengalaman pengguna karena hanya memuat dan merender bagian-bagian tertentu yang perlu diubah saat berpindah halaman, seperti konten utama, sementara header dan footer tetap tidak berubah. Ini berdampak positif pada performa dan keseluruhan kualitas pengalaman pengguna.

Meskipun demikian, SPA juga memiliki kelemahan, terutama dalam waktu pemuatan awal saat seluruh aplikasi harus memuat library JavaScript dan dependensi lainnya. Namun, dengan manfaat yang diberikan dalam pengalaman pengguna selanjutnya, ini adalah trade-off yang umumnya diterima.

Dalam penggunaan routing, kita dapat mengatur parameter URL dengan fleksibilitas, yang memungkinkan kita mengambil nilai tertentu dari URL tanpa harus menyertakan nama variabelnya dalam URL. Ini memudahkan pengiriman data antar halaman.

Penggunaan history dalam React Route juga penting untuk mengelola navigasi halaman. Setiap tindakan pengguna yang mengubah tampilan halaman akan dicatat dalam history, memungkinkan pengguna untuk kembali atau maju ke halaman sebelumnya atau selanjutnya. Perbedaan antara penggunaan Link dan redirect penting untuk memahami bagaimana history dikelola, di mana Link akan menambahkan URL baru ke dalam history, sementara redirect akan menggantikan history yang ada.

Dengan memahami konsep-konsep dasar ini, penggunaan routing dalam aplikasi React JS dapat dikelola dengan lebih efisien, menghasilkan pengalaman pengguna yang lebih baik dan lebih responsif.

