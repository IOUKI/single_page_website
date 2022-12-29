<template>
  <NavbarVue></NavbarVue>
  <StaticBgVue></StaticBgVue>
  <router-view></router-view>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import StaticBgVue from './components/StaticBg.vue';
export default {
  components: {
    NavbarVue,
    StaticBgVue,
  },
}
</script>