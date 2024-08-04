import { test, expect, type MountResult } from '@playwright/experimental-ct-svelte';
import Tree from '$lib/Tree.svelte';
import { link } from 'fs';

test.describe('Tree', () => {
    let riojaClicked = false;
    const tree = {
        label: 'Wine',
        children: [
            {
                label: 'Red',
                children: [
                    { label: 'California', link: "https://en.wikipedia.org/wiki/California_wine", labelId: "california" },
                    {
                        label: 'Bordeaux', link: 'https://en.wikipedia.org/wiki/Bordeaux',
                        children: [{ label: 'Cab Franc' }],
                        arrowId: 'bordeauxArrow'
                    },
                    { label: 'Rioja', onClick: rioja }
                ]
            }
        ]
    };

    function rioja() {
        riojaClicked = true
    }


    let treeTest: MountResult<Tree>;
    test.beforeEach(async ({ mount }) => {
        treeTest = await mount(Tree, {
            props: {
                tree: tree,
                liId: 'li',
                liClassName: "text-sm px-5",
                arrowClass: "text-red-900",
                labelClass: "text-gray-800",
                arrows: ['▼', '►']
            },
        })
    })

    test('Tree renders with correct initial content', async () => {
        await expect(treeTest).toContainText('Wine');
    })

    test('Tree renders with correct initial content after expansion', async () => {
        await treeTest.getByRole('button', { name: "Wine" }).click();
        await treeTest.getByRole('button', { name: "Red" }).click();
        await expect(treeTest).toContainText('California');
    })

    test('li id prop exists', async () => {
        await expect(treeTest.getByRole('treeitem')).toHaveId('li');
    })

    test('li class prop exists', async () => {
        await expect(treeTest.getByRole('treeitem')).toHaveClass('text-sm px-5');
    })

    test('label class prop exists', async () => {
        await expect(treeTest.locator('a')).toHaveClass('text-gray-800');
    })

    test('arrows prop exists', async () => {
        await expect(treeTest.getByText("►")).toBeTruthy()
    })

    test('arrows prop id exists', async () => {
        await treeTest.getByRole('button', { name: "Wine" }).click();
        await treeTest.getByRole('button', { name: "Red" }).click();
        await expect(treeTest.locator('span', { hasText: '►', hasNotText: 'Bordeaux' })).toHaveId('bordeauxArrow')
    })


    test('arrow class prop exists', async () => {
        await expect(treeTest.getByText("►")).toHaveClass('text-red-900');
    })

    test('on click prop works', async () => {
        await treeTest.getByRole('button', { name: "Wine" }).click();
        await treeTest.getByRole('button', { name: "Red" }).click();
        await treeTest.locator("a", { hasText: "Rioja" }).click();
        expect(riojaClicked).toBeTruthy
    })

    test('labelId prop works', async () => {
        await treeTest.getByRole('button', { name: "Wine" }).click();
        await treeTest.getByRole('button', { name: "Red" }).click();
        await expect(treeTest.locator("a", { hasText: "California" })).toHaveId('california')
    })

    test('link prop works', async () => {
        await treeTest.getByRole('button', { name: "Wine" }).click();
        await treeTest.getByRole('button', { name: "Red" }).click();
        const linkValue = await treeTest.locator("a", { hasText: "California" }).getAttribute('href')
        await expect(linkValue).toBe("https://en.wikipedia.org/wiki/California_wine")
    })

})