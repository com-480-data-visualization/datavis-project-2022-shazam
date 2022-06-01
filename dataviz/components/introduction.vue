<script>
export default {
  name: 'Welcome'
}
</script>

<template>

<div class="mx-auto grid grid-cols-1 place-content-center mt-40">
    <div class="rounded-xl p-6">
        <div class="text-center">
            <p class="text-2xl font-medium text-gray-50">The evolution of music</p>
            <p class="text-xl p-6 text-gray-50">Through the BillBoard weekly data since 2018, we can see a lot of different music trends.</p>
            <p class="text-xl p-6 text-gray-50">Shall the journey of exploring the musical changes in the past 4 year through musical features begins!</p>
        </div>
    </div>

    <div class="mx-auto grid grid-cols-3 place-content-center">
        <div></div>
        <div class="rounded-xl content-center">
            <button class="max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <NuxtLink to="/timeline">Let's explore!</NuxtLink>
            </button>
        </div>
        <div></div>
    </div>
</div>

</template>