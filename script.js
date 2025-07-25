const questions = [
  {
    text: "1. Kamu terjatuh ke dalam lorong gelap yang berliku. Suasana hening, hanya suara langkahmu yang terdengar. Apa yang kamu lakukan?",
    options: [
      { text: "Tetap tenang, menunggu matamu menyesuaikan kegelapan sambil berpikir pelan.", spirits: ["Kroot", "Alliowl"] },
      { text: "Teriak meminta tolong walau tak yakin ada yang dengar.", spirits: ["Banion", "Mubii"] },
      { text: "Duduk, menarik napas panjang, merasa terlalu lelah untuk panik.", spirits: ["Potatoad", "Bitty"] },
      { text: "Cari dinding, susuri pelan-pelan sambil merancang rute keluar.", spirits: ["Onyun", "Gingeer"] },
      { text: "Melihat sekeliling dan berkata, 'Wah, tempat ini aesthetic juga ya.'", spirits: ["Bitty", "Mubii"] }
    ]
  },
  {
    text: "2. Chame muncul dari bayangan dan bertanya, “Kamu siapa?” Bagaimana kamu menjawab?",
    options: [
      { text: "“Aku… nggak tahu lagi.”", spirits: ["Bitty", "Alliowl"] },
      { text: "“Aku cuma orang biasa, nggak penting juga sih.”", spirits: ["Gingeer", "Kroot"] },
      { text: "“Kamu siapa dulu? Kenapa nanya aku duluan?”", spirits: ["Banion", "Onyun"] },
      { text: "“Maaf, aku ganggu ya?”", spirits: ["Mubii", "Potatoad"] },
      { text: "“Aku... sedang mencari sesuatu.”", spirits: ["Alliowl", "Bitty"] }
    ]
  },
  {
    text: "3. Di lorong itu ada pintu-pintu kecil. Satu di antaranya sedikit terbuka. Apa yang kamu lakukan?",
    options: [
      { text: "Menutupnya kembali dengan sopan.", spirits: ["Mubii", "Onyun"] },
      { text: "Mengintip dan langsung panik sendiri.", spirits: ["Onyun", "Gingeer"] },
      { text: "Masuk dan duduk karena lelah.", spirits: ["Potatoad", "Kroot"] },
      { text: "Buka lebar-lebar, nggak peduli apa isinya.", spirits: ["Banion", "Bitty"] },
      { text: "Tulis catatan di dinding, “Sudah dibuka jam 15:22, tidak ada apa-apa.”", spirits: ["Gingeer", "Alliowl"] }
    ]
  },
  {
    text: "4. Di lorong, kamu temukan benda yang familiar dari masa kecilmu. Apa yang kamu rasakan?",
    options: [
      { text: "Rasa hangat, lalu sedih.", spirits: ["Kroot", "Banion"] },
      { text: "Bingung kenapa bisa ada di sini, tapi nggak berani pegang.", spirits: ["Onyun", "Gingeer"] },
      { text: "Terharu tapi merasa tidak layak untuk memilikinya lagi.", spirits: ["Gingeer", "Mubii"] },
      { text: "Langsung dipeluk dan dibawa jalan lagi.", spirits: ["Banion", "Kroot"] },
      { text: "“Ah, memori ini…” lalu melamun.", spirits: ["Bitty", "Alliowl"] }
    ]
  },
  {
    text: "5. Chame mengajak menyusuri jalur bercabang. Kamu disuruh pilih arah. Bagaimana kamu memilih?",
    options: [
      { text: "Tanyakan pendapat Chame, nggak mau ambil keputusan sendiri.", spirits: ["Mubii", "Onyun"] },
      { text: "Pilih jalur yang paling gelap karena penasaran.", spirits: ["Banion", "Bitty"] },
      { text: "Duduk dulu, mikir sambil liat suasana.", spirits: ["Potatoad", "Alliowl"] },
      { text: "Lihat tanda-tanda di sekitar, baru ambil keputusan.", spirits: ["Onyun", "Gingeer"] },
      { text: "Jalan aja terus tanpa mikir.", spirits: ["Bitty", "Potatoad"] }
    ]
  },
  {
    text: "6. Kamu dan Chame tiba di lorong penuh cermin. Bayanganmu terlihat berbeda dari biasanya.",
    options: [
      { text: "Langsung kabur, nggak sanggup lihat.", spirits: ["Banion", "Mubii"] },
      { text: "Tatap lama-lama. Mungkin ini aku sebenarnya.", spirits: ["Alliowl", "Bitty"] },
      { text: "Sentuh cerminnya. Dingin.", spirits: ["Kroot", "Potatoad"] },
      { text: "Cek satu per satu. Mungkin ada pola di antara semua cermin.", spirits: ["Onyun", "Gingeer"] },
      { text: "Ngaca lalu bilang, 'Hah, keren juga gue.'", spirits: ["Bitty", "Banion"] }
    ]
  },
  {
    text: "7. Di salah satu lorong, ada suara tangisan pelan. Kamu?",
    options: [
      { text: "Diam dan dengarkan dulu. Tangisan itu familiar.", spirits: ["Kroot", "Alliowl"] },
      { text: "Langsung dekati dan tanya, 'Kamu kenapa?'", spirits: ["Mubii", "Banion"] },
      { text: "Langkahmu makin pelan, takut tapi penasaran.", spirits: ["Onyun", "Bitty"] },
      { text: "Abaikan aja. Ini bukan urusanmu.", spirits: ["Potatoad", "Gingeer"] },
      { text: "Tinggalkan catatan: 'Kamu nggak sendirian.'", spirits: ["Gingeer", "Alliowl"] }
    ]
  },
  {
    text: "8. Kamu menemukan ruang kecil dengan meja dan satu kursi. Di atas meja ada kertas kosong dan pulpen.",
    options: [
      { text: "Tulis curhatan yang nggak pernah kamu berani bilang ke siapa pun.", spirits: ["Mubii", "Bitty"] },
      { text: "Bikin daftar semua hal yang kamu benci.", spirits: ["Banion", "Gingeer"] },
      { text: "Gambar doodle lucu, terus ketawa sendiri.", spirits: ["Bitty", "Potatoad"] },
      { text: "Tulis pesan untuk diri sendiri di masa kecil.", spirits: ["Alliowl", "Kroot"] },
      { text: "Kosongin pikiran. Hanya duduk dan diam.", spirits: ["Kroot", "Onyun"] }
    ]
  },
  {
    text: "9. Ada sebuah tangga tua menuju bawah tanah. Chame menatapmu, “Kamu yakin mau ke sana?”",
    options: [
      { text: "“Enggak. Tapi perlu.”", spirits: ["Kroot", "Gingeer"] },
      { text: "“Aku cuma pengen tahu rasanya.”", spirits: ["Bitty", "Banion"] },
      { text: "“Aku bakal nyesel kalau nggak coba.”", spirits: ["Alliowl", "Mubii"] },
      { text: "“Apa ada jalan lain?”", spirits: ["Onyun", "Potatoad"] },
      { text: "Diam aja. Tapi langkahmu mantap.", spirits: ["Gingeer", "Alliowl"] }
    ]
  },
  {
    text: "10. Di ujung tangga, ada cahaya kecil. Tapi langkahmu terasa berat...",
    options: [
      { text: "“Aku nggak siap...” tapi tetap lanjut.", spirits: ["Mubii", "Bitty"] },
      { text: "Istirahat sebentar. Napasmu habis.", spirits: ["Potatoad", "Kroot"] },
      { text: "Nggak bisa. Harus mundur dulu.", spirits: ["Onyun", "Banion"] },
      { text: "Coba hubungi Chame, tapi nggak ada jawaban.", spirits: ["Alliowl", "Gingeer"] },
      { text: "Nangis sedikit, terus jalan lagi.", spirits: ["Banion", "Mubii"] }
    ]
  },
  {
    text: "11. Chame bilang, “Kita hampir sampai.” Kamu tiba-tiba merasa...",
    options: [
      { text: "Takut keluar, malah ingin tetap di sini.", spirits: ["Bitty", "Potatoad"] },
      { text: "Gugup tapi penasaran.", spirits: ["Mubii", "Alliowl"] },
      { text: "Ingin balik dan perbaiki banyak hal.", spirits: ["Onyun", "Gingeer"] },
      { text: "Ingin mempercepat langkah.", spirits: ["Banion", "Gingeer"] },
      { text: "Ingin pelan-pelan agar bisa refleksi lebih dalam.", spirits: ["Kroot", "Alliowl"] }
    ]
  },
  {
    text: "12. Lorong terbuka ke ruang putih kosong. “Kamu bisa isi ruang ini dengan apapun,” kata Chame. Kamu memilih...",
    options: [
      { text: "Kursi nyaman dan selimut.", spirits: ["Potatoad", "Mubii"] },
      { text: "Rak buku dan jendela besar.", spirits: ["Gingeer", "Alliowl"] },
      { text: "Lukisan dan warna-warna aneh.", spirits: ["Bitty", "Banion"] },
      { text: "Cermin-cermin dan lampu kecil.", spirits: ["Banion", "Alliowl"] },
      { text: "Tempat buat rebahan dan nonton.", spirits: ["Potatoad", "Bitty"] }
    ]
  },
  {
    text: "13. Di ujung ruang, ada benda kecil yang bersinar. Kamu mendekat dan ternyata...",
    options: [
      { text: "Benda kenangan yang kamu lupakan.", spirits: ["Gingeer", "Mubii"] },
      { text: "Sepotong surat dengan tulisan familiar.", spirits: ["Alliowl", "Kroot"] },
      { text: "Foto seseorang yang pernah sangat berarti.", spirits: ["Bitty", "Banion"] },
      { text: "Kaca kecil dengan ukiran aneh.", spirits: ["Onyun", "Alliowl"] },
      { text: "Kompas usang.", spirits: ["Kroot", "Gingeer"] }
    ]
  },
  {
    text: "14. Chame bertanya, “Kamu siap pulang?” Kamu menjawab...",
    options: [
      { text: "“Belum.”", spirits: ["Bitty", "Mubii"] },
      { text: "“Aku nggak tahu.”", spirits: ["Alliowl", "Potatoad"] },
      { text: "“Kalo aku pulang, aku berubah nggak?”", spirits: ["Banion", "Kroot"] },
      { text: "“Ya. Aku bawa semuanya.”", spirits: ["Gingeer", "Onyun"] },
      { text: "“Tapi kamu ikut juga ya?”", spirits: ["Mubii", "Bitty"] }
    ]
  },
  {
    text: "15. Saat kamu berjalan keluar, Chame memberi satu pesan untuk dibawa. Pesannya tentang...",
    options: [
      { text: "Keberanian melihat isi dirimu.", spirits: ["Alliowl", "Banion"] },
      { text: "Izin untuk istirahat dan diam.", spirits: ["Potatoad", "Kroot"] },
      { text: "Hakmu untuk merasa dan menangis.", spirits: ["Mubii", "Bitty"] },
      { text: "Menurunkan ekspektasi dan belajar pelan.", spirits: ["Gingeer", "Onyun"] },
      { text: "Tentang menerima arah yang berubah.", spirits: ["Bitty", "Kroot"] }
    ]
  },
  {
    text: "16. Cahaya menyilaukan menyambutmu di luar lorong. Perasaan terakhir sebelum keluar...",
    options: [
      { text: "Harapan.", spirits: ["Kroot", "Mubii"] },
      { text: "Ragu tapi ingin mencoba.", spirits: ["Bitty", "Onyun"] },
      { text: "Duka yang indah.", spirits: ["Banion", "Alliowl"] },
      { text: "Lega.", spirits: ["Potatoad", "Gingeer"] },
      { text: "Rindu versi dirimu yang lama.", spirits: ["Alliowl", "Bitty"] }
    ]
  }
];

function getEmptySpiritScores() {
  return {
    Kroot: 0,
    Banion: 0,
    Potatoad: 0,
    Mubii: 0,
    Onyun: 0,
    Bitty: 0,
    Gingeer: 0,
    Alliowl: 0
  };
}

function calculateSpiritScores(selectedOptions) {
  let spiritScores = getEmptySpiritScores();
  for (let i = 0; i < selectedOptions.length; i++) {
    let answerObj = questions[i].options[selectedOptions[i]];
    if (answerObj && answerObj.spirits) {
      answerObj.spirits.forEach(spirit => {
        spiritScores[spirit] = (spiritScores[spirit] || 0) + 1;
      });
    }
  }
  return spiritScores;
}

function getTopSpirit(spiritScores) {
  let topSpirit = null;
  let topScore = -1;
  for (const spirit in spiritScores) {
    if (spiritScores[spirit] > topScore) {
      topScore = spiritScores[spirit];
      topSpirit = spirit;
    }
  }
  return topSpirit;
}

function processResultAndRedirect(selectedOptions) {
  const spiritScores = calculateSpiritScores(selectedOptions);
  const resultSpirit = getTopSpirit(spiritScores);
  localStorage.setItem('spiritResult', resultSpirit);
  window.location.href = 'result.html';
}
