$(document).ready(function () {

    function dataMahasiswa() {
        // jquery tolong ambilkan data json pakai ajax
        // jika keambil dan sukses, jalankan fungsi dengan memasukkan hasil ke parameter
        $.getJSON("data/mahasiswa.json", function (data) {
            let content = "";
            $("#isiTable").html(content);
            // bikin variabel mahasiswa, dengan mengakses isi mahasiswanya langsung (menghilangkan key mahasiswa)
            // ini bentuk object
            let mahasiswa = data.mahasiswa;
            // cara 1
            // keluarkan semua hasilnya
            // dari variabel mahasiswa, lalu tiap elemetnya dimahasiswa kemudian jalankan fungsi
            // dengan menaruh hasilnya ke parameter, index dan datanya
            $.each(mahasiswa, function (i, data) {
                // pakai backkutip biar bisa di enter dan spasi
                // jquery carikan saya element ini, setelah ketemu, append itu tambahkan diakhir sebuah elemet baru
                content +=
                    `
                    <tr id="rowMhs">
                        <th scope="row">` +
                    ++i +
                    `</th>
                        <td>` +
                    data.nama +
                    `</td>
                        <td>` +
                    data.alamat +
                    `</td>
                        <td>` +
                    data.jenis_kelamin +
                    `</td>
                        <td>` +
                    data.tgl_lahir +
                    `</td>
                    </tr>`;
                $("#isiTable").html(content);
            });
        });
    }

    function galleryMahasiswa() {
        // jquery tolong ambilkan data json pakai ajax
        // jika keambil dan sukses, jalankan fungsi dengan memasukkan hasil ke parameter
        $.getJSON("data/mahasiswa.json", function (data) {
            // bikin variabel mahasiswa, dengan mengakses isi mahasiswanya langsung (menghilangkan key mahasiswa)
            // ini bentuk object
            let mahasiswa = data.mahasiswa;
            let content = "";

            // cara 2
            // keluarkan semua hasilnya
            // dari variabel mahasiswa, lalu tiap elemetnya dimahasiswa kemudian jalankan fungsi
            // dengan menaruh hasilnya ke parameter, index dan datanya
            $.each(mahasiswa, function (i, data) {
                // maka keluarkan hasilnya
                content +=
                    `<div class="col-md-4 mt-2">
                            <div class="card mt-2 mb-2">
                                <img src="img/mahasiswa/` +
                    data.gambar +
                    `" class="card-img-top" max-height: 250px;>
                                <div class="card-body">
                                    <h5 class="card-title">` +
                    data.nama +
                    `</h5>
                                    <p class="card-text">` +
                    data.alamat +
                    `</p>
                                    <h5 class="card-title">` +
                    data.tgl_lahir +
                    `</h5>
                                </div>
                            </div>
                        </div>`;
                // pakaii backkutip biar bisa dienter dan spasi
            });
            // jquery carikan saya elemnt dengan nama kelas ini
            // jika sudah ketemu, timpa kontennya dengan hasil dari looping diatas
            $("#content").html(content);
        });
    }

    // tampikan semua
    $("#content").load("page/home.html");

    // jquery carikan saya elemnt dengan nama kelas ini
    // pada saat dikklik, jalankan fungsi berikut ini
    $(".nav-link").on("click", function () {
        // hapus semua class active, di semua yang ada diclass nav-link (dimanapun)
        $(".nav-link").removeClass("active");
        // khusus yang lagi saya klik, bukan semua
        // tambahkan class baru namanya active
        $(this).addClass("active");

        // bikin variabel menu, isinya sesuai tulisan menu yang lagi kita klik
        let menu = $(this).html();
        // jika menu all menu, maka tampilkan semuanya
        if (menu == "HOME") {
            $("#content").load("page/home.html");
        } else if (menu == "ABOUT") {
            $("#content").load("page/about.html");
        } else if (menu == "MAHASISWA") {
            $("#content").load("page/mahasiswa.html");
        } else if (menu == "FOTO") {
            galleryMahasiswa();
        }
    });

    // jika tombol carinya ditekan tampilkan fungsi
    $("#content").on("click", "#tampilMahasiswa", function () {
        dataMahasiswa();
        console.log('ok');
    });



});
$('.carousel').carousel({
    interval: 10
});