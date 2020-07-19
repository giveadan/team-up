<template>
    <div class="container mx-auto">
        <div class="flex flex-col-reverse mt-8 lg:mt-0 lg:flex-row items-center text-center lg:text-left">
            <div class="lg:w-1/2 lg:pr-4 text-center">
                <img src="../assets/logo.png" width="130px" alt="Team Up Logo" class="mx-auto" />
                <h1 class="font-bold uppercase leading-tight lg:text-6xl">Empowering Communities Together</h1>
                <div class="mt-4">
                    <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 text-xl rounded inline-block">Donate Now</a>
                </div>
            </div>
            <div class="lg:w-1/2 hidden sm:block">
                <img class="max-w-md lg:max-w-full mx-auto" alt="Guatemala team picture" src="../assets/guatemala-1.jpg" />
            </div>
        </div>
        <h3 class="text-2xl mt-16 text-center">Connecting individuals and organizations to service communities in need.</h3>

    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
      return {
      scrolled: false
      };
  },
  methods: {
     handleScroll () {
     this.scrolled = window.scrollY > 240;
   }
  },
  created () {
  window.addEventListener('scroll', this.handleScroll);
  }
}
</script>
