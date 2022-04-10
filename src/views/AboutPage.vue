<template>
<section class="about">

    <div class="image">
        <img src="@/assets/about-img.png" alt="">
    </div>

    <div class="content">
        <h3>our story</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam modi ea fuga quibusdam fugiat porro doloremque, quas dignissimos culpa unde. Recusandae maxime aliquam beatae reiciendis, facilis voluptatum eligendi nesciunt ipsa?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, distinctio et? Odio voluptatum eius reprehenderit saepe quisquam excepturi molestiae architecto.</p>
        <a href="#" class="btn">read more</a>
    </div>

</section>

<section class="faq">

    <h1 class="heading"> questions & <span>answers</span> </h1>

    <div class="accordion-container" v-for="accordion in accordions" :key="accordion.id">

        <div class="accordion" @click="activate(accordion.id)" :class="{ active: activeEl == accordion.id }">
            <div class="accordion-heading">
                <h3>{{ accordion.title }}</h3>
                <i class="fas fa-angle-down"></i>
            </div>
            <p class="accordion-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores.
            </p>
        </div>

    </div>

</section>

<section class="review">

    <h1 class="heading"> clients <span>review</span> </h1>

    <div class="swiper review-slider">

        <swiper 
          class="swiper-wrapper"
          :breakpoints="swiperOptions.breakpoints"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :navigation="{ slideNext: '.swiper-button-next', sliderPrev: '.swiper-button-prev' }">

            <swiper-slide class="swiper-slide slide" v-for="review in reviews" :key="review.id">
                <img :src="review.image" alt="">
                <h3>john deo</h3>
                <span>designer</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt explicabo laborum eos delectus, in pariatur iste! Ducimus laudantium nostrum odio.</p>
            </swiper-slide>
            
            <div class="swiper-pagination"></div>

        </swiper>

    </div>

</section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    name: 'AboutPage',
    data() {
        return {
            accordions: [
                {
                    "id": "1",
                    title: "how to make websites?"
                },
                {
                    "id": "2",
                    title: "how to place order online?"
                },
                {
                    "id": "3",
                    title: "how to pay online?"
                },
                {
                    "id": "4",
                    title: "is online payment safe?"
                },
                {
                    "id": "5",
                    title: "how to contact service center?"
                }
            ],
            reviews: [
                {
                  id: 1,
                  image: require('@/assets/pic-1.png')
                },
                {
                  id: 2,
                  image: require('@/assets/pic-2.png')
                },
                {
                  id: 3,
                  image: require('@/assets/pic-3.png')
                },
                {
                  id: 4,
                  image: require('@/assets/pic-4.png')
                },
                {
                  id: 5,
                  image: require('@/assets/pic-5.png')
                },
                {
                  id: 6,
                  image: require('@/assets/pic-6.png')
                },
            ],
            activeEl: 0,
            swiperOptions: {
                breakpoints: {
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10
                    }
                }
            }
        }
    },
    components: {
      Swiper,
      SwiperSlide
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
    methods: {
        activate(el) {
               this.activeEl = el;
        }   
    }
}
</script>

<style scoped>
.about {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.about .image {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
}

.about .image img {
  width: 100%;
}

.about .content {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
  padding: 3rem;
  background: #fff;
}

.about .content h3 {
  font-size: 3rem;
  text-transform: uppercase;
  color: #333;
}

.about .content p {
  font-size: 1.5rem;
  color: #666;
  padding: 1rem 0;
  line-height: 2;
}

.faq .accordion-container {
  max-width: 70rem;
  margin: 0 auto;
}

.faq .accordion-container .accordion {
  background: #fff;
  margin-bottom: 1.5rem;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.faq .accordion-container .accordion:last-child {
  margin-bottom: .5rem;
}

.faq .accordion-container .accordion.active .accordion-heading {
  background: #0984e3;
}

.faq .accordion-container .accordion.active .accordion-heading i {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.faq .accordion-container .accordion.active .accordion-content {
  display: block;
}

.faq .accordion-container .accordion .accordion-heading {
  padding: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 1rem;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: #333;
  cursor: pointer;
}

.faq .accordion-container .accordion .accordion-heading h3 {
  font-size: 2rem;
  color: #fff;
}

.faq .accordion-container .accordion .accordion-heading i {
  font-size: 2rem;
  color: #fff;
}

.faq .accordion-container .accordion-content {
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 2;
  color: #666;
  display: none;
  -webkit-animation: fadeIn .2s linear;
          animation: fadeIn .2s linear;
}

.review .slide {
  width: 35rem;
  padding: 3rem;
  text-align: center;
  border: 0.2rem solid #333;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  background: #fff;
  cursor: grab;
}

.review .slide img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-bottom: .5rem;
}

.review .slide h3 {
  font-size: 2rem;
  color: #333;
}

.review .slide span {
  color: #0984e3;
  font-size: 1.7rem;
}

.review .slide p {
  font-size: 1.5rem;
  line-height: 2;
  color: #666;
  padding-top: 1rem;
}
</style>
