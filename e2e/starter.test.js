describe('Detox Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should screenshot', async () => {
    await device.takeScreenshot('home page');
  });
});
