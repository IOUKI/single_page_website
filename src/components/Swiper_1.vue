<template>
  <div class="px-10">
    <swiper 
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="h-auto w-full bg-white"
      >
      <swiper-slide class="w-full h-96" v-for="img in images" :key="img">
        <div class="h-full w-full bg-center bg-no-repeat bg-cover" :class="img.bg"></div>
      </swiper-slide>
    </swiper>
  </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  data() {
    return {
      images: [
        {
          path: '@/images/city.jpeg',
          bg: 'bg-city'
        },
        {
          path: '@/images/fishing_port.jpeg',
          bg: 'bg-fishing_port'
        },
        {
          path: '@/images/lantern.jpeg',
          bg: 'bg-lantern'
        },
        {
          path: '@/images/river.jpeg',
          bg: 'bg-river'
        },
        {
          path: '@/images/wave.jpg',
          bg: 'bg-wave'
        }
      ]
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
