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
            shadowBlock = document.querySelectorAll('.shadow-block'),
            allInputs = document.querySelectorAll('input'),

            popupCallInput = popupCall.querySelectorAll('input');
            console.log(popupCallInput);
            
            
      
            


            
            
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

        const resetFormInputs = () => {
            allInputs.forEach(elem => {
            elem.value = '';
            });
        };

        
        
        document.addEventListener('click', event => {
            

            const callClose = popupCall.querySelector('.popup-close'),
            discountClose = popupDiscount.querySelector('.popup-close'),
            checkClose = popupCheck.querySelector('.popup-close'),
            consultationClose = popupConsultationt.querySelector('.popup-close'),

            callSubmit = popupCall.querySelector('.capture-form-btn'),
            discountSubmit = popupDiscount.querySelector('.capture-form-btn'),
            checkSubmit = popupCheck.querySelector('.capture-form-btn'),
            consultationSubmit = popupConsultationt.querySelector('.capture-form-btn'),

            callValid = popupCall.querySelectorAll('inputs');
            callValid.forEach(elem => {
            console.log(elem);
            });
            
             

            let target = event.target;

            if(target === callClose) {
                event.preventDefault();
                animClosePopup(popupCallContent);
                resetFormInputs();

                } else if(target === discountClose) {
                    event.preventDefault();
                    animClosePopup(popupDiscountContent);
                    resetFormInputs();

                } else if (target === checkClose) {
                    event.preventDefault();
                    animClosePopup(popupCheckContent);
                    resetFormInputs();

                } else if (target === consultationClose) {
                    event.preventDefault();
                    animClosePopup(popupConsultationtContent);
                    resetFormInputs();

                } 

                popupCallInput.forEach(elem => {
                    if(elem.value !== '') {
                        if(target === callSubmit) {
                            console.log(popupCallContent);
                            animClosePopup(popupCallContent);
        
                        } else if (target === discountSubmit) {
                            console.log(popupDiscountContent);
                            animClosePopup(popupDiscountContent);
        
                        } else if(target === checkSubmit) {
                            animClosePopup(popupCheckContent);
        
                        } else if (target === consultationSubmit) {
                            animClosePopup(popupConsultationtContent);
                        }
                        console.log(elem);
                    } 
                });
                        

            if(target.matches('.call-btn')) {
                   
                if(target.matches('.construct-btn')) {
                    popupDiscount.style.display = 'block';
                    animPopup(popupDiscountContent);            
                } else {
                    popupCall.style.display = 'block';
                    animPopup(popupCallContent);
                    }
                } 
                
            if(target.matches('.popup-call')) {
                    animClosePopup(popupCallContent);

                } else if(target.matches('.popup-discount')) {
                    animClosePopup(popupDiscountContent);

                } else if(target.matches('.popup-consultation')) {
                    animClosePopup(popupConsultationtContent);

                } else if(target.matches('.popup-check')) {
                    animClosePopup(popupCheckContent);
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
                    event.preventDefault();
                    popupConsultationt.style.display = 'block';
                    animPopup(popupConsultationtContent);
                }
            }

                     
            
        });


    };

    callBack();


});


