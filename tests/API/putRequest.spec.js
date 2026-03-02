import { test, expect } from '@playwright/test'

test('Put Rquest Test', async ({ request }) => {

    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await request.put(url, {

        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },

        data: {
            id: 1,
            title: 'doo',
            body: 'bar',
            userId: 1,
        },

    });
    expect(response.status()).toBe(400);
    const responsebody = await response.json();

});