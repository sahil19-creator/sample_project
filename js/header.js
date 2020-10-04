console.log("i am in my header")
Vue.component('heade',{
    template:'<section> <div class="header"> <div class="abt"><a href="">Sahil abouts </a> Thought and writings</div><div class="link"><ul class="nv-links"><li><router-link to="/archive">archive</router-link></li><li><router-link to="/">blog</router-link></li><li><router-link to="/tags">tags</router-link></li><li><router-link v-if="show" to="form">form</router-link></li><li><button v-on:click="change" class="btn btn-primary"><span v-if="{{show}}">close Form</span> <span v-else>Open form</span></button></li></ul></div></div>  </section>'
});


var vm=new Vue({
    el:'#dash',
    data(){
        return{show:true}

    },
    methods:{
        change(){
            this.show=!this.show
        }
    }
})