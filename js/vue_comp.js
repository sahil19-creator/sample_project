console.log("i am in components")
Vue.component('maker',{
    template : '<div><h1>This is coming from component</h1></div>'
 });
 var vm = new Vue({
    el: '#app',
    data:{
        firstname:"sjieij"
    }
 });