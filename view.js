const BUTTONS = {
    settings_button: document.querySelector(".settings_button"),
    exit_button: document.querySelector(".exit"),
    submit_button: document.querySelector(".submit"),
    exit_window: document.querySelector(".modal_window"),
    exit_buttons_modal: document.querySelectorAll(".exit_modal"),
    submit_name: document.querySelector(".submit_name"),
    submit_mail: document.querySelector(".get_code"),
    submit_code: document.querySelector(".enter_code")
}
const WINDOWS = {
    modal_window: document.querySelector(".modal_window"),
    chat_window: document.querySelector(".chat"),
    autorisation_modal: document.querySelector(".autorisation_modal"),
    confirmation_modal: document.querySelector(".confirmation_modal"),
    settings_modal: document.querySelector(".settings_modal"),

}
const INPUTS = {
    input_window: document.querySelector(".input_window"),
    input_mail: document.querySelector(".input_mail"),
    input_code: document.querySelector(".input_code"),
    input_name: document.querySelector(".input_name")


}
const template_message = document.querySelector(".template_message");

const chat_content = document.querySelector(".chat_content")
const url = "https://mighty-cove-31255.herokuapp.com/api/user";
const history_masseges_url = 'https://mighty-cove-31255.herokuapp.com/api/messages';
export { BUTTONS, WINDOWS, INPUTS, url, history_masseges_url, chat_content, template_message }