<script lang="ts">
import Vue from 'vue'
import navbarVue from '~/components/navbar.vue'
import weeklyTimelineComponentVue from '~/components/weeklyTimelineComponent.vue'
import yearlyTimelineComponentVue from '~/components/yearlyTimelineComponent.vue'
import WeeklyTimelineComponent from '~/components/weeklyTimelineComponent.vue'
import YearlyTimelineComponent from '~/components/yearlyTimelineComponent.vue'

export default Vue.extend({
  name: "TimelinePage",
  components: {
    Navbar: navbarVue,
    WeeklyTimeline: weeklyTimelineComponentVue,
    YearlyTimeline: yearlyTimelineComponentVue,
    WeeklyTimelineComponent,
    YearlyTimelineComponent
},

  data() {
    return {
      state: 0, // 0 singer, 1 yearly
    }
  },
  methods: {
    toWeeklyTimeline() {
        this.state = 0
    },
    toYearlyTimeline() {
        this.state = 1
    }
  }
})
</script>

<template>

<div class="bg-gray-900 min-h-screen">

    <navbar/> 

    <!-- Button group -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <button @click="toWeeklyTimeline" class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    Weekly
                </button>
                <button @click="toYearlyTimeline" class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    Yearly
                </button>
            </div>
        </div>
        <div></div>
    </div>
    
    <YearlyTimelineComponent v-if="state"/>

    <WeeklyTimelineComponent v-else/>
    
</div>

</template>