<script lang="ts">
import Vue from 'vue'
import ArtistComponent from '~/components/artistComponent.vue'

export default Vue.extend({
    name: "ArtistsPage",
    components: { 
      ArtistComponent
    }
})
</script>

<template>

<div class="bg-gray-900 h-screen">

  <navbar/> 
  
  <ArtistComponent/>
  
</div>

</template>