const pertanyaan = [
  "Saat kamu overwhelmed, kamu biasanya...",
  "Kamu pengen orang lain...",
  "Emosi mana yang paling susah kamu kontrol?",
  "Saat semuanya terasa berat, kamu butuh...",
  "Kamu lebih suka...",
  "Orang lain mengira kamu itu...",
  "Saat temanmu lagi down, kamu akan...",
  "Kamu pengen bisa lebih...",
  "Saat gak ada yang paham kamu, kamu...",
  "Kamu nyaman saat...",
  "Kamu gampang...",
  "Kalau kamu jadi spirit veggie, kamu ingin...",
  "Kamu ngerasa paling kuat saat...",
  "Kamu paling sebel sama orang yang...",
  "Saat kamu gagal, kamu biasanya...",
  "Kamu butuh teman yang bisa..."
];

const opsi = [
  ["Menarik diri", "Ngegas", "Nangis", "Ngelawak"],
  ["Dengerin kamu", "Gak ganggu kamu", "Ikut semangat kamu", "Nurut aja"],
  ["Marah", "Sedih", "Takut", "Apatis"],
  ["Dipeluk", "Dikuatkan", "Dijaga", "Didengerin"],
  ["Waktu sendiri", "Ngobrol panjang", "Cuddle time", "Lari ke hutan"],
  ["Keras kepala", "Cuek", "Gampang baper", "Kalem"],
  ["Bercandain", "Dengerin", "Ngajakin main", "Nasehatin"],
  ["Disiplin", "Optimis", "Nyantai", "Terbuka"],
  ["Ngelucu", "Nangis diem-diem", "Pergi jauh", "Tulis diary"],
  ["Gak dituntut", "Dihargai usahanya", "Bisa jaga orang", "Bisa kontrol situasi"],
  ["Overthinking", "Kebawa suasana", "Terlalu perfeksionis", "Menyayangi orang"],
  ["Jago healing", "Anti-ghosting", "Ceria & lucu", "Punya wisdom"],
  ["Dapet waktu istirahat", "Punya misi bantu orang", "Bisa menghibur", "Bisa mikir jernih"],
  ["Drama banget", "Terlalu bodo amat", "Terlalu idealis", "Gak punya arah"],
  ["Gak peduli", "Overfeel", "Cari makna", "Butuh semangat"],
  ["Jujur ke kamu", "Bikin kamu ketawa", "Peluk kamu", "Jaga kamu"]
];

const spiritMap = [
  ["Mubii", "Onyun", "Banion", "Kroot"],
  ["Banion", "Mubii", "Bitty", "Jinger"],
  ["Onyun", "Banion", "Bitty", "Potatoad"],
  ["Banion", "Jinger", "Onyun", "Kroot"],
  ["Mubii", "Banion", "Potatoad", "Jinger"],
  ["Onyun", "Kroot", "Banion", "Mubii"],
  ["Kroot", "Banion", "Bitty", "Jinger"],
  ["Jinger", "Bitty", "Potatoad", "Mubii"],
  ["Kroot", "Banion", "Jinger", "Mubii"],
  ["Potatoad", "Bitty", "Onyun", "Jinger"],
  ["Mubii", "Banion", "Jinger", "Onyun"],
  ["Banion", "Onyun", "Bitty", "Jinger"],
  ["Potatoad", "Onyun", "Kroot", "Jinger"],
  ["Onyun", "Banion", "Jinger", "Bitty"],
  ["Kroot", "Banion", "Jinger", "Bitty"],
  ["Jinger", "Kroot", "Banion", "Onyun"]
];

const spiritScores = {
  Kroot: 0,
  Banion: 0,
  Potatoad: 0,
  Mubii: 0,
  Onyun: 0,
  Bitty: 0,
  Jinger: 0
};

const spiritProfiles = {
  Kroot: {
    name: "Kroot",
    ability: "Bikin kamu merasa didengerin dan gak sendirian.",
    personality: "Ngelawak tapi sebenernya peduli.",
    for: "Yang gak bisa bilang 'aku capek'.",
    friend: "Banion",
    enemy: "Ngelucu buat nutup luka"
  },
  Banion: {
    name: "Banion",
    ability: "Bikin kamu lega buat nangis & terhubung dengan perasaan.",
    personality: "Cengeng lucu, emosian tapi hangat.",
    for: "Yang kebanyakan ditahan.",
    friend: "Mubii",
    enemy: "Bottled feelings"
  },
  Potatoad: {
    name: "Potatoad",
    ability: "Ngajarin kamu buat slow down & rehat.",
    personality: "Gemesin & tukang rebahan.",
    for: "Yang kelelahan terus.",
    friend: "Kroot",
    enemy: "Burnout"
  },
  Mubii: {
    name: "Mubii",
    ability: "Shield anti toxic dan overthinking.",
    personality: "Kalem, ngilang, tapi selalu jaga kamu dari jauh.",
    for: "Yang capek dengan dunia luar.",
    friend: "Bitty",
    enemy: "Lingkungan negatif"
  },
  Onyun: {
    name: "Onyun",
    ability: "Berani pasang badan buat emosi orang terdekat.",
    personality: "Ngegas tapi setia.",
    for: "Yang rapuh tapi gak bisa bilang.",
    friend: "Banion",
    enemy: "Fake comfort"
  },
  Bitty: {
    name: "Bitty",
    ability: "Ngasih harapan pelan-pelan lewat tawa & kebaikan kecil.",
    personality: "Kecil, lucu, tapi dalem.",
    for: "Yang ketawa padahal luka.",
    friend: "Jinger",
    enemy: "Hopelessness"
  },
  Jinger: {
    name: "Jinger",
    ability: "Hangat dan bijak, seperti sinar matahari sore.",
    personality: "Kalem, penyayang, pendiam yang penuh makna.",
    for: "Yang merasa dingin, kosong, atau hilang arah.",
    friend: "Bitty",
    enemy: "Isolation"
  }
};

let currentQ = 0;
let selected = [];

const quiz = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function renderQuestion() {
  quiz.innerHTML = `
    <div class="question-box">
      <h2>${pertanyaan[currentQ]}</h2>
      <div class="options"></div>
    </div>
  `;
  const optDiv = quiz.querySelector(".options");
  opsi[currentQ].forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      selected.push(i);
      currentQ++;
      if (currentQ < pertanyaan.length) {
        renderQuestion();
      } else {
        calculateResult();
      }
    };
    optDiv.appendChild(btn);
  });
}

function calculateResult() {
  selected.forEach((choiceIndex, questionIndex) => {
    const spirit = spiritMap[questionIndex][choiceIndex];
    spiritScores[spirit]++;
  });

  const topSpirit = Object.entries(spiritScores)
    .sort((a, b) => b[1] - a[1])[0][0];
  showResult(topSpirit);
}

function showResult(spiritKey) {
  const spirit = spiritProfiles[spiritKey];
  quiz.style.display = "none";
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h2>Kamu butuh: ${spirit.name}</h2>
    <p><strong>Personality:</strong> ${spirit.personality}</p>
    <p><strong>Ability:</strong> ${spirit.ability}</p>
    <p><strong>Cocok untuk:</strong> ${spirit.for}</p>
    <p><strong>Teman Sejiwa:</strong> ${spirit.friend}</p>
    <p><strong>Musuh alami:</strong> ${spirit.enemy}</p>
  `;
}

renderQuestion();
