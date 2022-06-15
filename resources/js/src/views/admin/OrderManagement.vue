<template>
    <div class="container ">
        <v-separation title="Управление заказами"/>
        <div class="d-flex justify-content-start text-center align-items-center mb-2">
            <div class="col-1">
                № Заказа
            </div>
            <div class="col-3">
                Название товара
            </div>
            <div class="col-3">
                Сумма заказа
            </div>
            <div class="col-2">
                Статус товара
            </div>
        </div>
        <div class="horizontal-line"></div>
        <div>
            <div v-for="n in 5">
                <div v-if="orders_data[currentPage*5+n-1]">
                    <v-element-of-orders :data="orders_data[currentPage*5+n-1]"/>
                </div>
            </div>
            <v-listing :max_page="Math.ceil(orders_data.length / 10)" @current_page="getCurrentPage"/>
        </div>
    </div>
</template>

<script>
import vListing from '@/components/v-listing.vue'
import vSeparation from '@/components/v-separation.vue'
import vElementOfOrders from '@/components/admin/v-element-of-orders.vue'
import axios from 'axios';

export default {
    name: 'OrderManagement',
    components: {
        vSeparation,
        vElementOfOrders,
        vListing
    },
    data() {
        return {
            orders_data: {},
            currentPage: 0,
        }
    },
    methods: {
        getCurrentPage(data) {
            this.currentPage = data - 1
        }
    },
    async mounted() {
        let self = this;
        await axios.get('/api' + window.location.pathname).then(function (response) {
            self.orders_data = response.data;
        });
    }
}

</script>

<style lang="scss">
.horizontal-line {
    filter: drop-shadow(0px 3px 3px rgb(0, 0, 0, 0.45));
    content: "";
    width: 100%;
    height: 3px;
    background-color: $add-color;
    display: block;
    border-radius: 3px;
    z-index: 0;
}
</style>
