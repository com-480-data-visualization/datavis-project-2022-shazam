<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "ArtistsPage",
    components: { 
      
    }
})
</script>

<template>

<div class="bg-gray-900 h-screen w-screen">

  <navbar/> 
  
  <div class="grid place-items-center mt-6">
    <div class="p-6 max-w-lg rounded-lg border shadow-md bg-gray-800 border-gray-700">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">Indexed Artists</h5>
      </a>
      <p class="mb-3 font-normal font-bold text-gray-400 text-center">Search feature</p>
    </div>
  </div>
  
</div>

</template>