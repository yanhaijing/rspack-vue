<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div :class="div1">1111</div>
    <div class="div2">222</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import './home.css';
import 'swiper/css/swiper.css';

const yanhaijing222: string[] = [];
console.log(yanhaijing222.includes(''));

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  public div1 = 'div1';
}
</script>

<style lang="css" scoped>
.div1 {
  color: red;
}
</style>

<style lang="css">
.div2 {
  color: blue;
}
</style>
