const app = new Vue({
    el: "#app",
    data: {
        picture: 4,
        tableaux: [{
                id: 0,
                title: 'Soulage',
                img: './img/Fd103392.jpg'
            },
            {
                id: 1,
                title: 'Kandinsky',
                img: './img/kandinsky.jpg'
            },
            {
                id: 2,
                title: 'Polock',
                img: './img/polock.jpg'
            }

        ]
    },
    methods: {
        mouseleave: function () {
            this.picture = 4
        },
        showPhoto: function (e) {

            this.picture = e.target.getAttribute('id')

            document.querySelector('.liste').addEventListener('mousemove', (e) => {
                let image = document.querySelector('img');
                image.style.transform = `translate3d(${e.clientX - 400}px, ${e.clientY - 400}px, 10px)`
            })

        }
    }
})