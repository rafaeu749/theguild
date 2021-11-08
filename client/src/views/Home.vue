<template>
	<div class="home">
		<img class="rotater" alt="The Guild logo" src="../assets/logo.png" />
		<div class="hello">
			<h1>Welcome to The Guild</h1>
			<marquee><em>by Rafaeu749 - O seu Mestre de Aluguel</em></marquee>
		</div>
		<div class="footer">&copy; 2021 r749, Inc.</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
}
</script>

<style scoped>
.home {
	text-align: center;
}
.footer {
	position: absolute;
	bottom: 5px;
	left: 5px;
}
.rotater {
	animation: spin 69s linear infinite;
}
@keyframes spin {
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
