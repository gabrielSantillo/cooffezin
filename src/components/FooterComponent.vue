<template>
    <div class="footer">
        <div class="footer__bg">
            <img src="@/img/coffee-beans-bg.png" alt="footer image" class="footer__bg-img">

            <div class="footer__container container grid">
                <div class="footer__data grid">
                    <div>
                        <a href="#" class="footer__logo">
                            <img src="@/img/logo.png" alt="footer logo image">
                            Coffeezin
                        </a>

                        <h3 class="footer__title">
                            Sign Up for newsletter
                        </h3>
                    </div>

                    <form action="" class="footer__form grid">
                        <input type="email" placeholder="Enter e-mail address" class="footer__input">

                        <button class="button footer__button" type="submit" @click="subscribe">
                            Subscribe
                        </button>

                        <p class="footer__description">
                            We care about your data. Read our
                            <a href="#" class="footer__privacy">Privacy Policy</a>
                        </p>
                    </form>
                </div>

                <div class="footer__content grid">
                    <div class="footer__social">
                        <a href="https://www.linkedin.com/in/gabriel-santillo/" target="_blank" class="footer__social-link">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://github.com/gabrielSantillo" target="_blank" class="footer__social-link">
                            <i class="ri-github-fill"></i>
                        </a>
                        <a href="https://gabrielsantillo.com/" target="_blank" class="footer__social-link">
                            <i class="ri-building-4-fill"></i>
                        </a>
                    </div>

                    <span class="footer__copy">
                        &#169; Copyright Gabriel Santillo. All rights reserved
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        methods: {
            subscribe() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.footer {
    background-color: $--first-color;
    padding-top: 2rem;
    position: relative;
}

.footer__bg {
    background-color: $--first-color-alt;
    border-radius: $--border-section;
}

.footer__container {
    padding-block: 4rem 7rem;
    row-gap: 4.5rem;
    position: relative;
}

.footer__data {
    text-align: center;
    row-gap: 4.5rem;
}

.footer__logo,
.footer__title,
.footer__input,
.footer__description,
.footer__social-link {
    color: $--white-color;
}

.footer__logo {
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    font-size: $--h3-font-size;
    font-family: $--second-font;
    margin-bottom: 1rem;
}

.footer__logo img {
    width: 28px;
}

.footer__title {
    font-size: $--big-font-size;
    font-family: $--second-font;
    font-weight: $--font-regular;
    line-height: 120%;
}

.footer__form {
    row-gap: 1rem;
}

.footer__input, .footer__button {
    border: none;
    outline: none;
    font-family: $--body-font;
    font-size: $--normal-font-size;
    font-weight: $--font-medium;
}

.footer__input {
    width: 100%;
    background: transparent;
    border: 2px solid $--text-color-light;
    padding: 1.15rem 1.5rem;
    border-radius: 4rem;
}

.footer__input::placeholder {
    color: $--text-color-light;
}

.footer__button {
    padding-block: 1.25rem;
    justify-content: center;
    cursor: pointer;
}

.footer__description {
    font-size: $--small-font-size;
}

.footer__privacy {
    color: $--second-color;
}

.footer__privacy:hover {
    text-decoration: underline;
}

.footer__content {
    row-gap: 2rem;
}

.footer__social {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
}

.footer__social-link {
    font-size: 1.25rem;
    transition: color .3s;
}

.footer__social-link:hover {
    color: $--second-color;
}

.footer__copy {
    color: $--text-color-light;
    font-size: $--smaller-font-size;
    text-align: center;
}

.footer__bg-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90%;
    object-fit: cover;
    object-position: -172px;
    opacity: .5;
}

@media screen and (min-width: 576px) {
    .footer__container {
        grid-template-columns: 400px;
        justify-content: center;
    }
}

@media screen and (min-width: 1024px) { 
    .footer__bg { 
        border-radius: 104px 104px 0 0;
    }

    .footer__container {
        grid-template-columns: initial;
        justify-content: initial;
        row-gap: 6rem;
        padding-block: 6rem 3rem;
    }

    .footer__data {
        grid-template-columns: repeat(2, max-content);
        justify-content: space-between;
        text-align: initial;
    }

    .footer__logo {
        margin-bottom: 1.5rem;
    }
    
    .footer__logo img {
        width: 32px;
    }

    .footer__title {
        font-size: $--h1-font-size;
    }

    .footer__form {
        width: 360px;
        row-gap: 1.5rem;
    }

    .footer__content {
        row-gap: 4rem;
    }

    .footer__social {
        column-gap: 3rem;
    }

    .footer__social-link {
        font-size: 1.5rem;
    }

    .footer__bg-img {
        object-position: top;
    }
}

</style>