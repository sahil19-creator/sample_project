console.log("i am in components")
Vue.component('maker',{
    template : '<section class="dashboard_area "><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div><div class=l_cont ><div class="data_container "><div class="date_box ">3/2020/21</div><div class="detail_contianer ml-5"><strong class="link_headings"></strong><a href="view/">Named Routes</a><strong>&mdash;</strong>aSometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations.</div> </div></section>'
 });
 Vue.component('heade',{
   template:'<div class="header"> <div class="abt"><a href="#">Sahil abouts</a><span>Blogs and writings</span></div><div class="link"><ul class="nv-links"><li>blog</li><li>Archieve</li><li>tags</li><li><button class="btn btn-primary" v-on:click="on_off"><span v-if="show">on </span><span v-else> off  </span>Button</button></li></ul>  </div></div>',
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
Vue.component('currency_con',{
   template:'<div class="l_cont"><h3>Currency Convertor</h3><div class="data_container"><input v-model="dollars" type="text" placeholder="$"></input></div><p>In Rs:{{rupe}} </p></div> ',
   data(){
      return{dollars:0,rupee:0}
   },
   computed:{
      rupe:{
      get :function(){
        return parseInt(this.dollars)*75
      },
      set:function(dvalue){
         this.rupee=int(dvalue)*75
         console.log(this.rupee)
      }

   }}
});

var vm = new Vue({
   el:"#dash",


   data(){
      return{show:true}
   },
   methods:{
      on_off:function(){
         this.show=!this.show
      }
   }

});



