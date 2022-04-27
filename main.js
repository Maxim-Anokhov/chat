import { BUTTONS, WINDOWS } from "./view.js";
BUTTONS.settings_button.addEventListener("click", getSettingsTab);
BUTTONS.submit_button.addEventListener("submit", send_a_massage)

function getSettingsTab() {

    WINDOWS.modal_window.classList.add("modal_window_visible");
    BUTTONS.exit_buttons_modal.forEach(button => button.addEventListener("click", closeSettingsTab));
    // BUTTONS.exit_window.addEventListener("click", closeSettingsTab)
}

function closeSettingsTab() {
    WINDOWS.modal_window.classList.remove("modal_window_visible")

}

function send_a_massage(event) {
    event.preventDefault();
    console.log("hi");

}