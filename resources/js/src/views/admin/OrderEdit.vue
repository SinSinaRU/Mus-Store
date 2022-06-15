<template>
    <div class="container">
        <v-separation :title="'Информация о заказе №'+orders_data.id"/>
        <div class="justify-content-between">
            <div class="col-8">
                <div> <strong>Данные о покупателе: </strong></div>
                <br>
                <div><strong>Фамилия: </strong>{{ orders_data.last_name_buyer }}</div>
                <br>
                <div><strong>Имя: </strong>{{ orders_data.first_name_buyer }}</div>
                <br>
                <div><strong>Отчество: </strong>{{ orders_data.second_name_buyer }}</div>
                <br>
                <div><strong>Email: </strong>{{ orders_data.email_buyer }}</div>
                <br>
                <div><strong>Номер телефона: </strong>{{ orders_data.phone_buyer }}</div>
                <br>
                <div><strong>Адрес проживания: </strong>{{ orders_data.address_buyer }}</div>
                <br>
                <div><strong>Почтовый индекс: </strong>{{ orders_data.zip_code_buyer }}</div>
                <br>
                <div v-if="orders_data.payment_method === 'Наличными'"><strong>Метод
                    оплаты </strong>{{ orders_data.payment_method }}
                </div>
                <div v-else>
                    <div><strong>Метод оплаты </strong>{{ orders_data.payment_method }}</div>
                    <br>
                    <div><strong>Номер карты</strong>{{ orders_data.card_number }}</div>
                    <br>
                    <div><strong>Владелец карты</strong>{{ orders_data.card_holder }}</div>
                </div>
            </div>
            <br>
            <v-separation title="Товары в заказе"/>
            <div class="d-flex justify-content-start text-center align-items-center mb-2">
                <div class="col-6">
                    Название товара
                </div>
                <div class="col-6">
                    Цена
                </div>
            </div>
            <div class="d-flex justify-content-start text-center align-items-center mb-2"
                 v-for="product in product_parsed">
                <router-link :to="'/admin/product/'+ encodeURIComponent(product.name.toLowerCase())"
                             class="col-6 product-link">
                    {{ product.name }}
                </router-link>
                <strong class="col-6">
                    {{ product.price }} &#8381;
                </strong>
            </div>
            <div class="horizontal-line"></div>
            <div class="mt-2">
                Сумма заказа: <strong>{{orders_data.order_price}} &#8381;</strong>
            </div>
            <br>
            <form @submit.prevent="updateData()">
                <div class="d-flex">
                    <label for="brand">Статус заказа</label>
                    <select id="brand" name="brand" v-model="orders_data.status">
                        <option value="Ожидание отправки">Ожидание отправки</option>
                        <option value="Товар отправлен">Товар отправлен</option>
                        <option value="Товар получен покупателем">Товар получен покупателем</option>
                    </select>
                </div>
                <button type="submit" class="btn">Обновить</button>
            </form>
        </div>
    </div>


</template>

<script>

import axios from "axios"
import vSeparation from '@/components/v-separation.vue'
import vElementOfOrders from '@/components/admin/v-element-of-orders.vue'

export default {
    name: 'OrderEdit',
    components: {
        vSeparation,
        vElementOfOrders
    },
    data() {
        return {
            self_check: false,
            orders_data: {},
            product_parsed: [],
            isAdmin: false
        }
    },
    methods: {
        updateData() {
            let self = this;
            axios.post('/api' + window.location.pathname, [this.orders_data.status]);
        },
    },
    async beforeMount() {
        let self = this;
        await axios.get('/api' + window.location.pathname).then(function (response) {
            self.orders_data = response.data[0];
            console.log(self.orders_data)
        });
        this.product_parsed = JSON.parse(this.orders_data.products)

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

.product-link{
    color: $add-color;
    &:hover{
        color: $black;
    }
}
</style>
