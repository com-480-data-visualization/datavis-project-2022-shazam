<script lang="ts">
import Vue from 'vue'

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