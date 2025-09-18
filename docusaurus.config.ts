import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

import { DOCS_BASE_URL, SYNTHEX_INTRO_URL, ARTIFEX_INTRO_URL } from './consts';


const config: Config = {
	title: 'Tanaos Docs',
	tagline: 'The official Tanaos documentation',
	favicon: 'img/favicon.ico',

	url: DOCS_BASE_URL,
	baseUrl: '/',

	organizationName: 'Tanaos',
	projectName: 'tanaos-docs',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: false, // Disable default docs
				theme: {
					customCss: './src/css/custom.css',
				},
			},
		],
	],

	plugins: [
		[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						from: '/synthex',
						to: '/synthex/intro',
					},
					{
						from: '/artifex',
						to: '/artifex/intro',
					}
				]
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'synthex',
				path: 'docs-synthex',
				routeBasePath: 'synthex',
				sidebarPath: require.resolve('./sidebarsSynthex.ts'),
				editUrl: 'https://github.com/tanaos/tanaos-docs/tree/master/synthex',
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'artifex',
				path: 'docs-artifex',
				routeBasePath: 'artifex',
				sidebarPath: require.resolve('./sidebarsArtifex.ts'),
				editUrl: 'https://github.com/tanaos/tanaos-docs/tree/master/artifex',
			},
		],
	],

	themeConfig: {
		metadata: [
			{ name: 'keywords', content: 'tanaos, documentation, artifex, synthex' },
			{ name: 'description', content: 'Train task-specific LLMs without training data, for offline NLP and Text Classification tasks, such as Guardrail Models and Intent Classification' },
		],
		navbar: {
			items: [
				{
					type: 'custom-NavbarTitle',
					position: 'left',
				},
				{
					type: 'custom-ConditionalNavbarItem',
					to: '/synthex/intro',
					label: 'Synthex',
					position: 'left',
					showOnRoutes: ['/synthex'],
				},
				{
					type: 'custom-ConditionalNavbarItem',
					to: '/artifex/intro',
					label: 'Artifex',
					position: 'left',
					showOnRoutes: ['/artifex'],
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Synthex',
							to: '/synthex/intro',
						},
						{
							label: 'Artifex',
							to: '/artifex/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'LinkedIn',
							href: 'https://www.linkedin.com/company/tanaos',
						},
						{
							label: 'X',
							href: 'https://x.com/TanaosAI',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/tanaos',
						},
						{
							label: 'HuggingFace',
							href: 'https://huggingface.co/tanaos',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Tanaos. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
		},
	},
};

export default config;
