import Vue from 'vue'
import Rating from './components/Rating.vue'

new Vue({
  el: '#app',
  template: '<Rating :grade="3" :maxStars="6" />',
  components: { Rating }
})
