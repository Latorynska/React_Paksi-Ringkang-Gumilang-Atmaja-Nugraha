## 1
dalam react, komponen yang digunakan terbagi menjadi dua, yaitu stateless dan statefull component, dimana stateless component ialah
komponen yang hanya menggunakan props jika memang memerlukan penggunaan data, stateless component pada dasarnya tidak mengetahui atau buta terhadap aplikasi secara keseluruhan, karena dia hanya mengandalkan props atau properti milik dia sendiri untuk digunakan, selain dari itu stateless component cenderung lebih mudah atau lebih memungkinkan untuk digunakan kembali (reuse) karena dia hanya berfokus pada dirinya
sendiri. oleh karena itu didalam stateless component tidak dilakukan pengambilan (fetching) data.

## 2 
selain dari stateless component, ada juga statefull component yang dimana menggunakan state, dan jarang berisi kode html (atau kode yang berfokus pada tampilan /  UI) karena pada statefull component ini dia bertugas sebagai parent utama untuk mengatur child-child didalamnya, state yang digunakan, fetching data, dan berfokus pada pengolahan data yang dimana nanti akan dikirimkan kepada child nya (stateless component) sebagai props. maka dari itu, biasanya untuk statefull component ini jarang digunakan kembali dan juga biasanya merupakan sebuah class, berbeda dengan stateless component yang biasanya dibuat sebagai function.

## 3
event handling dalam react tidak beda jauh dengan event handling pada javascript, namun salah satu perbedannya ialah menggunakan camel case, 
selain dari itu, kita juga perlu memperhatikan penggunaan event handling apabila ingin mengubah data pada state, karena jika event tersebut 
dipanggil dalam sebuah stateless component, maka parent nya harus mengirimkan function setstate kedalam props child yang ingin menggunakannya 
agar komponen tersebut dapat mengubah state yang digunakan.

## kesimpulan
Dalam kesimpulan, React memiliki dua jenis komponen: stateless dan statefull. Stateless fokus pada penggunaan props dan mudah digunakan kembali, sementara statefull mengatur data dan biasanya merupakan class. Event handling dalam React mirip dengan JavaScript, tetapi gunakan camel case. Penting memperhatikan penggunaan event handling saat mengubah state, khususnya di stateless component.