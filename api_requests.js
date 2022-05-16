import { url, history_masseges_url, INPUTS } from "./view.js";
const content_type = { 'Content-Type': 'application/json;charset=utf-8' }
async function get_code(mail) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email: `${mail}` }),
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    })
}
async function chenge_user_name(event) {
    event.preventDefault();
    const name = INPUTS.input_name.value;
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ name: `${name}` }),
        headers: {
            'Authorization': `Bearer ${document.cookie} `,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
}

async function get_user_info() {
    const response = await fetch(`${url}/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${document.cookie} `,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    const data = await response.json();
    return data
}

async function get_message_history() {
    const response = await fetch(`${history_masseges_url}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${document.cookie} `,
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    const data = await response.json();

    return data;

}
const data_user = await get_user_info();
const mi_name = data_user.name;
console.log(data_user)
const message_history = await get_message_history();
const story = message_history.messages;

export { mi_name, story, chenge_user_name, get_code }