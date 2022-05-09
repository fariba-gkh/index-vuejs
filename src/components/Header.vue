<template>
   <header>
                <div class="firstbar">
                    <div class="log-in">
                        <a href="#">Log in</a>
                        <a href="#">Entries</a>
                    </div>
                    <form class="search">
                        <input class="search__input" type="text" >
                        <button class="search__button" >
                            <svg class="search__button--icon" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg> 
                        </button>
                     </form>
                </div>
        
            <div class="secondbar">
                <ul class="secondbar__list">
                    <li></li>
                 <router-link to="/"  style="text-decoration: none; ">  
                      <li>HOME</li>
                 </router-link>
                    <li>CELEBRIES</li>
                    <li>GALLERY</li>
                    <li>NEWS</li>
                    <li>CONTACTS</li>
                    <li></li>
                </ul>
            </div>
    </header>
</template>

<script>
export default {
    name : "IndexHeader"
};
</script>

<style>


header {
    height: 170px;
}

.log-in {
margin: 3rem;
}
.log-in a {
    text-decoration: none;
    font-size: 1.6rem;
    float: left;
}
.log-in a:last-of-type {
    margin-left: 2.5rem;
}
.search {
float: right;
width: 36.5rem;
height: 3.2rem;
background-color: #202020;
display: flex;
flex-direction: row;
margin-right: 4rem;
}

.search__input {
    height: 100%;
    width: 33rem;
    font-size: 1.6rem;
    padding-left: 1rem;
    background-color: #202020;
    color: #ffffff;
    border: #202020;
    overflow: hidden; 
}
.search__button {
    width: 3.2rem;
    height: 3.2rem;
    background-color: #202020;
    all: unset;
    margin-left: 1.6rem;
}
.search__button--icon {
    fill: #e41f43;
    background-color: #202020;
    width: 3rem;
    height: 3rem;
}

.secondbar {
margin-top: 2rem;
display: inline-block;

}
.secondbar__list {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.secondbar__list li {
    color: #ffffff;
    background-image: linear-gradient(to bottom, #353535, #262626);
    margin-right: 1px;
    height: 9rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 30px;
    list-style-type: none;
    border-right: 1px solid black;

}
.secondbar__list li:first-of-type {
    width: 53.5rem;
}
.secondbar__list li:last-of-type{
    width: 15rem;
}

</style>