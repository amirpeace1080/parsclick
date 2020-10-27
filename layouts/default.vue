<template>
  <div>
    <Navbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'log'
}
</script>

<style>
.container{
  margin-top: 30px;
}
</style>
