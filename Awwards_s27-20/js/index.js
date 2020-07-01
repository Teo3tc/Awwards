const app = new Vue({
  el: "#app",
  data: {
    src: "./img/Fd103392.jpg",
    tableaux: [
      {
        id: 0,
        title: "Soulage",
        img: "./img/Fd103392.jpg",
      },
      {
        id: 1,
        title: "Kandinsky",
        img: "./img/kandinsky.jpg",
      },
      {
        id: 2,
        title: "Polock",
        img: "./img/polock.jpg",
      },
    ],
  },
  methods: {
    mouseleave: function () {
      this.src = "";
    },
    showPhoto: function (e) {
      let image = document.querySelector("img");

      this.src = this.tableaux[e.target.getAttribute("id")].img;
      image.style.visibility = "visible";
      document.querySelector(".liste").addEventListener("mousemove", (e) => {
        image.style.transform = `translate3d(${e.clientX - 400}px, ${
          e.clientY - 300
        }px, 10px)`;
      });
    },
  },
});
