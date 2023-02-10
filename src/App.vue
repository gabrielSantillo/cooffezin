<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
    export default {
  components: { HeaderComponent },
        
    }
</script>

<style lang="scss">
@import '@/scss/variables.scss';

@media screen and (min-width: 1024px) {
  :root {
    $--biggest-font-size: 4.5rem;
    $--big-font-size: 3rem;
    $--h1-font-size:2.25rem;
    $--h2-font-size: 1.5rem;
    $--h3-font-size: 1.25rem;
    $--normal-font-size: 1rem;
    $--small-font-size: .875rem;
    $--smaller-font-size: .813rem;
  }
}

/************ BASE *************/

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: $--body-font;
  font-size: $--normal-font-size;
  background-color: $--white-color;
  color: $--text-color;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/************ REUSABLE CSS CLASSES *************/

.container {
  max-width: 1120px;
  margin-inline: 1.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.section {
  padding-block: 4.5rem 3.5rem;
}

.section__title {
  color: $--title-color;
  font-size: $--biggest-font-size;
  font-family: $--second-font;
  font-weight: $--font-regular;
  line-height: 120%;
  text-align: center;
  margin-bottom: 1.5rem;
}

.main {
  overflow: hidden;
}

</style>
