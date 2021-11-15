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

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions,
}
