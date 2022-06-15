<template>
    <div class="container">
        <v-separation :title="'Просмотр информации профиля пользователя '+user.username"/>
        <div class="row justify-content-between">
            <div class="col-8">
                <div><strong>Фамилия: </strong>{{ user_data.last_name }}</div>
                <br>
                <div><strong>Имя: </strong>{{ user_data.first_name }}</div>
                <br>
                <div><strong>Отчество: </strong>{{ user_data.second_name }}</div>
                <br>
                <div><strong>Email: </strong>{{ user.email }}</div>
                <br>
                <div><strong>Номер телефона: </strong>{{ user_data.phone }}</div>
                <br>
                <div><strong>Адрес проживания: </strong>{{ user_data.address }}</div>
                <br>
                <div><strong>Почтовый индекс: </strong>{{ user_data.zip_code }}</div>
            </div>
            <br>
            <form @submit.prevent="updateData()">
                <div class="d-flex">
                    <input class="form-check-input" type="checkbox" v-model="isAdmin" id="isAdmin">
                    <label class="ms-1 form-check-label" for="isAdmin">
                        Администратор
                    </label>
                </div>
                <div v-if="self_check">Вы не можете изменить свою роль</div>
                <button type="submit" class="btn" v-else>Обновить</button>
            </form>
        </div>
        <v-separation title="История заказов"/>
        <div v-if="orders_data.length === 0">Список заказов пуст.</div>
        <div v-else>
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

        </div>

        <v-element-of-orders v-for="order in orders_data" :data="order"/>
    </div>


</template>

<script>

import axios from "axios"
import vSeparation from '@/components/v-separation.vue'
import vElementOfOrders from '@/components/admin/v-element-of-orders.vue'
import store from '@/store'
export default {
    name: 'CardOfProduct',
    components: {
        vSeparation,
        vElementOfOrders
    },
    data() {
        return {
            self_check:false,
            user_data: {},
            user: {},
            orders_data: {},
            isAdmin: false
        }
    },
    methods: {
        updateData() {
            let self = this;
            axios.post('/api' + window.location.pathname, {isAdmin:this.isAdmin});
        },
    },
    async beforeMount() {
        let self = this;
        await axios.get('/api' + window.location.pathname).then(function (response) {
            if (response.data[0] !== null)
                self.user_data = response.data[0];
            self.orders_data = response.data[1];
            self.user = response.data[2];
        });
        if (self.user.isAdmin ===1)
            self.isAdmin = true;
        else
            self.isAdmin = false;
        if (self.user.id === store.state.user.data.id)
            self.self_check = true;
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

.form-check-input {
    width: 20px !important;
    height: 20px !important;
    background-color: #C4C4C4 !important;

    &:checked {
        background-color: $add-color !important;
    }
}
</style>
