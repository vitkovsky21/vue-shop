<template>
  <header class="header">

    <routerLink :to="{ name: 'HomePage' }" class="logo"> <i class="fas fa-store"></i> shopie </routerLink>

    <div class="search-form" :class="{ active: searchFormIsActive }">
        <input type="search" id="search-box" placeholder="search here..." v-model='searchBar' @keypress.enter="searchProduct()">
        <label for="search-box" class="fas fa-search" @click="searchProduct()"></label>
    </div>

    <div class="icons">
        <div id="menu-btn" class="fas fa-bars" @click="activateSideBar()"></div>
        <div id="search-btn" class="fas fa-search" @click="toggleSearchForm()"></div>
        <a href="login.html" class="fas fa-user"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="cart.html" class="fas fa-shopping-cart"></a>
    </div>

  </header>

  <div class="side-bar" :class="{ active: sideBarIsActive }">

    <div id="close-side-bar" class="fas fa-times" @click="deactivateSideBar()"></div>

    <div class="user">
        <img src="../assets/user-img.png" alt="">
        <h3>vladislav doe</h3>
        <a href="#">log out</a>
    </div>

    <nav class="navbar">
        <routerLink :to="{ name: 'HomePage' }" @click="deactivateSideBar()"> <i class="fas fa-angle-right"></i> home </routerLink>
        <routerLink :to="{ name: 'AboutPage' }" @click="deactivateSideBar()"> <i class="fas fa-angle-right"></i> about </routerLink>
        <routerLink :to="{ name: 'ProductsPage' }" @click="deactivateSideBar()"> <i class="fas fa-angle-right"></i> products </routerLink>
        <routerLink :to="{ name: 'ContactPage' }" @click="deactivateSideBar()"> <i class="fas fa-angle-right"></i> contact </routerLink>
        <a href="login.html"> <i class="fas fa-angle-right"></i> login </a>
        <a href="register.html"> <i class="fas fa-angle-right"></i> register </a>
        <a href="cart.html"> <i class="fas fa-angle-right"></i> cart </a>
    </nav>

</div>


</template>

<script>

export default {
  name: 'HeaderComp',
  data() {
    return {
      sideBarIsActive: false,
      searchFormIsActive: false,
      searchBar: '',
    }
  },
  methods: {
    activateSideBar() {
      this.sideBarIsActive = true;
    },
    deactivateSideBar() {
      this.sideBarIsActive = false;
    },
    toggleSearchForm() {
      this.searchFormIsActive = !this.searchFormIsActive;
    },
    deactivateSearchForm() {
      this.searchFormIsActive = false;
    },
    searchProduct() {
      this.$store.state.letters += this.searchBar;
      this.searchBar = ''      
      this.$router.replace({ name: 'ProductsPage', query: { name: this.$store.state.letters }})
    }
  }
}
</script>

<style>
#search-btn {
  display: none;
}

.header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #0984e3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1rem 9%;
}

.header .logo {
  font-size: 2.5rem;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
}

.header .logo i {
  color: gold;
}

.header .search-form {
  border-radius: 5rem;
  height: 5rem;
  width: 50rem;
  padding: 0 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: #fff;
}

.header .search-form input {
  width: 100%;
  padding-right: 1rem;
  font-size: 1.7rem;
  text-transform: none;
  color: #666;
}

.header .search-form label {
  font-size: 2rem;
  color: #666;
  cursor: pointer;
}

.header .search-form label:hover {
  color: #0984e3;
}

.header .icons a,
.header .icons div {
  font-size: 2.5rem;
  margin-left: 2rem;
  color: #fff;
  cursor: pointer;
}

.header .icons a:hover,
.header .icons div:hover {
  color: gold;
}

.side-bar {
  position: fixed;
  top: 0;
  left: -110%;
  height: 100%;
  width: 30rem;
  background: #fff;
  z-index: 10000;
}

.side-bar.active {
  left: 0;
  -webkit-box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.7);
          box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.7);
}

.side-bar #close-side-bar {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 4rem;
  cursor: pointer;
  color: #666;
}

.side-bar #close-side-bar:hover {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  color: #333;
}

.side-bar .user {
  padding: 2rem;
  background: #eee;
  text-align: center;
}

.side-bar .user img {
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  border: 1rem solid #fff;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  margin-bottom: .5rem;
}

.side-bar .user h3 {
  padding: .5rem 0;
  font-size: 1.7rem;
  color: #666;
}

.side-bar .user a {
  font-size: 1.5rem;
  color: #0984e3;
}

.side-bar .user a:hover {
  color: #333;
}

.side-bar .navbar {
  padding-top: 1rem;
}

.side-bar .navbar a {
  display: block;
  padding: 1rem 2rem;
  font-size: 1.7rem;
  color: #666;
}

.side-bar .navbar a:hover {
  color: #0984e3;
}

.side-bar .navbar a:hover i {
  padding-right: 2rem;
}

.side-bar .navbar a i {
  padding-right: .5rem;
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
}
</style>
