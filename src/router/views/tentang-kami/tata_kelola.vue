<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from "vue";
import '@/assets/js/magnific-popup.min.js';
import SliderFrame from '@/components/SliderFrame';
import SliderSlide from '@/components/SliderSlide.vue';
import SliderSlides from '@/components/SliderSlides.vue';


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide, SliderFrame, SliderSlide, SliderSlides, },
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
      gamification: 1,
      selectedProduct: null,

    //   selectedPrice: 0,
    };
  },

  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
  },
  methods: {
      getListProduct(){
      let paramsTemp = queryString.stringify({
        ...{
          name: null,
          limit: 17,
          sort: 1,
        }
        , ...this.options}
      )
      this.$store.dispatch('product/GET_PRODUCTS',{params:paramsTemp}).then(()=>{
        this.listProducts = this.$store.getters['product/products']
      })
    },
    updateCart(){  
        console.log(this.selectedProduct)
      if(!this.selectedProduct  || this.selectedProduct == {}) {
        alert("Mohon pilih Produk terlebih dahulu")
        return false
      }

      localStorage.setItem('cart', JSON.stringify(this.selectedProduct))
    //   this.$store.dispatch('product/UPDATE_PRODUCT_CART', itemProduct)
      this.$router.push('/sign_up/sign-up')
    },  

    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
  }
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

    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    $(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/id_ID/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

</script>

<template>
    <div>



      <!-- Story section start -->
      <section class="ourstory" id="ourstory">
        <div class="container">
          <div class="row" style="display: inline-block">
            <div class="col-lg-12 mt-3">
                <div class="section-header mb-5">
                    <h4 style="color:black;" class="psbfont text-center">TATA KELOLA WEBISTE</h4>
                </div>

                <div class="section-header mb-5">
                    <h6 style="color:black;"><b>PANDANGAN UMUM</b></h6>
                </div>

                <div style="color:black;">
                  <ul>
                      <li>Alamat laman situs web resmi Perpustakaan Virtual BKS Sekolah Minggu GKPI adalah https://perpusgkpism.com</li>
                      <li>Informasi yang di tampilkan laman web Perpustakaan Virtual adalah ditujukan bagi setiap anak sekolah, guru sekolah minggu, dan warga jemaat GKPI maupun dari luar GKPI</li>
                      <li>Dokumen berupa halaman, banner, dokumentasi surat, foto, video, buku, artikel, renungan, dan berita pengumuman merupakan dokumen legal yang telah di sepakati bersama oleh koordinator dan setiap masing – masing koordinator bidang dalam setiap publikasi konten.</li>
                      <li>Masing – masing bidang bertanggung jawab untuk memberikan kontribusi konten pada website secara periodik yang telah di sepakati bersama oleh setiap anggota masing – masing bidang.</li>
                      <li>Masing – masing personal yang berasal dari kontributor stakeholder BKS GSM memiliki akses ke koordinator perpustakaan virtual untuk mengajukan dokumen sebagai bahan publikasi di website.</li>
                      <li>Dalam melakukan update/menggunggah dokumen yang sudah di validasi oleh koordinator website/ Ketua BKS, koordinator website di bantu oleh pengelola website yang melakukan update dengan atas nama pengusul.</li>
                      <li>Laman situs web di evaluasi secara berkala melalui rapat pengurus BKS GSM minimal 3 bulan sekali.</li>
                  </ul>
                </div>  

                <div class="section-header mb-5">
                    <h6 style="color:black;"><b>TIM PENGELOLA WEBSITE PERPUSTAKAAN VIRTUAL</b></h6>
                </div>

                <div style="color:black;">
                    <h6 style="color:black;"><b>A. Koordinator</b></h6>
                        <ol>
                            <li>Bertanggung jawab dalam pengelolaan website perpustakaan virtual.</li>
                            <li>Melakukan koordinasi dengan anggota untuk membuat konten website yang diperoleh dari kontributor</li>
                            <li>Melakukan koordinasi dengan tim pelaksana website untuk kelancaran akses website</li>
                            <li>Melakukan monitoring terhadap website ( tampilan dan fitur ) untuk keberlangsungan website sebagai sumber pelayanan sekolah minggu</li>
                            <li>Melakukan koordinasi dengan pengurus bks tentang website perpustakaan virtual</li>
                            <li>Melakukan evaluasi terhadap traffic penggunaan website</li>
                        </ol>
                </div><br>    

                <div style="color:black;">
                    <h6 style="color:black;"><b>A. Anggota</b></h6>
                        <ol>
                            <li>Membantu koordinator untuk mengelola website perpustakaan virtual</li>
                            <li>Melakukan koordinasi dengan koordiantor bidang sebagai kontributor tetap untuk mendapatkan materi untuk konten website</li>
                            <li>Melakukan koordinasi dengan kontributor dari stakeholder BKS GSM</li>
                            <li>Membuat perencanaan serta penjadwalan update konten serta berkoordinasi dengan tim pelaksana website</li>
                            <li>Melakukan verifikasi dan validasi materi dari kontributor sebelum diunggah ke website</li>
                            <li>Melakukan koordinasi dengan tim pelaksana website untuk proses mnggunggah konten website</li>
                        </ol>
                </div><br>    

                <div class="section-header mb-5">
                    <h6 style="color:black;"><b>TIM PELAKSANA WEBSITE PERPUSTAKAAN VIRTUAL</b></h6>
                </div>

                <div style="color:black;">
                    <h6 style="color:black;"><b>A. Pengelola dan Monitor Website</b></h6>
                        <ol>
                            <li>Membuat penjadwalan update content yang telah disesuaikan dengan jadwal yang sebelumnya diterima oleh setiap kontributor bidang.</li>
                            <li>Menyampaikan materi dari kontributor kepada tim pengelola website untuk verifikasi dan validasi.</li>
                            <li>Melakukan koordinasi dengan tim pengelola website ( koordinator dan anggota ) sebelum mengunggah konten website.</li>
                            <li>Membuat dokumentasi arsip materi dari kontributor yang disampikan melalui email atau diterima pada secretariat perpustakaa virtual.</li>
                            <li>Melakukan backup data secara berkala dan menjaga keutuhan data didalam database.</li>
                            <li>hosting.</li>
                        </ol>
                </div><br>    

                <div style="color:black;">
                    <h6 style="color:black;"><b>B. Publikasi Dan Eksekutor Berita</b></h6>
                        <ol>
                            <li>Bertanggung jawab dalam pengelolaan tampilan konten dalam rupa desain flyer, thumbnail, banner kegiatan agar tampilan website menarik, nyaman, dan informasi dapat diterima dengan oleh setiap pengunjung website.</li>
                            <li>Berkoordinasi dengan tim pengelola website terkait kebutuhan pengadaan desain konten pada Instagram dan facebook yang mendukung penyebaran informasi pada website.</li>
                        </ol>
                </div><br>  

                <div class="section-header mb-5">
                    <h6 style="color:black;"><b>TIM PELAKSANA WEBSITE PERPUSTAKAAN VIRTUAL</b></h6>
                </div>

                <div style="color:black;">
                  <ol>
                      <li>Meliputi pendeta, penatua, guru sekolah minggu, anak sekolah minggu, dan warga jemaat yang terlibat berkontribusi memberikan sumber materi konten website perpustakaan  virtual.</li>
                      <li>Materi konten di berikan selambat – lambatnya 1 minggu sebelum waktu peng-upload-an kepada tim pengelola website agar dapat disesuaikan pada waktu penjadwalan konten</li>
                  </ol>
                </div>    
           </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>
      <!--Story section end -->

    </div>
</template>