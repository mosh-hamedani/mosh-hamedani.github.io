import { DeployDemoPage } from './app.po';

describe('deploy-demo App', () => {
  let page: DeployDemoPage;

  beforeEach(() => {
    page = new DeployDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
