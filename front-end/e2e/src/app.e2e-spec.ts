import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('angular-cli-single-tests-example App', () => {
  it('should display welcome message', () => {
    browser.get('/');
    expect(element(by.css('app-root h1')).getText()).toEqual('Welcome to iDlunch!');
  });
});
