import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
	sidebar: [
		{
			type: 'html',
			value: '<div class="section-name">Getting Started</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'intro',
			label: 'About Synthex',
		},
		{
			type: 'doc',
			id: 'errors',
			label: 'Errors',
		},
		{
			type: 'doc',
			id: 'action-result',
			label: 'Action Result',
		},
		{
			type: 'html',
			value: '<div class="section-name">Tutorials</div>',
			defaultStyle: true
		},
		{
			type: 'doc',
			id: 'tutorials/intro',
			label: 'Introduction',
		},
		{
			type: 'doc',
			id: 'tutorials/housing-market-analysis-dataset',
			label: 'Housing Market Analysis Dataset',
		},
		{
			type: 'doc',
			id: 'tutorials/chatbot-guardrail-training-dataset',
			label: 'Training dataset for a Chatbot Guardrail',
		},
		{
			type: 'html',
			value: '<div class="section-name">Jobs</div>',
			defaultStyle: true
		},
		{
			type: 'doc',
			id: 'jobs/intro',
			label: 'Introduction',
		},
		{
			type: 'doc',
			id: 'jobs/generate-data',
			label: 'Generate data',
		},
		{
			type: 'doc',
			id: 'jobs/status',
			label: 'Job status',
		},
		{
			type: 'doc',
			id: 'jobs/list-jobs',
			label: 'List jobs',
		},
		{
			type: 'html',
			value: '<div class="section-name">Credits</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'credits/intro',
			label: 'Introduction',
		},
		{
			type: 'doc',
			id: 'credits/promotional',
			label: 'Get credits',
		},
		{
			type: 'html',
			value: '<div class="section-name">Users</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'users/intro',
			label: 'Introduction',
		},
		{
			type: 'doc',
			id: 'users/me',
			label: 'Get my user',
		},
	],
};

export default sidebars;
