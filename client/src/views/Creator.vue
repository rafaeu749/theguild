<template>
	<div class="creator">
		<input type="file" @change="handleOnChange($event.target)" />
		<hr />
		<div v-show="loading"><em>Carregando...</em></div>
		<div>{{ this.raceListCount }} total races loaded (selected: {{ this.selectedIndex }})</div>
		<div class="container" v-show="!raceSelected">
			<div class="flex-item">
				<race-list />
			</div>
			<div class="flex-item">
				<button class="float-right" v-show="!raceSelected" @click="raceSelected = true">
					Select Race
				</button>
				<race-description />
			</div>
		</div>
		<div class="container" v-show="raceSelected">
			<div class="float-right">
				<button :click="confirmRaceSelection">Confirm</button>
				<button v-show="raceSelected" @click="raceSelected = false">Cancel</button>
			</div>
			<race-options />
		</div>
		<hr />
		<div v-if="this.getSelectedRaceIndex >= 0">
			{{ this.getRaceList[this.getSelectedRaceIndex] }}
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RaceDescription from '@/components/Creator/RaceDescription.vue'
import RaceList from '@/components/Creator/RaceList.vue'
import RaceOptions from '@/components/Creator/RaceOptions.vue'

export default {
	name: 'Creator',
	components: { RaceDescription, RaceList, RaceOptions },
	data() {
		return {
			loading: false,
			raceSelected: false,
		}
	},
	computed: {
		...mapGetters(['getRaceList', 'getSelectedRaceIndex']),
		raceListCount: function () {
			return this.getRaceList.length
		},
		selectedIndex: function () {
			return this.getSelectedRaceIndex
		},
	},
	methods: {
		...mapActions(['readFile']),
		async handleOnChange(input) {
			this.loading = true
			let files = input.files
			if (!files) return
			if (!files.length) return
			if (files[0] == null) return

			await this.readFile(files[0])
				.catch((ex) => {
					console.error(ex)
				})
				.finally(() => {
					this.loading = false
				})
		},
		confirmRaceSelection() {
			console.log('Race selected, next step...')
		},
	},
}
</script>

<style scoped>
.container {
	position: relative;
	display: flex;
	align-content: center;
	justify-content: center;
}
.flex-item {
	position: relative;
	display: inline-flex;
	flex-direction: column;
	max-width: 50%;
	overflow: auto;
}
.float-right {
	position: absolute;
	right: 5px;
	top: 5px;
}
</style>
