"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // screen keyboard 
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        /* keyboardButton.addEventListener('click', () => {
             /* if (keyboard.style.top) {
                  keyboard.style.top = "";
              } else {
                  keyboard.style.top = '50%'
              } 
             keyboard.style.top = keyboard.style.top ? '' : '50%';
         })

         closeKeyboard.addEventListener('click', () => {
             keyboard.style.top = keyboard.style.top ? '' : '50%';
         }) */
        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? '' : '50%';
        };


        const typing = event => {
            const target = event.target;

            if (target.tagName.toLowerCase() == 'button') {
                searchInput.value += target.textContent.trim();
                console.log(target.textContent.trim());

            }
            // TODO : backspace and whitespace 
        }


        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);

    }
    // menu 
    {
        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');

        burger.addEventListener('click', () => {
            sidebarMenu.classList.toggle('rollUp');
            burger.classList.toggle('active');
        })

        sidebarMenu.addEventListener('click', e => {
            let target = e.target;
            target = target.closest('a[href="#"]');
            console.log(target.closest('a[href="#"]'));

            if (target) {
                const parentTarget = target.parentNode;
                sidebarMenu.querySelectorAll('li').forEach((li) => {
                    if (li === parentTarget) {
                        li.classList.add('active');
                    } else { li.classList.remove('active') }
                })
            }
        })

    }

    // TODO  modal window

    {
        const divYoutuber = document.createElement('div');
    }


});