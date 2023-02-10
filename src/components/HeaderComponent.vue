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
            <a href="#" class="mav__link" ref="home"
              ><i class="ri-home-5-fill"></i> <span>Home</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="mav__link" ref="about"
              ><i class="ri-award-fill"></i> <span>About</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="mav__link" ref="steps"
              ><i class="ri-compass-3-fill"></i> <span>Steps</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="mav__link" aria-readonly="testimonial"
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

</style>
