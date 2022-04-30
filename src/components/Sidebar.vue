
<template>
  
            <section class="sidebar">
                <ul class="sidebar__list">
                    <li>ACTORS</li>
                    <li>ACTRESSES</li>
                    <li>AUTHORS</li>
                    <li>DIRECTORS</li>
                    <li>HAITI</li>
                    <li>MLB TEAMS</li>
                    <li>MODELS</li>
                    <li>MUSIC GROUPS</li>
                    <li>NBA TEAMS</li>
                    <li>NFL TEAMS</li>
                    <li>NHL TEAMS</li>
                    <li>SINGERS</li>
                    <li>TENNIS PLAYERS</li>
                    <li>TV PRESENTERS</li>
                    <li>TV SHOWS</li>
                    <li>WRESTLERS</li>
                </ul>
            </section>
    
</template>

<script>
export default {
 name : "SideBar"
}
</script>

<style>
.sidebar {
    width: 22rem;
    height: 200vh;
}

.sidebar__list {
    background-color: #232323;
    width: 17rem;
    margin-left: 3rem;
}

.sidebar__list li {
    color: #ffffff;
    list-style-type: none;
    font-size: 1.4rem;
    padding: 14px;
    border-bottom: 1px solid #333333;
    font-family: Arial, Helvetica, sans-serif;
}


</style>