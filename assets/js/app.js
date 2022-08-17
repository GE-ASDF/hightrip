const vm = new Vue({
    el:"#app",
    data:{
        menuAtivo: false,
    },
    methods:{
        openMenu(){
            this.menuAtivo = !this.menuAtivo
        },
        fecharMenu({target, currentTarget}){
            if(target === currentTarget){
                this.menuAtivo = !this.menuAtivo
            }
        }
    }
})