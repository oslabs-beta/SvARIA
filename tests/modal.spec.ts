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
                showModal: false,
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

    test('modal has modalId', async () => {
        await expect(modal.locator("dialog")).toHaveId('modalId');
    })

    test('modal has modalClass', async () => {
        await expect(modal.locator("dialog")).toHaveClass('modalClass');
    })


    test('openButton opens and renders header and content slots', async () => {
        await modal.update({
            props: {
                showModal: true
            },
        });

        await expect(modal.getByText('Close Modal')).toBeVisible()
        const headerText = await modal.locator('h1').textContent();
        await expect(headerText).toBe("contentHeader")
        const contentText = await modal.locator('h3').textContent();
        await expect(contentText).toBe("content")
    })



    test('modal button has closeModalButtonId and closeButtonClass', async () => {
        await modal.update({
            props: {
                showModal: true
            },
        });

        const closeButton = await modal.getByText('Close Modal')
        await expect(closeButton).toHaveId('closeModalButtonId');
        await expect(closeButton).toHaveClass('closeButtonClass');

        await closeButton.click()
        await expect(closeButton).not.toBeVisible()

    })


})
