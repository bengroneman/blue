<script lang="ts">
    export let title: string;
    export let short_title: string;
    export let long_title: string;
</script>
<div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
            {#if short_title}
                <h2 class="text-lg font-semibold text-indigo-600">{short_title}</h2>
            {/if}
            {#if title}
                <p class="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{title}</p>
            {/if}
            {#if long_title}
                <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">{long_title}</p>
            {/if}
        </div>
    </div>
</div>
