<template>
  <div id="app">
	  <router-view></router-view>
	  <main-tabbar></main-tabbar>
  </div>
</template>

<script>
	import MainTabbar from '@/components/content/mainTabbar/MainTabBar.vue'
	export default {
		components: {
			MainTabbar
		}
	}
</script>
<style>
	@import url("assets/css/base.css");
</style>
