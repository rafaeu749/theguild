<template>
	<div class="container">
		<table>
			<thead>
				<td>Name</td>
				<td>Ability</td>
				<td>Size</td>
				<td>Source</td>
			</thead>
			<tr
				v-for="(race, idx) in getRaceList"
				:key="idx"
				@click="selectRace(idx)"
				style="cursor: pointer"
				:class="idx % 2 == 0 ? 'lighter' : ''">
				<td>{{ race.name }}</td>
				<td>{{ printAbility(race.ability) }}</td>
				<td>
					{{ printSize(race.size) }}
				</td>
				<td>{{ race.source }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
	name: 'RaceList',
	components: {},
	computed: {
		...mapGetters(['getRaceList']),
	},
	methods: {
		...mapMutations(['setSelectedRaceIndex']),
		selectRace: function (index) {
			this.setSelectedRaceIndex(index)
		},
		printAbility: function (ability) {
			if (ability == undefined) {
				ability = []
			}
			return typeof ability == 'string' ? map5eAbility(ability) : map5eAbility(ability[0])
		},
		printSize: function (size) {
			return size?.map((s) => map5eSize(s)).join('; ') ?? ''
		},
	},
}

const map5eAbility = function (data) {
	if (!data) return ''
	const ret = []
	Object.keys(data).forEach((key) => {
		ret.push(`${capitalize(key)}: ${data[key] > 0 ? '+' : '-'}${data[key]}`)
	})
	return ret.join('; ')
}

const map5eSize = function (size) {
	switch (size) {
		case 'M':
			return 'Medium'
		case 'S':
			return 'Small'
		case 'V':
			return 'Variant'
		default:
			return `ANOTHER DIMENSION OF REALITY (${size})`
	}
}

const capitalize = function (str) {
	if (str.length == 0) return ''
	if (str.length == 1) return str.charAt(0).toUpperCase()
	return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style>
.container {
	max-height: 70vh;
	overflow: auto;
}
.lighter {
	background-color: #405b77;
}
</style>
