<template>
	<div id="app">
		<div id="nav" class="center">
			<router-link to="/">Home</router-link> |
			<router-link to="/creator">Creator 0.0.3</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
@import url('//fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,700|Gloria+Hallelujah:400,700');

#app {
	font-family: Roboto, Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.center {
	text-align: center;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
