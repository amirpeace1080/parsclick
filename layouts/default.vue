<template>
  <div>
    <Navbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components:{
    Navbar
  }
}
</script>

<style>
.container{
  margin-top: 30px;
}
</style>
