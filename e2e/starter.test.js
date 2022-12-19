describe('Detox Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should screenshot', async () => {
    await device.takeScreenshot('Home-Page');
  });
});
