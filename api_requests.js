import { url, history_masseges_url, INPUTS } from "./view.js";
const content_type = { 'Content-Type': 'application/json;charset=utf-8' };
const headers = {
    Authorization: `Bearer ${document.cookie} `,
    content_type
}
async function get_token(mail) {
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email: `${mail}` }),
        headers: content_type
    })
}
async function chenge_user_name(event) {
    event.preventDefault();
    const name = INPUTS.input_name.value;
    await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ name: `${name}` }),
        headers: headers
    })
}

async function get_user_info() {
    const response = await fetch(`${url}/me`, {
        method: 'GET',
        headers: headers
    })
    const data = await response.json();
    return data
}

async function get_message_history() {
    const response = await fetch(`${history_masseges_url}`, {
        method: 'GET',
        headers: headers
    });
    const data = await response.json();

    return data;

}
const data_user = await get_user_info();
const mi_name = data_user.name;
const message_history = await get_message_history();
const story = message_history.messages;

export { mi_name, story, chenge_user_name, get_token }