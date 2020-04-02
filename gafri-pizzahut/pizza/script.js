function tampilkanSemuaMenu() {
     $('#daftar-menu').html();
    // jquery tolong ambilkan data json pakai ajax
    // jika keambil dan sukses, jalankan fungsi dengan memasukkan hasil ke parameter
    $.getJSON('data/pizza.json', function (data) {
        // bikin variabel menu, dengan mengakses isi menunya langsung (menghilangkan key menu)
        // ini bentuk object
        let menu = data.menu;
        // cara 1
        // keluarkan semua hasilnya
        // dari variabel menu, lalu tiap elemetnya dimenu kemudian jalankan fungsi
        // dengan menaruh hasilnya ke parameter, index dan datanya
        $.each(menu, function (i, data) {
            // pakai backkutip biar bisa di enter dan spasi
            // jquery carikan saya element ini, setelah ketemu, append itu tambahkan diakhir sebuah elemet baru
            $('#daftar-menu').append(`
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="img/menu/` + data.gambar + `" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">` + data.nama + `</h5>
                        <p class="card-text">` + data.deskripsi + `</p>
                        <h5 class="card-title">Rp. ` + data.harga + `</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                </div>
            </div>`);
        });
    });
}

// tampikan semua
tampilkanSemuaMenu();


// jquery carikan saya elemnt dengan nama kelas ini
// pada saat dikklik, jalankan fungsi berikut ini
$('.nav-link').on('click', function () {
    // hapus semua class active, di semua yang ada diclass nav-link (dimanapun)
    $('.nav-link').removeClass('active');
    // khusus yang lagi saya klik, bukan semua
    // tambahkan class baru namanya active
    $(this).addClass('active');

    // bikin variabel kategori, isinya sesuai tulisan kategori yang lagi kita klik
    let kategori = $(this).html();
    // ganti tulisan h1 nya sesuai isi dari variabel kategori
    $('h1').html(kategori);

    // jika kategori all menu, maka tampilkan semuanya
    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }


    // jquery tolong ambilkan data json pakai ajax
    // jika keambil dan sukses, jalankan fungsi dengan memasukkan hasil ke parameter
    $.getJSON('data/pizza.json', function (data) {
        // bikin variabel menu, dengan mengakses isi menunya langsung (menghilangkan key menu)
        // ini bentuk object
        let menu = data.menu;
        let content = '';

        // cara 2
        // keluarkan semua hasilnya
        // dari variabel menu, lalu tiap elemetnya dimenu kemudian jalankan fungsi
        // dengan menaruh hasilnya ke parameter, index dan datanya
        $.each(menu, function (i, data) {
            // jika kategori dari hasil looping sama dengan isi variabel katehoori diatas(sekaligus dipaksa huruf kecil semua)
            if (data.kategori == kategori.toLowerCase()) {
                // maka keluarkan hasilnya
                content +=
                    `<div class="col-md-4">
                        <div class="card mb-3">
                            <img src="img/menu/` + data.gambar + `" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">` + data.nama + `</h5>
                                <p class="card-text">` + data.deskripsi + `</p>
                                <h5 class="card-title">Rp. ` + data.harga + `</h5>
                                <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                            </div>
                        </div>
                    </div>`;
                // pakaii backkutip biar bisa dienter dan spasi
            }
        });
        // jquery carikan saya elemnt dengan nama kelas ini
        // jika sudah ketemu, timpa kontennya dengan hasil dari looping diatas
        $('#daftar-menu').html(content);
    });


});
