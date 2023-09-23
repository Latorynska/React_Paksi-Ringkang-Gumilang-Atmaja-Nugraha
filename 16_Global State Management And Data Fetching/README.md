# Global State Management (introduction)
global state management adalah salah satu teknik dalam pengembangan aplikasi front end web yang berbasis react, 
yang dimana akan mempermudah dan memungkinkan kita untuk menyimpan dan mengelola data (state) yang sifatnya 
global atau digunakan dalam beberapa / berbagai komponen didalam aplikasi sekaligus tanpa harus mengirimkannya 
lewat props dari component-component yang memerlukan data tersebut. management global state ini sangat berguna 
apabila skala dari project tersebut sudah cukup besar, komponen yang digunakan sudah cukup kompleks.

# useContext - redux
untuk mengatur state global dalam aplikasi web front end yang berbasis react js, setidaknya kita dapat 
menggunakan salah satu dari beberapa tool yang tersedia untuk global state management, salah satunya adalah 
redux, ataupun menggunakan tool dari react itu sendiri yaitu useContext. dimana pemilihan kedua tool tersebut 
bergantung pada preferensi kita sebagai pengembang, kompleksitas aplikasi, skala aplikasi dan banyak hal lainnya 
yang menjadi pertimbangan, berikut beberapa poin yang yang dapat menjadi alasan pemilihan penggunaan redux 
ataupun useContext :
1.  Jika proyek sederhana dan tidak memiliki kebutuhan kompleks untuk mengelola state global, **useContext** adalah pilihan yang lebih ringan dan lebih sederhana.

2. Jika proyek besar, kompleks, atau memiliki banyak interaksi antar komponen yang memerlukan pengelolaan state yang kuat, **Redux** adalah pilihan yang lebih kuat.

3. kita juga dapat memulai dengan useContext untuk mengelola state global dalam proyek yang lebih kecil, dan jika proyek berkembang dan menjadi lebih kompleks, kita dapat mempertimbangkan untuk beralih ke Redux.

4. Terakhir, beberapa pengembang lebih suka Redux karena ia memperkenalkan pola yang konsisten dan alat bantu yang kuat untuk mengelola state. Namun, itu juga dapat memperkenalkan lebih banyak boilerplate code dalam proyek yang lebih kecil.

# redux - pembahasan
Redux adalah sebuah library manajemen state global yang populer dalam pengembangan aplikasi React. Ini 
memungkinkan pengembang untuk mengatur state aplikasi secara terpusat dalam satu tempat yang disebut "store," 
dan beroperasi berdasarkan prinsip-prinsip dasar seperti store, actions, reducers, dispatch, dan connect. Redux 
membantu mengatasi masalah state global dalam aplikasi yang besar dan kompleks dengan cara yang terstruktur.
Selain itu, Redux juga mendukung middleware seperti Redux Thunk, yang memungkinkan pemrosesan tindakan asinkron, 
seperti pemanggilan API, dengan cara yang terstruktur dan dapat diprediksi.
Pemilihan antara Redux dan useContext tergantung pada kompleksitas proyek dan preferensi pengembang. Jika 
proyeknya sederhana dan tidak terlalu besar, useContext bisa menjadi pilihan yang lebih ringan dan sederhana. 
Namun, jika proyeknya besar, kompleks, atau memiliki banyak interaksi antar komponen yang memerlukan manajemen 
state yang kuat, Redux adalah pilihan yang lebih kuat. Redux juga memiliki alat bantu yang kuat, seperti Redux 
DevTools, untuk memudahkan pemantauan dan debugging state.
Selain itu, Redux juga dapat diintegrasikan dengan Redux Persist untuk menyimpan state Redux di luar siklus 
hidup aplikasi, memungkinkan Anda mempertahankan data penting seperti sesi pengguna, preferensi, atau informasi 
lainnya dalam penyimpanan berbasis browser.