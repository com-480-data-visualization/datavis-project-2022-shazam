<script lang="ts">
import Vue from 'vue'
import navbarVue from '~/components/navbar.vue'
import weeklyComponent from '~/components/weeklyComponent.vue'


export default Vue.extend({
  name: "WeeklyPage",
  components: {
    Navbar: navbarVue,
    WeeklyComponent: weeklyComponent,
},

  data() {
    return {
      
    }
  },
})
</script>

<template>

<div class="bg-gray-900 min-h-screen">

    <navbar/> 
    
    <WeeklyComponent/>
    
</div>

</template>