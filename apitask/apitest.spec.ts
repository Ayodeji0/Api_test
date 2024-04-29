import { test, expect } from "@playwright/test";

const Url = "https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD"

test('Automate ExchangeRate API Test', async ({request})=>{
 const response = await request.get(Url);
//  Verifying HTTP STATUS TO BE 200
expect(response.status()).toBe(200);

})