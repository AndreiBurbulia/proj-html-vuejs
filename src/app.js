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
    },
    methods: {

    },
})