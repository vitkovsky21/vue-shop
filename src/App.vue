<template>
  <HeaderComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import FooterComp from "@/components/FooterComp.vue"

export default {
  components: {
    HeaderComp,
    FooterComp
  },
}
</script>


<style>
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

html {
  overflow-x: hidden;
  font-size: 62.5%;
}

html::-webkit-scrollbar {
  width: 1rem;
}

html::-webkit-scrollbar-track {
  background: #eee;
}

html::-webkit-scrollbar-thumb {
  background: #0984e3;
  border-radius: 5rem;
}

body {
  background: #eee;
}


section {
  padding: 3rem 9%;
}

.heading {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3.5rem;
  color: #333;
}

.heading span {
  color: #0984e3;
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  border-radius: .5rem;
  padding: 1rem 3rem;
  font-size: 1.7rem;
  color: #fff;
  cursor: pointer;
  background: #0984e3;
}

.btn:hover {
  background: #333;
}

@-webkit-keyframes fadeIn {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    opacity: 0;
  }
}


@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
  .header {
    padding: 2rem;
  }
  section {
    padding: 3rem 2rem;
  }
}

@media (max-width: 991px) {
  .quick-links {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column;
            flex-flow: column;
    text-align: center;
  }
  .quick-links .links {
    padding: 1rem 0;
  }
  .quick-links .links a {
    display: block;
    font-size: 2rem;
    padding: 1rem 0;
  }
  .quick-links .share a {
    margin: 0 1rem;
  }
  .credit {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column;
            flex-flow: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  #search-btn {
    display: inline-block;
  }
  .header .search-form {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 0;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    height: 6rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  .header .search-form.active {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .home .slide {
    text-align: center;
  }
  .newsletter {
    text-align: center;
  }
  .newsletter .content h3 {
    font-size: 4rem;
  }
  .newsletter .content p {
    font-size: 1.5rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
  .header {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .header .logo {
    display: none;
  }
  .header .icons a,
  .header .icons div {
    margin: 0 1rem;
  }
  .home .slide .image img {
    height: auto;
    width: 100%;
  }
  .arrivals .box-container .box {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column;
            flex-flow: column;
    gap: 2rem;
    text-align: center;
  }
  .contact form .inputBox input {
    width: 100%;
  }
  .shopping-cart .cart-total {
    text-align: center;
  }
  .shopping-cart .cart-total .btn {
    width: 100%;
  }
}

</style>
