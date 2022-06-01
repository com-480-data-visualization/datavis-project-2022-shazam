<script>
export default {
  name: 'Yearly'
}
</script>

<template>

<div>
    <!-- horizontal bar chart -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs horizontal bar chart</p>
        </div>
        <div></div>
    </div>

    <!-- word cloud -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs word cloud</p>
        </div>
        <div></div>
    </div>

    <!-- radar graph -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs audio feature radar graph</p>
        </div>
        <div></div>
    </div>

    <!-- back button -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">  
            <a href="" @click.prevent="$router.back()">      
                <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    Go Back
                </button>
            </a>
        </div>
        <div></div>
    </div>
</div>

</template>