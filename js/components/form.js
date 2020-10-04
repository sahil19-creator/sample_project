Vue.component('form23',{
    template:' <div class=" container " ><div class="row"><div class="col-12 mx-auto "><div class=" mx-auto  d-flex mt-4 flex-column justify-content-center align-items-center form-group "><h1>Add New Data</h1></div><div class=" mx-auto  d-flex mt-4 flex-column justify-content-center align-items-center form-group "><input v-bind:style="{borderColor:form.error_list.name_class}" class="col-6  form-control" type="text" v-model="form.name" placeholder="enter name" /></div><div class=" mx-auto  d-flex  flex-column justify-content-center align-items-center form-group "><input  v-bind:style="{borderColor:form.error_list.email_class}"  class="col-6  form-control" type="text"  v-model="form.email" placeholder="enter Email" /></div><div class=" mx-auto  d-flex  flex-column justify-content-center align-items-center form-group "><input  v-bind:style="{borderColor:form.error_list.contact_class}"  class="col-6  form-control" type="text"  v-model="form.contact" placeholder="enter contact" /></div><div class=" mx-auto  d-flex  flex-column justify-content-center align-items-center form-group  "><input v-bind:style="{borderColor:form.error_list.department_class}" class="col-6 form-control" type="text"  v-model="form.department" placeholder="enter Department" /><button class="btn btn-primary mt-8"   v-on:click="save_data">Submit</button></div></div></div></div>'
});
var vm= new Vue({
    el:"#app",   
    data(){
        return {form:{
            name:"",
            email:"",
            contact:"",
            department:"",
            have_error:0,
            error_list:{
                name_class:"",
                email_class:"",
                contact_class:"",
                department_class:""
            }
        }}
    },methods:{
        save_data:function(){
            if(this.form.name==""){
                this.form.have_error+=1
                this.form.error_list.name_class="red"
            }
            else{
             
                this.form.error_list.name_class=""
          
            }
            if(this.form.email==""){
               this.form.have_error+=1
              this.form.error_list.email_class="red"
            }
            else{
                this.form.error_list.email_class=""
     
            }
            if(this.form.contact==""){
                this.form.have_error+=1
                this.form.error_list.contact_class="red"
            }
            else{
                
                this.form.error_list.contact_class=""
          
            }
             if(this.form.department==""){
                this.form.have_error+=1
                this.form.error_list.department_class="red"
            }
            else{
            
               
                this.form.error_list.department_class=""
          
            }
            console.log("number of errors",this.form.have_error)
            this.form.have_error=0
          
          

        }
    },
});