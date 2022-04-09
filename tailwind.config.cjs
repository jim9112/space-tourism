const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			barlow: ['Barlow Condensed', 'sans-serif'],
			bellefair: ['Bellefair', 'serif']
		},
		extend: {
			backgroundImage: {
				'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
				'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
				'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
				'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')"
			},
			colors: {
				'text-primary': '#D0D6F9',
				grey: '#979797',
				black: '#0B0D17'
			}
		}
	},

	plugins: []
};

module.exports = config;
