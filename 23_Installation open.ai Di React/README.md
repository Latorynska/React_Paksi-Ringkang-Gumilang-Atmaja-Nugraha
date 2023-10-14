# Pembuatan Token API dan akun
agar dapat menggunakan API dari OpenAI kita memerlukan setidaknya akun untuk mendapatkan token, dan apabila kita menggunakan akun gratis (tidak berbayar) token ini hanya akan berlaku 
maksimal selama 3 bulan, atau biasanya untuk meng generate teks sebanyak 650.000 kata, jadi dapat dibilang pengguna baru akan bisa mencoba versi trial dari API open ai, jadi sebelum 
kita mencoba untuk mengirim atau menggunakan api dari openai ini kita harus membatasi token respon yang akan diterima untuk menghemat limit pengguna bebas biaya. selain dari itu 
perlu diperhatikan juga bahwa satu nomor handphone (ya, pembuatan akun openai wajib menggunakan nomor telepon) hanya dapat digunakan untuk maksimal 3 akun openai, dan limit API setiap 
akun bersifat shared pada nomor hp yang sama.

# OpenAI library untuk react
untuk informasi library yang digunakan (untuk mempermudah) dapat diakses di https://github.com/openai/openai-node 
berdasarkan dokumentasi dari github diatas, saya menemukan bahwa ada beberapa metode atau model yang dapat kita gunakan (juga berbasis dari dokumentasi openai) yang dimana beberapa 
diantaranya adalah chat, completion, images, files, audio, dan beberapa lainnya. namun, untuk umumnya atau untuk percobaan saya lebih familiar dengan chat, completion dan images (untuk generate image menggunakan prompt)

# contoh code
## chat
async function main() {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
}
## images
const res = await openAi.images.generate({
    prompt: command,
    response_format: 'url',
    size: '512x512',
})