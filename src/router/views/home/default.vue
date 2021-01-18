<script>
import { Carousel, Slide } from "vue-carousel";

// import magnific from "magnific-popup";
// import '@/assets/js/magnific-popup.min.js';
// import '@/assets/js/jquery-3.3.1.min.js';
// import '@/assets/js/modernizr-3.6.0.min.js';
// import '@/assets/js/plugins.js';
// import '@/assets/js/bootstrap.min.js';
// import '@/assets/js/jquery-ui.min.js';
// import '@/assets/js/wow.min.js';
// import '@/assets/js/waypoints.js';
// import '@/assets/js/nice-select.js';
// import '@/assets/js/owl.min.js';
// import '@/assets/js/counterup.min.js';
// import '@/assets/js/canvasjs.min.js';
// import '@/assets/js/paroller.js';
// import '@/assets/js/main.js';
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
      endtime: "Dec 31, 2020 16:37:25"
    };
  },
  created() {
    // var scripts = [
    //   "@/assets/js/magnific-popup.min.js"
    // ];
    // scripts.forEach(script => {
    //   let tag = document.createElement("script");
    //   tag.setAttribute("src", script);
    //   document.head.appendChild(tag);
    // });
    // window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    // this.timerCount(this.start, this.end);
    // this.interval = setInterval(() => {
    //   this.timerCount(this.start, this.end);
    // }, 1000);
  },
};


    
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
    <img src='@/assets/images/2459174.png' width="100%" height="100%" alt="">
</div>
</template>