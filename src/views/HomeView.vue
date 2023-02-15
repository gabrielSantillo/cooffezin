<template>
  <div class="home">
    <home-component></home-component>
    <products-component></products-component>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import ProductsComponent from '@/components/ProductsComponent.vue'

export default {
  components: { HomeComponent, ProductsComponent },

}
</script>
