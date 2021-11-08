<template>
	<div class="race-option">
		<div class="header" @click="showBody = !showBody">
			<span class="header-description">{{ title }}</span>
			<!-- icone -->
		</div>
		<div class="body" v-show="showBody">
			<div class="description">
				<p>
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RaceTraitInfo',
	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	data: function () {
		return {
			showBody: false,
		}
	},
}
</script>

<style></style>
