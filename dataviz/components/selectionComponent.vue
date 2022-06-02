<script>
export default {
  name: 'Selection'
}
</script>

<template>

<div class="mx-auto grid grid-cols-1 place-content-center mt-40">
    <div class="rounded-xl p-6">
        <div class="text-center">
            <p class="text-6xl font-medium text-gray-50">Weekly analysis</p>
            <p class="text-2xl p-6 text-gray-50">Weekly data</p>
        </div>
    </div>

    <div class="mx-auto grid grid-cols-3 place-content-center">
        <div></div>
        <div class="rounded-xl content-center">
            <NuxtLink to="/weekly">
                <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    To Weekly
                </button>
            </NuxtLink>
        </div>
        <div></div>
    </div>

    <div class="rounded-xl p-6">
        <div class="text-center">
            <p class="text-6xl font-medium text-gray-50">Yearly analysis</p>
            <p class="text-2xl p-6 text-gray-50">Yearly data</p>
        </div>
    </div>

    <div class="mx-auto grid grid-cols-3 place-content-center">
        <div></div>
        <div class="rounded-xl content-center">
            <NuxtLink to="/yearly">
                <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    To Yearly
                </button>
            </NuxtLink>
        </div>
        <div></div>
    </div>
</div>

</template>