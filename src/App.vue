<template>
  <div id="app">
    <Header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name:"app",
  components: {
    Header
  }
}
</script>

<style scoped>
main {
  padding-top: 80px;
}
</style>


<style src="./assets/tailwind.css">

