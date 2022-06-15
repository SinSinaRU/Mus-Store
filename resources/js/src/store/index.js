import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({isCompression: false});
export default createStore({
    state: {
        user: {
            data: {},
            role: "guest"
        },
        recent_products: {
            data: {
                ['1']: {},
                ['2']: {},
                ['3']: {},
                ['4']: {}
            }
        },
        shopping_cart: []
    },
    getters: {},
    mutations: {
        isAdmin: state => state.user.role = 'admin',
        isUser: state => state.user.role = 'user',
        recentProducts(state, product_data) {
            if (state.recent_products.data["1"].id === product_data.id) {
            } else if (state.recent_products.data["2"].id === product_data.id) {
                state.recent_products.data["2"] = state.recent_products.data["1"];
                state.recent_products.data["1"] = product_data;
            } else if (state.recent_products.data["3"].id === product_data.id) {
                state.recent_products.data["3"] = state.recent_products.data["2"];
                state.recent_products.data["2"] = state.recent_products.data["1"];
                state.recent_products.data["1"] = product_data;
            } else {
                state.recent_products.data["4"] = state.recent_products.data["3"];
                state.recent_products.data["3"] = state.recent_products.data["2"];
                state.recent_products.data["2"] = state.recent_products.data["1"];
                state.recent_products.data["1"] = product_data;
            }
        },
        login(state, user_data) {
            state.user.data = user_data;
        },
        logout: state => {
            state.user.data = {};
            state.user.role = 'guest'
        },
        addingToCart(state, product_data) {
            state.shopping_cart.push(product_data);
        },
        deleteProductFromCart(state, product) {
            state.shopping_cart.splice(state.shopping_cart.indexOf(product), 1);
        },
        clearCart: state => state.shopping_cart = []
    },
    actions:
        {},
    modules: {},
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        }),
    ],
})
