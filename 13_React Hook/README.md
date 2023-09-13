# Hooks
hook pada react memungkinkan kita untuk membuat atau menggunakan state pada functional component dengan cara salah satunya menggunakan
useState, dimana kita akan mendeklarasikan nama state, dan fungsi untuk mengubah state tersebut (mirip dengan destructuring [state, setState]). 
jika pada awalnya state hanya bisa digunakan pada class component, dengan mendeklarasikannya pada constructor, dengan hooks ini state juga bisa digunakan di functional component apabila 
memang diperlukan. adapun hooks yang dapat digunaakan yaitu useState untuk state, useEffect untuk mengatur side effect (lifecycle component), dan banyak lainnya
# useState and useEffect
useState digunakan jika kita ingin menggunakan state pada suatu functional component, dimana kita tentukan nama dari state nya, kemudian fungsi untuk set nilai state tersebut, 
dan ketika memanggil useState, kita harus menentukan nilai awal atau bentuk nilai yang akan ditampung, misal useState(0) untuk numeric, useState("") untuk string, useState({}) 
untuk sebuah object dan seterusnya.
sedangkan useEffect digunakan untuk mengatur lifecycle suatu functional component, jika pada class component adanya method componentDidMount dan seterusnya, maka dalam 
functional component, digunakan useEffect untuk mengatur side effect apabila adanya perubahan pada state atau akan melakukan render ulang, dan panggil function pada return 
useEffect untuk memanggil function tersebut ketika akan dilakukan willUnmount dan seterusnya.
# custom hook
untuk custom hook sendiri, artinya kita membuat sebuah component yang berisi logic untuk mendapatkan nilai akhir yang akan digunakan berulang kali, jadi 
ketika kita ingin menggunakan suatu fungsi atau logic fungsi di beberapa component lainnya, kita bisa membuat component yang reusable dan tinggal dipanggil 
di component yang membutuhkan logic tersbut, oleh karena itu, suatu custom hook yang berupa component haruslah mengembalikan suatu nilai tipe data, bukan element jsx / html