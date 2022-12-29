<template>
  <div id="Navbar"
    class=" fixed text-3xl w-full shadow bg-gray-900/70 text-white py-3.5 px-6 md:flex justify-between items-center select-none z-50 duration-500">

    <div class="flex items-center cursor-pointer duration-500">

      <span class="mr-1">
        <font-awesome-icon icon="fa-solid fa-wind" />
      </span>

      <h1>摟狗</h1>

    </div>

    <span @click="MenuToggle()" class="absolute top-3 right-5 md:hidden cursor-pointer">
      <font-awesome-icon v-if="open" icon="fa-solid fa-xmark" />
      <font-awesome-icon v-else icon="fa-solid fa-bars" />
    </span>

    <ul id="Navbar_Links"
      class="md:flex md:items-center mt-3.5 md:mt-0 md:px-0 px-7 md:pb-0 bg-gray-900/70 md:bg-transparent md:static absolute md:w-auto m-full w-full h-auto duration-500 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']">
      <li @click="MenuClose()" class=" md:mx-4 md:my-0 my-6 hover:text-white cursor-pointer duration-500"
        v-for="link in Links" :key="link">
        <div
          :href="link.link"
          class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
          {{ link.name }}
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

export default {

  data() {
    return {
      open: false,
      Links: [
        { name: 'TOP', link: '#Home' },
        { name: '關於我們', link: '#About' },
        { name: '服務項目', link: '#Service' },
        { name: '聯繫我們', link: '#Contact' },
      ],
    }
  },

  methods: {
    MenuToggle() {
      this.open = !this.open;
    },
    MenuClose() {
      this.open = false;
    },
    smooth_scroll() {
      document.querySelectorAll('div[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }
  },

  mounted() {
    this.smooth_scroll()
  },

}
</script>