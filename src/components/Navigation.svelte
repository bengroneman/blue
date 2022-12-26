<script lang="ts">
    import { navigation } from "../data/navigation";
    let mobileMenu = false;
    let toggleMobileMenu = () => {
        console.log(mobileMenu)
        mobileMenu = !mobileMenu;
    }
</script>
<nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Blue Engineering LLC">
                    <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Blue Engineering LLC">
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        {#each navigation as item}
                            <a
                                href="{item.url}"
                                id="{item.title}"
                                class="nav-link"
                            >
                                {item.title}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="-mr-2 flex sm:hidden" on:click={toggleMobileMenu}>
                <!-- Mobile menu button -->
                <button
                    type="button"
                    class="mobile-menu"
                    aria-controls="mobile-menu"
                >
                    <span class="sr-only">Open main menu</span>
                    {#if !mobileMenu}
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    {:else}
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {/if}
                </button>

            </div>
        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    {#if mobileMenu}
    <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            {#each navigation as item}
                <a
                    href="{item.url}"
                    class="nav-link"
                >
                    {item.title}
                </a>
            {/each}
        </div>
        <div class="border-t border-gray-700 pt-4 pb-3">
            <div class="flex items-center px-5">
            </div>
        </div>
    </div>
    {/if}
</nav>
