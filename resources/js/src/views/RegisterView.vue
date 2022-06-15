<template>
    <div class="container">
        <v-separation title="Регистрация"/>
        <div class="row justify-content-sm-center h-100">
            <div class="col-7">
                <div class="card shadow-lg">
                    <div class="card-body p-5">
                        <div class="alert" role="alert" v-text="msg">
                        </div>
                        <form @submit.prevent="sendData" class="needs-validation" novalidate="" autocomplete="off">
                            <input type="hidden" name="_token" :value="csrf">
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="username">Username</label>
                                <input id="username" type="text" class="form-control bg-light" name="username"
                                       required=""
                                       autofocus="" v-model="form.username">
                                <div class="invalid-feedback">
                                    Введите Username
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email">E-Mail</label>
                                <input id="email" type="email" class="form-control bg-light" name="email"
                                       required="" v-model="form.email">
                                <div class="invalid-feedback">
                                    Email неправильный
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="password">Пароль</label>
                                <input id="password" type="password" class="form-control bg-light" name="password"
                                       required="" v-model="form.password">
                                <div class="invalid-feedback">
                                    Введите пароль
                                </div>
                            </div>

                            <div class="align-items-center d-flex">
                                <button type="submit" @click="checkFormValidation()" class="btn btn-primary ms-auto">
                                    Зарегистрирваться
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer py-3 border-0">
                        <div class="text-center">
                            Уже есть учётная запись?
                            <router-link to="/login" class="text-form">Войти</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import vSeparation from '@/components/v-separation.vue'

export default {
    name: 'RegisterView',
    components: {
        vSeparation
    },
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            msg: '',
            form: {
                username: '',
                email: '',
                password: ''
            }
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
        sendData() {
            let self = this;
            axios.post('/api/register/send_data', this.form).then(function (response) {
                self.msg = response.data;
            }).catch(function (err) {
                self.msg =err.response.data.error;
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
