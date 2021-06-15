const app = new Vue({
    el: '#app',
    data: {
        voiceNavbar: [
            {
                name: 'Home',
                submenu: true,
            },
            {
                name: 'Shop',
                submenu: true,
            },
            {
                name: 'About',
                submenu: false,
            },
            {
                name: 'Blog',
                submenu: false,
            },
            {
                name: 'Contact',
                submenu: false,
            },
            {
                name: 'Shop by Brand',
                submenu: true,
            },

        ],
        category: [
            {
                url: './dist/img/product-9-300x300.jpg',
                name: 'Bed',
                number: '1',
            },
            {
                url: './dist/img/product-3-300x300.jpg',
                name: 'Food',
                number: '6',
            },
            {
                url: './dist/img/product-2-300x300.jpg',
                name: 'Toys',
                number: '6',
            },
            {
                url: './dist/img/product-4-300x300.jpg',
                name: 'Transport',
                number: '6',
            },
        ],
        typeOfFood: [
            {
                name: 'kibble',
                type: 'dry',
                url: '/dist/img/food-transparent-18-400x420.png',
            },
            {
                name: 'moist',
                type: 'manned',
                url: '/dist/img/food-transparent-17-400x420.png',
            },
            {
                name: 'frozen',
                type: 'freeze-dried',
                url: '/dist/img/food-transparent-16-400x420.png',
            },
        ],
    },
    methods: {

    },
})