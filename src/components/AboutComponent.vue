<template>
    <div class="about">
        <div class="about__bg section">
            <div class="about__container container grid">
                <div class="about__data">
                    <h2 class="section__title">
                        Our History
                    </h2>

                    <p class="about__description">
                        We make and grow the best coffee in Canada, accompanying families since 1930, with professional workes who harvest, collect and select the coffee with quality work, thus providing exquisite coffee to enjoy together as a family.
                    </p>
                </div>

                <img src="@/img/about-coffee.png" alt="about image" class="about__img">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@import "@/scss/variables.scss";

.about__container {
    row-gap: 3rem;
}

.about__data {
    text-align: center;
}

.about__img {
    width: 320px;
    border-radius: 1rem;
    justify-self: center;
}

@media screen and (min-width: 576px) {
    .about__container {
        grid-template-columns: 400px;
        justify-content: center;
    }
}

@media screen and (min-width: 1024px) {
    .about__container {
        grid-template-columns: max-content 465px;
        align-items: center;
    }

    .about__img {
        order: -1;
        width: 450px;
    }

    .about__data, .about__data .section__title {
    text-align: initial;
    }
}

@media screen and (min-width: 1248px) { 
    .about__container {
        column-gap: 6.5rem;
    }

    .about__img {
        width: 550px;
    }
}

</style>