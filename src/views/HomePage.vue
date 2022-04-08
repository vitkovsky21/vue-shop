<template>
<section class="home">

    <div class="swiper home-slider">
        <div class="swiper-wrapper">

          <swiper
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :navigation="{ slideNext: '.swiper-button-next', slidePrev: '.swiper-button-prev' }"
          >

          <swiper-slide v-for="product in products" :key="product.id" class="swiper-slide slide">
              <div class="image">
                  <img :src="product.image" alt="">
              </div>
              <div class="content">
                  <span>upto 50% off</span>
                  <h3>{{ product.name }}</h3>
                  <a href="#" class="btn">shop now</a>
              </div>
          </swiper-slide>
          
          </swiper>

        </div>
    </div>

</section>

<section class="banner">

    <div class="box-container">
        <a href="#" class="box" v-for="banner in banners" :key="banner.id">
            <img :src="banner.image" alt="">
            <div class="content">
                <span>special offer</span>
                <h3>upto 50% off</h3>
            </div>
        </a>
    </div>

</section>

<section class="arrivals">

    <h1 class="heading"> new <span>arrivals</span> </h1>

    <div class="box-container">

        <div class="box" v-for="arrival in arrivals" :key="arrival.id">
            <div class="image">
                <img :src="arrival.mainImage" class="main-img" alt="">
                <img :src="arrival.hoverImage" class="hover-img" alt="">
            </div>
            <div class="content">
                <h3>{{ arrival.name }}</h3>
                <div class="price"> $249.99 <span>$399.99</span> </div>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'HomePage',
  data() {
    return {
      products: [
        {
          id: 1,
          image: require('@/assets/home-img-1.jpg'),
          name: "smartphones"
        },
        {
          id: 2,
          image: require('@/assets/home-img-2.jpg'),
          name: "smartwatch"
        },
        {
          id: 3,
          image: require('@/assets/home-img-3.jpg'),
          name: "headphones"
        },        
      ],
      banners: [
        {
          id: 1,
          image: require('@/assets/banner-1.jpg')
        },
        {
          id: 2,
          image: require('@/assets/banner-2.jpg')
        },
        {
          id: 3,
          image: require('@/assets/banner-3.jpg')
        }
      ],
      arrivals: [
        {
          id: 1,
          name: "HD Television",
          mainImage: require('@/assets/arrival-1.jpg'),
          hoverImage: require('@/assets/arrival-1-hover.jpg')
        },
        {
          id: 2,
          name: "laptop",
          mainImage: require('@/assets/arrival-2.jpg'),
          hoverImage: require('@/assets/arrival-2-hover.jpg')
        },
        {
          id: 3,
          name: "Smartphone",
          mainImage: require('@/assets/arrival-3.jpg'),
          hoverImage: require('@/assets/arrival-3-hover.jpg')
        },
        {
          id: 4,
          name: "Printer",
          mainImage: require('@/assets/arrival-4.jpg'),
          hoverImage: require('@/assets/arrival-4-hover.jpg')
        },
        {
          id: 5,
          name: "Headphones",
          mainImage: require('@/assets/arrival-5.jpg'),
          hoverImage: require('@/assets/arrival-5-hover.jpg')
        },
        {
          id: 6,
          name: "Speakers",
          mainImage: require('@/assets/arrival-6.jpg'),
          hoverImage: require('@/assets/arrival-6-hover.jpg')
        },
      ]
    }
  },
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange
    };
  },
}
</script>

<style scoped>
.home {
  background: #fff;
}

.home .slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 2rem;
  min-height: 40rem;
  padding: 2rem 0;
}

.home .slide .image {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
  text-align: center;
}

.home .slide .image img {
  height: 30rem;
}

.home .slide .content {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
}

.home .slide .content span {
  font-size: 2rem;
  color: #0984e3;
}

.home .slide .content h3 {
  padding-top: .5rem;
  color: #333;
  font-size: 3rem;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 3rem;
  color: #333;
}

.slide {
  cursor: grab;
}

.banner .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
}

.banner .box-container .box {
  position: relative;
  height: 25rem;
  border: 0.2rem solid #333;
  border-radius: .5rem;
  overflow: hidden;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.banner .box-container .box:hover img {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.banner .box-container .box img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.banner .box-container .box .content {
  position: absolute;
  top: 50%;
  left: 5%;
  -webkit-transform: translateY(-50%) rotate(45deg);
          transform: translateY(-50%) rotate(45deg);
}

.banner .box-container .box .content span {
  font-size: 1.7rem;
  color: #0984e3;
}

.banner .box-container .box .content h3 {
  font-size: 2rem;
  padding: .5rem 0;
  color: #333;
}

.arrivals .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(33rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  gap: 2rem;
}

.arrivals .box-container .box {
  border-radius: .5rem;
  border: 0.2rem solid #333;
  padding: 2rem;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 1rem;
  background: #fff;
}

.arrivals .box-container .box:hover .image .main-img {
  display: none;
}

.arrivals .box-container .box:hover .image .hover-img {
  display: inline-block;
}

.arrivals .box-container .box .image img {
  height: 15rem;
  -webkit-animation: fadeIn .2s linear;
          animation: fadeIn .2s linear;
}

.arrivals .box-container .box .image .hover-img {
  display: none;
}

.arrivals .box-container .box .content h3 {
  font-size: 2rem;
  color: #333;
}

.arrivals .box-container .box .content .price {
  padding-top: .5erm;
  font-size: 2rem;
  color: #0984e3;
  padding-bottom: .7rem;
}

.arrivals .box-container .box .content .price span {
  font-size: 1.5rem;
  color: #666;
  text-decoration: line-through;
}

.arrivals .box-container .box .content .stars i {
  font-size: 1.5rem;
  color: gold;
}
</style>
