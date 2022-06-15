<template>
    <div class="container ">
        <v-separation :title=title />
        <div class="raw">
            <div class="d-flex flex-wrap align-content-center justify-content-between">
                <div class="col-lg-3">
                    <div class="sidebar">
                        <router-link :to="path +'/add-product'">
                            <button class="d-flex justify-content-center btn">Добавить товар</button>
                        </router-link>
                        <form @submit.prevent="findDataBySideBar">
                            <input type="hidden" name="_token" :value="csrf">
                            <h5 class="sidebar__subtitle text-center">
                                <strong>Сортировать товар по</strong>
                            </h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="sortByPrice" value="asc" id="asc">
                                <label class="form-check-label" for="asc">
                                    Увеличение цены
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="sortByPrice" value="desc"
                                       id="desc">
                                <label class="form-check-label" for="desc">
                                    Убыванию цены
                                </label>
                            </div>
                            <h5 class="sidebar__subtitle text-center">
                                <strong>Наличие товара</strong>
                            </h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="checkedAvailable"
                                       value="available" id="available">
                                <label class="form-check-label" for="available">
                                    Есть в наличии
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="checkedAvailable"
                                       value="not-available" id="not-available">
                                <label class="form-check-label" for="not-available">
                                    Нет в наличии
                                </label>
                            </div>
                            <h5 class="sidebar__subtitle text-center">
                                <strong>Тип</strong>
                            </h5>
                            <div class="form-check" v-for="type in types" :key="type.id">
                                <input class="form-check-input" type="checkbox" v-model="checkedTypes"
                                       :value="type.text"
                                       :id="type.name">
                                <label class="form-check-label" :for="type.name">
                                    {{ type.text }}
                                </label>
                            </div>
                            <h5 class="sidebar__subtitle text-center">
                                <strong>Бренд</strong>
                            </h5>
                            <div class="form-check" v-for="brand in brands" :key="brand.id">
                                <input class="form-check-input" type="checkbox" v-model="checkedBrands" name="brand"
                                       :value="brand"
                                       :id="brand.replace(/\s/g, '')">
                                <label class="form-check-label" :for="brand.replace(/\s/g, '')">
                                    {{ brand }}
                                </label>
                            </div>
                            <h5 class="sidebar__subtitle text-center">
                                <strong>Цена</strong>
                            </h5>

                            <input class="from-price-item" type="text" name="from-price" v-model="lowestPrice"
                                   placeholder="От" size="6">
                            -
                            <input class="to-price-item" type="text" name="to-price" v-model="highestPrice"
                                   placeholder="До" size="6">
                            <div class="d-flex justify-content-between">
                                <button type="submit" class="btn">Найти</button>
                                <button type="button" @click="resetData" class="btn me-1" v-if="isSideBar">Отменить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-9 col-12 elements_market">
                    <div class="row">
                        <div class="product__content d-flex justify-content-around text-center">
                            <div class="col-3">
                                Название
                            </div>
                            <div class=" col-3">
                                Цена
                            </div>
                            <div class="col-3 ">
                                Количество товара
                            </div>
                        </div>
                    </div>
                    <div class="horizontal-line"></div>
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
    name: 'ProductCatalog',
    components: {
        vSeparation,
        vElementOfMarket,
        vListing
    },
    methods: {
        findData() {
            let self = this;
            axios.get('/api' + window.location.pathname.replace('/admin','')).then(function (response) {
                self.info = response.data;
            });
        },
        findDataBySideBar() {
            let self = this;
            axios.post('/api' + window.location.pathname.replace('/admin',''), {
                brands: this.checkedBrands,
                types: this.checkedTypes,
                available: this.checkedAvailable,
                lowestPrice: this.lowestPrice,
                highestPrice: this.highestPrice,
                sort: this.sortByPrice
            }).then(function (response) {
                self.info = response.data;
                self.isSideBar = true;
            });
        },
        resetData() {
            this.isSideBar = false;
            this.findData();
            this.checkedBrands = [];
            this.checkedTypes = [];
            this.checkedAvailable = [];
            this.lowestPrice = [];
            this.highestPrice = [];
            this.sortByPrice = []
        },
        getCurrentPage(data) {
            this.currentPage = data - 1
        },
    },
    data() {
        return {
            path:window.location.pathname,
            info: [],
            title: null,
            brands: [],
            types: [],
            checkedBrands: [],
            checkedTypes: [],
            checkedAvailable: [],
            lowestPrice: [],
            highestPrice: [],
            sortByPrice: [],
            currentPage: 0,
            isSideBar: false,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },
    mounted() {
        let self = this;
        self.findData();
        axios.get('/api' + window.location.pathname.replace('/admin','') + '/get-title').then(function (response) {
            self.title = response.data;
        });
        axios.get('/api' + window.location.pathname.replace('/admin','') + '/get-brands').then(function (response) {
            self.brands = response.data;
        });
        axios.get('/api' + window.location.pathname.replace('/admin','') + '/get-types').then(function (response) {
            self.types = response.data;
        });
    }
}

</script>

<style lang="scss">




div.col-lg-3 {
    border-right: 3px solid $add-color;
    height: 100%;
    border-radius: 3px;
}

.sidebar__subtitle {
    margin: 20px 0;
}

.from-price-item, .to-price-item {
    border: 2px solid $add-color;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
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
</style>
