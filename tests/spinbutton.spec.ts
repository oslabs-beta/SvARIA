import { test, expect } from '@playwright/experimental-ct-svelte';
import SpinButton from '$lib/SpinButton.svelte';

test.describe('SpinButton', () => {
    let spinbutton;
    let clicked = true;

    let values = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    test.beforeEach(async ({ mount }) => {
        spinbutton = await mount(SpinButton, {
            props: {
                values: values,
                value: 0,
                className: 'testClass',
                id: 'testId',
                increaseButtonContent: '+',
                increaseButtonId: 'testIncreaseId',
                increaseButtonClass: 'testIncreaseClass',
                currentValueId: 'testCurrentValueId',
                currentValueClass: 'testCurrentValueClass',
                decreaseButtonContent: '-',
                decreaseButtonId: 'testDecreaseId',
                decreaseButtonClass: 'testDecreaseClass'
            },
        })
    })

    test('Renders with correct content', async () => {
        await expect(spinbutton).toContainText('+');
        await expect(spinbutton).toContainText('-');
        await expect(spinbutton).toContainText('Sunday');

    })

    test('spinbutton has all class props', async () => {
        await expect(spinbutton).toHaveClass('testClass');
        const increaseButton = spinbutton.getByLabel("Increase value")
        await expect(increaseButton).toHaveClass('testIncreaseClass');

        const decreaseButton = spinbutton.getByLabel("Decrease value")
        await expect(decreaseButton).toHaveClass('testDecreaseClass');

        const currentValue = await spinbutton.locator("span")
        await expect(currentValue).toHaveClass('testCurrentValueClass');

    })

    test('spinbutton has all id props', async () => {
        await expect(spinbutton).toHaveId('testId');

        const increaseButton = spinbutton.getByLabel("Increase value")
        await expect(increaseButton).toHaveId('testIncreaseId');

        const decreaseButton = spinbutton.getByLabel("Decrease value")
        await expect(decreaseButton).toHaveId('testDecreaseId');

        const currentValue = await spinbutton.locator("span")
        await expect(currentValue).toHaveId('testCurrentValueId');
    })

    test('spinbutton increase works', async () => {
        await spinbutton.getByLabel("Increase value").click()
        await expect(spinbutton).toContainText('Monday');

        await spinbutton.getByLabel("Increase value").click()
        await spinbutton.getByLabel("Increase value").click()
        await expect(spinbutton).toContainText('Wednesday');
    })

    test('spinbutton decrease works', async () => {
        await spinbutton.getByLabel("Decrease value").click()
        await expect(spinbutton).toContainText('Sunday');

        await spinbutton.getByLabel("Increase value").click()
        await spinbutton.getByLabel("Increase value").click()
        await spinbutton.getByLabel("Decrease value").click()
        await expect(spinbutton).toContainText('Monday');
    })

})
