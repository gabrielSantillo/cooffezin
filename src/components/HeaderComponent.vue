<template>
  <div class="header">
    <div class="header__border"></div>

    <nav class="nav container">
      <a href="#" class="nav__logo">
        <img src="@/img/logo.png" alt="" />
        Cooffezin
      </a>

      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link" ref="home"
              ><i class="ri-home-5-fill"></i> <span>Home</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link" ref="about"
              ><i class="ri-award-fill"></i> <span>About</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link" ref="steps"
              ><i class="ri-compass-3-fill"></i> <span>Steps</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link" aria-readonly="testimonial"
              ><i class="ri-message-3-fill"></i> <span>Testimonial</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $--first-color;
    z-index: $--z-fixed;
    transition: background .4s, box-shadow .4s;
}

.header__border {
    width: 100%;
    height: 2px;
    background-image: linear-gradient(90deg,
                      $--text-color-light 50%,
                      transparent 50%);
    background-size: 24px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: opacity .3s;
}

.nav {
    height: $--header-height;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav__logo {
    color: $--white-color;
    display: flex;
    align-items: center;
    column-gap: .5rem;
    font-size: $--h3-font-size;
    font-family: $--second-font;
}

.nav__logo img {
    width: 28px;
}

/* nav for mobile devices */
@media screen and (max-width: 1023px) {
    .nav__menu {
        position: fixed;
        bottom: 0;
        background: linear-gradient(180deg,
                    $--first-color 0%,
                    $--first-color-alt 100%);
        border-radius: 56px 56px 0 0;
        box-shadow: 0 -2px 12px hsla(12, 32%, 12%, .3);
        width: 100%;
        padding: 1.25rem 4rem;
    }
}

.nav__list {
    display: flex;
    justify-content: space-between;
}

.nav__link {
    color: $--white-color;
    font-family: $--second-font;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: .25rem;
    transition: color .3s;
}

.nav__link i {
    background: linear-gradient(180deg,
                hsl(39, 62%, 75%) 0%,
                hsl(39, 62%, 45%) 100%);
    color: transparent;
    -webkit-background-clip: text;
    font-size: 1.5rem;
}

.nav__link:hover {
    color: $--second-color;
}



</style>
