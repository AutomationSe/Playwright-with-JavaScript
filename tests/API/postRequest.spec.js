import {test, expect} from '@playwright/test';

test('Post Request Test', async ({request})=>{

    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await request.post(url,{

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

        data: {
            title: 'new date',
            body: 'bar1',
            userId: 44,
        },

    })
    
    expect(response.status()).toBe(201);
    const responsebody = await response.json();
    expect(responsebody['content-type']).toBe('application/json; charset=UTF-8');
    expect(responsebody.title).toBe('new date');
    expect(responsebody.body).toBe('bar1');
    expect(responsebody.userId).toBe(44);


})