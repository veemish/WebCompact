function openPage(pageName,element,color){
    var i,buttoncontent,button;
    buttoncontent = document.getElementsByClassName('buttoncontent');
    for (i=0; i<buttoncontent.length; i++){
        buttoncontent[i].style.display ='none';
    }
    button = document.getElementsByClassName('button');
    for (i=0; i<button.length; i++){
        button[i].style.display = '';
    }
    document.getElementById(pageName).style.display = 'block';
    element.style.backgroundColor = color;

    document.getElementById(buttonopen).click();
}

currentTab = 0; // Current tab is set to be the first tab (0)
(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName('buttoncontent');
    x[n].style.display = 'inline';
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById('prevBtn').style.display = 'none';
    } else {
      document.getElementById('prevBtn').style.display = 'none';
    }
    if (n == (x.length -1)) {
      document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
      document.getElementById('nextBtn').innerHTML = 'Next';
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
  }

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName('buttoncontent');
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = 'none';
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
      //...the form gets submitted:
      document.getElementById('thisform').submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  function validateForm(){
    var x ,y , i, valid = true;
    x = document.getElementsByClassName('buttoncontent');
    y = x[currentTab].getElementsByTagName('input');
    //this checks every inputfield in the current tab://
    
    for (i = 0; i < y.length; i++){
      if (y[i].value == '') {
        y[i].className += 'invalid' ;
    // the current status is set to false//
        valid = false;
      }
    }
    // this status here is true.//

     if (valid) {
          document.getElementsByClassName('step')[currentTab].className += 'finish';
     }
     return valid;   // it returns the valid class//
  }

  function fixStepIndicator(n){
    // this function will remove active class of all steps  //

    var i,x = document.getElementsByClassName('step');
    for ( i = 0; i < x.length; i++){
      x[i].className = x[i].className.replace('active' ,'');
    }
    // this will add active class on the current step;//

    x[n].className += 'active';
  }

