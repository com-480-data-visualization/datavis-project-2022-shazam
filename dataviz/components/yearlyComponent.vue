<script>
export default {
  name: 'Yearly'
}
</script>

<template>

<div>
    <!-- horizontal bar chart -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs horizontal bar chart</p>
        </div>
        <div></div>
    </div>

    <!-- word cloud -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs word cloud</p>
        </div>
        <div></div>
    </div>

    <!-- radar graph -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs audio feature radar graph</p>
        </div>
        <div></div>
    </div>

    <!-- back button -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">  
            <a href="" @click.prevent="$router.back()">      
                <button class="max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Go Back
                </button>
            </a>
        </div>
        <div></div>
    </div>
</div>

</template>