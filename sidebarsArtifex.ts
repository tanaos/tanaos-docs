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
			label: 'About Artifex',
		},
		{
			type: 'doc',
			id: 'tutorials',
			label: 'Tutorials',
		},
		{
			type: 'html',
			value: '<div class="section-name">🛡️ Guardrail</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'guardrail/intro',
			label: 'Introduction',
		},		
		{
			type: 'doc',
			id: 'guardrail/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'guardrail/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'guardrail/load',
			label: 'Load',
		},
		{
			type: 'html',
			value: '<div class="section-name">🗣️ Intent Classification</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'intent-classifier/intro',
			label: 'Introduction',
		},
		{
			type: 'doc',
			id: 'intent-classifier/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'intent-classifier/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'intent-classifier/load',
			label: 'Load',
		},
		{
			type: 'html',
			value: '<div class="section-name">🔀 Reranker</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'reranker/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'reranker/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'reranker/load',
			label: 'Load',
		},
	],
};

export default sidebars;
