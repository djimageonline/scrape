import puppeteer from "puppeteer";

const url = "https://www.youtube.com/watch?v=S67gyqnYHmI";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const links = await page.evaluate(() => Array.from(document.querySelectorAll("a"), (e) => e.href));

  console.log(links);
  await browser.close();
};

main();
