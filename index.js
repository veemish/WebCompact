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

//var currentTab = 0; // Current tab is set to be the first tab (0)
//showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("buttoncontent");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
  }

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("buttoncontent");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
      //...the form gets submitted:
      document.getElementById("form").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

