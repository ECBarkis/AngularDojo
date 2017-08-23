import { GitHubScoresPage } from './app.po';

describe('git-hub-scores App', () => {
  let page: GitHubScoresPage;

  beforeEach(() => {
    page = new GitHubScoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
