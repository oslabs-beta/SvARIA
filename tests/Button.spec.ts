import { test, expect } from '@playwright/experimental-ct-svelte';
import Button from '../src/lib/Button.svelte';

test.describe('Button', () => {
  let button;
  let clicked = true;

  test.beforeEach( async ( {mount} ) => {
    button = await mount(Button, {
      props: {
          content: "Click",
          className: "testClass",
          ariaLabel: "clickMeButton",
          id: 'demobutton',
        },
      on: {
          click: (): void => {
            clicked = false;
          },
        }
    })
  })


  test('Renders with correct content', async () => {
    await expect(button).toContainText('Click');
  })

  test('className connects to class prop', async () => {
    await expect(button).toHaveClass('testClass');
  })

  test('ariaLabel conntents to aria-label prop', async () => {
    await expect(button).toHaveAccessibleName('clickMeButton');
  })

  test('has id prop', async () => {
    await expect(button).toHaveJSProperty('id', 'demobutton');
  })

  test('onClick function works', async () => {
    await button.click();
    expect(clicked).toBeFalsy();
  })
})