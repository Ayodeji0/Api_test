import { test, expect } from "@playwright/test";

const Url ="https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD";

test("Automate ExchangeRate API Test", async ({ request }) => {
  const response = await request.get(Url);
  //  VERIFY HTTP STATUS TO BE 200
  expect(response.status()).toBe(200);
  const responseData = await response.json();
  console.log(responseData);
  /* EXTRACT CURRENCIES FROM RESPONSE FROM API USING OBJECT.KEYS METHOD SINCE RESPONSE DOESN'T RETURN ARRAYS */
 const currencies = Object.keys(responseData.conversion_rates)
  const currenciesTotal = currencies.length
  console.log(currenciesTotal);
//   VERIFY CURRENCY 'GBP' IS SHOWN WITHIN THE RESPONSE
   expect(currencies).toContain('GBP')
});
