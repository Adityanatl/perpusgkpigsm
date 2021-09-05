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
                <div class="section-header mb-5 mt-5">
                    <h4 style="color:black;" class="psbfont text-center">MARI BERKOLABORASI – MEMBERIKAN PELAYANAN TERBAIK KEPADA ANAK ANAK SEKOLAH MINGGU</h4>
                </div>

                <div style="color:black;">
                  <p>Sadarkah anda bahwa untuk bisa memberikan pelayanan terbaik, setiap organisasi perlu untuk melakukan kolaborasi</p>
                  <p>Kita sudah berada di era digital dimana media sosial sudah menjadi bagian hidup kita, termasuk bagian hidup anak-anak kita.  Oleh karena itu peran orangtua, pendidik,  gereja dan masyarakat dalam pengelolaan data digital bagi anak sangatlah penting bagi perlindungan anak dan perkembangan kehidupan anak di era digital ini. </p>         
                </div>  


                <div style="color:black; margin:50px 0px 0px 0px">
                    <p>Jika anda memiliki keyakinan yang sama dengan kami dan ingin menjadi bagian dari pelayanan perpustakaan virtual ini, mari berkolaborasi bersama kami di dalam:</p>
                        <ol>
                            <li>Kolaborasi Konten: dalam bentuk tulisan (artikel, wacana, opini), foto, video, slide presentasi, dll</li>
                            <li>Kolaborasi Webinar; kerjasama/berkolaborasi dengan mitra untuk penyelenggaraan webinar bersama</li>
                            <li>Kolaborasi Penggalangan Dana; kerjasama/berkolaborasi dengan mitra untuk pelaksanaan penggalangan dana dalam rangka mewujudkan perlindungan dan kesejahteraan anak-anak kita. </li>
                        </ol>
                </div><br>     
           </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>
      <!--Story section end -->

      <!-- mitra kami section start -->
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-3">      
              <div class="text-center mb-5">
                  <h6 style="color:black;"><b>MITRA KAMI SAAT INI:</b></h6>
              </div>

              <div class="text-center row">
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src="@/assets/images/logo/logo_gkpi.svg" width="200vw" height="200vw" alt="">
                </div>
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src="@/assets/images/logo/logo_sahabatanak.svg" width="200vw" height="200vw" alt="">
                </div>
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src="@/assets/images/logo/logo_uem.svg" width="200vw" height="200vw" alt="">
                </div>
              </div>

                <div style="color:black; margin-top:200px;">
                  <p><i>Note: Untuk profile lengkap mitra kami dapat dilihat pada bagian media - dokumen</i></p>
                </div>  
           </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>
      <!--mitra kami section end -->;

    </div>
</template>