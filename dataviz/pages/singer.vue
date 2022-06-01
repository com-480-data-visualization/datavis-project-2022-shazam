<script lang="ts">
import Vue from 'vue'
import singerComponentVue from '~/components/singerComponent.vue'

export default Vue.extend({
    name: "SingerPage",
    components: { 
      Singer: singerComponentVue
    }
})
</script>

<template>

<div class="bg-gray-900 min-h-screen">

  <navbar/> 
  
  <Singer/>
  
</div>

</template>