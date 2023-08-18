<template>
    <div class="mb-[2rem] md:mb-0 lg:h-[100vh] relative  ">
        <img id="bg-reasons" src="/images/package-4.jpg" class=" impar2 " alt="">
       <div class="flex md:flex items-center justify-around mt-[8rem]">
         <div class=" md:pl-0 md:w-[20%] py-9 z-10" data-aos="fade-down">
                <h2 class=" text-[1.2rem] text-white md:text-[2.3rem] mt-8">Why Choose Us</h2>
                <div class=" my-2 border-2 w-[50%] md:w-[20%] border-[#fcd616]"></div>
            </div>

        <div class="md:w-[44%] flex flex-col gap-5 justify-center z-10">
            <div class="reason" data-aos="fade-down">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M185 58.59c-15-.38-30 13.1-33.1 33.43-3.3 21.68 8.8 39.98 24.8 42.38 16 2.4 32.9-11.5 36.1-33.2 3.3-21.72-8.7-39.94-24.8-42.35-1-.15-2-.24-3-.26zm113.3 77.21l-17.2 5.2 8.3 28.1 18.9.5zm-144.6 7.6c-2.7 70.5-.4 140.9-3.6 202.5-15.8 35.8-36.7 70.2-50.38 99.2l25.68 12.4c20.8-33.7 42.2-68 55.2-102.9l11.3-63.4 53 45.9 16.2 88.1 29.3-5.8-17.6-100.6-58.1-53.6-9.3-86.4 48.1 31.3c26.7.9 45.1-1.9 69.6-5.7l1-16.3-70.8-2.1-46.5-42c-9.5 6.7-20.9 10-32.8 8.2-7.7-1.2-14.5-4.3-20.3-8.8zm-16.6 13l-40.47 11.7-5.96 85.5c13.53 6.7 31.03 11.6 43.23 3.4zm352.7 65.3l-95.7 78.1-32 51.9L324 222.5c-6.3.9-12.2 1.8-18 2.6l43.5 147.1-22.6 36.7-19.4 3.4 3.7 21.3-64.5 12.8-4.2-22.7-84.3 14.8c-9.5 15.6-17.1 27.9-26 42.2l-49.52-23.9-62.64 34.8H489.8z"/></svg>
               <div class=" text-white">
                     <h3 class=" md:text-[1rem] lg:text-[1.2rem]">
                        Legal And No Scam
                    </h3>
                   
               </div>
            </div>
            <div class="reason" data-aos="fade-down">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8L19 20H5L3 8M21 8L15.5 12.5L12 7M21 8C21.8284 8 22.5 7.32843 22.5 6.5C22.5 5.67157 21.8284 5 21 5C20.1716 5 19.5 5.67157 19.5 6.5C19.5 7.32843 20.1716 8 21 8ZM12 7L8.5 12.5L3 8M12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7ZM3 8C3.82843 8 4.5 7.32843 4.5 6.5C4.5 5.67157 3.82843 5 3 5C2.17157 5 1.5 5.67157 1.5 6.5C1.5 7.32843 2.17157 8 3 8Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                 <div class=" text-white">
                         <h3 class=" md:text-[1rem] lg:text-[1.2rem]">
                            We Are Local
                        </h3>
    
                   </div>
            </div>
        </div>
        </div>
    </div>
</template>
<style>
#bg-reasons {
    @apply absolute w-[100%] h-[100%];
    object-fit: cover;
    object-position: center;
}
.reason {
    @apply flex justify-around gap-2 cursor-pointer items-center px-2 py-3 rounded-lg border border-yellow-500 hover:scale-105 transition-all duration-300;
}
.reason svg {
    @apply md:w-[5rem];
} 

.reason div {
     @apply w-[80%];
}
</style>