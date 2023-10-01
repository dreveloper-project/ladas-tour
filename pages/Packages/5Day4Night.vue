<script>
                            export default {
                      data() {
                        return {
                          tabs: ['Overview', 'Iternary', 'Good To Know'],
                          activeTab: 'Overview'
                        };
                      }
                    };
                        </script>
                        <template>
                            <div class=" bg-[#4d99c9]">

                                <Navbar-Static />

                                <!-- Tabs component -->
                                <div id="tabs" class=" mt-[6rem] px-[2rem] md:px-[8rem]">
                                    <div class="border-b border-gray-200">
                                        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                            <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = tab"
                                                :class="[
                                                    tab === activeTab
                                                        ? 'border-[#fcd616] text-[#fcd616] md:text-[1.6rem]'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 md:text-[1.4rem]',
                                                    'whitespace-nowrap py-4 md:px-1 border-b-2 font-medium transition-all '
                                                ]">
                                                {{ tab }}
                                            </button>
                                        </nav>
                                    </div>

                                    <div id="tabs-menu">
                                        <!-- Tab Content -->

                                        <!-- Overview Tabs -->
                                        <div v-if="activeTab === 'Overview'">
                                            <h2>5 Day 4 Night Flores Tour</h2>

                                           



                                        </div>

                                        <!-- Iternary Tabs -->
                                        <div v-if="activeTab === 'Iternary'">

                                            <h2>Day 01 : Labuan Bajo – Ruteng </h2>
                                            <ul class="list-disc list-inside">
                                                <li>08:00 AM - Pick up at the Hotel</li>
                                                <li>On the way to Lembor</li>
                                                <li>Coffee Break</li>
                                                <p>Enjoy Manggarai coffee and sweet cassava fried in a local cafe.</p>
                                                <li>Continue to Cancar Village to see the spider rice fields</li>
                                                <p>Enjoy the view of rice fields with local culture (Spider rice fields).
                                                </p>
                                                <li>Lunch</li>
                                                <p>Local Restaurant</p>
                                                <li>Continue to Kampung Tradisional Ruteng Pu’u (Approximately 1-hour
                                                    journey)</li>
                                                <p>Explore the Manggarai village, take a closer look at community life and
                                                    social culture, learn about the history of the oldest village in Ruteng
                                                    City with several Mbaru Niang (Manggarai Traditional Houses), and take
                                                    photos.</p>
                                                <li>Dinner</li>
                                                <p>Local Restaurant</p>
                                                <li>Check In Hotel in Ruteng</li>
                                                <li>Free Time</li>
                                            </ul>



                                            <h2>Day 02 : Ruteng – Bajawa</h2>
                                            <ul class="list-disc list-inside">
                                                <li>07:00 AM - Breakfast</li>
                                                <p>Hotel</p>
                                                <li>Check Out Hotel</li>
                                                <li>On the way to Danau Rana Mese (Rana Mese Lake)</li>
                                                <li>Continue to Aimere to see the local processing area of local people</li>
                                                <li>Lunch</li>
                                                <p></p>
                                                <li>Visit the Bena Village where the traditional houses of the Bajawa</li>
                                                <p>Explore Bena Village, take a closer look at community life and social
                                                    culture, enjoy the charm of one of the traditional villages from the
                                                    megalithic era in Ngada Regency. Observe the locals' daily weaving
                                                    activities using natural dyes, and take photos.</p>
                                                <li>Dinner</li>
                                                <p>Rumah Makan / Restoran</p>
                                                <li>Check in Hotel in Bajawa</li>
                                                <p>Bajawa City is a cold region in Flores.</p>
                                                <li>Free Time</li>
                                            </ul>


                                            <h2>Day 03 : Bajawa Ende</h2>
                                            <ul class="list-disc list-inside">
                                                <li>Breakfast</li>
                                                <p>Hotel</p>
                                                <li>Check Out Hotel</li>
                                                <li>On the way to Ende City</li>
                                                <li>Visit Blue Stone Beach</li>
                                                <p>The beach is filled with blue stones, perfect for taking photos.</p>
                                                <li>Lunch</li>
                                                <li>Visit Bung Karno House</li>
                                                <p>Explore the house of Bung Karno (Indonesia's first President) where he
                                                    was exiled by the Dutch from 1934 to 1938.</p>
                                                <li>Visit Moni Village</li>
                                                <p>A small village at the foot of Mount Kelimutu on the Trans Flores Ende -
                                                    Maumere route. Moni offers various accommodation options and enjoys cool
                                                    weather on Flores Island.</p>
                                                <li>Dinner</li>
                                                <li>Check In Hotel in Kampung Moni</li>
                                                <p>Kampung Moni is a place to rest and unwind.</p>
                                                <li>Free Time</li>
                                                <p>Istirahat</p>
                                            </ul>

                                            <h2>Day 04 : Ende - Moni - Pantai Koka</h2>
                                            <ul class="list-disc list-inside">
                                                <li>04:00 AM - Morning call</li>
                                                <p>Small Breakfast (Bread)</p>
                                                <li>Sunrise Time in Danau Kelimutu (Kelimutu Lake)</li>
                                                <p>Sunrise time, enjoy the view of the Sunrise over the Three Colors Lake
                                                    Kelimutu, and take pictures.</p>
                                                <li>Breakfast</li>
                                                <p>Hotel</p>
                                                <li>Check Out Hotel</li>
                                                <li>Visit Koka Beach</li>
                                                <li>Lunch</li>
                                                <p>Koka Beach</p>
                                                <li>Visit Kampung Tradisional Wologai</li>
                                                <li>Visit Pantai Kota Raja</li>
                                                <p>Sunset time in Ende City</p>
                                                <li>Dinner</li>
                                                <li>Check In Hotel</li>
                                                <p>Free Time</p>
                                            </ul>

                                            <h2>Day 05 : Ende Checkout</h2>
                                            <ul class="list-disc list-inside">
                                                <li>Breakfast</li>
                                                <p>Hotel</p>
                                                <li>Check Out Hotel</li>
                                                <li>Packing to Airport</li>
                                                <li>Souvenir Shop</li>
                                                <li>Shopping Time</li>
                                                <li>Lunch</li>
                                                <p>Kuliner lokal Khas Ende</p>
                                                <li>To the Ende Airport</li>
                                                <li>Check in and baggage process</li>
                                                <li>End of the Trip.</li>
                                                <p>Thank you and see you on the next trip.</p>
                                            </ul>


                                        </div>

                                        <!-- Get T Know Tabs -->
                                        <div v-if="activeTab === 'Good To Know'">

                                            <h2>Include</h2>

                                            <ul class="list-disc list-inside">
      <li>Private car (Capacity 3-4 persons)</li>
      <li>Driver and Fuel</li>
      <li>Hotel/Accommodation</li>
      <li>Tour Guide</li>
      <li>Entry Fee for all Destinations</li>
      <li>Mineral Water</li>
    </ul>




                                            <h2>Exclude</h2>

                                            <ul class="list-disc list-inside">
      <li>Meals</li>
      <li>Tipping</li>
      <li>Insurance</li>
      <li>Personal Expenses</li>
    </ul>



                                           

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </template>

                        <style scoped>
                            #tabs {
                                font-family: Bienetre;
                            }

                            #tabs-menu div {
                                @apply text-white;
                            }

                            #tabs-menu div h2 {
                                @apply text-[1.3rem] md:text-[1.7rem];
                            }

                            ul {
                                @apply list-disc list-inside text-yellow-500;
                            }
                        </style>
