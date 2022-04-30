
<template>
   
        <div class="slider">
            <img  :src="data.LandscapeImage" alt="">
            <div class="slider-text1">
                <h1 >{{data.Title}}</h1>
                <p >{{data.Summary}}</p>
            </div>
        </div>
  
</template>

<script>

export default {
    name : "FirstSection",

    props : {
        data : Array
    }
};

</script>

<style>
.slider {
    position: relative;
    height: 430px;
    margin: auto 11rem;

}
.slider img {
    position: relative;
    width: 97rem;
    height: 43rem;
     object-fit: fill;

}
.slider-text1 {
    margin-top: 22.5rem;
     position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    text-transform: uppercas;
    padding-top: 10rem;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0));
}
.slider-text1 h1 {
    font-size: 4rem;
    font-weight: 700;
    padding: 0 180px;
    margin-bottom: 1.5rem;
     word-spacing: 0.5rem;
}

.slider-text1 p {
    padding: 0 220px;
    margin-bottom: 3rem;
    direction: rtl;
     color: #e41f43;
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
      font-size: 2rem;
}
</style>