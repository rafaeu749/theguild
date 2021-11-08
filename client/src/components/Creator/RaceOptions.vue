<template>
	<div class="manage-race race-detail" v-if="this.race">
		<div class="race-detail-primary">
			<div class="race-detail-aside">
				<div class="manage-race-chosen-action">Change Race</div>
			</div>
			<div class="builder-page-header">{{ this.race.name }}</div>
			<div class="ddbc-html-content race-detail-description">
				<p>
					<!-- RACE FLUFFY -->
					Fluffy
				</p>
				<p class="characters-statblock" style="font-family: Roboto Condensed">
					<strong>Racial Traits</strong><br />
					{{ raceTraits }}
				</p>
			</div>
		</div>
		<div class="race-detail-secondary">
			<race-trait-option
				title="Ability Score Increase"
				description="Your Charisma score increases by 2, and two other ability scores of your choice increase by 1." />

			<race-trait-info
				title="Darkvision"
				description="Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray." />

			<race-trait-info
				title="Fey Ancestry"
				description="You have advantage on saving throws against being charmed, and magic can’t put you to sleep." />

			<race-trait-option
				title="Skill Versatility"
				description="You gain proficiency in two skills of your choice." />

			<race-trait-option
				title="Languages"
				description="You can speak, read, and write Common, Elvish, and one extra language of your choice." />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import RaceTraitOption from './RaceTraitOption.vue'
import RaceTraitInfo from './RaceTraitInfo.vue'

export default {
	name: 'RaceOptions',
	components: { RaceTraitOption, RaceTraitInfo },
	computed: {
		...mapGetters(['getRaceList', 'getSelectedRaceIndex']),
		race: function () {
			return this.getRaceList[this.getSelectedRaceIndex]
		},
		raceTraits: function () {
			const traits = []
			const race = this.race
			if (!race.entries) return ''
			race.entries.forEach((entry) => {
				if (!entry.name) return
				if (
					entry.name !== 'Age' &&
					entry.name !== 'Alignment' &&
					entry.name !== 'Size' &&
					entry.name !== 'Languages' &&
					entry.name !== 'Speed' &&
					entry.type == 'entries'
				)
					traits.push(entry.name)
			})
			return traits.join(', ')
		},
	},
	methods: {
		printAbility: function (ability) {
			if (ability == undefined) return ''
			if (typeof ability == 'string') return ability
			return ability.map((a) => JSON.stringify(a)).join('; ')
		},
	},
}
</script>

<style>
.race-detail-secondary {
	width: 680px;
	margin: 0 auto;
}
.header {
	background-image: url(https://www.dndbeyond.com/Content/Skins/Waterdeep/images/listing-bars/1a-700-hover.png);
	background-size: 100% 65px;
	cursor: pointer;
	padding: 0 16px;
	justify-content: center;
	height: 65px;
	display: flex;
	flex-direction: column;
	position: relative;
}
.incomplete::before {
	content: '!';
	position: absolute;
	background: #1c9aef;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	z-index: 3;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	top: 0;
	left: -4px;
}
.header-description {
	font-size: 15px;
	font-weight: 500;
	line-height: 1.1;
}
.header-meta {
	color: #838383;
	font-size: 10px;
	text-overflow: ellipsis;
	overflow: hidden;
	line-height: 1;
	margin-top: 3px;
}
.body {
	background-color: #fff;
	border-left: 1px solid #ece9e9;
	border-right: 1px solid #ece9e9;
	margin: 0 2px;
	position: relative;
	top: -10px;
	font-size: 14px;
	line-height: 1.7;
	padding: 20px 15px 32px;
}
.body::after {
	content: '';
	display: block;
	background: center 0 transparent
		url(https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/collapsible-480-bottom.png)
		no-repeat;
	background-size: 105% 28px;
	height: 28px;
	position: absolute;
	bottom: -4px;
	left: 0;
	right: 0;
}
</style>
