<template>
    <div class="products">
        <div class="products__bg section">
            <div class="products__container container grid">
                <div class="products__data" v-scroll-reveal.reset="{ delay: 350, origin: 'left' }">
                    <a href="#" class="products__button">Scroll Down <i class="ri-arrow-down-s-line"></i></a>

                    <p class="products__description">
                        We strive to form deep partnerships with farmers from all over the world to create perspective together and form helathy working relationships built on trust and respect.
                    </p>
                </div>

                <div class="products__content">
                    <article class="products__card" v-scroll-reveal.reset="{ delay: 450, origin: 'top' }">
                        <img src="@/img/product-coffee-1.png" alt="products image" class="products__img">
                        <h3 class="products__name">Classic Coffee</h3>
                        <span class="products__price">$17.90</span>
                    </article>

                    <article class="products__card" v-scroll-reveal.reset="{ delay: 550, origin: 'top' }">
                        <img src="@/img/product-coffee-2.png" alt="products image" class="products__img">
                        <h3 class="products__name">Black Coffee</h3>
                        <span class="products__price">$24.90</span>
                    </article>

                    <article class="products__card" v-scroll-reveal.reset="{ delay: 850, origin: 'top' }">
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

.products {
    background-color: $--first-color-alt;
}

.products__bg {
    background-color: $--first-color;
    border-radius: $--border-section;
}

.products__container {
    row-gap: 3.5rem;
}

.products__button {
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    background-color: $--first-color-alt;
    padding: 1rem 1.5rem;
    border-radius: 4rem;
    color: $--white-color;
    font-weight: $--font-medium;
    box-shadow: 0 8px 24px hsla(12, 32%, 8%, .5);
    margin-bottom: 2rem;
    transition: box-shadow .3s, transform .3s;
}

.products__button i {
    font-size: 1.5rem;
}

.products__button:hover {
    box-shadow: 0 8px 32px hsla(12, 32%, 8%, .6);
    transform: translateY(.35rem);
}

.products__data, .products__card {
    text-align: center;
    color: $--white-color;
}

.products__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 3.5rem 4.5rem;
}

.products__img {
    width: 120px;
    filter: drop-shadow(0 .5px 6px rgb(255, 255, 255));
    margin-bottom: 1.5rem;
    transition: transform .4s;
}

.products__img:hover {
    transform: translateY(-.35rem);
}

.products__name, .products__price {
    font-size: $--h2-font-size;
    font-family: $--second-font;
    font-weight: $--font-regular;
    line-height: 120%;
}

@media screen and (min-width: 375px) {
    .products__content {
    grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 576px) {
    .products__container {
        grid-template-columns: 400px;
        justify-content: center;
    }

}

@media screen and (min-width: 1024px) { 
    .products__bg {
    border-radius: 104px 104px 0 0;
    }

    .products__container {
        grid-template-columns: 418px 535px;
        align-items: center;
    }

    .products__data {
        text-align: initial;
    }

    .products__content {
        grid-template-columns: repeat(3, 1fr);
    }

    .products__name, .products__price {
        font-size: $--big-font-size;
    }
}

@media screen and (min-width: 1248px) { 
    .products__container {
        column-gap: 9rem;
    }
}

</style>