import { test, expect } from '@playwright/experimental-ct-svelte';
import Button from '../src/lib/Button_ts.svelte'

test('is rendered', async ({ mount }) => {
  let clicked = true;
  const button = await mount(Button, {
    props: {
        content: "Click",
        className: "bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
        ariaLabel: "clickMeButton",
        id: 'demobutton',
      },
    on: {
        click: (): void => {
          console.log('yay');
        },
      }
    }
  )
  await expect(button).toContainText('Click');
  await button.click();
  expect(clicked).toBeFalsy;
});
