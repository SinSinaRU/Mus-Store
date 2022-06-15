<template>
    <div class="container">
        <v-separation title="Восстановить пароль"/>
        <div class="row justify-content-sm-center h-100">
            <div class="col-7">
                <div class="card shadow-lg">
                    <div class="card-body p-5">
                        <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email">E-Mail</label>
                                <input id="email" type="email" class="form-control bg-light" name="email" value=""
                                       required="" autofocus="">
                                <div class="invalid-feedback">
                                    Email неправильный
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <button type="submit" @click="checkFormValidation()" class="btn btn-primary ms-auto">
                                    Отправить пароль
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer py-3 border-0">
                        <div class="text-center">
                            Помните ваш пароль?
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
    name: 'ForgotPasswordView',
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
