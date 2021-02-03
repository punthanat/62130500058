const app = {
    data() {
        return {
            firstName: 'Punthanat',
            lastName: 'Ularnwiriyanont',
            img: "./images/1.jpg",
            date: "Nov 2018",
            follow: 451,
            post: 5,
            comments: 45,
            favorites: 15,
            shown: true,

        }
    },


}
mountedApp = Vue.createApp(app).mount('#app')
