import { PowerNumbersPage } from './app.po';

describe('power-numbers App', () => {
  let page: PowerNumbersPage;

  beforeEach(() => {
    page = new PowerNumbersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
