<template>
    <div class="container ">
        <v-separation title="Управление аккаунтами"/>
        <div class="d-flex text-center">
            <div class="col-3">
                Email
            </div>
            <div class="col-3">
                Дата регистрации
            </div>
            <div class="col-3">
                Роль
            </div>
        </div>
        <div class="horizontal-line"></div>
        <div>
            <div v-for="n in 5">
                <div v-if="info[currentPage*5+n-1]">
                    <v-element-of-profile-management :data="info[currentPage*5+n-1]"/>
                </div>
            </div>
            <v-listing :max_page="Math.ceil(info.length / 5)" @current_page="getCurrentPage"/>
        </div>
    </div>
</template>

<script>
import vListing from '@/components/v-listing.vue'
import vSeparation from '@/components/v-separation.vue'
import vElementOfProfileManagement from '@/components/admin/v-element-of-profile-management.vue'
import axios from 'axios';

export default {
    name: 'ProfileManagement',
    components: {
        vSeparation,
        vElementOfProfileManagement,
        vListing
    },
    data() {
        return {
            info: [],
            currentPage: 0,
        }
    },
    mounted() {
        let self = this;
        axios.get('/api' + window.location.pathname).then(function (response) {
            self.info = response.data;
        });

    },
    methods: {
        getCurrentPage(data) {
            this.currentPage = data - 1
        }
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
</style>
