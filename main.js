import { BUTTONS, WINDOWS, INPUTS, chat_content, template_message, } from "./view.js";
import { get_settings_modal, get_confirmation_modal, getSettingsTab, } from "./settings.js"
import { mi_name, story, chenge_user_name } from "./api_requests.js";
BUTTONS.settings_button.addEventListener("click", getSettingsTab);
BUTTONS.submit_button.addEventListener("click", send_a_message);
BUTTONS.submit_name.addEventListener("click", chenge_user_name);
BUTTONS.submit_mail.addEventListener("click", get_confirmation_modal);
BUTTONS.submit_code.addEventListener("click", get_settings_modal);
INPUTS.input_window.addEventListener("click", () => INPUTS.input_window.value = "")
const template = template_message.content.cloneNode(true);
const socket = new WebSocket(`wss://mighty-cove-31255.herokuapp.com/websockets?${document.cookie}`);

function create_message(data) {
    const options = { hour: "numeric", minute: "numeric" };
    const time = new Date(data.createdAt).toLocaleString('ru', options);
    const user_name = data.user.name;
    const message = data.text;
    user_name !== mi_name ? he_Said(template, user_name, time, message) : i_Said(template, user_name, time, message)
    WINDOWS.chat_window.scrollTop = 9999999;
}

function send_a_message(event) {

    event.preventDefault();
    const message = INPUTS.input_window.value;

    socket.send(JSON.stringify({
        text: message,
    }));


}

for (let i = story.length - 100; i < story.length; i++) {

    const options = { hour: "numeric", minute: "numeric" };
    const user_name = story[i].user.name;
    const message = story[i].text;
    const time = new Date(story[i].createdAt).toLocaleString('ru', options);
    user_name != mi_name ? he_Said(template, user_name, time, message) : i_Said(template, user_name, time, message)
    WINDOWS.chat_window.scrollTop = 9999999;
}


function he_Said(template, user_name, time, message) {
    const he_said = document.createElement("div");
    he_said.className = "he_said";
    he_said.append(template);
    he_said.innerHTML = `<p class="text_hi_said">${user_name}: ${message}</p> <p class="time">${time}</p>`;
    chat_content.append(he_said)
}

function i_Said(template, user_name, time, message) {
    const i_said = document.createElement("div");
    i_said.className = "i_said";
    i_said.append(template);
    i_said.innerHTML = `<p class="text_i_said">${user_name}: ${message}</p> <p class="time">${time}</p>`;
    chat_content.append(i_said)
    INPUTS.input_window.value = "";
}

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    create_message(data);
};