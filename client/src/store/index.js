import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	raceDataList: [],
	selectedRaceIndex: -1,
}

const getters = {
	getRaceList: function (state) {
		return state.raceDataList
	},
	getSelectedRaceIndex: function (state) {
		return state.selectedRaceIndex
	},
}

const mutations = {
	setRaceListData: function (state, list) {
		state.raceDataList = list
	},
	setSelectedRaceIndex: function (state, index) {
		state.selectedRaceIndex = index
	},
}

const actions = {
	readFile: async function ({ commit }, file) {
		const reader = new FileReader()
		reader.onload = () => {
			commit('setRaceListData', map5e(JSON.parse(reader.result)))
		}
		if (file != null) reader.readAsText(file)
	},
}

const map5e = function (data) {
	const props = []
	for (let index = 0; index < data.race.length; index++) {
		const race = data.race[index]
		props.push(race)
	}
	return props
}

const modules = {}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules,
})
