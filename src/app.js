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
        topSellers: [
            {
                name: 'Transport cage',
                url: '/dist/img/product-21-400x400.jpg',
                price: '25.00',
                offPrice: false,
            },
            {
                name: 'Dog leash',
                url: '/dist/img/product-20-400x400.jpg',
                price: '25.00',
                offPrice: false,
            },
            {
                name: 'Animal transport cage',
                url: '/dist/img/product-16-400x400.jpg',
                price: '35.00',
                offPrice: '25.00',
            },
            {
                name: 'Colorful cat leash',
                url: '/dist/img/product-11-400x400.jpg',
                price: '12.00',
                offPrice: false,
            },
        ],
        reviews: [
            {
                url: './dist/img/avatar-3-200x200.jpg',
                name: 'Lisa Smith',
                theme: 'ThemeFusion',
                description: 'Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.',
            },
            {
                url: './dist/img/avatar-1-200x200.jpg',
                name: 'Melissa Green',
                theme: 'ThemeFusion',
                description: 'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.',
            },
            {
                url: './dist/img/avatar-4-200x200.jpg',
                name: 'Sam Lewis',
                theme: 'ThemeFusion',
                description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor rius vestibulum ante ipsum.',
            },
        ],
    },
    methods: {

    },
})