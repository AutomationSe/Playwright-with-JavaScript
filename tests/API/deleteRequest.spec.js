import {test, expect} from '@playwright/test';

test('Delete Request Test', async ({request}) => {

    const url = "https://jsonplaceholder.typicode.com/posts/1";

    const response = await request.delete(url);
    expect(response.status()).toBe(200);

    const responseHeaders = response.headers();
    expect(responseHeaders['content-type']).toBe('application/json; charset=utf-8');

    expect(response.statusText()).toBe("OK");
});