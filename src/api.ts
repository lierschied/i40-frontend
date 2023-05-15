import {useUserStore} from "./stores/user.ts";
export const baseUrl = 'http://127.0.0.1:8080';
function getAuthHeader() {
    const {user} = useUserStore();
    return {
        'Authorization': 'Bearer ' + user.jwt
    };
}

export async function get(url: string): Promise<Response> {
    return await fetch(baseUrl + url, {
        headers: {
            ...getAuthHeader()
        }
    })
}

export async function post(url: string, body: object): Promise<Response> {
    return await fetch(baseUrl + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
    })
}