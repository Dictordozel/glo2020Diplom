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
            onoffswitcCheckbox = document.querySelectorAll('.onoffswitch-checkbox'),
            myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
            selectBox = document.querySelectorAll('.select-box'),
            titleText = document.querySelectorAll('.title-text'),
            calcResult = document.getElementById('calc-result'),
            collapseTwo = document.getElementById('collapseTwo'),
            formControl = collapseTwo.querySelectorAll('.form-control'),
            accordion = document.getElementById('accordion');

            

           
            


            class Calculator {

                constructor() {
                    
                    this.ringsCount = 0;
                    this.distanse = 0;
                    this.bodyCount = 0;
                    this.bodyBottom = 0;
                    this.totalCount = 0;
                    this.bodyDiameter = 0;

                }

            run() {
               
            titleText[1].style.display = 'none';
            selectBox[2].style.display = 'none';
            selectBox[3].style.display = 'none';



            this.getTotalCount();
            this.getBodyCount();
            this.getDiameter();
            this.getRingsCount();
            this.getBodyBottom();
            this.eventListeners();
            
                
                
                }


                

                

                getBodyCount() {
                    if(myonoffswitch.checked) {
                    this.bodyCount = 10000;
                    titleText[1].style.display = 'none';
                    selectBox[2].style.display = 'none';
                    selectBox[3].style.display = 'none';
  
                    } else {
                        this.bodyCount = 15000;
                        titleText[1].style.display = 'block';
                        selectBox[2].style.display = 'inline-block';
                        selectBox[3].style.display = 'inline-block';
                    }
                    
                }


                getDiameter() {

                    if(formControl[0].value === '1.4 метра'){
                        this.bodyDiameter = 0;
                        console.log(this.bodyDiameter);

                    } else if (formControl[0].value === '2 метра'){
                        const diameter20PersentOne = Math.floor(this.bodyCount * 0.2);
                        this.bodyDiameter = diameter20PersentOne;
                        console.log(this.bodyDiameter);
                            
                        
                    } else {
                        this.bodyDiameter = 0;
                        console.log(this.bodyDiameter);
                        }
                    

                    if(formControl[2].value === '1.4 метра') {
                        this.bodyDiameter = 0;
                        } else if (formControl[2].value === '2 метра') {
                            const diameter20PersentTwo = Math.floor(this.bodyCount * 0.2);
                            this.bodyDiameter = diameter20PersentTwo;
                            console.log(this.bodyDiameter);
                        
                    } else {
                        this.bodyDiameter = 0;
                        }

                }

                getRingsCount() {

                    if(formControl[1].value === '1 штука') {
                            this.ringsCount = 0;

                        } else if(formControl[1].value === '2 штуки') {
                            let ring30PercentOne = Math.floor(this.bodyCount * 0.3);
                            this.ringsCount = ring30PercentOne;
                            console.log(this.ringsCount);

                        } else if(formControl[1].value === '3 штуки') {
                            let ring50PercentOne = Math.floor(this.bodyCount * 0.5);
                            this.ringsCount = ring50PercentOne;
                            console.log(this.ringsCount);
                            
                    } else {
                        this.ringsCount = 0;
                    }
                    

                    if(formControl[3].value === '1 штука') {
                        this.ringsCount = 0;
                        console.log(this.ringsCount);
                            
                        } else if(formControl[3].value === '2 штуки') {
                            let ring30PercentTwo = Math.floor(this.bodyCount * 0.3);
                            this.ringsCount = ring30PercentTwo;
                            console.log(this.ringsCount);
                            console.log(this.ringsCount);

                            } else if(formControl[3].value === '3 штуки') {
                                let ring50PercentTwo = Math.floor(this.bodyCount * 0.5);
                                this.ringsCount = ring50PercentTwo;
                                console.log(this.ringsCount);
                            
                    } else {
                        this.ringsCount = 0;
                    }

                
            }

                getBodyBottom() {

                if(myonoffswitch.checked) {
                     if (myonoffswitchTwo.checked) {
                        this.bodyBottom = 1000;
                    } else {
                        this.bodyBottom = 0;
                        }
                        
                    } else {
                        if (myonoffswitchTwo.checked) {
                            this.bodyBottom = 2000;
                        } else {
                            this.bodyBottom = 0;                                        
                        }
                    }    
            }

                
                eventListeners() {
                    
                    accordion.addEventListener('change', () => {
                    this.getTotalCount();
                    this.getBodyCount();
                    this.getDiameter();
                    this.getRingsCount();
                    this.getBodyBottom();
                
                    
                    
                    });
          
                    
                }

                getTotalCount() {
                    this.totalCount = this.bodyCount + this.bodyDiameter + this.ringsCount + this.bodyBottom;
                    calcResult.value = this.totalCount; 
                     
                }
            }

            const calculator = new Calculator();
            calculator.run();

        };

        septCalculator();
    
    };

    septConstructor();

    

});


