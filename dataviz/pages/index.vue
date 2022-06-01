<script lang="ts">
import Vue from 'vue'

import Navbar from '~/components/navbar.vue'
import Introduction from '~/components/introduction.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    Navbar,
    Introduction
}
})
</script>

<template>

<div class="bg-gray-900 h-screen">

  <Navbar/>
  
  <Introduction/>

</div>

</template>