<template>
  <div class="absolute h-auto w-full z-30 bg-gray-900/70">

    <HomeVue></HomeVue>

    <TextVue>
      <template v-slot:title>
        這個是小文章
      </template>
      <template v-slot:content>
        把賺錢輕鬆帶過，顯然並不適合。李大釗在不經意間這樣說過，遊玩在一種意義上是增益的生活的準備。這句話看似簡單，卻埋藏了深遠的意義。一般來說，我們要學會站在別人的角度思考。賺錢對我來說有著舉足輕重的地位，必須要嚴肅認真的看待。鄧小平說過一句富有哲理的話，掌握新技術，要善於學習，更要善於創新。這是撼動人心的。若無法徹底理解賺錢，恐怕會是人類的一大遺憾。淮南子說過一句富有哲理的話，天下之物莫兇於鳩毒，然而良醫囊而藏之，有所用也。他會這麼說是有理由的。
      </template>
    </TextVue>

    <AboutVue></AboutVue>

    <TextVue>
      <template v-slot:title>
        快要過年了
      </template>
      <template v-slot:content>
        「賀新年，祝新年，新年哪，年連年」〈賀新年〉就是一首正港的新年歌曲了，雖然歌詞提到「爆竹聲聲催的響又遠」，其實原曲還穿插聖誕歌〈Jingle Bells 〉旋律作配樂，所以賀的是新曆年元旦，而非農曆新年。
      </template>
    </TextVue>

    <Swiper_1Vue></Swiper_1Vue>

    <ServiceVue></ServiceVue>

    <ContactVue></ContactVue>

    <Footer_mainVue></Footer_mainVue>
  </div>
</template>

<script>
import HomeVue from '@/components/Home.vue';
import TextVue from '@/components/Text.vue';
import AboutVue from '@/components/About.vue';
import Swiper_1Vue from '@/components/Swiper_1.vue';
import ServiceVue from '@/components/Service.vue';
import ContactVue from '@/components/Contact.vue';
import Footer_mainVue from '@/components/Footer_main.vue';

export default {
  components: {
    HomeVue,
    TextVue,
    AboutVue,
    Swiper_1Vue,
    ServiceVue,
    ContactVue,
    Footer_mainVue,
  }
}
</script>