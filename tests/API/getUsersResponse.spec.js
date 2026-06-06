import {test} from '@playwright/test'


test.only('Getproducts', async({request, page})=>{

    const response = await request.get('https://fakestoreapi.com/products');
    
    // 1. Parse the JSON once and store it in a variable
    const data = await response.json();
    
    // 2. Access the first product using index 0
    const firstProduct = data[5];

    // 3. Print the first product details
    console.log('First Product Details:', firstProduct);

    // 4. Extract the image link specifically (if needed)
    const firstProductImage = firstProduct.image;
    console.log('First Product Image Link:', firstProductImage);

    // 3. Open the browser and navigate to the image link
    await page.goto(firstProductImage);

    // Optional: Visual pause so you can see it happen if running in headed mode
    await page.waitForTimeout(10000);

})
