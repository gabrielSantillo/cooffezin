<template>
    <div class="testimonial">
        <div class="testimonial__bg section">
            <div class="testimonial__container container grid">
                <div class="testimonial__data">
                    <h2 class="section__title testimonial__title">
                        Coffee is the best drink in the morning, it keeps you focused.
                    </h2>

                    <span class="testimonial__name">
                        John Doe
                    </span>
                </div>

                <img src="@/img/testimonial-coffee.png" alt="testimonial image" class="testimonial__img">
            </div>

            <div class="testimonial__container container grid">
                <div class="testimonial__data">
                    <h2 class="section__title testimonial__title">
                        Eating rice cakes is like chewing on a foam coffee cup, only less filling.
                    </h2>

                    <span class="testimonial__name">
                        Dave Barry
                    </span>
                </div>

                <img src="@/img/testimonial-coffee-2.jpeg" alt="testimonial image" class="testimonial__img">
            </div>

            <div class="testimonial__container container grid">
                <div class="testimonial__data">
                    <h2 class="section__title testimonial__title">
                        I have measured out my life with coffee spoons.
                    </h2>

                    <span class="testimonial__name">
                        T.S Elliot
                    </span>
                </div>

                <img src="@/img/testimonial-coffee-3.jpeg" alt="testimonial image" class="testimonial__img">
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

.testimonial__container {
    row-gap: 3rem;
    padding-top: 6rem;
}

.testimonial__data {
    text-align: center;
}

.testimonial__title {
    font-size: 2rem;
}

.testimonial__name {
    font-weight: $--font-medium;
}

.testimonial__img {
    width: 320px;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
    justify-self: center;
}

@media screen and (min-width: 576px) {
    .testimonial__container {
        grid-template-columns: 400px;
        justify-content: center;
    }
}

</style>