
<template>
<div>
    <h1>
        Hello{{name}}
    </h1>    
</div>
</template>

<style scoped>
div{
    background: plum;
    border: 1px dashed red;
}
h1{
    color:red;
}
.top_navbar {
  /* .navbar */
}
</style>
<script>
export default {
 data(){
     return{
         name:'vue.js'
     }
 } 
}
</script>