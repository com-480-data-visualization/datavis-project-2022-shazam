<script lang="ts">
import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)
import More from 'highcharts/highcharts-more'
import Highcharts from 'highcharts'
More(Highcharts)

import navbarVue from '~/components/navbar.vue'
import introductionVue from '~/components/introduction.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    Navbar: navbarVue,
    Introduction: introductionVue,
  }
})
</script>

<template>

<div class="bg-gray-900 h-screen">

  <navbar/> 
  
  <Introduction/>

</div>

</template>