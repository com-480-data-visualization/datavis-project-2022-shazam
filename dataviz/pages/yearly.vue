<script lang="ts">
import Vue from 'vue'
import yearlyComponentVue from '~/components/yearlyComponent.vue'

export default Vue.extend({
    name: "YearlyPage",
    components: {
        Yearly: yearlyComponentVue
    }
})
</script>

<template>

<div class="bg-gray-900 h-screen">

  <navbar/> 
  
  <Yearly/>
  
</div>

</template>