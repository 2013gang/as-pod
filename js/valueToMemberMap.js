var valueMemberMapper = {
	map: {
		2: '',
		4: '',
		8: '',
		16: '',
		32: '',
		64: '',
		128: '',
		256: '',
		512: '',
		1024: '',
		2048: ''
	},
	getMember: function (value) {
		return this.map[value];
	}
};