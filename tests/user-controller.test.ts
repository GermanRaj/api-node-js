import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';


    test('GET /:id - should return a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseGet = await request.get(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(StatusCodes.OK); });

    test('GET /:id - should return 404 if user not found', async ({ request }) => {
         const responseCreate = await request.get(`${baseURL}/100`);
         expect(responseCreate.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('POST / - should add a new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseBody.id).toBeDefined()
    });

    test('DELETE /:id - should delete a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseGet = await request.delete(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(StatusCodes.OK); });


    test('DELETE /:id - should return 404 if user not found', async ({ request }) => {
        const response = await request.delete(`${baseURL}/9999`);
        expect(response.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('When creating new user, body should return correct data', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect.soft(responseBody.id).toBeDefined()
        expect.soft(responseBody.name).toBeDefined()
        expect.soft(responseBody.email).toBeDefined()
        expect.soft(responseBody.phone).toBeDefined()
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        console.log(responseBody);
    });





