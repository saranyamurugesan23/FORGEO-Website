import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: '.',
    testMatch: /forgeo\.generated\.spec\.(ts|js)/,
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    fullyParallel: false,
    retries: 0,
    reporter: [
        ['list'],
        ['json', {
            outputFile: 'test-results/results.json'
        }]
    ],
    use: {
        baseURL: process.env.FORGEO_TEST_BASE_URL || 'http://127.0.0.1:3000',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        headless: true
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});
