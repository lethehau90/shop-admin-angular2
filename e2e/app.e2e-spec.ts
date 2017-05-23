import { HaushopAdminPage } from './app.po';

describe('haushop-admin App', () => {
  let page: HaushopAdminPage;

  beforeEach(() => {
    page = new HaushopAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
