<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 class="title has-text-danger">Admin Area</h1>
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  // middleware: 'auth'
}
</script>

<style>
.container{
  margin-top: 30px;
}
</style>
