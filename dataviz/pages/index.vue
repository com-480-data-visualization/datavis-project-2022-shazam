<script lang="ts">
import Vue from 'vue'

import Navbar from '~/components/navbar.vue'
import Introduction from '~/components/introduction.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    Navbar,
    Introduction
  },
  head: {
    script: [
      {
        src: "https://unpkg.com/flowbite@1.4.7/dist/flowbite.js",
      },
    ],
    link: [
        { 
            rel: 'stylesheet', 
            href: 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css' 
        }
    ]
  }
})
</script>

<template>

<div class="bg-gray-900 min-h-screen">

  <Navbar/>
  
  <Introduction/>

</div>

</template>