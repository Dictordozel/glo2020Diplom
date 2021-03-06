

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
            allInputs = document.querySelectorAll('input');

            const questionForm = document.querySelector('.director-form'),
            validQuestion = questionForm.querySelector('input');



            const callClose = popupCall.querySelector('.popup-close'),
            discountClose = popupDiscount.querySelector('.popup-close'),
            checkClose = popupCheck.querySelector('.popup-close'),
            consultationClose = popupConsultationt.querySelector('.popup-close'),

            callSubmit = popupCall.querySelector('.capture-form-btn'),
            discountSubmit = popupDiscount.querySelector('.capture-form-btn'),
            checkSubmit = popupCheck.querySelector('.capture-form-btn'),
            consultationSubmit = popupConsultationt.querySelector('.capture-form-btn'),

            popupCallInput = popupCall.querySelectorAll('input'),
            popupDiscountInput = popupDiscount.querySelectorAll('input'),
            popupCheckInput = popupCheck.querySelectorAll('input'),
            popupConsultationInput = popupConsultationt.querySelectorAll('input'),

            consultationForm = popupConsultationt.querySelector('.capture-form');


            
             
            
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


            if(target === callSubmit) {
                if(popupCallInput[0].value !== '') {
                    console.log('ИМЯ');
                    console.log(popupCallInput[0].value);
                    if(popupCallInput[1].value !== '') {
                    console.log('ТЕЛЕФОН');
                    console.log(popupCallInput[1].value);
                    animClosePopup(popupCallContent);
                    } 

                }
            }

            if(target === discountSubmit) {
                if(popupDiscountInput[0].value !== '') {
                    if(popupDiscountInput[1].value !== '') {
                        animClosePopup(popupDiscountContent);
                    } 
                }
            }

            if(target === checkSubmit) {
                if(popupCheckInput[0].value !== '') {
                    if(popupCheckInput[1].value !== '') {
                        animClosePopup(popupCheckContent);
                    } 
                }
            }

            if(target.matches('.consultation-btn')) {
                
                if(validQuestion.value !== '') {
                    
                    event.preventDefault();
                    popupConsultationt.style.display = 'block';
                    animPopup(popupConsultationtContent);
                    
                }
            }


            const statusMessage = document.createElement('div'),
            loadMessage = 'Идёт загрузка...',
            successeMessage = 'Заявка принята',
            errorMessage = 'Произошла ошибка. Попробуйте ещё раз';

            statusMessage.style.cssText = `font-size: 28px;
            font-family: 'MuseoSansCyrl_med', sans-serif;
                                        line-height: 48px;
                                        text-align: center;
                                        color: #f28c07;
                                        width: 600px;
                                        display: block;
                                        padding: 100px;
                                        position: fixed;
                                        top: 25%;
                                        left: 50%;
                                        z-index: 99;
                                        transform: translateX(-50%);
                                        background: rgba(255,255,255, 0.8);
                                        border-radius: 5px;`;

          

            if(target === consultationSubmit) {

                event.preventDefault();

                const formData = new FormData(questionForm);

                

                if(popupConsultationInput[0].value !== '') {
                    formData.append('user_name', popupConsultationInput[0].value);
                    if(popupConsultationInput[1].value !== '') {
                        formData.append('user_phone', popupConsultationInput[1].value);
                        let body = {};
                        formData.forEach((elem, index) => {
                            body[index] = elem;
                            });

                        document.body.append(statusMessage);
                        setTimeout(() => {
                        statusMessage.remove();
                        }, 3000);


                        const postData = (formData) => {
                            return fetch('./server.php', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                    },
                                body: JSON.stringify(formData) 
                                });
                            };

                            statusMessage.textContent = loadMessage;
                            
            
                            postData(body)
                            .then((response) => {
                                if(response.status !== 200) { 
                                throw new Error('Status network: ' + response.status);
                                }
                                statusMessage.textContent = successeMessage;
                            })
                            .catch((error) => {
                                statusMessage.textContent = errorMessage;
                                console.error(error);
                            });

                        console.log(body);
                                              

                        animClosePopup(popupConsultationtContent);
                        resetFormInputs();
                        
                    
                    } 
                }
            }


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

            

           
             
            
        });
    

        

      


    };

    export default callBack;





