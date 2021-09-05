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



     <!--============= Visi Misi Starts Here =============-->
     <section class="mt-5">
         <div class="container">
            <div class="section-header mb-5">
                <h4 style="color:black;" class="psbfont text-center">PIMPINAN SINODE GKPI</h4>
            </div>
            <div class="text-center">
                <p>VISI</p>
                <p>"Menjadi Persekutuan Penyembahan dan Persembahan Pada Tahun 2030"</p>
                <p>MISI</p>
                <p>"Dalam rangka mendukung Visi GKPI maka Misi GKPI dijabarkan dalam Panca Pelayanan GKPI: 1.Koinonia. 2. Marturia. 3. Diakonia. 4. Liturgia. 5. Oikonomia"</p>
            </div>
         </div>
     </section>
     <!--============= Visi Misi Ends Here =============-->     

    <!--============= Pimpinan Pictures Starts Here =============-->
      <section class="develop-teach">
        <div class="container">
          <div class="row thumbnail-icon-develop">
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/abdul-hutauruk.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Pdt. Abdul Hutauruk, MTh</b></h6>
                  <p>Bishop</p>
                </div>
              </div>
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/humala-lbntobing.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Pdt. Humala Lumbantobing MTh</b></h6>
                  <p>Sekjen</p>
                </div>
              </div>
          </div>
          <div class="row thumbnail-icon-develop">
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/maria-simatupang.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark text-center"><b>Pdt. Maria L. Simatupang, M.Th</b></h6>
                  <p>Departemen Apostolat</p>
                </div>
              </div>
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/rudolf-pakpahan.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Pdt. Rudolf G. Pakpahan, M.Th</b></h6>
                  <p>Biro Umum & Organisasi</p>
                </div>
              </div>
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/tp-sihombing.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Pdt. TP Sihombing, MM., M.Th</b></h6>
                  <p>Departemen Pastorat</p>
                </div>
              </div>
          </div>
          <div class="row thumbnail-icon-develop">
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/jp-siregar.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Pdt. JP. Robinsar Siregar, M.Th</b></h6>
                  <p>Biro Adm, Informasi dan Komunikasi</p>
                </div>
              </div>
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/parsaoran-sinaga.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Pdt. Parsaoran Sinaga, M.Min., M.Th</b></h6>
                  <p>Departemen Diakonat</p>
                </div>
              </div>
              <div class="text-center thumbnail-age">
                <img class="kiddy-people" src="@/assets/images/pimpinan-sinode/sondang-samosir.svg" alt="">
                <div class="detail-wrapper mt-2">
                  <h6 class="bold dark"><b>Sondang Samosir, SE</b></h6>
                  <p>Biro Keuangan</p>
                </div>
              </div>
          </div>       
        </div>
      </section>
    <!--============= Pimpinan Pictures Starts Here =============-->

    </div>
</template>

<style scoped>
  .develop-teach .text-wrapper h2 {
      font-size: 45px;
      color: #000000;
      font-family: 'PoppinsBold';
      font-style: Bold;
      line-height: 80px;
  }

  .develop-teach .text-wrapper p {
      font-family: 'PoppinsRegular';
      color: #000000;
      font-size: 25px;
      line-height: 40px;
  }

  .thumbnail-age p {
    font-size: 16px;
    margin-top: -10px;
    color: #000000;
  }

  @media only screen and (max-width: 700px){
    .develop-teach .text-wrapper{
      margin: 0px 10px 0px 10px;
    }

    .develop-teach .text-wrapper h2 {
        font-size: 35px;
        line-height: 40px;
    }

    .develop-teach .text-wrapper p {
        font-size: 18px;
    }
  }

.thumbnail-icon-develop {
    display: flex;
    justify-content: center;
    margin: 10px 0px 80px 0px;
  }

.thumbnail-age {
   margin: 0px 40px 0px 40px;
 }

.thumbnail-age p {
    font-size: 16px;
    margin-top: -10px;
    color: #000000;
}

@media (max-width: 991px) { 
.kiddy-people {
    margin: 95px 0px 0px 15px !important;
}

.junior-people {
    margin: 56px 0px 0px 0px !important;
}

.upper-people {
    margin: 32px 0px 0px 0px !important;
}

.thumbnail-age {
    margin: 0px 15px 0px 10px;
}
}

.detail-wrapper {
   text-align: center;
 }
</style>