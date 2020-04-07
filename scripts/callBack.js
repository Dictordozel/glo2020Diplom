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
            hiddenCards = document.querySelectorAll('.hidden'),
            shadowBlock = document.querySelectorAll('.shadow-block');

            
            
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
            

            const callClose = popupCall.querySelector('.popup-close'),
            discountClose = popupDiscount.querySelector('.popup-close'),
            checkClose = popupCheck.querySelector('.popup-close'),
            consultationClose = popupConsultationt.querySelector('.popup-close');
            

            let target = event.target;
            
            if(target === callClose) {
                animClosePopup(popupCallContent);
                console.log(target);
                } else if(target === discountClose) {
                    animClosePopup(popupDiscountContent);
                    console.log(target);
                } else if (target === checkClose) {
                    animClosePopup(popupCheckContent);
                    console.log(target);
                } else if (target === consultationClose) {
                    animClosePopup(popupConsultationtContent);
                    console.log(target);
                } else {
                    
                    if(target.matches('.call-btn')) {
                   
                
                

                    if(target.matches('.construct-btn')) {
                        popupDiscount.style.display = 'block';
                        animPopup(popupDiscountContent);            
                        } else {
                        popupCall.style.display = 'block';
                        animPopup(popupCallContent);
                        }
                        } else {
             
                        if(target.matches('.popup-call')) {
                            animClosePopup(popupCallContent);
                        } else if(target.matches('.popup-discount')) {
                            animClosePopup(popupDiscountContent); 
                        }  else if(target.matches('.popup-consultation')) {
                            animClosePopup(popupConsultationtContent);
                        } else if(target.matches('.popup-check')) {
                            animClosePopup(popupCheckContent);
                        }
                    }
                }


            if(target.matches('.add-sentence-btn')) {
                target.style.display = 'none';
  
                shadowBlock.forEach(elem => {
                    const card = elem.parentElement;
                    card.classList.remove('hidden');
                    card.classList.remove('visible-sm-block');
                });
            }

            if(target.matches('.discount-btn')) {
                popupDiscount.style.display = 'block';
                animPopup(popupDiscountContent); 
            }

            if(target.matches('.check-btn')) {
                popupCheck.style.display = 'block';
                animPopup(popupCheckContent);
            }

            const questionForm = document.querySelector('.director-form'),
            validQuestion = questionForm.querySelector('input');

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


