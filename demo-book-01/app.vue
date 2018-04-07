<template>
	<div>
		<!--<h1>你好{{name}}</h1>-->    
		<v-title title="Vue组件化"></v-title>
		<v-button @click="handleClick">点击按钮</v-button>
		<p>
			<img src="./images/image.png" style="width:200px;">
		</p>
	</div>    
</template>
<style>
h1{
	color:red;		
}
</style>
<script>
	// export default{
	// 	data(){
	// 		return {
	// 			name:'vue.js'
	// 		}
	// 	}
	// }

	import vTitle from './title.vue';
	import vButton from './button.vue';

	export default{
		components:{
			vTitle,
			vButton
		},
		methods:{
			handleClick(e){
				console.log(e);
			}
		}
	}
	</script>
