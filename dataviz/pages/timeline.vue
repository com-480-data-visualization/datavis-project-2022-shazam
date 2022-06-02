<script lang="ts">
import Vue from 'vue'
import navbarVue from '~/components/navbar.vue'
import weeklyTimelineComponentVue from '~/components/weeklyTimelineComponent.vue'
import WeeklyTimelineComponent from '~/components/weeklyTimelineComponent.vue'

export default Vue.extend({
  name: "TimelinePage",
  components: {
    Navbar: navbarVue,
    WeeklyTimelineComponent,
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
    
    <WeeklyTimelineComponent/>
    
</div>

</template>