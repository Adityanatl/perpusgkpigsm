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



     <!--============= Social Media Starts Here =============-->
     <section class="padding-top padding-bottom" id="coverage">
        <div class="container">
            <div class="section-header">
                <h3 class="title">Social Media</h3>
            </div>
            <div class="row mt-5">
                <div class="col-md-4 mt-3 ">
                    <!-- <div class="row mb-4 ml-2">
                    </div>
                    <div class="facebook">
                        <iframe name="f13901404aafe08" width="auto" height="650px" data-testid="fb:like_box Facebook Social Plugin" title="fb:like_box Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1411b4b9a242f4%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A9921%252Ff2075e56c632f3c%26relation%3Dparent.parent&amp;container_width=356&amp;header=false&amp;height=550&amp;href=https%3A%2F%2Fwww.facebook.com%2Fgurukreator%2F&amp;locale=id_ID&amp;sdk=joey&amp;show_border=true&amp;show_faces=true&amp;stream=true&amp;width=326" class="social-facebook"></iframe> 
                    </div> -->
                </div>
                <div class="col-md-4 mt-3">
                    <div class="row mb-4 ml-2">
                    </div>
                    <div class="instagram">
                        <SliderFrame>
                            <div slot-scope="{ next, prev }">
                                <div>
                                    <SliderSlides>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJalw3Zjwf3/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CQ-KeaDlZ9J/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>

                                        <a href="#0" @click="prev" class="testi-next-ig trigger-ig  ">
                                            <img src='@/assets/images/client/left.png' alt="">
                                        </a>
                                        <a href="#0" @click="next" class="testi-prev-ig trigger-ig">
                                            <img src='@/assets/images/client/right.png' alt="">
                                        </a>

                                    </SliderSlides>
                                </div>
                            </div>
                        </SliderFrame>
                    </div>
                </div>
            </div>  
        </div>
     </section>
     <!--============= Social Media Ends Here =============-->

    <!--============= Custom-Plan Section Starts Here =============-->
    <section class="help-section padding-bottom padding-top oh">
        <div class="container">
            <div class="section-header">
                <h3 class="title">Kalender Kegiatan</h3>
            </div>
            <div class="row justify-content-between">
                <div class="col-lg-2 rtl d-none d-lg-block">
                    
                </div>
                <div class="col-lg-8 col-xl-8 mb-30-none">
                    <div class="help-item">
                        <div class="help-thumb">
                            <img src="@/assets/images/date1.png" alt="help">
                        </div>
                        <div class="help-content">
                            <p><span><i class="fas fa-clipboard-list mr-2" style="color:#2662A4;"></i></span>Launching Perpustakaan Virtual GSM GKPI</p>
                            <p><span><i class="far fa-clock mr-2" style="color:#2662A4;"></i></span>18.00 WIB - 20.00 WIB</p>
                            <p><span><i class="fas fa-map-marker-alt mr-2" style="color:#2662A4;"></i></span>Zoom Meeting dan You Tube BKS GSM GKPI</p>
                        </div>
                    </div>
                    <div class="help-item">
                        <div class="help-thumb">
                            <img src="@/assets/images/date2.png" alt="help">
                        </div>
                        <div class="help-content">
                            <p><span><i class="fas fa-clipboard-list mr-2" style="color:#2662A4;"></i></span>Ibadah HUT GKPI Ke - 57 Th</p>
                            <p><span><i class="far fa-clock mr-2" style="color:#2662A4;"></i></span>19.00 WIB - 23.00 WIB</p>
                            <p><span><i class="fas fa-map-marker-alt mr-2" style="color:#2662A4;"></i></span>Youtube GKPI</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 rtl d-none d-lg-block">
                    
                </div>                
            </div>
        </div>
    </section>
    <!--============= Custom-Plan Section Ends Here =============-->  

    </div>
</template>