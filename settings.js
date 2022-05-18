import { get_token } from "./api_requests.js";
import { WINDOWS, BUTTONS, INPUTS } from "./view.js";

function getSettingsTab() {

    WINDOWS.modal_window.classList.add("modal_window_visible");
    BUTTONS.exit_buttons_modal.forEach(button => button.addEventListener("click", closeSettingsTab));

}

function closeSettingsTab() {
    WINDOWS.modal_window.classList.remove("modal_window_visible")
}

function get_confirmation_modal(event) {
    event.preventDefault();
    WINDOWS.confirmation_modal.classList.add("aktiv_modal_window");
    const mail = INPUTS.input_mail.value;
    get_token(mail)
}


function get_settings_modal(event) {
    event.preventDefault()
    WINDOWS.settings_modal.classList.add("aktiv_modal_window");
    const code = INPUTS.input_code.value;
    document.cookie = `${code}`

}
export { getSettingsTab, get_confirmation_modal, get_settings_modal, closeSettingsTab };