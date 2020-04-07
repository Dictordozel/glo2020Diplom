window.addEventListener('DOMContentLoaded', () => {

    'use strict';


    const septConstructor = () => {

        const panelCollapse = document.querySelectorAll('.panel-collapse'),
        panelHeading = document.querySelectorAll('.panel-heading'),
        constructBtn = document.querySelectorAll('.construct-btn');
        

        const showPanels = (index) => {

            for(let i = 0; i < panelCollapse.length; i++) {
                if(index === i) {
                    panelCollapse[i].classList.toggle('in');
                } else {
                    panelCollapse[i].classList.remove('in');
                }
            }
        };

        const showBtn = (index) => {
            
            for (let i = 0; i < constructBtn.length; i++) {
                if(index === i) {
                    panelCollapse[i].classList.toggle('in');
                    panelCollapse[(i+1)].classList.toggle('in');
                        
                }
            }
        };
        
        document.addEventListener('click', event => {
        let target = event.target;
            if(target.closest('.panel-heading')) {
                target = target.closest('.panel-heading');
                event.preventDefault(); 
                panelHeading.forEach((elem, i) => {
                    if(target === elem) {
                        showPanels(i);
                    }
                });

            } else if(target.closest('.construct-btn')) {
                target = target.closest('.construct-btn');
                event.preventDefault();
                constructBtn.forEach((elem, i) => {
                    if(target === elem) {
                        showBtn(i);
                    }

                });
            }
        
        });
        
        const septCalculator = () => {


            const myonoffswitch = document.getElementById('myonoffswitch'),
            myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
            selectBox = document.querySelectorAll('.select-box'),
            titleText = document.querySelectorAll('.title-text');
           
            


            class Calculator {

                constructor() {
                    
                    this.diameter = 0;
                    this.ringsCount = 0;
                    this.bottom = true;
                    this.distanse = 0;


                }

                run() {

                titleText[1].style.display = 'none';
                selectBox[2].style.display = 'none';
                selectBox[3].style.display = 'none';

                this.eventListeners();
            

                }

                constCheckbox() {
                    if(myonoffswitch.checked) {
                    console.log('ОДНОКАМЕРНЫЙ');
                    titleText[1].style.display = 'none';
                    selectBox[2].style.display = 'none';
                    selectBox[3].style.display = 'none';
                    //myonoffswitch.removeEventListener('change', this.constCheckbox);
                        
                        } else {
                    console.log('ДВУХКАМЕРНЫЙ');
                    titleText[1].style.display = 'block';
                    selectBox[2].style.display = 'inline-block';
                    selectBox[3].style.display = 'inline-block';

                    //myonoffswitch.removeEventListener('change', this.constCheckbox);
                    }
                    
                }


                constCheckboxTwo() {
                    if(myonoffswitchTwo.checked) {
                        console.log('С ДНОМ');
                    } else {
                        console.log('БЕЗ ДНА');
                    }
                    
                }

                eventListeners() {
                    myonoffswitch.addEventListener('change', this.constCheckbox);
                    myonoffswitchTwo.addEventListener('change', this.constCheckboxTwo);
              
                }
            }

            const calculator = new Calculator();
            calculator.run();

        };

        septCalculator();




        
    };

    septConstructor();

});


