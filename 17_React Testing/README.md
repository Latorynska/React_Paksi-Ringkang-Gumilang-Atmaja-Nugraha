# apa itu testing
dalam pengembangan aplikasi / software, testing sederhananya adalah sebuah metode atau langkah tambahan, dengan kata lain opsional. dimana setiap komponen, fungsi, pengolahan data, 
atau setiap elemen yang dibuat dalam pengembangan akan dites (diberikan data, pengecekan behavior, dan dilihat hasil akhirnya) menggunakan beberapa skenario berbeda 
secara program, yang dimana hasil setiap testing akan dilihat hasilnya, apakah sesuai dengan hasil yang diharapkan atau tidak, apakah terdapat behavior atau perilaku yang diluar 
dari desain awal yang merupakan bug atau tidak. maka, walaupun sifatnya opsional, tapi untuk skala aplikasi berskala besar dan digunakan banyak orang, testing ini akan menjadi 
tahap yang crucial atau penting agar pengembang dan pengguna dapat menggunakan dan mendistribusikan aplikasi dengan tenang.

# alasan melaksanakan dan membuat unit test
1. memastikan kualitas kode program, Unit test membantu memastikan bahwa kode yang ditulis berfungsi dengan baik. Mereka membantu dalam mendeteksi bug dan masalah potensial sebelum 
aplikasi di-deploy ke lingkungan produksi

2. Meningkatkan Keamanan: Unit test membantu dalam mengidentifikasi potensi masalah keamanan dalam kode. Dengan menguji berbagai skenario, kita dapat memastikan bahwa aplikasi yang kita 
buat tahan terhadap serangan dan melindungi data pengguna serta sistem itu sendiri
dan masih ada beberapa alasan lainnya dari mulai akan mempermudah ketika refactor atau mengubah sebuah code dan terjadi error yang berdampak ke komponen lain hingga memberikan 
rasa aman dan percaya diri terhadap kode yang telah dibuat.

# langkah / how to
Langkah pertama dalam pembuatan unit test untuk komponen React.js adalah memastikan telah menginstal alat pengujian yang sesuai, seperti Jest dan Testing Library, dalam proyek React. 
Alat-alat tersebut bisa diinstal dengan menjalankan perintah npm atau yarn.
Setelah menginstal alat pengujian, langkah berikutnya adalah membuat file unit test untuk komponen yang ingin diuji. File unit test biasanya memiliki ekstensi `.test.js` atau `.spec.js` dan biasanya ditempatkan dalam direktori yang sama dengan komponen yang akan diuji.
Dalam file unit test, komponen yang akan diuji harus diimpor, bersama dengan alat-alat pengujian yang diperlukan. Selanjutnya, Anda dapat mendefinisikan satu atau lebih tes (test case) dengan menggunakan fungsi `test` atau `it`. Dalam tes ini, simulasi perilaku komponen dengan memberikan input, mengujinya, dan memverifikasi hasilnya.

Sebagai contoh, jika ingin menguji sebuah komponen `Button` yang memiliki properti `label` dan `onClick`, kurang lebih, contohnya seperti berikut : 

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Komponen Button seharusnya merender dengan benar', () => {
  const { getByText } = render(<Button label="Klik Saya" />);
  const buttonElement = getByText('Klik Saya');
  expect(buttonElement).toBeInTheDocument();
});

test('Fungsi onClick Button harus dipanggil saat diklik', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Klik Saya" onClick={onClickMock} />);
  const buttonElement = getByText('Klik Saya');
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
Dalam contoh di atas, dua tes telah dibuat. 
Tes pertama memeriksa apakah komponen `Button` dapat merender label dengan benar, sedangkan tes kedua memastikan bahwa fungsi `onClick` dipanggil saat tombol diklik.