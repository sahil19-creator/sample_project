var app= new Vue({
    el:"#app",
    data:{
        form:{
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
        }
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
    components: {
        'home': {
           template: '<div>this is home</div>'
        }
     }
    


   })

