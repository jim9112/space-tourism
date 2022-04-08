const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'home-desktop': "url('/assets/home/background-home-desktop.jpg')"
			},
			colors: {
				'text-primary': '#D0D6F9'
			}
		}
	},

	plugins: []
};

module.exports = config;
