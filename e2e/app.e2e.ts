import { SecondScreenPage } from './app.po';

describe('second-screen App', function() {
  let page: SecondScreenPage;

  beforeEach(() => {
    page = new SecondScreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('second-screen works!');
  });
});
