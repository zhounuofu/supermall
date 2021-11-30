<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<div><img :src="item.image" alt="" v-for="item in banners"></div>
		<h1>{{recommends}}</h1>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import { getHomeData } from '@/api/home_data'
	export default {
		components:{
			NavBar
		},
		data(){
			return {
				banners: [],
				recommends: []
			}
		},
		created() {
			getHomeData().then(res => {
				this.banners = res.data.banner.list
				this.recommends = res.data.recommend.list
				console.log(res)
			})
		}
	}
</script>

<style>
	.home-nav {
		background-color: #ff8198;
		color: #FFFFFF;
	}
</style>
