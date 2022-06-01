<script>
export default {
  name: 'YearlyTimeline'
}
</script>

<template>

<div>
    
    <!-- bubble -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Bubble chart</p>
        </div>
        <div></div>
    </div>

    <!-- timeline scroller -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Timeline</p>
        </div>
        <div></div>
    </div>

    <!-- leaderboard -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Leaderboard</p>
        </div>
        <div></div>
    </div>

    <!-- TMP -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <NuxtLink to="/yearly">
                    <button class="max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">To Yearly</button>
                </NuxtLink>
            </div>
        </div>
        <div></div>
    </div>
</div>

</template>