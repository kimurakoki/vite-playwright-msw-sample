import {expect, test} from '@playwright/test'

test('ユーザー登録', async ({page}) => {
  await page.goto('http://localhost:3000/register-user')

  await page.fill('[data-test=emailInput]', 'foo@example.com')
  await page.fill('[data-test=nameInput]', 'foo')

  await page.pause()

  await page.click('[data-test=submitButton]')

  await expect(page.locator('[data-test=myPagePage]')).toHaveCount(1)
})