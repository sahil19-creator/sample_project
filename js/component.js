console.log("i am in components")
var maker=Vue.component('maker',{
    template : '<section class="dashboard_area "><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div></section>'
 });
 Vue.component('heade',{
   template:'<div class="header" id="app"> <div class="abt"><a href="#">Sahil abouts</a><span>Blogs and writings</span></div><div class="link"><ul class="nv-links"><li><router-link to=/>blog</router-link></li><li><router-link to=currency_conv>Currency app</router-link></li><li>tags</li><li><button class="btn btn-primary" v-on:click="on_off"><span v-if="show">on </span><span v-else> off  </span>Button</button></li></ul></div>  </div>',
   data(){
      return{show:true}
   },
   methods:{
      on_off:function(){
         this.show=!this.show
      }
   }
}
);


const foot=Vue.component('foot',{
   template:' <footer ><div class="endFooter"><span>© Copyright 2020 by Armin Ronacher.</span><span> Content licensed under the Creative Commons attribution-noncommercial-sharealike License.</span><span> Contact me via mail, twitter, github or bitbucket.</span><span> More info: imprint. Subscribe to Atom feed (or RSS)</span></div></footer>   '
});
const currency_con=Vue.component('currency_con',{
   template:'<div><div class="l_cont"><h3>Currency Convertor</h3><div class="main_cont"><div class="box1 abc"><p><strong> Enter Dollars</strong></p><p>  <input type="text" v-model="dollars"/></p> <p><input type="text" v-if="d_rs>0" v-model="d_rs" readonly/></p></div><div class="box2 abc"> <p><strong> Enter chinese</strong></p><p> <input  v-model="chineseyan" type="text"/></p> <p><input v-if="c_rs>0" v-model="c_rs" type="text" readonly/></p></div><div class="box3 abc"><p><strong>Enter Japanas</strong></p><p><input type="text" v-model="Japanas" placeholder="euro"/></p> <p><input v-if="j_rs>0" v-model="j_rs" type="text" readonly/></p></div><div class="box4 abc"><p><button v-on:click="addition" class="btn btn-alert">Bill</button></p> </div><div class="box5 abc"><p><input v-if="total>0" v-model="total"  type="text" readonly/></p> </div></div></div></div> ',
   data(){
      return{
         dollars:0,
         Japanas:0,
         chineseyan:0,
         total:0
                  }
   },
   computed:{
     d_rs:function(){
        return parseInt(this.dollars)*75
      },
      j_rs:function(){
         return parseInt(this.Japanas)*0.70
      },
      c_rs:function(){
         return parseInt(this.chineseyan)*10.80
      }

   
   },
   methods:{
      addition:function(){
      this.total=parseInt(this.d_rs+this.j_rs+this.c_rs)
      console.log(this.total)
      }
   }
});
var routes=[
   {
      path:"/currency_conv",
      component:currency_con
   },
   {
      path:"/",
      component:maker
   },
   {
      path:"dashboard",
      component:maker
   }
]

var router=new VueRouter({
   routes,
  
})


var vm = new Vue({
   el:"#dash",
   router,

   data(){
      return{show:true}
   },
   methods:{
      on_off:function(){
         this.show=!this.show
      }
   }

});



