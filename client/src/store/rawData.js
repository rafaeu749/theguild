const state = {}

const getters = {
	getRawRaceList: function () {
		return JSON.parse(localStorage.getItem('rawRaceList') ?? '[]')
	},
	getRawClassList: function () {
		return JSON.parse(localStorage.getItem('rawClassList') ?? '[]')
	},
	getRawSpellList: function () {
		return JSON.parse(localStorage.getItem('rawSpellList') ?? '[]')
	},
	getRawBackgroundList: function () {
		return JSON.parse(localStorage.getItem('rawBackgroundList') ?? '[]')
	},
	getRawFeatList: function () {
		return JSON.parse(localStorage.getItem('rawFeatList') ?? '[]')
	},
}

const mutations = {
	setRawRaceList: function (_, list) {
		localStorage.setItem('rawRaceList', JSON.stringify(list))
	},
	setRawClassList: function (_, list) {
		localStorage.setItem('rawClassList', JSON.stringify(list))
	},
	setRawSpellList: function (_, list) {
		localStorage.setItem('rawSpellList', JSON.stringify(list))
	},
	setRawBackgroundList: function (_, list) {
		localStorage.setItem('rawBackgroundList', JSON.stringify(list))
	},
	setRawFeatList: function (_, list) {
		localStorage.setItem('rawFeatList', JSON.stringify(list))
	},
}

const actions = {
	eraseAllData: function () {
		localStorage.removeItem('rawRaceList')
		localStorage.removeItem('rawClassList')
		localStorage.removeItem('rawSpellList')
		localStorage.removeItem('rawBackgroundList')
		localStorage.removeItem('rawFeatList')
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}
