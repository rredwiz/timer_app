"use strict";
const hour_field = document.getElementById('hour_field');
const minute_field = document.getElementById('minute_field');
const second_field = document.getElementById('second_field');
let remaining_time = time_seconds;
let hours_left;
let minutes_left;
let seconds_left;
hours_left = Math.floor(remaining_time / 3600);
if (hours_left < 10)
    hour_field.textContent = `0${hours_left}`;
remaining_time = remaining_time % 3600;
minutes_left = Math.floor(remaining_time / 60);
if (minutes_left < 10)
    minute_field.textContent = `0${minutes_left}`;
remaining_time = remaining_time % 60;
seconds_left = remaining_time;
if (seconds_left < 10)
    second_field.textContent = `0${seconds_left}`;
const loop_button = document.getElementById('set_loop');
loop_button.addEventListener('click', set_loop);
if (loop)
    loop_button.textContent = "loop: on";
const close_settings_btn = document.getElementById('close_settings');
close_settings_btn.addEventListener('click', close_settings);
const increase_hour_btn = document.getElementById('increase_hour');
const decrease_hour_btn = document.getElementById('decrease_hour');
const increase_minute_btn = document.getElementById('increase_minute');
const decrease_minute_btn = document.getElementById('decrease_minute');
const increase_second_btn = document.getElementById('increase_second');
const decrease_second_btn = document.getElementById('decrease_second');
increase_hour_btn.addEventListener('click', increase_hour_template);
decrease_hour_btn.addEventListener('click', decrease_hour_template);
increase_minute_btn.addEventListener('click', increase_minute_template);
decrease_minute_btn.addEventListener('click', decrease_minute_template);
increase_second_btn.addEventListener('click', increase_second_template);
decrease_second_btn.addEventListener('click', decrease_second_template);
function set_time(time_param) {
    time_seconds = time_param;
    saved_time = time_param;
}
function initialize_timer() {
    const hours = Number(hour_field.textContent);
    const minutes = Number(minute_field.textContent);
    const seconds = Number(second_field.textContent);
    set_time(hours * 3600 + minutes * 60 + seconds);
}
function close_settings() {
    initialize_timer();
    setLocalStorageValues();
    window.location.href = "../html/index.html";
}
function increase_hour_template() {
    const hour_time = Number(hour_field.textContent);
    if (hour_time < 99) {
        if (hour_time < 9) {
            hour_field.textContent = `0${hour_time + 1}`;
        }
        else {
            hour_field.textContent = `${hour_time + 1}`;
        }
    }
    else {
        hour_field.textContent = "00";
    }
}
function decrease_hour_template() {
    const hour_time = Number(hour_field.textContent);
    if (hour_time != 0) {
        if (hour_time < 11) {
            hour_field.textContent = `0${hour_time - 1}`;
        }
        else {
            hour_field.textContent = `${hour_time - 1}`;
        }
    }
    else {
        hour_field.textContent = "99";
    }
}
function increase_minute_template() {
    const minute_time = Number(minute_field.textContent);
    if (minute_time < 59) {
        if (minute_time < 9) {
            minute_field.textContent = `0${minute_time + 1}`;
        }
        else {
            minute_field.textContent = `${minute_time + 1}`;
        }
    }
    else {
        minute_field.textContent = "00";
    }
}
function decrease_minute_template() {
    const minute_time = Number(minute_field.textContent);
    if (minute_time != 0) {
        if (minute_time < 11) {
            minute_field.textContent = `0${minute_time - 1}`;
        }
        else {
            minute_field.textContent = `${minute_time - 1}`;
        }
    }
    else {
        minute_field.textContent = "59";
    }
}
function increase_second_template() {
    const second_time = Number(second_field.textContent);
    if (second_time < 59) {
        if (second_time < 9) {
            second_field.textContent = `0${second_time + 1}`;
        }
        else {
            second_field.textContent = `${second_time + 1}`;
        }
    }
    else {
        second_field.textContent = "00";
    }
}
function decrease_second_template() {
    const second_time = Number(second_field.textContent);
    if (second_time != 0) {
        if (second_time < 11) {
            second_field.textContent = `0${second_time - 1}`;
        }
        else {
            second_field.textContent = `${second_time - 1}`;
        }
    }
    else {
        second_field.textContent = "59";
    }
}
function set_loop() {
    loop = !loop;
    change_loop_text();
}
function change_loop_text() {
    if (loop) {
        loop_button.textContent = "loop: on";
    }
    else {
        loop_button.textContent = "loop: off";
    }
}
