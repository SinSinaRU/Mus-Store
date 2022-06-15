<template>
    <router-link to="/loyalty-program">
        <img src="@/assets/Images/LoyaltyProgram.png" alt="Loyalty program"
             style="z-index: 0; width: 100%; text-align: center">
    </router-link>
    <div class="container ">
        <v-separation title="Популярные категории"/>
        <div class="raw ">
            <div class="d-flex flex-wrap align-content-center justify-content-between ms-1">
                <v-category-element class="col-lg-3 col-6" title="Акустические гитары" url="/category/acoustic-guitars"
                                    img="Acoustic Guitar.png"/>
                <v-category-element class="col-lg-3 col-6" title="Электрогитары" url="/category/electric-guitars"
                                    img="Electric Guitar.png"/>
                <v-category-element class="col-lg-3 col-6" title="Студийные наушники" url="/category/studio-headsets"
                                    img="Studio Headset.png"/>
                <v-category-element class="col-lg-3 col-6" title="Барабанные установки" url="/category/drum-kits"
                                    img="Drum Kit.png"/>
                <v-category-element class="col-lg-3 col-6" title="Синтезаторы" url="/category/synthesizers"
                                    img="Synthesizer.png"/>
                <v-category-element class="col-lg-3 col-6" title="Студийные микрофоны" url="/category/studio-microphone"
                                    img="Studio Microphone.png"/>
                <v-category-element class="col-lg-3 col-6" title="Акустические системы" url="/category/acoustic-systems"
                                    img="Acoustic System.png"/>
                <v-category-element class="col-lg-3 col-6" title="Усилители для гитар" url="/category/guitar-amplifiers"
                                    img="Guitar Amplifiers.png"/>
            </div>
        </div>
        <div v-if="recentData['1'].id !== undefined">
            <v-separation title="Последниий просмотренный товар"/>
            <div class="raw">
                <div class="d-flex flex-wrap align-content-center justify-content-between ms-1">
                    <v-recent-seen-product class="col-lg-3 col-6" v-if="recentData['1'].id !== undefined" :title="recentData['1'].name"
                                           :img="recentData['1'].img_file" />
                    <v-recent-seen-product class="col-lg-3 col-6" v-if="recentData['2'].id !== undefined" :title="recentData['2'].name"
                                           :img="recentData['2'].img_file" />
                    <v-recent-seen-product class="col-lg-3 col-6" v-if="recentData['3'].id !== undefined" :title="recentData['3'].name"
                                           :img="recentData['3'].img_file" />
                    <v-recent-seen-product class="col-lg-3 col-6" v-if="recentData['4'].id !== undefined" :title="recentData['4'].name"
                                           :img="recentData['4'].img_file" />

                </div>
            </div>
        </div>

    </div>
</template>

<script>

import vSeparation from '@/components/v-separation.vue'
import vCategoryElement from '@/components/v-category-element.vue'
import store from '@/store'
import VRecentSeenProduct from "@/components/v-recent-seen-product";

export default {
    name: 'HomeView',
    data() {
        return {
            recentData: store.state.recent_products.data
        }
    },
    components: {
        VRecentSeenProduct,
        vSeparation,
        vCategoryElement
    }
}
</script>
