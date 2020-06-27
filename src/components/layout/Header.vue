<template>
  <header class="container mx-auto">
    <div class="flex items-center justify-between px-4 py-3">
      <div>
        <span class="uppercase font-bold text-2xl"><router-link to="/">Team Up</router-link></span>
      </div>
      <div>
      <div class="justify-center hidden md:flex">
        <div class="px-4 py-2 m-2 text-center">Meet the Team</div>
        <div class="px-4 py-2 m-2 text-center">Projects</div>
        <div class="px-4 py-2 m-2 text-center">Learn More</div>
        <div class="px-4 py-2 m-2 mr-0 pr-0 text-center">
          <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Donate
          </a>
        </div>
      </div>
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none md:hidden">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
      <a href="#" class="block px-2 py-1 font-semibold rounded hover:bg-gray-800">List your property</a>
      <a href="#" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800">Trips</a>
      <a href="#" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800">Messages</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>