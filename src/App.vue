<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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



</style>
