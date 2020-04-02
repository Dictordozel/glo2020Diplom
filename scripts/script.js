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
        let target = event.target;
        if(target.matches('.call-btn')) {
            event.preventDefault();
            showPopupCall(); 
            }
        if(target.matches('.popup-close')) {
            popupCall.style.display = 'none';
            } else {
                target = target.matches('.popup-call');
                if(target) {
                    popupCall.style.display = 'none';
                }
            }
        });
    };

    callBack();

    

    const sendForms = () => {

        const statusMessage = document.createElement('div'),
            loadMessage = 'Фюнф секунден!',
            successeMessage = 'Хоп-хэй-лалалэй!',
            errorMessage = 'Пардон, амиго! Не сегодня!',
            allForms = document.querySelectorAll('form'),
            allInputs = document.querySelectorAll('input');

            statusMessage.style.cssText = `font-size: 24px;
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

                                            // rgba(242,140,7, 0.8);
                                            // rgba(133,190,50, 0.8);
                                            // text-shadow: 0 1px 1px green;
                                            // border: 1px solid #85be32;

            const validInputs = () => {
                allInputs.forEach(elem => {
                    elem.addEventListener('input', () => {
                        if(elem.matches('.phone-user')) {
                            elem.value = elem.value.replace(/[^)(0-9\+\-]/g, '');
                        } else {
                            elem.value = elem.value.replace(/[^0-9?!\-,.а-яА-ЯёЁ\s]+$/g, '');
                        }                        
                    });
                });
            };

            validInputs();


            const resetFormInputs = () => {
                allInputs.forEach(elem => {
                console.log(elem);
                elem.value = '';
                });
            };

        allForms.forEach((elem) => {
            
        elem.addEventListener('submit', (event) =>{
            event.preventDefault();

            document.body.append(statusMessage);
            setTimeout(() => {
                statusMessage.remove();
                }, 2000);

                const formData = new FormData(elem);

                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
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

                resetFormInputs();
    
            });
        });

    };
    sendForms();


});