<template>

   <div class="content">
       <div class="content-sidebar">
       <SideBar/>
   
       </div>
       <section class="main-content">

         <div class="content-container">
             <div class="content-img"> <img :src="content.LandscapeImage" alt=""></div>
             <div class="content-text" >
                 <h2>{{content.Title}}</h2>
                 <p>{{content.Summary}}</p>
                 <h4>{{content.Properties[1].Name}}: {{content.Properties[1].Value}}</h4>
                 <h4>{{content.Properties[2].Name}}: {{content.Properties[2].Value}}</h4>
                 <h4>{{content.Properties[3].Name}}: {{content.Properties[3].Value}}</h4>
                 <h4>{{content.Properties[5].Name}}: {{content.Properties[5].Value}}</h4>
                 <h4>{{content.Properties[6].Name}}: {{content.Properties[6].Value}}</h4>
                 <h4>{{content.Properties[7].Name}}: {{content.Properties[7].Value}}</h4>
                 <h4>{{content.Properties[8].Name}}: {{content.Properties[8].Value}}</h4>
                 <h4>{{content.Properties[9].Name}}: {{content.Properties[9].Value}}</h4>
                 <h4>{{content.Properties[10].Name}}: {{content.Properties[10].Value}}</h4>
                 <h4>{{content.Properties[12].Name}}: {{content.Properties[12].Value}}</h4>
                 <h4>{{content.Properties[13].Name}}: {{content.Properties[13].Value}}</h4>
                 <h4>{{content.Properties[15].Name}}: {{content.Properties[15].Value}}</h4>
              
             </div>
         </div>
       </section>
    
   </div>


</template>

<script>

import SideBar from '../../components/Sidebar.vue'
import { useRoute } from 'vue-router';
 import { ref } from '@vue/reactivity';
export default {
components :{
    SideBar
},


setup() {
    
  const content = ref ();
    function getContent(){
        const currentRoute = useRoute();
       fetch('https://apitest.tek-nic.com/GetContent' , {
            method : 'post',
            body : JSON.stringify({
                request:{
                    RequestID: currentRoute.params.id
                }
            }),
         })
        .then(response => response.json())
        .then(datac =>  
         content.value= datac.result);

    }
    getContent();
    return{content};

    }
   
}

</script>


<style>
.content { 
    display: flex;
    flex-direction: row-reverse;
    margin-top: 3.5rem;
}
.content-sidebar {
margin-right: 4rem;
}
.main-content {
    width: 100%;
    margin-left: 4rem;
    margin-right: 1rem;
    direction: rtl;
}

.content-img img{
display: block;
width: 80rem;
height: 46.5rem;
margin: 0 auto;


}
.content-text {
    display: block;
    width: 80rem;
    margin: 3rem auto;
}
.content-text h2, p, h4 {
    margin-bottom: 1rem;
 
}
.content-text h2 {
    font-size: 1.8rem;
}
.content-text p {
    font-size: 1.4rem;
    line-height: 2rem;
}
.content-text h4 {
    font-size: 1.2rem;
}


</style>