const vm = new Vue({
    el:"#app",
    data:{

    },
    methods:{
        openMenu(e){
            let $nav = document.querySelector(".nav");
            $nav.classList.toggle("opened");
        }
    }
})