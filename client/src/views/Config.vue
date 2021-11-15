<template>
	<div>
		<h1>Configuration</h1>
		<hr />
		<fieldset>
			<div>
				<label for="baseURL">URL Base</label>
				<input id="baseURL" type="text" class="w-100" :value="baseURL" disabled />
			</div>
			<div>
				<label for="raceFile">Race File</label>
				<input id="raceFile" type="text" v-model="raceFile" />
			</div>
			<div>
				<label for="classIndexFile">Class Index File</label>
				<input id="classIndexFile" type="text" v-model="classIndexFile" />
			</div>
			<div>
				<button id="fetch" @click="loadData()">Fetch Data</button>
			</div>
			<div v-if="classes.length > 0">
				<hr />
				<h2>Classes:</h2>
				<div class="row row-cols-4">
					<div class="col" v-for="klass in this.classes" :key="klass.name">
						<input
							type="checkbox"
							v-bind:id="klass.name"
							v-model="klass.selected"
							@click="selectClass(klass)" />
						<label class="px-md-2" :for="klass.name">{{ klass.name }}</label>
					</div>
				</div>
				<div>
					<button @click="unselectAll()">Unselect All</button>
					<button @click="selectAll()">Select All</button>
					<button @click="importClasses()">Import Classes</button>
				</div>
			</div>
		</fieldset>
		<div v-show="this.statusMsgs.length > 0">
			<hr />
			<p v-for="(msg, idx) in this.statusMsgs" :key="idx">{{ msg }}</p>
		</div>
		<div class="clearfix">
			<hr />
			<b-spinner class="" label="Floated Right"></b-spinner>
			<button class="btn btn-danger float-right" @click="eraseData()">Erase All Data</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { BSpinner } from 'bootstrap-vue'

export default {
	name: 'Config',
	components: { BSpinner },
	data() {
		return {
			baseURL:
				'https://raw.githubusercontent.com/5etools-mirror-1/5etools-mirror-1.github.io/master/data',
			raceFile: 'races.json',
			classIndexFile: 'class/index.json',
			classes: [],
			statusMsgs: [],
		}
	},
	methods: {
		...mapActions(['eraseAllData']),
		...mapMutations(['setRawRaceList']),
		loadData() {
			this.statusMsgs = []
			this.classes = []

			// TODO use Promise wait all
			this.statusMsgs.push('Searching classes files...')
			fetch(`${this.baseURL}/${this.classIndexFile}`)
				.then((response) => {
					if (!response.ok) {
						this.statusMsgs.push('HTTP error ' + response.status)
						throw new Error('HTTP error ' + response.status)
					}
					return response.json()
				})
				.then((json) => {
					this.statusMsgs.push(`${Object.keys(json).length} classes found!`)
					Object.keys(json).forEach((key) => {
						this.classes.push({
							name: key,
							file: json[key],
							selected: false,
						})
					})
				})
				.catch((err) => {
					console.error(err)
				})
			this.statusMsgs.push('Searching race file...')
			fetch(`${this.baseURL}/${this.raceFile}`)
				.then((response) => {
					if (!response.ok) {
						this.statusMsgs.push('HTTP error ' + response.status)
						throw new Error('HTTP error ' + response.status)
					}
					return response.json()
				})
				.then((json) => {
					this.statusMsgs.push(`${json.race.length} races found!`)
					const data = []
					for (let index = 0; index < json.race.length; index++) {
						const race = json.race[index]
						data.push(race)
					}
					this.statusMsgs.push('Importing races...')
					this.setRawRaceList(data)
					this.statusMsgs.push('Done!')
				})
				.catch((err) => {
					this.statusMsgs.push(err)
					console.error(err)
				})
			this.statusMsgs.push('Job completed!')
		},
		selectClass(klass) {
			klass.selected = true
		},
		selectAll() {
			this.classes.forEach((c) => (c.selected = true))
		},
		unselectAll() {
			this.classes.forEach((c) => (c.selected = false))
		},
		importClasses() {
			this.statusMsgs = []
			alert('wip')
			console.log(this.classes.filter((c) => c.selected).map((c) => c.file))
		},
		eraseData() {
			this.statusMsgs = []
			if (confirm('Are you sure that you want to ERASE ALL DATA?')) {
				setTimeout(() => {
					this.statusMsgs.push('.')
					setTimeout(() => {
						this.statusMsgs.pop()
						this.statusMsgs.push('..')
						setTimeout(() => {
							this.statusMsgs.pop()
							this.statusMsgs.push('...')
							setTimeout(() => {
								this.eraseAllData()
								this.statusMsgs.pop()
								this.statusMsgs.push('... Data OBLITERATED from existence.')
							}, 500)
						}, 500)
					}, 500)
				}, 500)
			}
		},
	},
	mounted: function () {
		this.statusMsgs = []
	},
}
</script>
