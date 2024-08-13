import { test, expect, type MountResult } from '@playwright/experimental-ct-svelte';
import ProgressBar from '$lib/ProgressBar.svelte';

test.describe('ProgressBar', () => {
    let progressbar: MountResult<ProgressBar>;

    let currentProgress = 50; // Example: set the current progress

    function updateProgress() {
        currentProgress += 10; // Increase progress by 10%
    }

    
    test.beforeEach(async ({ mount }) => {
        progressbar = await mount(ProgressBar, {
            props: {
                progress: currentProgress,
                progressBarClass: "w-full bg-white rounded-full h-2.5 mb-4 dark:bg-white",
                progressClass: "bg-yellow-400 h-2.5 rounded-full",
                progressBarId: 'progress-bar',
                progressId: 'progress',
                labelId: 'progressBarLabel',
                labelClass: 'text-xs text-gray-900 dark:text-white'
            },
        })
    })

    test('Progress Bar renders with correct initial content', async () => {
        await expect(progressbar).toContainText('50%');
    })


    test('Progress Bar renders with correct progressbar and progress ids', async () => {
        let bar = await progressbar.getByRole('progressbar');
        await expect(bar).toHaveId('progress-bar');
        const progress = await bar.locator("div")
        await expect(progress).toHaveId('progress')
    })

    test('Progress Bar renders with correct progressbar and progress classes', async () => {
        let bar = await progressbar.getByRole('progressbar');
        await expect(bar).toHaveClass('w-full bg-white rounded-full h-2.5 mb-4 dark:bg-white');
        const progress = await bar.locator("div")
        await expect(progress).toHaveClass('bg-yellow-400 h-2.5 rounded-full')
    })

    test('Progress Bar renders with correct label id and label class', async () => {
        const label = await progressbar.locator('label')
        await expect(label).toHaveId('progressBarLabel');
        await expect(label).toHaveClass('text-xs text-gray-900 dark:text-white')
    })

    test('function that changes progress updates in progress bar', async ({ mount }) => {
        updateProgress();
        progressbar = await mount(ProgressBar, {
            props: {
                progress: currentProgress
            },
        })
      await expect(progressbar).toContainText('60%');
    });

})
