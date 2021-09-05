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
            <div class="col-lg-12 mb-5 mt-3">
                <div class="section-header mb-5 mt-5">
                    <h4 style="color:black;" class="psbfont text-center">LATAR BELAKANG HADIRNYA PERPUSTAKAAN VIRTUAL BKS-GSM GKPI</h4>
                </div>

                <div style="color:black;">
                  <p style="margin:0px 0px 16px 0px;">Setelah terpilih dan dilantiknya Pengurus BKS-GSM GKPI 2020 – 2025 di Mupel (Musyawarah Pelayanan) BKS GSM GKPI pada tanggl 21 Desember 2020 yang  lalu,  pengurus telah mengadakan beberapa kali pertemuan secara zoom dengan Guru guru sekolah minggu, Pengurus & Penasehat BKS-GSM GKPI. Pertemuan pertemuan diisi dengan diskusi tentang job deskripsi para pengurus, rencana program pelayanan dan mekanisme pelayanan di masa pandemi. Salah satu program yang direncanakan pada diskusi tersebut adalah menyediakan perpustakaan virtual BKS-GSM GKPI sebagai media resources, media berbagi informasi dan media komunikasi baik diantara guru guru sekolah minggu, diantara anak-anak sekolah minggu, orangtua dan seluruh jemaat GKPI. Tidak hanya untuk jemaat GKPI saja, tetapi juga dapat diakses oleh jemaat dari gereja gereja lainnya. </p>
                  <p style="margin:0px 0px 16px 0px;">Untuk mewujudkan rencana tersebut, pada bulan Maret 2021 pengurus BKS GSM GKPI berupaya dan mencoba mengajukan proposal permohonan bantuan dana kepada UEM (United Evangelical Mission). Puji Tuhan, proposal BKS GSM GKPI disetujui dan BKS GSM GKPI memperoleh dukungan dana dari UEM. Pengurus BKS-GSM GKPI sangat bersyukur dan mengapresiasi dukungan yang sangat positif dari Pimpinan Sinode GKPI Periode 2015 – 2020, Bishop Pdt Oloan Pasaribu, M.Th dan Sekjen Pdt. Rosininta Hutabarat, M.Th selama proses pengajuan dan setelah proposal disetujui. Bantuan dana yang diberikan oleh UEM ini akan dipergunakan untuk menyediakan dan menyelenggarakan pelayanan Sekolah Minggu melalui Perpustakaan Virtual BKS GSM GKPI dimulai dari Juli 2021 s/d tahun 2025.</p>
                  <p style="margin:0px 0px 16px 0px;">Serangkaian persiapan untuk membuat web dan konten perpustakaan virtual BKS GSM GKPI di tahap awal telah dilaksanakan, antara lain:  Membentuk Tim Perpustakaan Virtual dengan 4 bidang/divisi sebagai kontributor utama, yaitu Bidang Pelatihan & Pengembangan Sumber Daya, Bidang Pendidikan & Kesehatan, Bidang Advokasi, Bidang Penggalangan Dana& Kemitraan. Juga menghunjuk  Kordinator IT dan 4 orang anggotanya, serta 2 orang pengelola web yang akan bekerja di kantor sekretariat Perpustakaan Virtual BKS GSM GKPI. Puji Tuhan, kantor untuk Tim IT bekerja juga diperoleh atas dukungan dari Pdt. GKPI Resort Medan Barat  Pdt. Arlington Nainggolan, M.Th serta PHJ GKPI Medan Kota yang diwakili oleh Guru jemaat GKPI Medan Kota, Pnt. Dr. Jonner Lumbangaol. </p>
                  <p style="margin:0px 0px 16px 0px;">Keberadaan dari Perpustakaan Virtual BKS-GSM GKPI ini adalah “not for profit”yaitu murni bersifat pelayanan. Seluruh Tim Perpustakaan Virtual, seluruh Pengurus BKS-GSM sebagai penanggung jawab, dan semua kontributor untuk mengisi konten web adalah orang-orang yang dengan sukarela melakukan pelayanan ini. Untuk memelihara kesinambungan dari web ini, kami yakin bahwa kita semua juga akan bekerja sama dalam menggalang dana untuk menghidupi keberlangsungan dari web ini. Sehingga dengan demikian, keberadaan perpustakaan virtual GKPI ini akan menjadi wadah yang memberikan manfaat bagi Pelayanan Sekolah Minggu serta seluruh komunitas yang terlibat dengan pelayanan sekolah minggu. </p>
                  <p style="margin:0px 0px 16px 0px;">Didalam mekanisme pelayanannya, diharapkan perpustakaan virtual ini bersifat dinamis dan akan secara terus menerus menampilkan konten konten yang berupa pengajaran, berupa informasi, berupa aktivitas, berupa ilmu pengetahuan, berupa kesaksian dan berita berita kegiatan antar kelompok pelayanan,  dll. Misalnya: konten Video Gerak & Lagu, konten Video cara menyampaikan nats/cerita yg menarik kepada anak SM, konten Video Cara Membuat Alat Peraga, Slide Power Point/Video Animasi Untuk Edukasi, Konten Segmentasi Anak (Siapa anak dimata Tuhan, siapa anak dimata Gereja, siapa anak dimata masyrakat, siapa anak dimata anak itu sendiri) dalam bentuk Animasi yg menarik , konten terkait Perlindungan Anak dalam bentuk Animasi yg menarik mis. tentang hak hak Anak , bentuk bentuk kekerasan terhadap anak, bagaimana pandangan dan sikap gereja terkait perlindungan anak; konten konten terkait hubungan kerjasama/berjejaring dengan berbagai pihak (antar kelompok pelayanan Sekolah Minggu, antar gereja, antar kelompok pelayanan kategorial.</p>
                  <p style="margin:0px 0px 16px 0px;">Disamping Tim Perpustakaan Virtual sebagai kontributor utama, tentunya sangat diharapkan adanya partisipasi dari seluruh stakeholder GKPI (Pendeta, Penatua, Kelompok Kategorial dan seluruh warga jemaat GKPI) untuk juga bersedia menjadi kontributor di dalam mengisi web perpustakaan virtual ini secara berkesinambungan.  Untuk proses pengiriman konten, dapat menghubungi admin Perpustakaan Virtual GKPI ke alamat email perpusvirtual.bksgsmgkpi@gmail.com  </p>
                  <p style="margin:0px 0px 16px 0px;">Disamping Tim Perpustakaan Virtual sebagai kontributor utama, tentunya sangat diharapkan adanya partisipasi dari seluruh stakeholder GKPI (Pendeta, Penatua, Kelompok Kategorial dan seluruh warga jemaat GKPI) untuk juga bersedia menjadi kontributor di dalam mengisi web perpustakaan virtual ini secara berkesinambungan.  Untuk proses pengiriman konten, dapat menghubungi admin Perpustakaan Virtual GKPI ke alamat email perpusvirtual.bksgsmgkpi@gmail.com  </p>
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