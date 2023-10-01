<script setup>

import { useNavigationStore } from "~~/stores/navigation";

const store = useNavigationStore();


const handleScroll = () => {
  store.windowPosition = window.scrollY;
  console.log(windowPosition.value);
};

const toggleMobileLink = () => {
  store.isMenuOpen = !store.isMenuOpen;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template >
  <!-- 4d99c9 -->
  <nav :class=" store.windowPosition > 100 ? 'md:bg-[#4d99c9]' : 'md:bg-opacity-0' "
    class=" w-full bg-[#4d99c9] fixed top-0 flex items-center z-40 justify-between md:px-12 py-5 transition-all duration-150 ease-in">
    <slot></slot>
    
    <!-- Image -->
    <img :class="{ 'md:opacity-0' : store.windowPosition < 100  }" class=" w-[35%] md:w-[15%]" src="/images/logo.png" alt="">
    
    <!-- Large Device Link -->
    <ul id="nav-links" class=" text-shadow-1">
       <NuxtLink to="/"><li>Home</li></NuxtLink>
       <NuxtLink to="/Package"><li>Tour</li></NuxtLink>
     <NuxtLink to="/Contacts"><li>Contacts</li></NuxtLink>
      <li>About</li>
    </ul>

    <!-- Mobile Link Toggle -->
    <div class="block mr-6 md:hidden">
        <button
          @click="toggleMobileLink()"
          class="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="store.isMenuOpen"
              d="M0 0h20v1H0zm0 6h20v1H0zm0 6h20v1H0z"
            ></path>
            <path
              v-else
              d="M0 0h20v3H0zm0 6h20v3H0zm0 6h20v3H0z"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Link -->
       <transition name="fade">
      <ul v-if="store.isMenuOpen" id="mobile-links" class=" text-shadow-1">
         <NuxtLink to="/"><li>Home</li></NuxtLink>
        <li>Tour</li>
        <li>Contacts</li>
        <li>About</li>
      </ul>
      </transition>
  </nav>

</template>

<style>
#nav-links {
  @apply hidden my-auto gap-4 w-[42%] justify-around md:flex;
  font-family: Bienetre;
}

#nav-links li {
  @apply text-white font-medium text-[1.1rem] md:text-[1.34rem] hover:text-[#f5f75c] transition-all duration-100;
}

#mobile-links {
  @apply absolute bg-[#4d99c9] flex gap-5 py-5 flex-col items-center w-[15rem] top-[100%] ;
  font-family: Bienetre;
}

#mobile-links li {
  @apply text-white font-medium text-[1.4rem] hover:text-[#f5f75c] transition-all duration-100;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#nav-links li .active {}
</style>