<template>
<section class="contact">

    <form>
        <h3>get in touch</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident nihil non unde, quia magnam quibusdam ad obcaecati nam animi?</p>
        <div class="inputBox">

            <BaseInput
              class="baseInput"
              v-model="name"
              label="Name"
              type="text"
              aria-required="true"
            />

            <BaseInput
              class="baseInput"
              v-model="email"
              label="Email"
              type="email"
              aria-required="true"
            />

        </div>
        <div class="inputBox">

            <BaseInput
              class="baseInput"
              v-model="number"
              label="Number"
              type="number"
              aria-required="true"
            />

            <BaseInput
              class="baseInput"
              v-model="subject"
              label="Subject"
              type="text"
              aria-required="true"
            />

        </div>

        <textarea
           name="" 
           placeholder="your message" 
           id="" 
           cols="30" 
           rows="10">
        </textarea>

        <input 
          type="submit" 
          value="send message" 
          class="btn"
          :disabled="!isDisabled"
          @click="sendForm()">
    </form>

    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1638365961619!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

</section>
</template>

<script>
import BaseInput from "../components/BaseUnput.vue"

export default {
    components: {
        BaseInput
    },
    data() {
        return {
            name: '',
            email: '',
            number: '',
            subject: ''
        }
    },
    methods: {
        sendForm() {
                alert('Form successfully submitted.')
        }
    },
    computed: {
        isDisabled() {
            if (this.name != '' &&
                this.email != '' &&
                this.number != '' &&
                this.subject != '') {
                    return true;
                } else {
                    return false;
                }
        }
    }
}
</script>

<style scoped>
.contact {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 2rem;
}

.contact form {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
}

.contact form h3 {
  font-size: 3rem;
  text-transform: uppercase;
  color: #333;
  padding-bottom: 1rem;
}

.contact form p {
  font-size: 1.5rem;
  color: #666;
  padding: 1rem 0;
  line-height: 2;
}

.contact form .inputBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.contact form .inputBox .baseInput,
.contact form .inputBox input {
  width: 49%;
}

.contact form .inputBox .baseInput, 
.contact form .inputBox input,
.contact form textarea {
  padding: 1.2rem 1.4rem;
  border-radius: .5rem;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border: 0.2rem solid #333;
  background: #fff;
  text-transform: none;
  color: #666;
  font-size: 1.5rem;
  margin: .7rem 0;
}

.contact form textarea {
  height: 15rem;
  resize: none;
  width: 100%;
}

.contact .map {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
  width: 100%;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
</style>
