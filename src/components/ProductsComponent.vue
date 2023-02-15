<template>
    <div class="products">
        <div class="products__bg section">
            <div class="products__container container grid">
                <div class="products__data">
                    <a href="#" class="products__button">Scroll Down</a>

                    <p class="products__description">
                        We strive to form deep partnerships with farmers from all over the world to create perspective together and form helathy working relationships built on trust and respect.
                    </p>
                </div>

                <div class="products__content">
                    <article class="products__card">
                        <img src="@/img/product-coffee-1.png" alt="products image" class="products__img">
                        <h3 class="products__name">Classic Coffee</h3>
                        <span class="products__price">$17.90</span>
                    </article>

                    <article class="products__card">
                        <img src="@/img/product-coffee-2.png" alt="products image" class="products__img">
                        <h3 class="products__name">Black Coffee</h3>
                        <span class="products__price">$24.90</span>
                    </article>

                    <article class="products__card">
                        <img src="@/img/product-coffee-3.png" alt="products image" class="products__img">
                        <h3 class="products__name">Strong Coffee</h3>
                        <span class="products__price">$32.90</span>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>