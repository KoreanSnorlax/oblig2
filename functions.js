

 // Controller
 function chooseBar(barNumber){
    if(chosenBar === barNumber){
        chosenBar = '';
    }
    else{
        chosenBar = barNumber;
    }
    checkIfRemove();
    show();
}

function checkIfBorder(barNumber){
    if(chosenBar === barNumber){
        styleStroke = 'stroke: black';
    }
    else{
        styleStroke = '';
    }
    return styleStroke;
}    

 function checkIfAdd(){
     if(inputValue >= 1 && inputValue <= 10){
         return true;
     }
     else {
         alert('kun tall mellom 1 og 10.');
         return false;
     }
 }

 function checkIfRemove(){
     let barNum = chosenBar+1;
     if(barNum < 0 || isNaN(chosenBar) == true || chosenBar == ''){
        disRemoveAndChange = 'disabled';
        
        return false;
     }
     else {
        disRemoveAndChange = '';
        return true;
     }
 }

 function removeBar(){
     selectedBar = chosenBar-1;
     if(checkIfRemove() == true){
         numbers.splice(selectedBar, 1);
         chosenBar = '';
     }
     checkIfRemove();
     show();
 }


 function changeBar(){
    selectedBar = chosenBar-1;
     if(checkIfAdd() == true){
         numbers[selectedBar] = inputValue;
         inputValue = 0;
     }
     show();
 }

 function addBar(){
     if(checkIfAdd() == true){
         numbers[numbers.length] = parseInt(inputValue);
         inputValue = 0;
     }
     show();
 }