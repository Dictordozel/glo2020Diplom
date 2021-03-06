

    const sendForms = () => {

        const statusMessage = document.createElement('div'),
            loadMessage = 'Идёт загрузка...',
            successeMessage = 'Заявка принята',
            errorMessage = 'Произошла ошибка. Попробуйте ещё раз',
            allForms = document.querySelectorAll('form'),
            allInputs = document.querySelectorAll('input'),
            directorForm = document.querySelector('.director-form');

            //console.log(allInputs);


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

            const validInputs = () => {
                const collapseFour = document.getElementById('collapseFour'),
                distanseInput = collapseFour.querySelector('input');

                allInputs.forEach(elem => {
                    elem.addEventListener('input', () => {
                        if(elem.matches('.phone-user')) {
                            elem.value = elem.value.replace(/[^)(0-9\+\-]/g, '');
                        } else {
                            if(distanseInput === elem){
                                elem.value = elem.value.replace(/[^0-9]/g, '');
                                } else {
                                    elem.value = elem.value.replace(/[^?!\-,.а-яА-ЯёЁ\s]/g, '');
                                    }
                        }                        
                    });
                });
            };

            validInputs();


            const resetFormInputs = () => {
                allInputs.forEach(elem => {
                elem.value = '';
                });
            };

            allForms.forEach((elem) => {
                //console.log(elem);

            elem.addEventListener('submit', (event) => {
                
                //let target = event.target;
                
                event.preventDefault();
                document.body.append(statusMessage);
                setTimeout(() => {
                statusMessage.remove();
                }, 3000);

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

    export default sendForms;


