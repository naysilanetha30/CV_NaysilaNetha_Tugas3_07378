//Mengubah tema website
const tombolTema = document.querySelector('#Tema');
const ikonTema = document.querySelector('#TemaIkon');

tombolTema.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const temaGelap = document.body.classList.contains('dark-mode');

    if (temaGelap === true) {
        ikonTema.textContent = '☀️';
        tombolTema.setAttribute('aria-pressed', 'true');
    } else {
        ikonTema.textContent = '🌙';
        tombolTema.setAttribute('aria-pressed', 'false');
    }
});


//Membuka dan menutup foto galeri
const tombolFoto = document.querySelectorAll('.gallery-item');
const modalGaleri = document.querySelector('#galleryModal');
const fotoBesar = document.querySelector('#modalImage');
const keteranganFoto = document.querySelector('#modalCaption');
const tombolTutup = document.querySelector('#closeGallery');

tombolFoto.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
        fotoBesar.src = tombol.getAttribute('data-full');
        keteranganFoto.textContent = tombol.getAttribute('data-caption');
        modalGaleri.hidden = false;
    });
});

tombolTutup.addEventListener('click', function () {
    modalGaleri.hidden = true;
});

modalGaleri.addEventListener('click', function (event) {
    if (event.target === modalGaleri) {
        modalGaleri.hidden = true;
    }
});


//Memeriksa isi formulir
const formulir = document.querySelector('#contactForm');

formulir.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.querySelector('#visitorName');
    const email = document.querySelector('#visitorEmail');
    const pesan = document.querySelector('#visitorMessage');

    const errorNama = document.querySelector('#nameError');
    const errorEmail = document.querySelector('#emailError');
    const errorPesan = document.querySelector('#messageError');
    const statusForm = document.querySelector('#formStatus');

    errorNama.textContent = '';
    errorEmail.textContent = '';
    errorPesan.textContent = '';
    statusForm.textContent = '';

    let dataValid = true;

    if (nama.value.trim() === '') {
        errorNama.textContent = 'Nama lengkap wajib diisi.';
        dataValid = false;
    }

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email.value.trim())) {
        errorEmail.textContent = 'Masukkan alamat email yang benar.';
        dataValid = false;
    }

    if (pesan.value.trim() === '') {
        errorPesan.textContent = 'Pesan wajib diisi.';
        dataValid = false;
    }

    if (dataValid === true) {
        statusForm.textContent = 'Terima kasih sudah menghubungi saya!';
        formulir.reset();
    } else {
        statusForm.textContent = 'Silakan periksa kembali data yang kamu masukkan.';
    }
});


//Jawaban FAQ
const tombolPertanyaan = document.querySelectorAll('.faq-question');

tombolPertanyaan.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
        const jawaban = tombol.nextElementSibling;
        jawaban.hidden = !jawaban.hidden;

        const simbol = tombol.querySelector('span');

        if (jawaban.hidden === true) {
            simbol.textContent = '+';
            tombol.setAttribute('aria-expanded', 'false');
        } else {
            simbol.textContent = '−';
            tombol.setAttribute('aria-expanded', 'true');
        }
    });
});


//Menampilkan informasi tambahan
const tombolSelengkapnya = document.querySelector('#readMoreBtn');
const informasiTambahan = document.querySelector('#moreProfile');

tombolSelengkapnya.addEventListener('click', function () {
    informasiTambahan.hidden = !informasiTambahan.hidden;

    if (informasiTambahan.hidden === true) {
        tombolSelengkapnya.textContent = 'Lihat Selengkapnya';
    } else {
        tombolSelengkapnya.textContent = 'Tampilkan Lebih Sedikit';
    }
});
