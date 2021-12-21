<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show=!ninja.show">
                <h2>Name: {{ninja.name}}</h2>
                <h3 v-show="ninja.show">speciality: {{ninja.speciality}} </h3>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ninjas: [{
                        name: 'Ryu',
                        speciality: 'Vue Components',
                        show: false
                    },
                    {
                        name: 'Crystal',
                        speciality: 'HTML Wizardry',
                        show: true
                    },
                    {
                        name: 'Hitoshi',
                        speciality: 'Click Events',
                        show: false
                    },
                    {
                        name: 'Tango',
                        speciality: 'Conditionals',
                        show: false
                    },
                    {
                        name: 'Kami',
                        speciality: 'Webpack',
                        show: false
                    },
                    {
                        name: 'Yoshi',
                        speciality: 'Data Recollection',
                        show: false
                    }

                ]
            }
        },
    }
</script>

<style scoped>  
    li:hover{
        background-color: #222;
        color: lightgreen;
    }

    #ninjas{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0px 20px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid  #222;
        margin: 10px;
    }
</style>