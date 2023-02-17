<template>
    <div class="home section">
        <div class="home__container container grid">
            <div class="home__data">
                <h3 class="home__subtitle">
                    EXCEPTIONAL QUALITY
                </h3>

                <h1 class="home__title">
                    It's time for a <br> good coffee

                    <img src="@/img/home-coffee-title.png" alt="home image">
                </h1>

                <p class="home__description">
                    Each select coffee bean reflects our commitment to Colombian coffee growers, who bring the best select coffee to your table.
                </p>

                <a href="#" class="button">
                    Get Started <i class="ri-arrow-right-s-line"></i>
                </a>
            </div>

            <img src="@/img/home-coffee.png" alt="home image" class="home__img">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home {
    background: linear-gradient(180deg,
                $--first-color 0%,
                $--first-color-alt 100%);
}

.home__container {
    padding-top: 2rem;
    row-gap: 2rem;
}

.home__data {
    text-align: center;
}

.home__subtitle {
    font-size: $--normal-font-size;
    color: $--second-color;
    font-weight: $--font-medium;
    margin-bottom: .75rem;
}

.home__title, .home__description {
    color: $--white-color;
}

.home__title {
    text-align: initial;
    font-size: $--biggest-font-size;
    font-family: $--second-font;
    font-weight: $--font-regular;
    line-height: 120%;
    margin: 0 auto 2rem;
    position: relative;
    width: max-content;
}

.home__title img {
    width: 80px;
    position: absolute;
    right: -1rem;
    bottom: -1.25rem;
}

.home__description {
    margin-bottom: 2rem;
}

.home__img {
    width: 320px;
    justify-self: center;
}

@media screen and (min-width: 375px) {
    .home__title {
    width: 220px;
    text-align: center;
    }

    .home__title img {
        bottom: 2.5rem;
    }

}

@media screen and (min-width: 576px) {
    .home__container {
        grid-template-columns: 400px;
        justify-content: center;
    }
}

@media screen and (min-width: 1024px) { 
    .home__container {
        grid-template-columns: max-content 440px;
        align-items: center;
        width: 100%;
        padding-top: 3rem;
    }

    .home__img {
        order: -1;
        width: 450px;
    }

    .home__description {
        margin-bottom: 3rem;
    }
}

@media screen and (min-width: 1248px) { 
    .home__container {
        column-gap: 4.5rem;
    }

    .home__img {
        width: 550px;
    }
}
</style>