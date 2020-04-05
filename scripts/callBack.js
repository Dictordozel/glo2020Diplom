window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const callBack = () => {
        
        const popupCall = document.querySelector('.popup-call'),
            popupCallContent = popupCall.querySelector('.popup-content'),
            popupDiscount = document.querySelector('.popup-discount'),
            popupDiscountContent = popupDiscount.querySelector('.popup-content'),
            
            hiddenCards = document.querySelectorAll('.hidden');
            console.log(hiddenCards);
            
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
                closeBgDiscount = popupDiscount.closest('.popup');

            let top = 20;
                let anim = () => {
                    top -= 10;
                    elem.style.top = top + '%';
                        if(top >= -70) {
                            requestAnimationFrame(anim);
                        } else {
                            closeBgCall.style.display = 'none';
                            closeBgDiscount.style.display = 'none'; 
                        }      
                };
                anim();

        };
        
        document.addEventListener('click', event => {

            let target = event.target;
            if(target.matches('.popup-close')) {
                animClosePopup(popupCallContent);
                animClosePopup(popupDiscountContent); 
                
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

            if(target === popupCall || target === popupDiscount) {
                console.log('SO FUCKING GOOD');
                animClosePopup(popupCallContent);
                animClosePopup(popupDiscountContent);
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

            
        });


    };

    callBack();


});


