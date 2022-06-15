<template>
    <div class="container">
        <v-separation :title="'Профиль пользователя '+user.username"/>
        <div class="row justify-content-between">
            <div class="col-8" v-if="(!edit_data && !change_password)">
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
            <form @submit.prevent="changingUserData" class="col-8" v-else-if="edit_data" autocomplete="off">
                <input type="hidden" name="_token" :value="csrf">
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="last_name">Фамилия: </label>
                    </strong>
                    <input class="col-5" type="text" id="last_name" name="last_name" size="18"
                           required="" v-model="user_data.last_name">
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="first_name">Имя: </label>
                    </strong>
                    <input class="col-5" type="text" id="first_name" size="18"
                           required="" v-model="user_data.first_name">
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="second_name">Отчество: </label>
                    </strong>
                    <input class="col-5" type="text" id="second_name" size="18"
                           required="" v-model="user_data.second_name">
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="email">Email: </label>
                    </strong>
                    <input class="col-5" type="email" id="email" name="email" size="18" required="" v-model="user.email" >
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="phone">Номер телефона: </label>
                    </strong>
                    <input class="col-5" type="text" id="phone" name="phone" size="18" required="" v-model="user_data.phone">
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="address">Адрес проживания: </label>
                    </strong>
                    <input class="col-5" type="text" id="address" name="address" size="18" required="" v-model="user_data.address">
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="zip_code">Почтовый индекс: </label>
                    </strong>
                    <input class="col-5" type="text" id="zip_code" name="zip_code" size="18"
                           required="" v-model="user_data.zip_code">
                </div>
                <button type="submit" class="btn">Сохранить</button>
                <button type="button" @click="editData" class="btn">Отмена</button>
            </form>
            <form @submit.prevent="changingPassword" class="col-8" v-else-if="change_password" autocomplete="off">
                <input type="hidden" name="_token" :value="csrf">
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="current_password">Текущий пароль: </label>
                    </strong>
                    <input class="col-5" type="password" id="current_password" name="current_password" size="18"
                           required=""
                           v-model="passwords.current_password">
                </div>
                <div class="mb-3 row">
                    <strong class="col-4">
                        <label for="new_password">Новый пароль: </label>
                    </strong>
                    <input class="col-5" type="password" id="new_password" name="new_password" size="18" required=""
                           v-model="passwords.new_password">
                </div>
                <button type="submit" class="btn">Изменить пароль</button>
                <button type="button" @click="changePassword" class="btn">Отмена</button>
            </form>
            <div class="col-3 d-flex row" v-if="(!edit_data && !change_password)">
                <button type="button" @click="editData" class="btn">Изменить данные профиля</button>
                <button type="button" @click="changePassword" class="btn">Изменить пароль</button>
                <button type="button" @click="logout" class="btn">Выход</button>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios"
import vSeparation from '@/components/v-separation.vue'
import vElementOfOrders from '@/components/v-element-of-orders.vue'
import store from '@/store'
import router from "@/router";

export default {
    name: 'Profile',
    components: {
        vSeparation,
        vElementOfOrders
    },
    data() {
        return {
            user: store.state.user.data,
            edit_data: false,
            change_password: false,
            user_data: {},
            passwords: [],
            orders_data: [],
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },
    methods: {
        editData() {
            if (this.edit_data === false)
                this.edit_data = true;
            else
                this.edit_data = false;
        },
        changePassword() {
            if (this.change_password === false)
                this.change_password = true;
            else
                this.change_password = false;
        },
        logout() {
            store.commit('logout');
            router.push({name: 'homeGuest'})
        },
        changingPassword() {
            axios.post('/api' + window.location.pathname.replace('/admin', '') + '/change_password', this.passwords).then(function (response) {
                this.change_password = false;
            });
        },
        changingUserData() {
            let self = this;
            axios.post('/api' + window.location.pathname.replace('/admin', ''), {
                'userdata': this.user_data,
                'email': this.user.email
            }).then(function (response) {
                self.editData();
            });
        }
    },
    async beforeMount() {
        let self = this;
        await axios.get('/api' + window.location.pathname.replace('/admin', '')).then(function (response) {
            if (response.data[0])
                self.user_data = response.data[0];
            self.orders_data = response.data[1];
        });


    }
}


</script>

<style lang="scss">
.card__available {
    color: $add-color;
}

.card__not-available {
    color: #ff0000;
}

.review__form {
    font-size: 15px;
}

.text-login {
    color: $add-color;
}

.text-login:hover {
    color: $black;
}


.card__img-content {
    position: relative;
    width: 150px;
    height: 230px;
    margin-bottom: 30px;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    border-radius: 20px;
    z-index: 3;
    background: #E4E4E4;
    text-align: center;
}

.card__img {
    z-index: 3;
    width: auto;
    height: 95%;
    filter: drop-shadow(12px 9px 4px rgb(0, 0, 0, 0.25));
    -webkit-filter: drop-shadow(12px 9px 4px rgb(0, 0, 0, 0.25));
    position: relative;
}

.card__text {
    font-size: 15px !important;
}

.col-11 {
    padding: 0 !important;
}

.play {
    height: 40px;
    width: 40px;
    padding: 0 !important;
    margin-left: 10px;
    border-radius: 100%;
    background-color: $add-color;
    color: $white;

    span {
        text-align: center;
        font-size: 30px !important;
    }
}
</style>
