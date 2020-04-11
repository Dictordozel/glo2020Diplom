

    'use strict';


    const septConstructor = () => {

        const panelCollapse = document.querySelectorAll('.panel-collapse'),
        panelHeading = document.querySelectorAll('.panel-heading'),
        constructBtn = document.querySelectorAll('.construct-btn'),
        collapseOne = document.getElementById('collapseOne'),
        collapseOneTwo = document.getElementById('collapseOne-two');

        collapseOne.classList.remove('in');
        collapseOneTwo.classList.remove('in');
        
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
    
    };

    export default septConstructor;