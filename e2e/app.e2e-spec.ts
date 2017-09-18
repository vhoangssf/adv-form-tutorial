import { AdvFormPage } from './app.po';

describe('adv-form App', function() {
  let page: AdvFormPage;

  beforeEach(() => {
    page = new AdvFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
