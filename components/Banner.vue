<script setup>

import 'swiper/css';
import { useNavigationStore } from "~~/stores/navigation";

const { $Swiper } = useNuxtApp()
var swipe = $Swiper;

onMounted(() => {

    var swiper = new swipe(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


})


const getImage = function (params) {
     const baseUrl = '~/assets/';
    // Using template literals
    return `${baseUrl}${params}`;

}

const store = useNavigationStore();

const slides = [
    {
        image: 'Banner.jpg',
        description: 'Cute kitten 1',
        story: `Labuan Bajo yang dikenal sebagai surga nusantara saat ini menjadi destinasi yang banyak diminati oleh seluruh kalangan. Kota kecil   ini menyuguhkan banyak keindahan alam; bahari  Tadan lautan  Taman Nasional Komodo yang menakjubkan dan wajib anda  nikmati. 
 Paket wisata La Da's merupakan salah satu paket wisata open trip di Labuan Bajo yang menawarkan beragam program wisata alam Taman Nasional Komodo yang dapat anda pilih untuk mendapatkan pengalaman berharga bersama sahabat;keluarga ataupun kekasih selama di Labuan Bajo.`

    },
    {
        image: 'Banner-2.jpg',
        description: 'Cute kitten 2',
        story: `Labuan Bajo yang dikenal sebagai surga nusantara saat ini menjadi destinasi yang banyak diminati oleh seluruh kalangan. Kota kecil   ini menyuguhkan banyak keindahan alam; bahari  Tadan lautan  Taman Nasional Komodo yang menakjubkan dan wajib anda  nikmati. 
 Paket wisata La Da's merupakan salah satu paket wisata open trip di Labuan Bajo yang menawarkan beragam program wisata alam Taman Nasional Komodo yang dapat anda pilih untuk mendapatkan pengalaman berharga bersama sahabat;keluarga ataupun kekasih selama di Labuan Bajo.`

    },
    {
        image: 'Banner-3.jpg',
        description: 'Cute kitten 3',
        story: `Labuan Bajo yang dikenal sebagai surga nusantara saat ini menjadi destinasi yang banyak diminati oleh seluruh kalangan. Kota kecil   ini menyuguhkan banyak keindahan alam; bahari  Tadan lautan  Taman Nasional Komodo yang menakjubkan dan wajib anda  nikmati. 
 Paket wisata La Da's merupakan salah satu paket wisata open trip di Labuan Bajo yang menawarkan beragam program wisata alam Taman Nasional Komodo yang dapat anda pilih untuk mendapatkan pengalaman berharga bersama sahabat;keluarga ataupun kekasih selama di Labuan Bajo.`

    }
];

var story = {
}

</script>
<template>
    <div class=" h-[60vh] z-20 md:h-[80vh] lg:h-[100vh] bg-center flex ">

        <!-- Aside Banner -->
        <div class=" hidden md:block md:w-[30%] bg-[#01121a] backdrop-blur-lg p-4 relative  ">
            <transition name="fade">
                <div v-if="store.windowPosition < 100" class=" relative top-[45%] flex flex-col gap-[1rem] mx-auto ">
                    <img class=" " src="~/assets/logo.png" alt="">
                    <h2 class=" text-white text-[2rem] relative text-center ">Feels Nature and Culture Flores with Us</h2>
                    <button
                        class=" text-[#F2BE22] font-medium cursor-pointer hover:bg-[#F2BE22] hover:text-white p-2 transition-all duration-150 border-[#F2BE22] w-[50%] border-2 mx-auto">More
                        Info..</button>
                </div>
            </transition>
        </div>

        <!-- Bside Banner -->
        <div class="swiper mySwiper w-[100%] md:w-[70%]">

            <!-- Social Media Button -->
            <div class=" flex-col z-[59] flex justify-center gap-5 pt-5 absolute top-[25%] left-[90%] md:left-[94%] md:top-[29%] ">
                <SocialMedia />
            </div>

            <!-- Arrow Banner -->
            <div class=" absolute flex w-[20rem] gap-8 z-30 top-[85%] left-[40%] md:top-[55%] lg:top-[59%] md:left-[40%] lg:left-[48%]">
                <div class="swiper-button-next">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <title />

                        <g id="Complete">

                            <g id="arrow-left">

                                <g>

                                    <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17"
                                        stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                                    <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" x1="21.5" x2="4.8" y1="12" y2="12" />

                                </g>

                            </g>

                        </g>

                    </svg>
                </div>
                <div class="swiper-button-prev">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <title />

                        <g id="Complete">

                            <g id="arrow-right">

                                <g>

                                    <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17"
                                        stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                                    <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" x1="2.5" x2="19.2" y1="12" y2="12" />

                                </g>

                            </g>

                        </g>

                    </svg>
                </div>
            </div>

            <!-- Swiper Wrapper -->
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in slides">

                    <!-- Bside Description -->
                    <div class="absolute hidden md:block bg-black bg-opacity-70 p-3 md:top-[60%] lg:top-[68%] left-[5%] w-[80%]">
                        <p class="text-white">{{ i.story }}</p>
                        <button
                            class=" text-[#F2BE22] font-medium cursor-pointer hover:scale-110 transition-all duration-150">More
                            Story..</button>
                    </div>

                    <img class="img-slider" :src="i.image" :alt="i.description">
                </div>
            </div>

        </div>

    </div>

    <!-- Description Extension For Mobile -->
    <div class=" bg-[#01121a] rounded-t-2xl md:hidden z-30 mt-[-25px] h-[45vh] relative flex flex-col gap-[1rem] justify-center ">
        <img class=" scale-75 " src="logo.png" alt="">
        <h2 class=" text-white text-[1.6rem] relative text-center mt-[-1rem] ">Feels Nature and Culture Flores with Us</h2>
        <button class=" text-[#F2BE22] font-medium cursor-pointer hover:scale-110 transition-all duration-150">More
            Info..</button>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

h2 {
    font-family: bienetre;
}

.img-slider {
    @apply w-[100%] h-[100%];
    object-fit: cover;
    object-position: center;
}


p {
    font-family: Bienetre;
}
</style>