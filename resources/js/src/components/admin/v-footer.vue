<template>
    <footer class="v-footer bg-black">
        <div class="container  pt-4">
            <div class="footer row">
                <div class="d-flex col-6 flex-column text-center">
                    <h5 class="footer__sub-category">Каталог</h5>
                    <div class="footer__catalog d-flex justify-content-around">
                        <div class="col-4 d-flex flex-column align-items-center">
                            <router-link class="text-light mb-2" to="/admin/category/acoustic-guitars">
                                Акустические гитары
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/electric-guitars">
                                Электрогитары
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/studio-headsets">
                                Студийные наушники
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/drum-kits">
                                Барабанные установки
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/synthesizers">
                                Синтезаторы
                            </router-link>
                        </div>
                        <div class="col-4 d-flex flex-column align-items-center">
                            <router-link class="text-light mb-2" to="/admin/category/studio-microphone">
                                Студийные микрофоны
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/acoustic-systems">
                                Акустические системы
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/guitar-amplifiers">
                                Усилители для гитар
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/strings">
                                Струны
                            </router-link>
                            <router-link class="text-light mb-2" to="/admin/category/guitar-accessories">
                                Аксессуары для гитар
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="footer__user col-6 d-flex flex-column  text-center">
                    <h5 class="footer__sub-category">Администратору</h5>
                    <router-link class="text-light mb-3" to="/admin/profile-management">
                        Управление аккаунтами
                    </router-link>
                    <router-link class="text-light mb-3" to="/admin/order-management">
                        Управление заказами
                    </router-link>
                    <router-link class="text-light mb-5" to="/admin/feedback">
                        Обратная связь
                    </router-link>
                </div>
            </div>
            <div class="footer__info bottom-0 text-center">Mus-store © 2022</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "v-footer"
}
</script>

<style lang="scss">

.v-footer {
    margin-top: 30px;
    position: relative;
    bottom: 0;
    height: 100%;
}

.footer {
    width: 100%;
    position: relative;

    &__sub-category {
        color: $main-color;
        margin: 0 0 20px 0;
    }

    &__info {
        color: $main-color;
    }

    &__catalog {
        a {
            &.text-light:hover {
                color: $add-color !important;
            }
        }
    }

    &__user {
        a {
            &.text-light:hover {
                color: $add-color !important;
            }
        }
    }
}

</style>
