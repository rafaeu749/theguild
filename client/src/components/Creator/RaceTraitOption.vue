<template>
	<div class="race-option">
		<div class="header incomplete" @click="showBody = !showBody">
			<span class="header-description">{{ title }}</span>
			<span class="header-meta">2 Choices</span>
			<!-- icone -->
		</div>
		<div class="body" v-show="showBody">
			<div class="description">
				<p>
					{{ description }}
				</p>
			</div>
			<div class="detail-choice">
				<select class="ddbc-select detail-choice-input">
					<option value="">- Choose an Ability Score -</option>
					<option value="3522">Constitution Score</option>
					<option value="3521">Dexterity Score</option>
					<option value="3523">Intelligence Score</option>
					<option value="3524">Wisdom Score</option>
				</select>
			</div>
			<div class="detail-choice">
				<select class="ddbc-select detail-choice-input">
					<option value="">- Choose an Ability Score -</option>
					<option value="3521">Dexterity Score</option>
					<option value="3523">Intelligence Score</option>
					<option value="3520">Strength Score</option>
					<option value="3524">Wisdom Score</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RaceTraitOption',
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

<style>
.race-option {
}
</style>
