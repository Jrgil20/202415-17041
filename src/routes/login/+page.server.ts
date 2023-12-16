import { fail } from "@sveltejs/kit";
import type { Action } from "./$types";

const login: Action = async ({ request }) => {

    const data = await request.formData();

    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
        return fail(400, {invalid: true});
    }

};

export const actions: Action = { login }; 