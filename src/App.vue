<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
    export default {
  components: { HeaderComponent, FooterComponent },
        
    }
</script>

<style lang="scss">
@import '@/scss/variables.scss';

@media screen and (min-width: 1023px) {
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

/************ BUTTON *************/
.button {
  display: inline-flex;
  align-items: center;
  column-gap: .5rem;
  background-color: $--second-color;
  padding: 1rem 1.5rem;
  border-radius: 4rem;
  color: $--title-color;
  font-weight: $--font-medium;
  box-shadow: 0 8px 32px hsla(39, 62%, 65%, .25);
  transition: box-shadow .3s;
}

.button i {
  font-size: 1.5rem;
  transition: transform .3s;
}

.button:hover {
  box-shadow: 0 8px 48px hsla(39, 62%, 65%, .4);
}

.button:hover i {
  transform: translateX(.25rem);
}

::-webkit-scrollbar {
  width: .6rem;
  background-color: hsl(12, 8%, 65%);
}

::-webkit-scrollbar-thumb {
  background-color: hsl(12, 8%, 45%);
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsl(12, 8%, 35%);
}

/************* MEDIA QUERIES *****************/
/* For small devices */
@media screen and (min-width: 375px) {
  .container {
    margin-inline: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .section {
    padding-block: 7.5rem 5.5rem;
  }
}

</style>
