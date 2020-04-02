window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const callBack = () => {
        
        const popupCall = document.querySelector('.popup-call'),
        popupContent = document.querySelector('.popup-content');
            

        const showPopupCall = () => {
             popupCall.style.display = 'block';
            let top = -70;
            let animPopup = () => {
                top += 5;
                 popupContent.style.top = top + '%';
                    if(top <= 20) {
                        requestAnimationFrame(animPopup);
                    }      
            };
            animPopup();
        };

        document.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        if(target.matches('.call-btn')) {
            showPopupCall(); 
            }
        if(target.matches('.popup-close')) {
            console.log(target);
            popupCall.style.display = 'none';
            } else {
                target = target.matches('.popup-call');
                if(target) {
                    popupCall.style.display = 'none';
                    console.log(target);
                }
            }
        });
    };

    callBack();









});