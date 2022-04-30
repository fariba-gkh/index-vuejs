
<template >
      <div class="slide-container" >
         <div  class="slide" v-for="data1  in datas1" :key="data1.ContentID">
            <img  :src="data1.LandscapeImage" >
            <div class="slide-text" >
                <h1>{{data1.Title}}</h1>
                <p>{{data1.Summary}}</p>
              
            </div>
         </div>
      </div>
  
</template>
    
<script>

export default {
name : "SecondSection",
props : ['datas1']
}
</script>

<style>

.slide-container {
    display: grid;
    grid-template: repeat(2, 20rem) / repeat(2, 47rem);
    gap: 30px;
    align-content: center;
    justify-content: center;
    margin-top: 30px;
}

.slide {
    position: relative;
    direction: rtl;
}
.slide-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    text-transform: uppercas;
    padding-top: 10rem;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0));
}
.slide img {
    width: 470px;
    height: 200px;
    object-fit: fill;
}
 
.slide-text h1 {
    font-size: 2rem;
    font-weight: 300;
    word-spacing: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 20px; 
}
.slide-text p {
    font-size: small;
    color: #e41f43;
    padding: 0 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 1rem;
}

</style>