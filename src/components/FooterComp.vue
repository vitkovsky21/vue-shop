<template>
<section class="quick-links">

    <a href="home.html" class="logo"> <i class="fas fa-store"></i> shopie </a>

    <div class="links">
        <a href="home.html"> home </a>
        <a href="about.html"> about </a>
        <a href="products.html"> products </a>
        <a href="contact.html"> contact </a>
        <a href="login.html"> login </a>
        <a href="register.html"> register </a>
        <a href="cart.html"> cart </a>
    </div>

    <div class="share">
        <a href="github.com" class="fab fa-github"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-linkedin"></a>
    </div>

</section>

<section class="credit">

    <p> all rights reserved! </p>

    <img src="images/card_img.png" alt="">

</section>
</template>

<script>
</script>

<style scoped>
.quick-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 2rem;
  background: #333;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.quick-links .logo {
  font-size: 2.5rem;
  color: #fff;
  font-weight: bolder;
}

.quick-links .logo i {
  color: gold;
}

.quick-links .links a {
  margin: 0 1rem;
  font-size: 1.7rem;
  color: #fff;
}

.quick-links .links a:hover {
  color: gold;
}

.quick-links .share a {
  font-size: 2.5rem;
  color: #fff;
  margin-left: 2rem;
}

.quick-links .share a:hover {
  color: gold;
}

.credit {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 2rem;
  background: #fff;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.credit p {
  font-size: 2rem;
  color: #666;
}

.credit p span {
  color: #0984e3;
}

.credit img {
  height: 4rem;
  -webkit-filter: drop-shadow(0 0 0.1rem #333);
          filter: drop-shadow(0 0 0.1rem #333);
}
</style>
