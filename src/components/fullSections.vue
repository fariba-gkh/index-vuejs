
<template>
   <div class="home">
       <SideBar />
       <section class="main">
          <FirstSection :data="data" />
          <SecondSection :datas1="datas1" />
          <ThirdSection :datas3="datas3"/>
       </section>
    
   </div>

</template>

<script>
import SideBar from '../components/Sidebar.vue'
import FirstSection from './sectionOne.vue'
import SecondSection from './sectionTwo.vue'
import ThirdSection from '../components/sectionThree.vue' 

import { ref } from '@vue/reactivity';
const axios = require('axios').default;
export default {
    name : "FullSections",
    components : {
      SideBar,
      FirstSection,
      SecondSection,
      ThirdSection
    },
   
setup(){
 const data = ref();
 const datas1 = ref({});
 const datas3 = ref([]);

function getSlide(){
        axios.get('https://apitest.tek-nic.com/FirstPage')
  .then(function (response) {
    data.value =(response.data.result[0].list[0]);
    datas1.value = (response.data.result[1].list);
    datas3.value = (response.data.result[2].list);
    console.log( response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    
  });
    }
getSlide();
return {data , datas1 , datas3};

},
}
</script>

<style>

@font-face {
    font-family: 'arial';
    src: url('@/assets/css/fonts/Arial/arial-webfont.woff2') format('woff2'),
         url('@/assets/css/fonts/Arial/arial-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'arial';
    src: url('@/assets/css/fonts/Arial/arialbd-webfont.woff2') format('woff2'),
         url('@/assets/css/fonts/Arial/arialbd-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'arial';
    src: url('@/assets/css/fonts/Arial/arialmdm-webfont.woff2') format('woff2'),
         url('@/assets/css/fonts/Arial/arialmdm-webfont.woff') format('woff');
    font-weight: medium;
    font-style: normal;
}

*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5%;
}

body {
    background-color: #333333;
    height: 100vh;
}
h1,
h2,
h3,
h4,
p,
a {
    color: #ffffff;
    font-family: Arial;
}

.home { 
    display: flex;
    flex-direction: row;
    margin-top: 3.5rem;
}

</style>