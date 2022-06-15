<template>
    <div class="container">
        <v-separation title='Корзина'/>
        <div class="row g-5" v-if="role==='user'">
            <div class="col-md-5 col-lg-4 order-md-last orders">
                <ul class="list-group mb-3" v-if="products.length !== 0">
                    <li class="list-group-item d-flex justify-content-between" v-for="product in products"
                        :key="products.keys()">

                        <div class="col-7">
                            <strong class="my-0">{{ product.name }}</strong>
                            <br>
                            <small class="text-muted">{{ product.short_text }}</small>
                        </div>
                        <div class="col-5 d-flex flex-column">
                            <button type="button" class="btn-close align-self-end"
                                    @click="deleteFromCart(product)"></button>
                            <span class="text-muted  text-end">{{ product.price }} &#8381;</span>

                        </div>

                    </li>
                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success col-7">
                            <strong class="my-0">Ваша скидка по программе лояльности составила {{
                                    discount_percent
                                }}%</strong>
                            <br>
                        </div>
                        <span class="text-success col-5 text-end">−{{ discount }} &#8381;</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Всего (Рублей)</span>
                        <strong>{{ amount }} &#8381;</strong>
                    </li>
                </ul>
                <ul class="list-group mb-3" v-else>
                    <li class="list-group-item d-flex justify-content-between">
                        <strong class="my-0">Ваша корзина пуста</strong>
                    </li>
                </ul>
            </div>
            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Данные для доставки</h4>
                <form @submit.prevent="sendData" class="needs-validation" novalidate="">
                    <input type="hidden" name="_token" :value="csrf">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">Имя</label>
                            <input type="text" class="form-control bg-light" id="firstName"
                                   required="" v-model="user_data.first_name">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Имя"
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Фамилия</label>
                            <input type="text" class="form-control bg-light" id="lastName"
                                   required="" v-model="user_data.last_name">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Фамилия"
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="secondName" class="form-label">Отчество</label>
                            <input type="text" class="form-control bg-light" id="secondName"
                                   required="" v-model="user_data.second_name">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Отчество"
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control bg-light" id="email" v-model="user.email">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "email"
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="address" class="form-label">Адрес доставки</label>
                            <input type="text" class="form-control bg-light" id="address"
                                   required="" v-model="user_data.address">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Адрес доставки"
                            </div>
                        </div>


                        <div class="col-md">
                            <label for="zip" class="form-label">Почтовый индекс</label>
                            <input type="text" class="form-control bg-light" id="zip" placeholder="" required=""
                                   v-model="user_data.zip_code">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Почтовый индекс"
                            </div>
                        </div>
                    </div>


                    <hr class="my-4">

                    <h4 class="mb-3">Оплата</h4>

                    <div class="my-3">
                        <div class="form-check">
                            <input id="bank_card" value="Банковской картой" v-model="payment.method"
                                   name="paymentMethod" type="radio"
                                   class="form-check-input bg-light"
                                   required="" @click="radioButton(true)">
                            <label class="form-check-label" for="bank_card">Банковской картой</label>
                        </div>
                        <div class="form-check">
                            <input id="cash" value="Наличными" v-model="payment.method" name="paymentMethod"
                                   type="radio"
                                   class="form-check-input bg-light"
                                   @click="radioButton(false)" required="">
                            <label class="form-check-label" for="cash">Наличными</label>
                        </div>
                    </div>

                    <div class="row gy-3" v-if="card_data === true">
                        <div class="col-md-6">
                            <label for="cc-name" class="form-label">Имя держателя карты</label>
                            <input type="text" v-model="payment.card_holder" class="form-control bg-light" id="cc-name"
                                   placeholder="" required="">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Имя держателя карты"
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="cc-number" class="form-label">Номер карты</label>
                            <input type="text" v-model="payment.card_number" class="form-control bg-light"
                                   id="cc-number" placeholder="1111 2222 3333 4444" required="" maxlength="19"
                                   minlength="19">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Номер карты"
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="cc-expiration" class="form-label">Срок действия карты</label>
                            <input type="text" class="form-control bg-light w-50" id="cc-expiration"
                                   placeholder="ММ/ГГ"
                                   required="" maxlength="4" minlength="4">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "Срок действия карты"
                            </div>
                        </div>

                        <div class="col-md-3">
                            <label for="cc-cvv" class="form-label">CVV</label>
                            <input type="password" class="form-control bg-light" id="cc-cvv" maxlength="3" minlength="3"
                                   placeholder="" required="">
                            <div class="invalid-feedback">
                                Вы не заполнили поле "CVV"
                            </div>
                        </div>
                    </div>

                    <hr class="my-4">

                    <button class="w-100 btn btn-primary btn-lg" @click="checkFormValidation" type="submit"
                            v-if="products.length !== 0">Оплатить
                    </button>
                    <button class="w-100 btn btn-primary btn-lg" @click="checkFormValidation" type="submit" v-else
                            disabled>Оплатить
                    </button>
                </form>
            </div>
        </div>
        <div v-else>
            <strong>
                Для просмотра корзины Вы должны быть авторизованы.
            </strong>
            <router-link to="/login" class="text-login">Войти</router-link>
        </div>
    </div>
</template>
<script>
import vSeparation from '@/components/v-separation.vue'
import store from '@/store'
import axios from "axios";

export default {
    name: 'ShoppingCartView',
    components: {
        vSeparation
    },
    data() {
        return {
            role: store.state.user.role,
            user: store.state.user.data,
            card_data: false,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            user_data: {},
            payment: {},
            products: store.state.shopping_cart,
            amount: 0,
            discount_percent: 0,
            discount: 0
        }
    },
    methods: {
        checkFormValidation() {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        },
        radioButton(boolean) {
            this.card_data = boolean;
        },
        deleteFromCart(product) {

            store.commit('deleteProductFromCart', product);
            this.amountOfPrice();
        },
        amountOfPrice() {
            let self = this;
            self.amount = 0;
            self.products.forEach(element => self.amount += element.price);
            if (self.user_data.order_amount < 20000)
                self.discount_percent = 0;
            else if (self.user_data.order_amount < 50000)
                self.discount_percent = 3;
            else if (self.user_data.order_amount < 100000)
                self.discount_percent = 5;
            else if (self.user_data.order_amount < 150000)
                self.discount_percent = 8;
            else self.discount_percent = 12;
            self.discount = self.amount * self.discount_percent / 100
            self.amount -= self.discount;
        },
        sendData() {
            store.state.shopping_cart.forEach(element => {
                if (element.is_available === 0)
                    this.deleteFromCart(element)
                    })
            axios.post('/api/cart', {
                'user_data': this.user_data,
                'amount': this.amount,
                'user': this.user,
                'payment': this.payment,
                'products': this.products
            }).then(function (response) {
                store.commit('clearCart');
            })
        }

    },
    async mounted() {
        let self = this;

        if (store.state.user.role === 'user') {

            await axios.get('/api' + window.location.pathname + '/' + store.state.user.data.id).then(function (response) {
                self.user_data = response.data;

            });
            this.amountOfPrice()
        }

    }
}
</script>
<style lang="scss">
.orders {
    font-size: 18px !important;
}

.form-check {

    min-height: 0 !important;

    &-label {
        font-size: 20px !important;
    }

    &-input {
        width: 20px !important;
        height: 20px !important;
        background-color: #C4C4C4 !important;

        &:checked {
            background-color: $add-color !important;
        }
    }
}

.text-login {
    color: $add-color;
}

.text-login:hover {
    color: $black;
}

</style>
