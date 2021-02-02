<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from "vue";
import '@/assets/js/magnific-popup.min.js';

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide },
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2018 15:37:25",
      endtime: "Dec 31, 2020 16:37:25",
        listProducts: [{"id": 1, "product_type": "Personal", "product_name": "Monthly", "price": 20000, "semester_price": 100000, "yearly_price": 200000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 2, "image_url": "", "description": "Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 bulan tanpa batasan eksport dokumen (pdf)", "narasi": "", "recommended": false}, {"id": 2, "product_type": "Donasi", "product_name": "Kakaktua Putih", "price": 50000, "semester_price": 300000, "yearly_price": 600000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 1, "image_url": "https://api.paideia.id/api/files/public/b64dd6f87d6d422b8eb7ba54d8faadbekakaktuaputih.png", "description": "3 Guru Kreator", "narasi": "indigenous of Maluku", "recommended": false}, {"id": 3, "product_type": "Donasi", "product_name": "Cendrawasih", "price": 84000, "semester_price": 500000, "yearly_price": 1000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/16d79165247f4e1bb3c50594de3f6250cendrawasih.png", "description": "5 Guru Kreator", "narasi": "indigenous of Papua", "recommended": false}, {"id": 10, "product_type": "Personal", "product_name": "Semester", "price": 100000, "semester_price": null, "yearly_price": null, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "", "description": "Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 6 bulan tanpa batasan eksport dokumen (pdf)", "narasi": "", "recommended": false}, {"id": 4, "product_type": "Donasi", "product_name": "Kucing Merah", "price": 167000, "semester_price": 1000000, "yearly_price": 2000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/b4ea042550764ea3915d2b94b5dd8cc3kucingmerah.png", "description": "10 Guru Kreator", "narasi": "indigenous of Kalimantan", "recommended": false}, {"id": 11, "product_type": "Personal", "product_name": "Yearly", "price": 200000, "semester_price": null, "yearly_price": null, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "", "description": "Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 tahun tanpa batasan eksport dokumen (pdf)", "narasi": "", "recommended": true}, {"id": 5, "product_type": "Donasi", "product_name": "Anoa", "price": 833000, "semester_price": 5000000, "yearly_price": 10000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/8eb6e964fa634991bbe14fd4d6dabb18Anoa2.png", "description": "50 Guru Kreator", "narasi": "indigenous of Sulawesi", "recommended": false}, {"id": 6, "product_type": "Donasi", "product_name": "Macan", "price": 1670000, "semester_price": 10000000, "yearly_price": 20000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/94e8095fc7be4dd295c71b6d3330e361macan.png", "description": "100 Guru Kreator", "narasi": " indigenous of Sumatera", "recommended": false}, {"id": 7, "product_type": "Donasi", "product_name": "Badak", "price": 4170000, "semester_price": 25000000, "yearly_price": 50000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/ef8c5fdb16ea4e1da8abc115df0cda40Badak.png", "description": "250 Guru Kreator", "narasi": " indigenous of Jawa", "recommended": false}, {"id": 8, "product_type": "Donasi", "product_name": "Gajah", "price": 8300000, "semester_price": 50000000, "yearly_price": 100000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/fb76f3a017c3437e80c38bccdaf2932bGajah.png", "description": "500 Guru Kreator", "narasi": " indigenous of Sumatera", "recommended": false}, {"id": 9, "product_type": "Donasi", "product_name": "Komodo", "price": 16700000, "semester_price": 100000000, "yearly_price": 200000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/e55e7f1e2adf4c488f6ae6cf345da9a1Komodo.png", "description": "1000 Guru Kreator", "narasi": " indigenous of NTT", "recommended": true} ], 
        selectedPrice: 'semester_price',
        pickedProduct: null,

        payload:{
            "product_id":0,
            "qty":0,
            "price":0,
            "payment_methode_id":0,
            "transaction_id":null,
            "name":"",
            "email":"",
            "hp":""
        }
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
      // this.getListProduct();
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
    methods: {
        getListProduct(){
            let paramsTemp = queryString.stringify({
                ...{
                    name: null,
                    limit: 17,
                    sort: '1',
                }
                , ...this.options}
            )
            this.$store.dispatch('product/GET_PRODUCTS',{params:paramsTemp}).then(()=>{
                this.listProducts = this.$store.getters['product/products']
            })
        },
        displayPrice(itemProduct){
            let price = this.selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price / 1000
            if (price < 1000){
                return price + ' k'
            } else {
                return price/1000 + ' m'
            }
        },
        successmsg() {
            Vue.swal({
                position: "top-end",
                icon: "success",
                title: "Your transaction has been procced",
                showConfirmButton: false,
                timer: 1500
            });
        },
        postCheckout(){
            if (this.pickedProduct == null){
                alert("Silahkan pilih Berkontribusi")
                return
            }
            this.payload.product_id = this.pickedProduct.id
            this.payload.qty = 1

            if (this.selectedPrice=='semester_price') {
                this.payload.price = this.pickedProduct.semester_price
            } else {
                this.payload.price = this.pickedProduct.yearly_price
            }

            this.$store.dispatch(
                'transaction/POST_TRANSACTION', this.payload
            ).then(() => {
                let resp = this.$store.getters['transaction/transaction']
                this.successmsg()
                window.location = resp.redirect_url
            }).catch(function () {
                Vue.swal({
                    position: "top-end",
                    icon: "warning",
                    title: 'Failed to process',
                    showConfirmButton: false,
                    timer: 1500
                });
            })


        },
        timerCount: function(start, end) {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = start - now;
            var passTime = end - now;

            if (distance < 0 && passTime < 0) {
                clearInterval(this.interval);
                return;
            } else if (distance < 0 && passTime > 0) {
                this.calcTime(passTime);
            } else if (distance > 0 && passTime > 0) {
                this.calcTime(distance);
            }
        },

        // windowScroll() {
        // const navbar = document.getElementById("navbar");
        // if (
        //     document.body.scrollTop >= 50 ||
        //     document.documentElement.scrollTop >= 50
        // ) {
        //     navbar.classList.add("nav-sticky");
        // } else {
        //     navbar.classList.remove("nav-sticky");
        // }
        // },
        /**
         * Toggle menu
         */
        toggleMenu() {
        document.getElementById("topnav-menu-content").classList.toggle("show");
        },
        nextSlide() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
        },
        prevSlide() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
        }
    },

};

    $(document).ready(function () {
        // Nice Select
        // $('.select-bar').niceSelect();
        // PoPuP
        $('.popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        disableOn: 300 
        });
    });

    $(window).on('scroll', function () {

        var header = $(".header-section");
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });
</script>

<template>
    <div>
     <header class=" navigation header-section">
        <div class="container">
            <div class="header-wrapper">
            <div class="logo">
                <router-link tag="a" to="/">
                    <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
                </router-link>
            </div>
                            <div 
                type="button"
                class="header-bar d-lg-none"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
                @click="toggleMenu()"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="menu">
                    <li>
                        <router-link tag="a" to="/">Beranda</router-link>
                    </li>
                    <li><router-link tag="a" to="/features/features">Guru</router-link></li>
                    <li><router-link tag="a" to="/donatur">Donatur</router-link></li>
                    <!-- ss -->
                    <li class="d-sm-none">
                        <router-link tag="a" to="/sign_in/sign-in" class="header-button d-sm-inline-block">SIGN UP/LOGIN</router-link>
                    </li>
                </ul>

                <div class="collapse navbar-collapse" id="topnav-menu-content">
                    <ul
                        class="navbar-nav ml-auto"
                        id="topnav-menu"
                        v-scroll-spy-active="{ selector: 'a.nav-link' }"
                    >
                        <li class="nav-item">
                        <router-link tag="a" to="/" style="color:#ffffff">Beranda</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/features/features" style="color:#ffffff">Guru</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/donatur" style="color:#ffffff">Donatur</router-link>
                        </li><hr>
                        <!-- <li class="nav-item">
                        <router-link tag="a" to="#kontak">Kontak</router-link>
                        </li> -->
                        <li class="d-sm-none">
                            <router-link tag="a" to="/sign_in/sign-in" class="header-button d-sm-inline-block">SIGN UP/LOGIN</router-link>
                        </li>
                    </ul>
                </div>
                    <!-- <div class="ml-lg-2">
                        <a href="javascript: void(0);" class="btn btn-outline-success w-xs">Sign in</a>
                    </div> -->



                <!-- <div class="header-right header-bar d-lg-none">
                    <select class="select-bar">
                        <option value="en">En</option>
                        <option value="Bn">Bn</option>
                        <option value="pk">Pk</option>
                        <option value="Fr">Fr</option>
                    </select>
                </div> -->
                <!-- <button
                    type="button"
                    class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                    data-toggle="collapse"
                    data-target="#topnav-menu-content"
                    @click="toggleMenu()"
                    >
                    <i class="fa fa-fw fa-bars"></i>    
                </button> -->
                <router-link tag="a" to="/sign_in/sign-in" class="header-button d-none d-sm-inline-block">SIGN UP/LOGIN</router-link>
            </div>
        </div>
     </header>
    <!--============= Header Section Ends Here =============-->

    <!--============= Header Section Ends Here =============-->
    <section class="page-header bg_img_feature">
        <div class="bottom-shape d-none d-md-block">
            <img src='@/assets/images/img/page-header.png' alt="css">
        </div>
        <div class="page-left-thumb">
            <img src='@/assets/images/bg/privacy-header.png' alt="bg">
        </div>
        <div class="container">
            <div class="page-header-content cl-white">
                <h2 class="title">Privasi dan Persyaratan</h2>
            </div>
        </div>
    </section>
    <!--============= Header Section Ends Here =============-->

    <!--============= Privacy Section Starts Here =============-->
    <section class="privacy-section padding-top padding-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-header">
                        <h2 class="title">Ketentuan Privasi dan Persyaratan</h2>
                        <p>Mohon membaca informasi di bawah ini dengan baik dan seksama</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-lg-4">
                    <aside class="sticky-menu">
                        <div class="faq-menu bg_img" data-background="./assets/images/faq/faq-menu.png">
                            <ul id="faq-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="#general">Umum</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#prop">Pengumpulan Informasi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#secu">Penggunaan Informasi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#info">Hak Anda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#cooki">Kebijakan Cookies</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#ipaddr">Persetujuan dan Perubahan</a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div class="col-lg-8 col-xl-7">
                    <article class="mt-70 mt-lg-0">
                        <div class="privacy-item" id="general">
                            <h3 class="title">Umum</h3>
                            <p>Paideia Educational Solutions (“Kami”) berkomitmen untuk melindungi dan menghormati privasi pengguna (“Anda”) saat mengakses dan menggunakan aplikasi, 
                                situs web (www.paideia.id), fitur, teknologi, konten dan produk yang Kami sediakan (selanjutnya, secara bersama-sama disebut sebagai “Platform”).</p>
                            <p>Data Pribadi yang diberikan oleh Pengguna merupakan data yang diserahkan secara sadar dan tanpa adanya tekanan atau paksaan dari pihak manapun.
                                Keutuhan dan keamanan Data Pribadi, termasuk data account Pengguna (username dan kata sandi), juga merupakan sepenuhnya tanggung jawab Pengguna. 
                                Kami tidak bertanggung jawab dan tidak dapat dimintakan pertanggungjawaban atas penyalahgunaan data tersebut yang dikarenakan kelalaian Pengguna.</p>
                            <p>Dengan mengunjungi dan/atau mendaftar Akun pada Platform Kami, Anda dan/atau orang tua, wali atau pengampu Anda (jika Anda berusia dibawah 18 (delapan belas) 
                                tahun) menerima dan menyetujui pendekatan dan cara-cara yang digambarkan dalam Kebijakan Privasi ini. Mohon membaca Kebijakan Privasi Kami dengan seksama 
                                sehingga Anda memahami pendekatan dan cara Kami dalam menggunakan informasi tersebut.</p>
                        </div>
                        <div class="privacy-item" id="prop">
                            <h3 class="title">Pengumpulan Informasi</h3>
                            <p>Kami dapat mengumpulkan Informasi Pribadi berupa:</p>
                            <p>1. Informasi yang Anda berikan. Informasi ini dapat diberikan melalui formulir elektronik pada Platform Kami maupun dengan berkorespondensi melalui telepon, 
                                surat elektronik, akun media sosial, survey, diskusi daring, dan sebagainya. Informasi yang Anda berikan dapat meliputi nama, alamat, keterangan mengajar 
                                (meliputi nama sekolah dan jabatan tanggung jawab), alamat surat elektronik, nomor telepon, informasi finansial dan kartu kredit, deskripsi pribadi, foto, dan 
                                data lainnya. Kami dapat meminta Anda untuk melakukan verifikasi terhadap informasi yang Anda berikan, untuk memastikan akurasi dari informasi tersebut.</p>
                            <p>2. Informasi yang Kami kumpulkan. Untuk setiap kunjungan Anda ke Platform Kami, Kami dapat mengumpulkan informasi berikut secara otomatis:(a). Informasi teknis, 
                                meliputi alamat Protokol Internet (IP address) yang digunakan untuk menghubungkan komputer Anda dengan internet, informasi login Anda, jenis dan versi perambah 
                                (browser) yang digunakan, pengaturan zona waktu, jenis dan versi ekstensi perambah (browser plug-in), system operasi dan platform; (b). Informasi tentang kunjungan Anda, termasuk daftar lengkap Lokator Sumber Seragam (Uniform Resource Locators atau URL) yang dikunjungi menuju, melalui, 
                                dan dari Platform Kami (termasuk tanggal dan waktu); produk yang Anda lihat atau cari; waktu respon halaman, masalah pengunduhan, lama kunjungan pada halaman 
                                tertentu, informasi interaksi pada halaman (seperti pengguliran, klik, maupun pergerakan tetikus), metode yang digunakan untuk meninggalkan situs, serta nomor 
                                telepon yang digunakan untuk menghubungi layanan pelanggan Kami.</p>
                            <p>3. Informasi yang Kami terima dari sumber lain. Kami dapat menerima informasi jika Anda menggunakan situs lain yang Kami operasikan atau layanan lain yang Kami 
                                sediakan. Kami juga bekerja sama dengan pihak ketiga (termasuk, namun tidak terbatas pada misalnya, mitra bisnis, sub-kontraktor dalam pelayanan teknis, jasa 
                                pembayaran dan pengantaran, jaringan periklanan, penyedia analisis, penyedia pencarian informasi, serta agen acuan kredit) (“Mitra Kami”) dan dapat menerima 
                                informasi dari mereka. Kami akan mengambil langkah-langkah dalam batas kewajaran untuk melakukan verifikasi terhadap informasi yang Kami dapatkan dari sumber 
                                lain sesuai dengan Peraturan yang Berlaku.</p>
                        </div>
                        <div class="privacy-item" id="secu">
                            <h3 class="title">Penggunaan Informasi</h3>
                            <p>Kami menggunakan Informasi Pribadi dengan cara-cara berikut:</p>
                                <p><b>1. Informasi yang Anda berikan:</b>
                                    (a). Memverifikasi Informasi Pribadi yang terdapat pada akun Anda; 
                                    (b). Menjalankan kewajiban Kami dalam menyediakan informasi, produk, dan jasa kepada Anda;
                                    (c) Dengan tunduk pada peraturan perundang-undangan yang berlaku, menyediakan, atau mengizinkan Mitra Kami (baik yang berada di dalam maupun di luar wilayah Republik Indonesia) untuk menyediakan, informasi, produk dan jasa kami, beserta setiap perubahan yang ada, kepada Anda;
                                    (d) Dengan tunduk pada peraturan perundang-undangan yang berlaku, melakukan, atau mengizinkan Mitra Kami (baik yang berada di dalam maupun di luar wilayah Indonesia), melakukan riset dalam meningkatkan kualitas pengalaman dan pelayanan dalam menggunakan Platform;
                                    (e) Melakukan sosialisasi, publikasi, ataupun promosi terkait produk dan jasa kami;
                                    (f) Komunikasi secara langsung dengan Anda.</p>
                                <p><b>2. Informasi yang Kami kumpulkan.</b> 
                                    (a).Untuk mengelola Platform dan operasi internal Kami, termasuk pencarian sumber masalah (troubleshooting), analisis data, pengujian, penelitian, serta tujuan-tujuan statistik dan survei lainnya;
                                    (b). Untuk memperbaiki Platform Kami sehingga konten dan pengalaman dipastikan dapat disajikan dengan cara yang paling efektif untuk Anda;
                                    (c). Sebagai bagian dari usaha dalam memastikan keselamatan dan keamanan Platform Kami;
                                    (d). Untuk menyajikan produk dan jasa yang relevan bagi Anda;
                                    (e). Untuk memberi masukan dan rekomendasi kepada Anda dan pengguna lain dalam Platform Kami mengenai produk dan jasa yang dapat menarik minat Anda dan mereka.</p>
                                <p>3. Informasi yang Kami terima dari sumber lain. Kami menggunakan Google Analytics sebagai alat bantu analisis perilaku Pengguna dari penggunaan Platform 
                                    (“Alat Analisis Situs”), dengan syarat bahwa setiap penyedia jasa Alat Analisis Situs tidak akan mengumpulkan, dan kami tidak akan memberikan kepada penyedia 
                                    jasa Alat Analisis Situs manapun, setiap informasi identitas pribadi Pengguna kami, termasuk namun tidak terbatas pada nama, usia, alamat, alamat email, nomor 
                                    telepon dan informasi keuangan dan kartu kredit Pengguna kami. Salah satu fitur Google Analytics yang kami gunakan adalah Display Advertising
                                    (misal: Remarketing, Google Display Network Impression Reporting, the DoubleClick Campaign Manager Integration, atau Google Analytics Demographics and Interest 
                                    Reporting).</p>
                                <p><b>PENYIMPANAN INFORMASI PRIBADI</b></p>
                                    <p>Seluruh informasi Pribadi yang Anda berikan kepada Kami disimpan di server yang aman. Semua transaksi pembayaran pada Platform akan dienkripsi. Dengan menyerahkan Informasi
                                        Pribadi Anda pada Platform, Anda menyetujui pengalihan, penyimpanan, serta pengolahan yang terjadi pada Platform Kami. Kami akan mengambil langkah-langkah dalam batas kewajaran dan sesuai dengan peraturan perundang-undangan yang berlaku yang diperlukan untuk memastikan bahwa Informasi Pribadi tersebut diperlakukan dengan aman dan sesuai dengan Kebijakan Privasi.
                                        Dalam situasi di mana Kami memberikan (atau Anda memilih) sebuah kata sandi (password) yang mengizinkan Anda untuk mengakses bagian-bagian tertentu pada Platform Kami, Anda bertanggung jawab untuk menjaga kerahasiaan kata sandi ini. Kami meminta Anda untuk tidak membagi kata sandi dengan siapa pun.
                                        Mohon untuk dapat diperhatikan bahwa transmisi informasi melalui internet tidak sepenuhnya aman. Meskipun demikian, Kami akan berusaha sebaik mungkin untuk melindungi Informasi Pribadi tersebut. Kami tidak bisa menjamin keamanan data yang dikirimkan ke Platform Kami; risiko dari setiap transmisi menjadi tanggung jawab Anda. Begitu Kami menerima Informasi Pribadi Anda, Kami akan menggunakan prosedur yang ketat dan fitur keamanan untuk mencegah akses yang tidak diizinkan.</p>
                            <p></p>
                        </div>
                        <div class="privacy-item" id="info">
                            <h3 class="title">Hak Anda</h3>
                            <p>Anda dapat memohon untuk penghapusan Informasi Pribadi Anda pada Platform atau menarik persetujuan Anda untuk setiap atau segala pengumpulan, penggunaan atau pengungkapan Informasi Pribadi Anda dengan memberikan kepada kami pemberitahuan yang wajar secara tertulis melalui detail kontak yang tercantum pada bagian Kebijakan Privasi ini. Setelah menerima pemberitahuan untuk menarik persetujuan untuk pengumpulan, penggunaan atau pengungkapan Informasi Pribadi Anda, kami akan menginformasikan Anda tentang konsekuensi yang mungkin terjadi dari penarikan tersebut sehingga Anda dapat memutuskan apakah Anda tetap ingin menarik persetujuan atau tidak.</p>
                            <p>Anda dapat meminta kepada Kami untuk mengakses dan/atau mengoreksi Informasi Pribadi anda yang berada dalam kepemilikan dan penguasaan kami, dengan menghubungi kami di perincian yang disediakan di bawah ini.</p>
                            <p>Dalam platform kami terdapat tautan menuju dan dari situs-situs milik jaringan mitra, afiliasi, maupun pihak tidak terkait lainnya. Perlu diperhatikan bahwa kami tidak bertanggung jawab atau memiliki kewajiban apapun atas kebijakan-kebijakan tersebut oleh karena situs-situs tersebut memiliki Kebijakan Privasi mereka sendiri.</p>                               
                        </div>
                        <div class="privacy-item" id="cooki">
                            <h3 class="title">Kebijakan Cookies</h3>
                            <p>Cookies adalah sebuah berkas digital kecil berisi huruf dan angka yang Kami simpan pada browser atau hard drive komputer Anda atas persetujuan Anda. Ketika Anda menggunakan Platform, Kami dapat menempatkan sejumlah cookies pada memori browser Anda.
                            <p>Penggunaan cookies adalah bertujuan sebagai berikut: (1) mengaktifkan fungsi tertentu, (2) memberikan analisis, (3) menyimpan preferensi dan pengaturan Anda; dan (4) memungkinkan pengiriman iklan dan pengiklanan berdasarkan perilaku. Beberapa cookies ini hanya akan digunakan jika Anda menggunakan fitur tertentu, atau memilih preferensi tertentu, sementara sebagian Cookies lain akan selalu digunakan.</p>
                            <p>Anda dapat menghapus Cookies dengan cara melakukan fungsi clear data pada mobile app maupun web browser Anda yang memungkinkan Anda untuk menolak pengaturan seluruh atau sebagian Cookies. Akan tetapi, Anda mungkin tidak dapat mengakses seluruh atau sebagian Platform Kami.</p>
                        </div>
                        <div class="privacy-item" id="ipaddr">
                            <h3 class="title">Persetujuan dan Perubahan</h3>
                            <p>Dengan menyetujui Kebijakan Privasi, Anda dan/atau orang tua, wali atau pengampu Anda (dalam hal Anda berusia di bawah 18 (delapan belas) tahun) mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini dan menyetujui segala ketentuannya. Secara khusus, Anda setuju dan memberikan persetujuan kepada kami untuk mengumpulkan, menggunakan, membagikan, mengungkapkan, menyimpan, mentransfer, atau mengolah Informasi Pribadi anda sesuai dengan Kebijakan Privasi ini.</p>
                            <p><b>PERUBAHAN DALAM KEBIJAKAN PRIVASI KAMI</b></p>
                            <p>Kami mempunyai hak untuk mengubah, menambahkan atau mengamandemen Kebijakan Privasi ini dari waktu ke waktu tanpa pemberitahuan terlebih dahulu. Perubahan apapun yang kami lakukan terhadap Kebijakan Privasi kami di masa depan akan diterbitkan melalui halaman ini dan, ketika dibutuhkan, diberitahukan kepada Anda melalui surat elektronik. Ketika perubahan, penambahan dan/atau amandemen tersebut dilakukan, kami akan mengubah tanggal pada bagian “Terakhir diubah” di atas dan memasang Kebijakan Privasi yang baru.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <!--============= Privacy Section Ends Here =============-->

        <!--============= Footer Section Starts Here =============-->
     <footer class="footer-section bg_img" data-background='@/assets/images/footer-bg.jpg'>
        <div class="container">
            <div class="footer-top padding-top padding-bottom">
                <div class="logo">
                    <a href="#0">
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
                    </a>
                </div>
                <ul class="social-icons">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/gurukreator"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <!-- <li>
                        <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                    </li> -->

                    <!-- <li>
                        <a href="#0"><i class="fab fa-google-plus-g"></i></a>
                    </li> -->
                    <li>
                        <a target="_blank" href="https://www.instagram.com/gurukreator/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/gurukreator"><i class="fab fa-telegram"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-bottom">
                <ul class="footer-link">
                    <li>
                        <router-link tag="a" to="/">Home
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/features/features">Teacher
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/">Supporter
                        </router-link>
                    </li>
                    <!-- <li>
                        <a href="#0">Contacts</a>
                    </li> -->
                    <li>
                        <router-link tag="a" to="/privacy_policy">Kebijakan Privasi</router-link>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <p style="font-size:12px;">Illustration by storyset.com</p>
                <p style="font-size:12px;">
                    Copyright © 2020. All Rights Reserved By <a href="https://paideia.id/" style="color:#ffffff">PAIDEIA Educational Solutions</a>
                </p>
            </div>
        </div>
     </footer>
     <!--============= Footer Section Ends Here =============-->
    </div>
</template>
