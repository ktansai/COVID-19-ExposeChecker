<template>
  <div class="home">
    <img alt="Vue logo" >
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/FAQ.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
