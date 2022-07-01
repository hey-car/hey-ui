import {
  BrowserType,
  chromium,
  ChromiumBrowser,
  FirefoxBrowser,
  WebKitBrowser,
} from 'playwright';

import {
  CloseBrowserParams,
  CustomSnapshotIdentifierParams,
  MatchHtmlParams,
} from './helpers.types';

export const defaultViewport = { width: 1024, height: 768 };
const screenshotDefaultOpts = {
  clip: {
    x: 0,
    y: 0,
    width: 1920,
    height: 500,
  },
  fullPage: false,
  omitBackground: false,
};

export const customSnapshotIdentifier = ({
  currentTestName,
  counter,
}: CustomSnapshotIdentifierParams) => {
  return `${currentTestName}${counter > 1 ? `-${counter}` : ''}`;
};

export const matchHtml = async ({
  page,
  expect,
  matchImageSnapshotOptions,
  screenshotOpts = screenshotDefaultOpts,
}: MatchHtmlParams) => {
  const image = await page.screenshot(screenshotOpts);

  try {
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier,
      ...matchImageSnapshotOptions,
    });
  } catch (e) {
    console.error(page.url());
    throw e;
  }
};

export const openBrowserPage = async (
  pageUrl: string,
  browserType: BrowserType<
    ChromiumBrowser | FirefoxBrowser | WebKitBrowser
  > = chromium,
  viewport: { width: number; height: number } = defaultViewport,
) => {
  const browser = await browserType.launch();
  const context = await browser.newContext({ viewport: viewport });
  const page = await context.newPage();

  await page.goto(pageUrl);

  return { browser, context, page };
};

export const closeBrowser = async ({
  page,
  context,
  browser,
}: CloseBrowserParams) => {
  await page.close();
  await context.close();
  await browser.close();
};
