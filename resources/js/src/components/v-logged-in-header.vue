<template>
    <header class="v-header">

        <nav class="navbar navbar-expand-lg navbar-dark bg-black sticky-top" style="padding: 0;">
            <router-link class="logo" to="/">
                <img src="../assets/Images/logo.jpg" alt="Mus-store" style="height: 70px; width: auto; padding: 0">
            </router-link>

            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" id="navbarDarkDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Каталог
                            </a>
                            <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li>
                                    <router-link class="dropdown-item" to="/category/acoustic-guitars">Акустические
                                        гитары
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/electric-guitars">Электрогитары
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/studio-headsets">Студийные
                                        наушники
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/drum-kits">Барабанные установки
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/synthesizers">Синтезаторы
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/studio-microphone">Студийные
                                        микрофоны
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/acoustic-systems">Акустические
                                        системы
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/guitar-amplifiers">Усилители для
                                        гитар
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/strings">Струны</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/category/guitar-accessories">Аксессуары для
                                        гитар
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">О компании</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link class="nav-link" to="/shopping-cart">Корзина</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="'/profile/'+user.id">Профиль</router-link>
                        </li>
                    </ul>
                    <div class="nav-item">
                        <div class="find-item">
                            <input class="col-9" type="search" name="Find" v-model="searchLabel" placeholder="Поиск..."
                                   size="30">
                            <router-link :to='"/search/"+searchLabel'>
                                <button class="col-3" type="submit"><span class="material-icons">search</span></button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import store from '@/store';

export default {
    name: "v-logged-in-header",
    data() {
        return {
            user: store.state.user.data,
            searchLabel: ''
        }
    }
}
</script>

<style lang="scss">
.nav-link {
    color: $main-color !important;

    &:hover,
    &:focus {
        color: $add-color !important;
    }
}

.v-header {
    border-bottom: 2px solid $add-color;
}

.nav-item {
    display: flex;
    align-items: center;
    height: 70px !important;
    border-left: 2px solid $add-color;
}

.nav-link {
    margin: 0;
    width: 159px;
    text-align: center;
}

.logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;

}

.dropdown-toggle::after {
    display: none !important;
}

.dropdown-item {
    border-bottom: 2px solid $add-color !important;
    margin: 5px 0 5px 0 !important;
    padding: 0 !important;
    text-align: center !important;

    &:active {
        background-color: $add-color !important;
    }
}

.find-item {
    margin: 20px 36px 20px 36px;
    background: #C4C4C4;
    width: 349px;
    border: 2px solid $add-color;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 5px 10px;

    > a > button[type="submit"] {
        border-left: 2px solid $add-color;
        border-right: none;
        border-top: none;
        border-bottom: none;
        height: 100%;
        background: #C4C4C4;
        color: $add-color;
    }
}

input[type="search"] {
    background: #C4C4C4;
    box-sizing: border-box;
    border: none;
    height: 100%;

    &:focus-visible {
        outline: none;
    }
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}

.navbar-toggler {
    margin-left: auto;
    margin-right: 10px;
}
</style>
