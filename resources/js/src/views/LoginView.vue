<template>
    <div class="container">
        <v-separation title="Авторизация"/>
        <div class="row justify-content-sm-center h-100">
            <div class="col-7">
                <div class="card shadow-lg">
                    <div class="card-body p-5">
                        <form @submit.prevent="sendData" class="needs-validation" novalidate="" autocomplete="off">
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email">E-Mail</label>
                                <input id="email" type="email" class="form-control bg-light" name="email"
                                       v-model="form.email"
                                       required=""
                                       autofocus="">
                                <div class="invalid-feedback">
                                    Неправильный email
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="mb-2 w-100">
                                    <label class="text-muted" for="password">Пароль</label>
                                    <router-link to="/forgot-password" class="float-end text-form">
                                        Забыли пароль?
                                    </router-link>
                                </div>
                                <input id="password" type="password" class="form-control bg-light" name="password"
                                       required="" v-model="form.password">
                                <div class="invalid-feedback">
                                    Введите пароль
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <button type="submit" @click="checkFormValidation()" class="btn ms-auto">
                                    Войти
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer py-3 border-0">
                        <div class="text-center">
                            Нет учётной записи?
                            <router-link to="/register" class="register text-form">Зарегистрируйтесь</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import vSeparation from '@/components/v-separation.vue'
import store from '@/store'
import router from "@/router";

export default {
    name: 'LoginView',
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            msg: '',
            form: {
                email: '',
                password: ''
            }
        }
    },
    components: {
        vSeparation
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
        sendData() {
            let self = this;
            axios.post('/api/login', this.form).then(function (response) {
                store.commit('login',response.data);
                if (store.state.user.data.isAdmin) {
                    store.commit('isAdmin');
                    router.push({name: 'homeAdmin'});
                } else {
                    store.commit('isUser');
                    router.push({name: 'homeUser'});
                }
            }).catch(function (err) {
                console.log(err.response.data.error)
            })
        }
    }
}
</script>
<style lang="scss">
.text-form {
    color: $add-color;
}

.text-form:hover {
    color: $black;
}



</style>
