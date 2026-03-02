import {test,expect} from '@playwright/test'
import { request } from 'http'

test('Get Rquest Test', async ({request})=>{

    const url = "https://jsonplaceholder.typicode.com/posts/1";

    const urlresponse = await request.get(url);
    expect(urlresponse.status()).toBe(200);
    const responsebody = await urlresponse.json();
    expect(responsebody.userId).toBe(1)
    expect(responsebody.title).toContain('reprehenderit');
})