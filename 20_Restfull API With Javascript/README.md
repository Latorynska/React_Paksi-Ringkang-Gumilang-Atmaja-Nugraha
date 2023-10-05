# fetch
fetch merupakan salah satu fungsi bawaan default dari javascript untuk fetching data dari API yang dimana secara default fetch jika parameternya hanya diisi dengan link dari api yang 
dituju akan menggunakan method 'GET' namun juga bisa menggunakan method lain seperti POST, PUT, PATCH, DELETE dengan mengirimkan parameter kedua sebagai objek yang memiliki 
key method dan diisi dengan data-data yang diinginkan, seperti penentuan bentuk isi pada bagian header dan lainnya

# axios
axios memiliki fungsi yang kurang lebih sama dengan fetch, yaitu untuk melakukan fetching data dari sebuah API, dimana axios juga dapat mengirimkan method, type, isi, dan 
beberapa bentuk request lainnya seperti fetch tergantung pada kebutuhan dan ketentuan pada backend yang dituju. namun dalam axios url yang dituju dapat dijadikan sebagai salah 
satu key dari object yang dikirimkan sebagai parameter pada saat pemanggilan atau penggunaan axios itu sendiri

# lanjutan
baik itu fetch ataupun axios, keduanya berfungsi untuk melakukan fetching data, dan keudanya juga sama-sama berbasis dari promise, yang dimana axios dan juga fetch yang akan mempermudah 
melakukan async ketika melakukan fetching data, namun perbedaannya berada ketika melakukan atau mengambil respon untuk digunakan sebagai sebuah object. pada penggunaan fetch 
data json yang diterima tidak bisa ditangkap secara langsung sebagai data yang murni object dari data yang kita inginkan pada bagian .then() yang pertama walaupun sudah kita lakukan 
parsing object dari json ke object (masih akan mengembalikan promise object) dan harus di return kan kemudian ditangkap pada .then selanjutnya, berbeda dengan axios yang dimana dapat 
menangkap langsung data murni yang dibutuhkan sebagai object yang sudah siap digunakan.