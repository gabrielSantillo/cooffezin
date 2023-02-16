<template>
    <div class="footer">
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

                    <button class="button footer__button" type="submit">
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
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>