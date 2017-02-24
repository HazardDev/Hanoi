import { HanoiPage } from './app.po';

describe('hanoi App', function() {
  let page: HanoiPage;

  beforeEach(() => {
    page = new HanoiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
