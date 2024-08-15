import { test, expect, type MountResult } from '@playwright/experimental-ct-svelte';
import Popover from '$lib/Popover.svelte';


test.describe('Popover', () => {
    let popover: MountResult<Popover>;
    test.beforeEach( async ({ mount }) => {
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
          closeButtonStyle: '',
        },
        slots: {
          header: '<h1>contentHeader</h1>',
          content: '<h3>content</h3>'
        }
      })
    })
  
    test('Open button renders with correct content', async () => {
      await expect(popover).toContainText('demoOpen');
    })
  
    test('openButtonId', async () => {
      await expect(popover).toHaveId('demoOpenId');
    })
  
    test('openButtonAriaLabel', async () => {
      await expect(popover).toHaveAccessibleName('demoOpenAria');
    })
  
    test('openButtonClass', async () => {
      await expect(popover).toHaveClass('demoOpenClass');
    })
  
    test('openButton opens and renders header slot', async () =>{
      await popover.click();
      const headerText = await popover.locator('h1').textContent();
      expect(headerText).toBe('contentHeader');
    })
  
    test('openButton opens and renders content slot', async () =>{
      await popover.click();
      const contentText = await popover.locator('h3').textContent();
      expect(contentText).toBe('content');
    })
  })