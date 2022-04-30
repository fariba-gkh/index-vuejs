
<template>
   <div class="articles">
       <h2>featured articles</h2>
   </div>
   <div class="article-container">
       <div class="article-grid" v-for="data3 in datas3" :key="data3.ContentID" >
           <img :src="data3.LandscapeImage">
           <div class="article-title">
               <p>{{data3.Properties[5].Value}}</p>
               <h3>{{data3.Title}}</h3>
           </div>
       </div>
   </div>
    <div class="number-container">
               <a class="previous" href="">&laquo; <span>previous</span></a>
               <a href="">1</a>
               <a href="">2</a>
               <a href="">3</a>
               <a href="">4</a>
               <a href="">...</a>
               <a href="">10</a>
            <a class="next" href="#"> <span>next</span> &raquo;</a>
       </div>

</template>

<script>

export default {
name : "ThirdSection",
 props : ['datas3'],

}
</script>

<style>
.articles {
    background-color:#282828 ;
    width: 97rem;
    height: 45px;
    margin: 30px auto;
}
.articles h2 {
    padding: 15px;
    text-transform: uppercase;
    font-size: 1.4rem;
}

.article-container {
display: grid;
gap: 3rem;
grid-template: repeat(2, 320px) / repeat(5, 170px);
justify-content: center;
direction: rtl;
}

.article-grid img {
    width: 170px;
    height: 255px;
    object-fit: cover;  
}

.article-title {
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    padding: 1rem 0;  
}

.article-title p {
    color: #8c8c8c;
    font-size: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.article-title h3 {
    text-transform: uppercase;
    margin-top: 1rem;
}

.number-container {
    align-items: center;
    justify-content: center;
    margin: 4rem auto;
    display: flex;
    flex-direction: row;
 }
.number-container a {
background: #303030;
padding: 10px 15px;
text-decoration: none;
margin-left: 3px;
font-size: 1.2rem;
}
</style>