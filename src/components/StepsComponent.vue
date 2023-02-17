<template>
    <div class="steps">
        <div class="steps__bg section">
            <h2 class="section__title section__title-big">
                Steps of manufacturing our products
            </h2>

            <div class="steps__container container grid">
                <img src="@/img/coffee-beans-bg.png" alt="steps image" class="steps__bg-img">

                <div class="steps__content">
                    <img src="@/img/steps-curve-line.svg" alt="steps image" class="steps__border">

                    <div class="steps__card">
                        <div class="steps__circle">
                            <div class="steps__subcircle">
                                01
                            </div>

                            <img src="@/img/steps-green-coffee.png" alt="steps image" class="steps__img">
                        </div>

                        <p class="steps__description">
                            Harvest occurs annualy when the coffee beans reach maturity and are collected for processing.
                        </p>
                    </div>

                    <div class="steps__card steps__card-move">
                        <div class="steps__circle">
                            <div class="steps__subcircle">
                                02
                            </div>

                            <img src="@/img/steps-coffee-beans.png" alt="steps image" class="steps__img">
                        </div>

                        <p class="steps__description">
                            The beans are dried using a wet or dry technique, depending on the taste we want to obtain.
                        </p>
                    </div>

                    <div class="steps__card">
                        <div class="steps__circle">
                            <div class="steps__subcircle">
                                03
                            </div>

                            <img src="@/img/steps-ground-coffee.png" alt="steps image" class="steps__img">
                        </div>

                        <p class="steps__description">
                            The coffee is roasted and acquires its flavor by processing the grain in ovens.
                        </p>
                    </div>
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
@import "@/scss/variables.scss";

.steps {
    background-color: $--white-color;
    position: relative;
}

.steps__bg {
    background-color: $--first-color;
    border-radius: $--border-section;
}

.steps__container {
    padding-top: 2rem;
}

.steps .section__title, .steps__description {
    color: $--white-color;
}

.steps__content {
    display: grid;
    row-gap: 4rem;
    position: relative;
}

.steps__card {
    width: 250px;
    z-index: 1;
}

.steps__circle {
    width: 150px;
    height: 150px;
    background-color: $--first-color-light;
    border-radius: 50%;
    box-shadow: 0 8px 32px hsla(12, 32%, 8%, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;
}

.steps__img {
    width: 120px;
    filter: drop-shadow(0 4px 16px hsl(12, 32%, 16%));
    transition: transform .3s;
}

.steps__img:hover {
    transform: translateY(-.35rem);
}

.steps__subcircle {
    width: 50px;
    height: 50px;
    background-color: $--second-color;
    position: absolute;
    top: -.75rem;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: $--h1-font-size;
    font-weight: $--font-semi-bold;
    color: $--first-color;
    outline: 10px solid $--first-color;
}

.steps__card-move, .steps__card-move .steps__circle {
    margin-left: auto;
}

.steps__card-move .steps__description {
    text-align: right;
}

.steps__border {
    position: absolute;
    left: 3rem;
    right: 0;
    top: 7.5rem;
    margin: 0 auto;
}

.steps__bg-img {
    position: absolute;
    top: 14rem;
    left: 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
    object-position: -132px;
    opacity: .25;
}

@media screen and (min-width: 375px) {
    .steps__content {
        row-gap: 3rem;
        grid-template-columns: 325px;
        justify-content: center;
    }

    .steps__card {
        width: initial;
    }

    .steps__border {
        left: 0;
        top: 5.5rem;
    }
}

@media screen and (min-width: 1024px) { 
    .steps__bg {
        border-radius: 104px 104px 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .steps__card {
        width: 272px;
    }

    .steps__circle {
        width: 260px;
        height: 260px;
    }

    .steps__img {
        width: 210px;
    }

    .steps__subcircle {
        width: 85px;
        height: 85px;
        top: -1.25rem;
        outline: 15px solid $--first-color;
    }

    .steps__border {
        display: none;
    }

    .steps__img-bg {
        top: 0;
        height: 100%;
        object-position: initial;
    }

    .section__title-big {
        font-size: 5rem;
    }
}
</style>