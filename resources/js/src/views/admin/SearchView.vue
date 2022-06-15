<template>
    <div class="container ">
        <v-separation title="Поиск товаров"/>
        <div class="raw">
            <div class="d-flex flex-wrap align-content-center justify-content-between ">
                <div class="elements_market col-12" v-if="info.length>0">
                    <div v-for="n in 5">
                        <div v-if="info[currentPage*5+n-1]">
                            <v-element-of-market :img=info[currentPage+n-1].img_file :title=info[currentPage+n-1].name
                                                 :price=info[currentPage+n-1].price
                                                 :short_text=info[currentPage+n-1].short_text
                                                 :isAvailable="info[currentPage+n-1].is_available"/>
                        </div>
                    </div>
                    <v-listing :max_page="Math.ceil(info.length / 5)" @current_page="getCurrentPage"/>
                </div>
                <div class="elements_market col-12" v-else>По Вашему запросу ничего не было найдено</div>
            </div>
        </div>
    </div>
</template>

<script>
import vListing from '@/components/v-listing.vue'
import vSeparation from '@/components/v-separation.vue'
import vElementOfMarket from '@/components/admin/v-element-of-market.vue'
import axios from 'axios';

export default {
    name: 'SearchView',
    components: {
        vSeparation,
        vElementOfMarket,
        vListing
    },
    data() {
        return {
            info: {},
            currentPage: 0,
        }
    },
    methods: {
        getCurrentPage(data) {
            this.currentPage = data - 1
        }
    },
    async beforeMount() {
        let self = this;
        await axios.get('/api' + window.location.pathname.replace('/admin', '')).then(function (response) {
            self.info = response.data;
        });
    }
}

</script>

<style lang="scss">
</style>
