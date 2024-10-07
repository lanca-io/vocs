import { defineConfig } from 'vocs'

export default defineConfig({
	title: 'Concero Docs',
	titleTemplate: '%s – Concero Docs',
	editLink: {
    pattern: 'https://github.com/concero/docs/edit/master/docs/pages/:path',
    text: 'Suggest changes to this page',
	},
	// head() {
 //    return (
 //      <>
 //        <script src="https://cdn.usefathom.com/script.js" data-site="IBTUTKMT" defer />
 //      </>
 //    )
 //  },
	// banner: 'Head to our new [Discord](https://discord.gg/lanca)!',
	description: 'Build the next big thing on Lanca.',
	baseUrl: 'https://docs.concero.io',
	iconUrl: 'https://concero.io/favicon.ico',
	logoUrl: {
		light: '/logo-light.svg',
		dark: '/logo-dark.svg',
	},
	theme: {
		accentColor: '#539CDB',
	},
	rootDir:	'docs',
	ogImageUrl: {
    '/': '/og.png',
    '/docs': 'https://docs.lanca.io/og?logo=%logo&title=%title&description=%description',
  },
	font: {
	  google: 'Manrope'
	},
	topNav: [
		{
			text: 'Get in touch',
			link: 'mailto:support@lanca.io',
		},
	],
	socials: [
		{
			icon: 'discord',
			link: 'https://discord.gg/lanca',
		},
		// {
		// 	icon: 'github',
		// 	link: 'https://github.com/lanca',
		// },
		{
			icon: 'x',
			link: 'https://twitter.com/lanca_io',
		},

	],
	sidebar: [
		{
			text: 'What is Lanca?',
			link: '/what-is-lanca',
		},
		{
			text: 'Getting Started',
			link: '/getting-started',
		},

		{
			text: 'JS SDK (coming soon)',
			link: '/js-sdk',
			items: [
				{
					text: 'Overview',
					link: '/js-sdk/overview',
				},
				{
					text: 'Installation',
					link: '/js-sdk/installation',
				},
				{
					text: 'Usage',
					link: '/js-sdk/usage',
				},

			]
		},
		{
			text: 'API Endpoints (coming soon)',
			// link: '/api-endpoints',
			// items: [
			// 	{
			// 		text: 'Overview',
			// 		link: '/api/overview',
			// 	},
			// 	{
			// 		text: 'Routing',
			// 		link: '/api/routing',
			// 	},
			// 	{
			// 		text: 'Tracking',
			// 		link: '/api/tracking',
			// 	},
			//
			// ]
		}
	],
})
