import { createStore } from 'vuex'

export default createStore({
    state: {
        letters: '',
        productLetters: ''
    },
    actions: {
        updateLetters() {
            this.letters = this.productLetters;
            this.letters = '';
            console.log(this.productLetters)
        },
    }
})