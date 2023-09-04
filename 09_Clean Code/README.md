# prolog : 
	dalam pengembangan sebuah perangkat lunak atau software, bukan hanya agar program dapat berjalan, mungkin semua software developer dapat membuat sebuah program yang dapat dimengerti oleh komputer, tapi developer yang baik dapat membuat program yang juga dapat dipahami manusia, karena membuat code yang bersih, teratur, mudah dipahami diperlukan untuk berbagai macam kebutuhan dan alasan
# alasan : 

	## Kolaborasi yang Efektif: Clean code memungkinkan tim pengembang bekerja sama dengan lebih baik. Kode yang mudah dipahami dapat dianalisis dan dimodifikasi dengan lebih efisien oleh anggota tim yang berbeda.

	## Pengembangan Fitur yang Cepat: Kode bersih mengurangi hambatan dalam pengembangan fitur baru. Tim dapat lebih cepat memahami kode yang ada dan mengintegrasikan fitur-fitur baru dengan lebih lancar.

# ciri-ciri
	### penamaan mudah dipahami
    singkat namun masih dapat ditangkap dengan mudah maksud dan tujuan dari suatu variabel ataupun suatu function
	mudah dieja dan dicari suatu variabel sebisa mungkin mudah untuk dicari dan juga dipahami maknanya dari cara pemberian nama dan karakter yang digunakan, bahkan untuk misal suatu nilai yang hanya sekali digunakan, usahakan buat variabel konstanta agar nilai tersebut dapat dipahami tujuan dari nilai tersebut

	### konsisten
    selain dari penamaan yang benar, konsistensi untuk pemberian nama class, function, variabel harus konsisten, misal menggunakan camel case, menggunakan _ (underscore) atau menggunakan lowercase dalam penamaan.
    
    ### Simplicity dalam Penamaan 
    lebih baik usahakan se simpel mungkin dan tidak ada konteks yang mungkin memang menunjukkan kontek nilai tersebut dalam konteks yang lebih luas, tapi apabila konteks nya dapat disampaikan dengan singkat, tidak perlu menambahkan konteks yang tidak perlu yang hanya membuat variabel, function atau class tersebut menjadi lebih panjang

	### Penggunaan Komentar yang baik dan bijak
    gunakan komentar yang memang diperlukan dan dapat mengakomodasi penjelasan suatu block secara sederhana namun menyeluruh dalam satu komentar untuk block tertentu, jangan memberikan komentar pada setiap command atau tujuan dari setiap line apabila line tersebut memang sederhana untuk dipahami, jadi berikan saja seluruh konteks komentar secara keseluruhan. bahkan untuk komentar apabila memungkinkan, gunakan API dialect agar lebih jelas

	### Menghindari Banyaknya Argumen dalam Fungsi 
    dalam membuat function, usahakan jangan menggunakan terlalu banyak argumen / parameter, gunakanlah objek apabila memang memungkinkan dari segi logic dalam function atau tujuan function tersebut

# prinsip :
	## KISS : keep it so simple
		buatlah sebuah fungsi yang memang memiliki satu tujuan, maksudnya itu logic nya itu hanya bertugas melakukan satu poin tujuan

	### DRY : dont repeat yourself
		jika memang ada sebuah alur, atau logic baris perintah yang memang akan digunakan secara berulang di berbagai lokasi dalam code, jadikanlah sebuah fungsi agar menghindari adanya duplikasi code

# kesimpulan
bahwa dalam pengembangan perangkat lunak atau software, developer yang baik harus mampu menciptakan clean code. Clean code adalah kode yang bersih, terstruktur, dan mudah dipahami oleh manusia. Hal ini memiliki dampak positif terhadap kolaborasi tim, percepatan pengembangan fitur, dan mengurangi kompleksitas dalam pemeliharaan kode. Beberapa ciri khas clean code meliputi penamaan variabel yang jelas, konsistensi dalam penamaan, kesederhanaan dalam penamaan, penggunaan komentar yang bijak, dan menghindari penggunaan terlalu banyak argumen dalam fungsi.

Prinsip-prinsip seperti KISS (Keep It So Simple) dan DRY (Don't Repeat Yourself) juga sangat penting dalam menciptakan kode yang bersih dan efisien. Dengan menerapkan prinsip-prinsip ini dan mengikuti ciri-ciri clean code, seorang developer dapat menghasilkan kode yang lebih efektif, memudahkan kolaborasi tim, dan memungkinkan pengembangan perangkat lunak yang lebih cepat dan terorganisir.