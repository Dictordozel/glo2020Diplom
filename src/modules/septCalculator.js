const septCalculator = () => {

    const myonoffswitch = document.getElementById('myonoffswitch'),
    myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
    selectBox = document.querySelectorAll('.select-box'),
    titleText = document.querySelectorAll('.title-text'),
    calcResult = document.getElementById('calc-result'),
    accordion = document.getElementById('accordion'),
    formControl = document.querySelectorAll('.form-control'),
    distanceCount = document.querySelector('#collapseFour input'),
    sendButton = document.querySelector('#collapseFour button');



    class Calculator {

        constructor() {

            this.bodyCount = 0;
            this.bodyDiameterOne = 0;
            this.bodyDiameterTwo = 0;
            this.ringsCountOne = 0;
            this.ringsCountTwo = 0;

            this.distance = 0;
            
            this.bodyBottom = 0;

            this.totalCount = 0;
            
            
        }

        run() {

            this.bodyCountChecker();

            this.diameterPercentOne();
            this.ringsPercentOne();
            this.diameterPercentTwo();
            this.ringsPercentTwo();

            this.getBodyBottom();
            this.getDistance();
            this.getTotalCount();

            this.showTotalCount();
            
            this.eventListeners();

        }

        showTotalCount() {

            calcResult.value = this.getTotalCount();
        }

        getTotalCount() {

            const bodyDiameter = this.bodyDiameterOne + this.bodyDiameterTwo;
            const ringsCount = this.ringsCountOne + this.ringsCountTwo;
            const getResult = this.bodyCount + bodyDiameter + ringsCount + this.bodyBottom;
            this.totalCount = getResult; 
            return getResult;
             
        }

        bodyCountChecker() {

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

        diameterPercentOne() {

                if(formControl[0].value === '1.4 метра'){
                    const  diameter0PersentOne = 0;
                    this.bodyDiameterOne = diameter0PersentOne;
                
                    } else if(formControl[0].value === '2 метра'){
                        let diameter20PersentOne = Math.floor(this.bodyCount * 0.2);
                        this.bodyDiameterOne = diameter20PersentOne;
                        }

        }
                    
        ringsPercentOne() {
    
                if(formControl[1].value === '1 штука') {
                    const ring30PercentOne = 0;
                    this.ringsCountOne = ring30PercentOne;
                        
                        } else if(formControl[1].value === '2 штуки') {
                            let ring30PercentOne = Math.floor(this.bodyCount * 0.3);
                            this.ringsCountOne = ring30PercentOne;
                        
                        } else if(formControl[1].value === '3 штуки') {
                            let ring50PercentOne = Math.floor(this.bodyCount * 0.5);
                            this.ringsCountOne = ring50PercentOne;
                            }
        }
    
        diameterPercentTwo() {
    
                if(formControl[2].value === '1.4 метра') {
                    const diameter0PersentTwo = 0;
                    this.bodyDiameterTwo = diameter0PersentTwo;
        
                        } else if (formControl[2].value === '2 метра') {
                            let diameter20PersentTwo = Math.floor(this.bodyCount * 0.2);
                            this.bodyDiameterTwo = diameter20PersentTwo;
                            }
        }
    
        ringsPercentTwo() {
    
                if(formControl[3].value === '1 штука') {
                    const ring0PercentTwo = 0;
                    this.ringsCountTwo = ring0PercentTwo;
                                        
                    } else if(formControl[3].value === '2 штуки') {
                        let ring30PercentTwo = Math.floor(this.bodyCount * 0.3);
                        this.ringsCountTwo = ring30PercentTwo;
        
                    } else if(formControl[3].value === '3 штуки') {
                        let ring50PercentTwo = Math.floor(this.bodyCount * 0.5);
                        this.ringsCountTwo = ring50PercentTwo;
                        }
        }
            
        getBodyBottom() {

            if(myonoffswitch.checked) {
                if(myonoffswitchTwo.checked) {
                    this.bodyBottom = 1000;
                } else {
                    this.bodyBottom = 0;
                    }
                    
                } else {
                    if(myonoffswitchTwo.checked) {
                        this.bodyBottom = 2000;
                    } else {
                        this.bodyBottom = 0;                                        
                        }
                    }    
        }

        getDistance() {

            this.distance = +distanceCount.value;                
        }
        
        eventListeners() {

            accordion.addEventListener('change', () => {
                this.bodyCountChecker();
                this.diameterPercentOne();
                this.ringsPercentOne();
                this.diameterPercentTwo();
                this.ringsPercentTwo();
                this.getBodyBottom();
                this.getTotalCount();
                this.showTotalCount();
            });

            distanceCount.addEventListener('input', this.getDistance.bind(this));    
        }

    }

    const calculator = new Calculator();
    calculator.run();

};

export default septCalculator;