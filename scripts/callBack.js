window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const callBack = () => {
        
        const popupCall = document.querySelector('.popup-call'),
        popupContent = document.querySelector('.popup-content'),
        popupDiscount = document.querySelector('.popup-discount');
        console.log(popupContent);
            
        const showPopup = (popup) => {
            popup.style.display = 'block';
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

        // const closePopup = (popup) => {

        // };

        document.addEventListener('click', event => {
        let target = event.target;
        if(target.matches('.call-btn')) {
            event.preventDefault();
            if(target.matches('.construct-btn')) {
                console.log('Перехожу на другой уровень');
                showPopup(popupDiscount);            
            } else {
                showPopup(popupCall);
            }
        }
        if(target.matches('.popup-close')) {
            popupCall.style.display = 'none';
            popupDiscount.style.display = 'none';
            } else {
                target = target.matches('.popup-content');
                if(target) {
                    popupCall.style.display = 'none';
                    popupDiscount.style.display = 'none';
                }
            }
        });
    };

    callBack();


});


