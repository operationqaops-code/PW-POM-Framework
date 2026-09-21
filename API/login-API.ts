import { test as base, expect, request, APIRequestContext } from '@playwright/test';

const loginPayload = {
    email: "awalom.official@gmail.com",
    password: "Abdul@123"
};

type MyFixture = {
    authenticatedContext: APIRequestContext;
};

export const test = base.extend<MyFixture>({
    authenticatedContext: async ({ }, use) => {
        // 1. Create a isolated API context
        const apiContext = await request.newContext();

        // 2. Submit credentials via form data (URL-encoded)
        const loginPost = await apiContext.post("https://tutorialsninja.com/demo/index.php?route=account/login", {
            form: loginPayload
        });

        // 3. Verify the login request succeeded
        expect(loginPost.ok()).toBeTruthy();

        // 4. Pass the authenticated context (with active session cookies) to tests
        await use(apiContext);

        // 5. Clean up context after tests complete
        await apiContext.dispose();
    }
});

export { expect };