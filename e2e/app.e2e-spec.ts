import { AppAng2Page } from './app.po';

describe('app-ang2 App', () => {
  let page: AppAng2Page;

  beforeEach(() => {
    page = new AppAng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
