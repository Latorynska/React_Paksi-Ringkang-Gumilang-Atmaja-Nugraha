# input type
pada dasarnya, element input adalah salah satu element yang sangat penting untuk web application agar user dapat memasukkan data sesuai dengan bentuk datanya 
baik itu berupa teks, angka, pilihan, atau data lainnya tergantung dari bentuk atau data apa yang disimpan. element input dalam react itu sendiri, dalam tag <input> secara 
default akan menjadi type text, namun juga tidak terbatas pada text, tag <input> dapat berisi input angka dengan type number, type month dan banyak lainnya. adapun untuk input dengan 
data yang panjang untuk suatu data dapat menggunakan textarea. image bisa menggunakan type file dan banyak input lainnya.

# controlled component 
controlled component ialah component khususnya component / element input, yang dimana value dari input tersebut akan selalu sinkron dan akan selalu merubah nilai pada state 
apabila terjadinya perubahan pada nilai di input tersebut, jadi setiap perubahan nilai yang dilakukan pada input tersebut, akan otomatis memperbarui nilai pada state 
yang dimana kemudian menjadi sama dengan nilai pada input tersebut. artinya, isi dari input tersebut akan selalu sama dengan nilai pada state menggunakan fungsi setState pada setiap 
perubahan dari suatu input yang berhubungan atau bertanggung jawab dengan data dari suatu state. oleh karena itu, dalam pengembangan front end web dengan react js, controlled component 
digunakan agar state yang digunakan dapat lebih nyaman diatur dan pengembangan menjadi lebih singkat, karena jika dibandingkan dengan uncontrolled component yang harus menggunakan 
DOM untuk pengambilan data, dan harus dipanggil berulang kali jika ingin mengubah state, atau hanya dipanggil sekali ketika suatu form di submit menjadi kurang efektif apabila 
data merupakan sebuah state. yang menjadikan suatu component menjadi 'controlled' ialah karena adanya pengiriman props nilai dari suatu element input dan setiap event yang terjadi 
untuk merubah data menggunakan fungsi yang akan menghandle perubahan data pada state yang kemudian terikat datanya dengan element input tersebut.

# Form validation
dalam pengembangan front end web app dengan react, ada beberapa kelebihan atau alasan harusnya dilakukan form validation secara client-side (bukan hanya server-side), karena validasi 
yang dilakukan secara client-side sifatnya akan real-time, dan tidak perlu mengirim data kemudian menunggu respon dari server yang dimana akan mengurangi pengalaman baik pengguna ketika 
menggunakan aplikasi. validasi form sendiri bisa dilakukan dengan cara menggunakan validasi form bawaan dari html seperti 'required', 'minlength', 'maxlenght' dan sebagainya adapun 
seperti penggunaan input khusus seperti type email dan seterusnya. dengan menggunakan fungsi bawaan html, respon yang diberikan atau pesan yang diberikan cenderung lebih kaku, 
tidak variatif, dan cenderung sempit. oleh karena itu, validasi menggunakan javascript atau bahkan menggunakan state dari react dapat memberikan kesan yang lebih variatif, validasi 
yang lebih luas dan terspesialisasi, namun pengembang perlu membuat validasi dan logic validasi secara manual, seperti mengubah button submit menjadi disabled ketika ada input yang tidak 
sesuai, dan seterusnya.