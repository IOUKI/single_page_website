<template>
  <div id="Service" class="h-auto w-full my-7 p-5 md:p-20 text-white">
    <div class="w-full flex justify-center">
      <div class="w-5/6 border-b-2 pb-7 text-center">
        <h1 class="text-3xl md:text-5xl">
          服務項目 :)
        </h1>
      </div>
    </div>
    <div class="w-full text-xl md:text-3xl my-10 flex justify-center">
      <div class="h-auto w-5/6 flex justify-around text-3xl md:text-5xl">
        <div
          @click="changeContent('safe')"
          class="group [transform:translateZ(0)] p-8 border-2 divide-white rounded-lg overflow-hidden relative cursor-pointer select-none before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
          <span class="relative z-0 group-hover:text-black transition ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-shield-heart" /><br />安<br />全
          </span>
        </div>
        
        <div
          @click="changeContent('fast')"
          class="group [transform:translateZ(0)] p-8 border-2 divide-white rounded-lg overflow-hidden relative cursor-pointer select-none before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
          <span class="relative z-0 group-hover:text-black transition ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-bolt" /><br />快<br />速
          </span>
        </div>

        <div
          @click="changeContent('sturdy')"
          class="group [transform:translateZ(0)] p-8 border-2 divide-white rounded-lg overflow-hidden relative cursor-pointer select-none before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
          <span class="relative z-0 group-hover:text-black transition ease-in-out duration-500">
            <font-awesome-icon icon="fa-brands fa-accessible-icon" /><br />穩<br />健
          </span>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="w-5/6 p-3 text-xl md:text-3xl border-2 divide-white rounded-lg">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          id: 'safe',
          content: '安全對我來說，已經成為了我生活的一部分。了解清楚安全到底是一種怎麼樣的存在，是解決一切問題的關鍵。現在，正視安全的問題，是非常非常重要的。因為，塞萬提斯說過一句經典的名言，音樂是耳朵的眼睛。但願各位能從這段話中獲得心靈上的滋長。'
        },
        {
          id: 'fast',
          content: '動機，可以說是最單純的力量。一般來說，特拉赫恩曾經提過，愛是人生的本性，就像太陽要放射光芒; 它是人類靈魂最愜意，最自然的受用; 沒有它，人就蒙昧而可悲。沒有享受過之歡樂的人，無異於白活一輩子，空受煎熬。我希望諸位也能好好地體會這句話。'
        },
        {
          id: 'sturdy',
          content: '探討穩健時，如果發現非常複雜，那麼想必不簡單。愛迪生講過，我的人生哲學是工作，我要提示大自然的奧秘，並以此為人類造福。我們在世的短暫一生中，我不知道還有什麼比這種服務更好的了。想必各位已經看出了其中的端倪。'
        }
      ],
      content: '',
    }
  },

  methods: {
    changeContent(id) {
      let item = this.contents.find(element => {
        return id === element.id
      })
      this.content = item.content
    }
  },

  mounted() {
    this.changeContent('safe')
  }
}
</script>