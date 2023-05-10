import {useUserStore} from "./stores/user.ts";

function getAuthHeader() {
    const {user} = useUserStore();
    return {
        'Authorization': 'Bearer ' + user.jwt
    };
}

export async function get(url: string): Promise<Response> {
    return await fetch(url, {
        headers: {
            ...getAuthHeader()
        }
    })
}

export async function post(url: string, body: object): Promise<Response> {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
    })
}