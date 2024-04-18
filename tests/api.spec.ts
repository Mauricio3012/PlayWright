import {expect, test} from "@playwright/test";

test('postman GET teste', async ({ request }) => {

    const response = await request.get(`https://postman-echo.com/get`, {
        params: {
            'foo1': 'bar',
            'foo2': 'bar2'
        }
    });

    expect(response.ok()).toBeTruthy();
    expect(await response.url()).toContain(`https://postman-echo.com/get`);

    const text = await response.text();
    expect(text).toContain("x-forwarded-proto");


  });

  test('postman POST teste', async ({ request }) => {

    const response = await request.post(`https://postman-echo.com/post`, {
        data: {
            strange: "boom",

        }
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(await response.url()).toContain(`https://postman-echo.com/post`);

    const text = await response.text();
    expect(text).toContain("boom");


  });