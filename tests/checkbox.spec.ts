import { test, expect, type MountResult } from '@playwright/experimental-ct-svelte';
import Checkbox from '../src/lib/Checkbox.svelte';

test.describe('Button', () => {
	let button: MountResult<Checkbox>;
	let clicked = true;

	test.beforeEach(async ({ mount }) => {
		button = await mount(Checkbox, {
			props: {
				label: 'check me',
				className: 'testClass',
				ariaLabel: 'checkbox',
				id: 'democheckbox',
				groupInputClass: 'testInputClass',
				groupLabelClass: 'testGroupLabelClass',
				options: [{ label: 'first input', labelClass: 'testLabelClass', labelId: 'demoLabelId' }]
			}
		});
	});
});
