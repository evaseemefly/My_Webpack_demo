<template>
	<div>你好:{{name}}</div>
</template>
<script>
	export default{
		props:{
			name:{
				type:String,
				default:''
			}
		}
	}
</script>
<style>
	div{
		color:#f60;
		font-size: 24px;
	}
</style>