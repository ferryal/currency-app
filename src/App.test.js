const puppeteer = require("puppeteer");

const isDebugging = () => {
  const debuggingMode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };

  return process.env.NODE_ENV === "debug" ? debuggingMode : {};
};

describe("on page load", () => {
  test("Default base and converted currency loads correctly", async () => {
    let browser = await puppeteer.launch(isDebugging());
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ""
    });

    await page.goto("http://localhost:3000/");

    const defaultCurrency = await page.$eval(
      ".base-currency",
      el => el.innerHTML
    );
    const countOfDefaultCurrecies = await page.$$(".currency-code");

    expect(defaultCurrency).toBe("USD");
    expect(countOfDefaultCurrecies.length).toBe(4);

    browser.close();
  }, 16000);
});
