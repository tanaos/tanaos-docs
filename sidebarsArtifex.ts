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
			id: 'base-models',
			label: 'Base models',
		},
		{
			type: 'html',
			value: '<div class="section-name">Text Classification</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'text-classification/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'text-classification/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'text-classification/load',
			label: 'Load',
		},
		{
			type: 'doc',
			id: 'text-classification/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Guardrail</div>',
			defaultStyle: true,
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
			type: 'doc',
			id: 'guardrail/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Intent Classification</div>',
			defaultStyle: true,
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
			type: 'doc',
			id: 'intent-classifier/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Reranker</div>',
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
		{
			type: 'doc',
			id: 'reranker/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Sentiment Analysis</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'sentiment-analysis/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'sentiment-analysis/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'sentiment-analysis/load',
			label: 'Load',
		},
		{
			type: 'doc',
			id: 'sentiment-analysis/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Emotion Detection</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'emotion-detection/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'emotion-detection/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'emotion-detection/load',
			label: 'Load',
		},
		{
			type: 'doc',
			id: 'emotion-detection/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Named Entity Recognition</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'named-entity-recognition/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'named-entity-recognition/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'named-entity-recognition/load',
			label: 'Load',
		},
		{
			type: 'doc',
			id: 'named-entity-recognition/code-examples',
			label: 'Code Examples',
		},
		{
			type: 'html',
			value: '<div class="section-name">Text Anonymization</div>',
			defaultStyle: true,
		},
		{
			type: 'doc',
			id: 'text-anonymization/train',
			label: 'Train',
		},
		{
			type: 'doc',
			id: 'text-anonymization/inference',
			label: 'Inference',
		},
		{
			type: 'doc',
			id: 'text-anonymization/load',
			label: 'Load',
		},
		{
			type: 'doc',
			id: 'text-anonymization/code-examples',
			label: 'Code Examples',
		},
	],
};

export default sidebars;
