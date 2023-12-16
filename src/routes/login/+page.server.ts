import { Action } from "@sveltejs/kit";

const login: Action = async ({ request }) => {

    const data = await request.formData();

    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
        return {
            status: 400,
            body: {
                message: 'Username and password are required'
            }
        };
    }
}