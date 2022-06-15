<template>
    <div class="container">
        <v-separation :title="info.name"/>
        <div class="row">
            <div class="main_info d-flex justify-content-between">
                <div class="card__img-content col-3">
                    <img class="card__img" :src="'/uploads/img/'+info.img_file"/>
                </div>
                <div class="col-6 card__text">
                    {{ info.short_text }}
                    <br>
                    <div id="full_text">
                    </div>

                </div>
                <div class="card__price-and-buy-button d-flex flex-column col-3 align-items-end">
                    <strong class="card__price mb-1">{{ info.price }} руб</strong>
                    <div class="card__ordering card__text mb-1">
                        Бесплатная доставка при заказе товара свыше 6000 руб
                    </div>
                    <div class="card__available mb-1" v-if="Number(info.is_available) > 0">
                        Есть в наличии
                    </div>
                    <div class="card__not-available mb-1" v-else>
                        Нет в наличии
                    </div>
                    <div class="card__code card__text mb-1">
                        артикул: {{ info.id }}
                    </div>

                    <button class="card__buy-button btn" v-if="Number(info.is_available) > 0" @click="buyButton"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-window">Купить
                    </button>
                    <button class="card__buy-button btn" v-else disabled>Купить</button>
                </div>
            </div>
        </div>

        <v-separation title="Характеристики"/>
        <div class="card__specs row">
            <div class="card__name-specs col-6 d-flex flex-column">
                <strong class="mb-2">
                    Бренд
                </strong>
                <strong class="mb-2">
                    Тип
                </strong>
                <strong class="mb-2" v-for="spec_name in specs_name" :key="spec_name.id">
                    {{ spec_name.name }}
                </strong>
                <strong class="mb-2">
                    Страна производитель
                </strong>
            </div>
            <div class="card__name-specs col-6 d-flex flex-column">
                <div class="mb-2">
                    {{ specs['brand'] }}
                </div>
                <div class="mb-2">
                    {{ specs['type'] }}
                </div>
                <div class="mb-2" v-for="spec_name in specs_name" :key="spec_name.id">
                    {{ specs[spec_name.count_spec] }}
                </div>

                <div class="mb-2">
                    {{ specs['made_in'] }}
                </div>
            </div>
        </div>
        <div v-if="info.sound_file != null">
            <v-separation title="Звучание инструмента"/>
            <div class="row align-items-center">
                <button class="play col-1" @click="onClick">
                    <span class="material-icons" id="playButton">play_arrow</span>
                </button>
                <div class="col-11">
                    <vue-wave-surfer
                        v-if="isMounted"
                        :src="'/uploads/audio/'+info.sound_file"
                        :options="waveOptions"
                        ref="wavsur"></vue-wave-surfer>
                </div>

            </div>
        </div>

        <v-separation title="Отзывы"/>
        <v-review v-for="review in reviewData" :name="review.user_name" :score="review.score" :date="review.date" :text="review.text"/>
        <div class="review__form" v-if="isBought">
            <form @submit.prevent="sendReview()">
                <label for="score">Оценка</label>
                <select id="score"  class="ms-1" required v-model="review.score">
                    <option v-for="n in 5" :value="n">{{ n }}</option>
                </select>
                <br>
                <label for="review">Отзыв</label>
                <textarea class="w-100 p-1" id="review" rows="4" v-model="review.text"
                          required></textarea>
                <button type="submit" class="btn">Оставить отзыв</button>
            </form>
        </div>
        <div class="review__form" v-else>
            Мы не нашли этот товар в ваших покупках. Если вы его купили у нас, авторизуйтесь, чтобы оставить отзыв.
            <br>
            <router-link class="text-login" to="/login">Авторизоваться</router-link>
        </div>
    </div>
    <div class="modal" id="add-to-cart-window">
        <div class="modal-dialog modal-lg" v-if="role==='user'">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center">Вы добавили товар в корзину!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-center">Товар "{{ info.name }}" успешно добавлен в корзину.</p>
                    <p class="text-center">Хотите продолжить покупки?</p>
                </div>
                <div class="modal-footer  justify-content-between">
                    <button type="button" class="btn w-25" data-bs-dismiss="modal">Продолжить покупки</button>
                    <router-link class="w-25" to="/shopping-cart">
                        <button type="button" class="btn" data-bs-dismiss="modal">Перейти в корзину</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="modal-dialog modal-lg" v-else>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center">Ошибка</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-center">Для того чтобы добавить товар в корзину, требуется авторизоваться </p>
                </div>
                <div class="modal-footer  justify-content-between">
                    <button type="button" class="btn w-25" data-bs-dismiss="modal">Отмена</button>
                    <router-link class="w-25" to="/login">
                        <button type="button" class="btn" data-bs-dismiss="modal">Войти</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios"
import 'wavesurfer.js'
import VueWaveSurfer from "vue-wave-surfer/src/VueWaveSurfer"
import vReview from "@/components/v-review.vue"
import vSeparation from '@/components/v-separation.vue'
import store from '@/store'

export default {
    name: 'CardOfProduct',
    components: {
        vSeparation,
        VueWaveSurfer,
        vReview
    },
    data() {
        return {
            role: store.state.user.role,
            info: [],
            specs: [],
            specs_name: [],
            isMounted: false,
            isPlayed: false,
            isBought: false,
            review: {},
            reviewData: [],
            waveSurfer: {},
            waveOptions: {
                backgroundColor: "#FFF",
                mediaControls: true,
                waveColor: "rgba(255,153,0,0.4)",
                progressColor: "#FF9900FF",
                height: "60",
                fillParent: true,
                scrollParent: false
            }
        };
    },
    methods: {
        playCall() {
            this.$refs.wavsur.waveSurfer.setVolume(0.2);
            this.$refs.wavsur.waveSurfer.playPause();
        },
        changeButton() {
            let btn = document.getElementById('playButton');
            if (this.isPlayed === false) {
                this.isPlayed = true;
                btn.textContent = 'pause'
            } else {
                this.isPlayed = false;
                btn.textContent = 'play_arrow'
            }
        },
        onClick() {
            this.playCall();
            this.changeButton();
        },
        buyButton() {
            let self = this;
            if (store.state.user.role === 'user') {
                store.commit('addingToCart', self.info);
            }
        },
        sendReview() {

            let self = this;
            axios.post('/api' + window.location.pathname + '/send_review', {'reviewData':self.review,'username':store.state.user.data.username})
                .then(function (response) {
                    self.getReview();
                })
        },
        getReview() {
            let self = this;
            axios.get('/api' + window.location.pathname + '/get_reviews').then(function (response) {
                self.reviewData = response.data
                console.log(self.reviewData[0].date)
            })
        }
    },
    async beforeMount() {
        let self = this;
        await axios.get('/api' + window.location.pathname).then(function (response) {
            self.info = response.data[0];
            self.specs_name = response.data[1];
            self.specs = response.data[2];
            self.getReview();
        });
        if (store.state.user.role === 'user') {
            axios.post('/api' + window.location.pathname + '/check_for_review', store.state.user.data).then(function (response) {
                self.isBought = response.data;
            });
        }
        this.isMounted = true;
        document.getElementById('full_text').innerHTML = self.info.full_text;
        store.commit('recentProducts', self.info);
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
    border:$add-color;
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
