<!-- ImageGrid.vue -->
<template>
   <div class=" w-[80%] mx-auto mt-20">
          <h2 class=" text-[2rem] text-white md:text-[2.3rem] mt-8">Arumi</h2>
          
          <div class=" my-2 border-2 w-[40%] md:w-[20%] border-yellow-500"></div>

      </div>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 mt-[2rem] md:ml-2 w-[100vw]">
    <div v-for="(image, index) in images" :key="index" class="relative w-[11rem] h-[6rem] md:w-[16rem] md:h-[9rem] lg:w-[26rem] lg:h-[16rem] ">
      <img :src="image.url" :alt="image.alt" class=" rounded-lg shadow-md">
      <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <button @click="openModal(image.url)"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View</button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="modalImage" class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
    <div class="max-w-md p-4 bg-white rounded-lg shadow-md">
      <img :src="modalImage" alt="Modal Image" class="w-full">
      <button @click="closeModal" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: '/arumi/Arumi- (1).jpg', alt: 'Image 1' },
        { url: '/arumi/Arumi- (2).jpg', alt: 'Image 2' },
        { url: '/arumi/Arumi- (3).jpg', alt: 'Image 3' },
        { url: '/arumi/Arumi- (4).jpg', alt: 'Image 5' },
        { url: '/arumi/Arumi- (6).jpg', alt: 'Image 6' },
        { url: '/arumi/Arumi- (7).jpg', alt: 'Image 7' },
        { url: '/arumi/Arumi- (8).jpg', alt: 'Image 8' },
        { url: '/arumi/Arumi- (9).jpg', alt: 'Image 9' },
        { url: '/arumi/Arumi- (10).jpg', alt: 'Image 10' },
      ],
      modalImage: null,
    };
  },
  methods: {
    openModal(imageUrl) {
      this.modalImage = imageUrl;
    },
    closeModal() {
      this.modalImage = null;
    },
  },
};
</script>

<style scoped>
img {
  @apply w-[100%] h-[100%];
    object-fit: cover;
    object-position: center;
}
</style>
