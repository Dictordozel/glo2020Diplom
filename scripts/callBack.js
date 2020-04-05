window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const callBack = () => {
        
        const popupCall = document.querySelector('.popup-call'),
            popupCallContent = popupCall.querySelector('.popup-content'),
            popupDiscount = document.querySelector('.popup-discount'),
            popupDiscountContent = popupDiscount.querySelector('.popup-content'),
            popupCheck = document.querySelector('.popup-check'),
            popupCheckContent = popupCheck.querySelector('.popup-content'),
            popupConsultationt = document.querySelector('.popup-consultation'),
            popupConsultationtContent = popupConsultationt.querySelector('.popup-content'),
            hiddenCards = document.querySelectorAll('.hidden');
            
        const animPopup = (elem) => {
            
            let top = -70;
            let anim = () => {
                top += 8;
                elem.style.top = top + '%';
                    if(top <= 20) {
                        requestAnimationFrame(anim);
                    }      
            };
            anim();
        };

        const animClosePopup = (elem) => {
            const closeBgCall = popupCall.closest('.popup'),
                closeBgDiscount = popupDiscount.closest('.popup'),
                closeBgCheck = popupCheck.closest('.popup'),
                closeBgConsultationt = popupConsultationt.closest('.popup');

            let top = 20;
                let anim = () => {
                    top -= 10;
                    elem.style.top = top + '%';
                        if(top >= -70) {
                            requestAnimationFrame(anim);
                        } else {
                            closeBgCall.style.display = 'none';
                            closeBgDiscount.style.display = 'none';
                            closeBgCheck.style.display = 'none';
                            closeBgConsultationt.style.display = 'none';
                        }      
                };
                anim();

        };
        
        document.addEventListener('click', event => {

            let target = event.target;
            if(target.matches('.popup-close')) {
                animClosePopup(popupCallContent);
                animClosePopup(popupDiscountContent)
                animClosePopup(popupCheckContent);
                animClosePopup(popupConsultationtContent);
                
                } else if(target.matches('.call-btn')) {
                    event.preventDefault();
                    if(target.matches('.construct-btn')) {
                        popupDiscount.style.display = 'block';
                        animPopup(popupDiscountContent);            
                        } else {
                        popupCall.style.display = 'block';
                        animPopup(popupCallContent);
                        }
                }

            if(target === popupCall || target === popupDiscount || 
                target === popupCheck || target === popupConsultationt) {
                animClosePopup(popupCallContent);
                animClosePopup(popupDiscountContent);
                animClosePopup(popupCheckContent);
                animClosePopup(popupConsultationtContent);
            }

            if(target.matches('.add-sentence-btn')) {
                target.style.display = 'none';
                hiddenCards.forEach(elem => {
                elem.classList.remove('hidden');
                });

            }

            if(target.matches('.discount-btn')) {
                popupDiscount.style.display = 'block';
                animPopup(popupDiscountContent); 
            }

            if(target.matches('.check-btn')) {
                popupCheck.style.display = 'block';
                animPopup(popupCheckContent);
                console.log('SO FUCKING GOOD');
            }

            const questionForm = document.querySelector('.director-form'),
            validQuestion = questionForm.querySelector('input');
            console.log(questionForm);

            if(target.matches('.consultation-btn')) {
                if(validQuestion.value !== '') {
                popupConsultationt.style.display = 'block';
                animPopup(popupConsultationtContent);
                }
            }
        });


    };

    callBack();


});


