<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.nav-bar {
		display: flex;
		height: 44px;
		line-height: 44px;
	}
	.left,.right {
		width: 60px;
	}
	.center {
		flex: 1;
		text-align: center;
		-webkit-box-shadow: inset hoff voff blur color;
		-moz-box-shadow: inset hoff voff blur color;
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
	}
</style>
