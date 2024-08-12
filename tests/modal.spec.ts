import { test, expect } from '@playwright/experimental-ct-svelte';
import Modal from '$lib/Modal.svelte';
import Button from '$lib/Button.svelte';

test.describe('Modal', () => {
    let modal;
    let button;
    let showModal = false;

    test.beforeEach(async ({ mount }) => {
        button = await mount(Button, {
            on: {
                click: async () => {
                    showModal = true;
                }
            }
        })

        modal = await mount(Modal, {
            props: {
                showModal: showModal,
                modalId: 'modalId',
                modalClass: 'modalClass',
                closeModalMessage: 'Close Modal',
                closeButtonId: 'closeModalButtonId',
                closeButtonClass: 'closeButtonClass',
                closeButtonStyle: 'closeModalStyle',
                style: ''
            },
            slots: {
                header: '<h1>contentHeader</h1>',
                content: '<h3>content</h3>'
            }
        })

    })


    test('openButton opens and renders header and content slots', async () => {
        await button.getByRole("button").click()
        expect(showModal).toBeTruthy();
        const headerText = await modal.locator('h1').textContent();
        expect(headerText).toBe("contentHeader")

        const contentText = await modal.locator('h3').textContent();
        expect(contentText).toBe("content")
    })

//     test('modal has modalId', async () => {
//         await expect(modal).toHaveId('modalId');
//     })
    
//     test('modal has modalClass', async () => {
//         await expect(modal).toHaveClass('modalClass');
//     })
// })
