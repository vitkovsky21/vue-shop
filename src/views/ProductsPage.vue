<template>
<section class="category">

    <h1 class="heading"> shop by <span>category</span> </h1>

    <div class="box-container">

        <a href="#" @click="sortByCategories(categories[1])" class="box">
            <img src="@/assets/cat_img1.png" alt="">
            <h3>televisions</h3>
        </a>

        <a href="#" @click="sortByCategories(categories[2])" class="box">
            <img src="@/assets/cat_img2.png" alt="">
            <h3>smartphones</h3>
        </a>

        <a href="#" @click="sortByCategories(categories[3])" class="box">
            <img src="@/assets/cat_img3.png" alt="">
            <h3>headphones</h3>
        </a>

        <a href="#" @click="sortByCategories(categories[4])" class="box">
            <img src="@/assets/cat_img4.png" alt="">
            <h3>smartwatches</h3>
        </a>

        <a href="#" @click="sortByCategories(categories[5])" class="box">
            <img src="@/assets/cat_img6.png" alt="">
            <h3>camera</h3>
        </a>

        <a href="#" @click="sortByCategories(categories[6])" class="box">
            <img src="@/assets/cat_img7.png" alt="">
            <h3>speakers</h3>
        </a>

    </div>

</section>

<section class="products">

    <h1 class="heading" > featured <span>products</span> </h1>

    <div class="box-container">

        <div class="box"  v-for="product in featuredProducts" :key="product.id">
            <div class="image">
                <img :src="product.image" class="main-img" alt="">
                <img :src="product.hoverImage" class="hover-img" alt="">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-search-plus"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>{{ product.name }}</h3>
                <div class="price">{{ product.price }} <span>$399.99</span></div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

    </div>

</section>

<section class="product-banner">

    <h1 class="heading"> <span>deal</span> of the day </h1>

    <div class="box-container">

        <div class="box">
            <img src="@/assets/product-banner-1.jpg" alt="">
            <div class="content">
                <span>special offer</span>
                <h3>upto 50% off</h3>
                <a href="#" class="btn">shop now</a>
            </div>
        </div>

        <div class="box">
            <img src="@/assets/product-banner-2.jpg" alt="">
            <div class="content">
                <span>special offer</span>
                <h3>upto 50% off</h3>
                <a href="#" class="btn">shop now</a>
            </div>
        </div>

    </div>
    
</section>
</template>

<script>
import SearchService from "../services/SearchService.js"

export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "smartphone",
                    image: require('@/assets/product-1.jpg'),
                    hoverImage: require('@/assets/product-1-hover.jpg'),
                    price: "$249.99",
                    category: "smartphones"
                },
                {
                    id: 2,
                    name: "camera",
                    image: require('@/assets/product-2.jpg'),
                    hoverImage: require('@/assets/product-2-hover.jpg'),
                    price: "$249.99",
                    category: "camera"
                },
                {
                    id: 3,
                    name: "television",
                    image: require('@/assets/product-3.jpg'),
                    hoverImage: require('@/assets/product-3-hover.jpg'),
                    price: "$249.99",
                    category: "television"
                },
                {
                    id: 4,
                    name: "speakers",
                    image: require('@/assets/product-4.jpg'),
                    hoverImage: require('@/assets/product-4-hover.jpg'),
                    price: "$249.99",
                    category: "speakers"
                },
                {
                    id: 5,
                    name: "speakers",
                    image: require('@/assets/product-5.jpg'),
                    hoverImage: require('@/assets/product-5-hover.jpg'),
                    price: "$249.99",
                    category: "speakers"
                },
                {
                    id: 6,
                    name: "smartwatches",
                    image: require('@/assets/product-6.jpg'),
                    hoverImage: require('@/assets/product-6-hover.jpg'),
                    price: "$249.99",
                    category: "smartwatches"
                },
                {
                    id: 7,
                    name: "headphones",
                    image: require('@/assets/product-7.jpg'),
                    hoverImage: require('@/assets/product-7-hover.jpg'),
                    price: "$249.99",
                    category: "headphones"
                },
                {
                    id: 8,
                    name: "smartphone",
                    image: require('@/assets/product-8.jpg'),
                    hoverImage: require('@/assets/product-8-hover.jpg'),
                    price: "$249.99",
                    category: "smartphones"
                },
                {
                    id: 9,
                    name: "camera",
                    image: require('@/assets/product-9.jpg'),
                    hoverImage: require('@/assets/product-9-hover.jpg'),
                    price: "$249.99",
                    category: "camera"
                },
            ],
            categories: [
              { name: "all", value: "0" },
              { name: "television", value: "1" },
              { name: "smartphones", value: "2" },
              { name: "headphones", value: "3" },
              { name: "smartwatches", value: "4" },
              { name: "camera", value: "6" },
              { name: "speakers", value: "7" },
            ],
            selected: "all",
            sortedProducts: [],
        }
  },
    methods: {
      sortByCategories(category) {
        this.$router.push({ name: 'ProductsPage' })

        SearchService.search = '';
        this.sortedProducts = [];

        let vm = this;
        this.products.map(function(item) {
          if (item.category == category.name) {
            vm.sortedProducts.push(item);
          }
        })
      }
    },
    computed: {
      featuredProducts() {
        console.log('1')
        let vm = this;
        if (SearchService.search.length !== 0) {
          vm.sortedProducts.push(this.categories[0])
          return this.products.filter(product => product.name.includes(SearchService.search))
        }
        else if (this.sortedProducts.length) {
          return vm.sortedProducts;
        }
        else {
          vm.sortedProducts.push(this.categories[0])
          return vm.products;
        }
      }
    }
}
</script>

<style scoped>
.category .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(15rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
}

.category .box-container .box {
  text-align: center;
  border-radius: .5rem;
  border: 0.2rem solid #333;
  padding: 2rem;
  background: #fff;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.category .box-container .box:hover {
  background: #333;
}

.category .box-container .box:hover h3 {
  color: #fff;
}

.category .box-container .box img {
  height: 8rem;
  margin-bottom: .5rem;
}

.category .box-container .box h3 {
  font-size: 1.7rem;
  color: #333;
}

.products .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
}

.products .box-container .box {
  border: 0.2rem solid #333;
  text-align: center;
  background: #fff;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  overflow: hidden;
}

.products .box-container .box:hover .image .hover-img {
  display: inline-block;
}

.products .box-container .box:hover .image .main-img {
  display: none;
}

.products .box-container .box:hover .image .icons {
  left: 1rem;
}

.products .box-container .box .image {
  position: relative;
}

.products .box-container .box .image img {
  height: 30rem;
  -webkit-animation: fadeIn .2s linear;
          animation: fadeIn .2s linear;
}

.products .box-container .box .image .hover-img {
  display: none;
}

.products .box-container .box .image .icons {
  position: absolute;
  top: 0;
  left: -7rem;
}

.products .box-container .box .image .icons a {
  display: block;
  margin-top: 1rem;
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  font-size: 1.7rem;
  border-radius: 50%;
  color: #fff;
  background: #333;
}

.products .box-container .box .image .icons a:hover {
  background: #0984e3;
}

.products .box-container .box .content {
  padding: 2rem;
}

.products .box-container .box .content h3 {
  font-size: 2rem;
  color: #333;
}

.products .box-container .box .content .price {
  font-size: 2.2rem;
  color: #0984e3;
  padding-bottom: .7rem;
  padding-top: .5rem;
}

.products .box-container .box .content .price span {
  color: #666;
  font-size: 1.5rem;
  text-decoration: line-through;
}

.products .box-container .box .content .stars i {
  font-size: 1.7rem;
  color: gold;
}

.product-banner .box-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 2rem;
}

.product-banner .box-container .box {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
  position: relative;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  border: 0.2rem solid #333;
  overflow: hidden;
  height: 30rem;
}

.product-banner .box-container .box:hover img {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.product-banner .box-container .box img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.product-banner .box-container .box .content {
  position: absolute;
  top: 50%;
  left: 5%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.product-banner .box-container .box .content span {
  font-size: 1.7rem;
  color: #0984e3;
}

.product-banner .box-container .box .content h3 {
  padding-top: .5rem;
  font-size: 2rem;
  color: #333;
}
</style>
