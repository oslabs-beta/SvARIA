import { test, expect } from '@playwright/experimental-ct-svelte';
import Button from '../src/lib/Button_ts.svelte';
import Popover from '$lib/Popover.svelte';

test.describe('Button', () => {
	let button;
	let clicked = true;

	test.beforeEach(async ({ mount }) => {
		button = await mount(Button, {
			props: {
				content: 'Click',
				className: 'testClass',
				ariaLabel: 'clickMeButton',
				id: 'demobutton'
			},
			on: {
				click: (): void => {
					clicked = false;
				}
			}
		});
	});

	test('Renders with correct content', async () => {
		await expect(button).toContainText('Click');
	});

	test('className connects to class prop', async () => {
		await expect(button).toHaveClass('testClass');
	});

	test('ariaLabel conntents to aria-label prop', async () => {
		await expect(button).toHaveAccessibleName('clickMeButton');
	});

	test('has id prop', async () => {
		await expect(button).toHaveJSProperty('id', 'demobutton');
	});

	test('onClick function works', async () => {
		await button.click();
		expect(clicked).toBeFalsy();
	});
});

test.describe('Popover', () => {
	let popover;
	test.beforeEach(async ({ mount }) => {
		popover = await mount(Popover, {
			props: {
				popoverId: 'demoPopoverId',
				popoverClass: 'demoClass',
				contentId: 'demoContentId',
				style: '',
				openButtonId: 'demoOpenId',
				openButtonContent: 'demoOpen',
				openButtonAriaLabel: 'demoOpenAria',
				openButtonStyle: '',
				openButtonClass: 'demoOpenClass',
				closeButtonId: 'demoCloseId',
				closeButtonContent: 'demoClose',
				closeButtonAriaLabel: 'demoCloseAria',
				closeButtonClass: 'demoCloseClass',
				closeButtonStyle: ''
			},
			slots: {
				header: '<h1>contentHeader</h1>',
				content: '<h3>content/<h3>'
			}
		});
	});

	test('Open button renders with correct content', async () => {
		await expect(popover).toContainText('demoOpen');
	});

	test('openButtonId', async () => {
		await expect(popover).toHaveId('demoOpenId');
	});

	test('openButtonAriaLabel', async () => {
		await expect(popover).toHaveAccessibleName('demoOpenAria');
	});

	test('openButtonClass', async () => {
		await expect(popover).toHaveClass('demoOpenClass');
	});

	test('openButton opens and renders header slot', async () => {
		await popover.click();
		const headerText = await popover.locator('h1').textContent();
		expect(headerText).toBe('contentHeader');
	});

	test('openButton opens and renders content slot', async () => {
		await popover.click();
		const contentText = await popover.locator('h3').textContent();
		expect(contentText).toBe('content');
	});
});
