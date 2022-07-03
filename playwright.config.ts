import {devices, PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
  fullyParallel: true,
  projects: [
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },
    {
      name: 'iPhone 11',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 11'],
      },
    },
  ],
}

export default config