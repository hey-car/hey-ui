import { delay } from 'q';

import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  screenshotMatchClick,
  screenshotMatchHover,
} from '../../../screenshotUtils';

const packageName = 'accordion';
const accordionButtonSelector = '#root div[role="button"]';
const desktopWidthSize = 1024;
const viewPort = {
  width: desktopWidthSize,
  height: 768,
};

describe('Accordion screenshots', () => {
  test('Accordion default visual state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });
    const { browser, context, page } = await openBrowserPage(
      pageUrl,
      undefined,
      viewPort,
    );

    await delay(300);

    try {
      await matchHtml({
        page,
        expect,
      });
    } catch (error: unknown) {
      console.error(error);
    } finally {
      await closeBrowser({ browser, context, page });
    }
  });

  test('Accordion mouse down on tabs', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    await screenshotMatchClick(pageUrl, accordionButtonSelector, {}, 'down');
  });

  test('Accordion hover on tabs', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    await screenshotMatchHover(pageUrl, accordionButtonSelector);
  });

  test('Accordion open first tab', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    await screenshotMatchClick(pageUrl, accordionButtonSelector);
  });
});
