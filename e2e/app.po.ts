export class SecondScreenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('second-screen-app h1')).getText();
  }
}
