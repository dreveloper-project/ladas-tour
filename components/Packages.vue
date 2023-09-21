<template>
    <div class="bg-[url('/images/package-6.jpg')] bg-cover bg-center pt-10 pb-14 md:h-[100vh]">
    <div class=" w-[80%] mx-auto " data-aos="fade-down" >
        <h2 class=" text-[2rem] text-white md:text-[2.3rem] mt-8">Our Tour Package</h2>
        <p class=" text-[1rem] md:text-[1rem] md:mt-[-0.7rem] text-white">Best Tour And Travel Service Just
            For You</p>
        <div class=" my-2 border-2 w-[40%] md:w-[20%] border-yellow-500"></div>

    </div>
    
    <div class=" flex justify-center gap-[2rem] flex-wrap w-[80%] mx-auto mt-8">
        <div class="package" data-aos="fade-right"  data-aos-duration="3000">
            <img src="/images/package-1.jpg" alt="">
            <h3>Living On Board</h3>
            <p>3 Days 2 Night</p>
            <div class=" flex justify-between"><NuxtLink to="/packages/3day2night"><button>Details</button></NuxtLink></div>
            
        </div>
        <div class="package" data-aos="zoom-in"  data-aos-duration="1000">
            <img src="/images/package-2.jpg" alt="">
            <h3>Tour</h3>
            <p>2 Days 1 Night</p>
            <div class=" flex justify-between"><NuxtLink to="/packages/2day1night"><button>Details</button></NuxtLink></div> 
            
        </div>
        <div class="package" data-aos="fade-left"  data-aos-duration="2000">
            <img src="/images/package-3.jpg" alt="">
            <h3>Honeymoon Package</h3>
            <p>3 Days 2 Night</p>
            <div class=" flex justify-between"><NuxtLink to="/packages/honeymoon"><button>Details</button></NuxtLink></div> 
            
        </div>
         <div class="package" data-aos="fade-left"  data-aos-duration="2000">
                <img src="/images/package-5.jpg" alt="">
                <h3>Live On Board</h3>
                <p>4 Days 3 Nights </p>
                <div class=" flex justify-between"><NuxtLink to="/packages/4day3night"><button>Details</button></NuxtLink></div> 
            
            </div>
         
    </div>
    </div>
</template>
<style>
.package {
    @apply text-black w-[14rem] h-[17rem] hover:scale-105 duration-150  rounded-xl bg-white;
    font-family: Bienetre;
}
.package button {
    @apply bg-yellow-500 text-black px-2 rounded text-[0.8rem] hover:scale-105 mx-2;
}
.package img {
    @apply w-full h-[10rem] rounded-t-xl;
}

.package p {
    @apply ml-2 text-[0.8rem] px-1 ;
}

.package h3 {
    @apply ml-2  mt-3 font-semibold;
}</style>