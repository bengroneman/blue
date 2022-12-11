<script lang="ts">
    export let title: string = "A short but sweet title"
    export let short_title: string = "Pricing"
    export let long_title: string = "Give a strong hook to engage the reader to scroll through your page"
</script>
<div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-lg font-semibold text-indigo-600">{short_title}</h2>
            <p class="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{title}</p>
            <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">{long_title}</p>
        </div>
    </div>
</div>
