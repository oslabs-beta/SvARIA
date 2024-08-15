import { test, expect, type MountResult } from '@playwright/experimental-ct-svelte';
import Checkbox from '../src/lib/Checkbox.svelte';

test.describe('Checkbox', () => {
	let checkbox;
	const options = [{ label: 'first input', labelClass: 'testLabelClass', labelId: 'demoLabelId' }];

	test.beforeEach(async ({ mount }) => {
		checkbox = await mount(Checkbox, {
			props: {
				className: 'testClass',
				ariaLabel: 'checkbox',
				id: 'democheckbox',
				groupInputClass: 'testInputClass',
				groupLabelClass: 'testGroupLabelClass',
				options
			}
		});
	});
	test('ariaLabel connects to aria-label prop', async () => {
		await expect(checkbox).toHaveAccessibleName('checkbox');
	});
	test('className connects to class prop', async () => {
		await expect(checkbox).toHaveClass('testClass');
	});
	test('groupInputClass connects to class prop on input', async () => {
		const checkboxInput = checkbox.locator('input[type="checkbox"]');
		await expect(checkboxInput).toHaveClass('testInputClass');
	});
	test('has id prop', async () => {
		await expect(checkbox).toHaveJSProperty('id', 'democheckbox');
	});
	test('check function works', async () => {
		const checkboxInput = checkbox.locator('input[type="checkbox"]');
		await checkboxInput.check();
		await expect(checkboxInput).toBeChecked();
	});
});
