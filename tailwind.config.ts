import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'custom': '0 4px 6px rgba(150, 150, 150, 0.1), 0 1px 3px rgba(150, 150, 150, 0.1)',
			  },
		}
	},

	plugins: [typography, forms]
} satisfies Config;
