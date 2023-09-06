# Pengenalan dan Pengertian

## apa itu react js
react js adalah sebuah **library** javascript yang digunakan untuk membangun sebuah UI dari website. react js sendiri memiliki pendekatan paradigma programming yang deklaratif yang intinya bahwa developer atau pengembang itu menyebutkan atau menulis kode yang mengacu pada "apa" yang diinginkan dalam programnya, bukan "bagaimana" perintah-perintah untuk mencapai sesuatu dalam program tersebut. 
Selain dari itu, React.js juga menerapkan pendekatan component-based untuk mengelola keadaan (state) dalam komponen-komponennya. Ini berarti setiap komponen dalam React dapat memiliki state lokalnya sendiri yang dapat diubah seiring waktu.
State ini memungkinkan komponen untuk merespons perubahan data dan merender ulang diri mereka sendiri dengan informasi terbaru, menjadikan React sangat responsif dan efisien dalam mengelola perubahan tampilan dalam aplikasi. 
Dengan pengelolaan state yang terdesentralisasi ini, React memungkinkan pengembang untuk membuat aplikasi yang kompleks dengan lebih mudah dan terstruktur, sedangkan komponen yang dimaksud disini ialah unit-unit terkecil yang memiliki fungsi atau kegunaan masing-masing pada UI.

# VDOM
## penjelasan VDOM
virutal dom adalah representasi UI web yang berbentuk objek javascript dan disimpan pada memori (ram), 
virtual dom ini digunakan untuk mengatasi permasalahan pada DOM tradisional, yang dimana DOM tradisional akan merender kembali halaman web apabila terjadi perubahan pada salah satu elemen yang terdapat didalamnya.
dengan menggunakan VDOM ini, element yang di render ulang hanyalah element yang memang terkena efek dari perubahan yang terjadi pada State atau data yang digunakan,
vdom ini berfungsi sangat krusial atau penting dalam menjaga performa web application yang interatif agar tetap berjalan optimal namun tetap mendapatkan nilai baik 
pada interaksi dengan pengguna

# Installasi
## tools
tools atau alat untuk menginstal dan mengembangkan sebuah front-end web app setidaknya harus memiliki
1. web browser
2. text editor
3. command line / shell
4. package manager (jika menggunakan library atau framework khusus, seperti react js ini contohnya)
## menggunakan npx CRA
untuk menginstall menggunakan CRA (create react app), sederhananya dapat menggunakan comman 'npx create-react-app (nama_app)'

# kesimpulan

React.js adalah sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) pada website. Pendekatan yang diterapkan oleh React.js adalah deklaratif, di mana kode yang ditulis lebih fokus pada "apa" yang ingin dicapai dalam program, bukan "bagaimana" perintah harus dijalankan. React juga mengadopsi pendekatan komponen, di mana komponen-komponen kecil memiliki state lokalnya sendiri, memungkinkan mereka merespons perubahan data dan melakukan rendering ulang secara efisien.

Virtual DOM (VDOM) adalah konsep penting dalam React. Ini merupakan representasi UI web dalam bentuk objek JavaScript yang disimpan di memori. VDOM digunakan untuk mengatasi masalah dalam DOM tradisional, di mana setiap perubahan pada elemen akan menyebabkan rendering ulang seluruh halaman. Dengan VDOM, hanya elemen yang terkena dampak dari perubahan dalam state atau data yang diperbarui yang akan di-render ulang, yang pada gilirannya meningkatkan performa aplikasi web.

Untuk memulai pengembangan aplikasi React, diperlukan alat seperti web browser, text editor, command line/shell, dan jika diperlukan, package manager. Penggunaan Create React App (CRA) dengan perintah 'npx create-react-app' adalah cara yang cepat untuk memulai proyek React.