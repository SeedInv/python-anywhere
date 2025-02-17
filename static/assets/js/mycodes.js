// Code for the side nav bar Tab section
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  

// #####################       Code for copying text to clipboard   ##################
  function copyText(textToCopy) {
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the value of the textarea to the text to be copied
    textarea.value = textToCopy;

    // Append the textarea to the body
    document.body.appendChild(textarea);
    
    // Select the text in the textarea
    textarea.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    
    // Alert the user that the text has been copied
    alert("Text copied to clipboard!");
}




// #####################       Pagination Caruosel for Overview section C   ##################
    var slideIndexsa = 1;
    showSlides(slideIndexsa);
    
    function plusSlides(n) {
      showSlides(slideIndexsa += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndexsa = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlidessa");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndexsa = 1}    
      if (n < 1) {slideIndexsa = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndexsa-1].style.display = "block";  
      dots[slideIndexsa-1].className += " active";
    }





// Tabs for Recent Transactions
function openCityrt(evtrt, cityNamert) {
    var i, tabcontentrt, tablinksrt;
    tabcontentrt = document.getElementsByClassName("tabcontentrt");
    for (i = 0; i < tabcontentrt.length; i++) {
        tabcontentrt[i].style.display = "none";
    }
    tablinksrt = document.getElementsByClassName("tablinksrt");
    for (i = 0; i < tablinksrt.length; i++) {
        tablinksrt[i].className = tablinksrt[i].className.replace(" activert", "");
    }
    document.getElementById(cityNamert).style.display = "block";
    evtrt.currentTarget.className += " activert";
    }
    
    // Get the element with id="defaultOpenrt" and click on it
    document.getElementById("defaultOpenrt").click();





// #####################       Pagination Caruosel for Recent Transaction - All Transactions section C   ##################
// var sslideIndex = 1;
// sshowSlides(sslideIndex);

// function splusSlides(n) {
//   sshowSlides(sslideIndex += n);
// }

// function scurrentSlide(n) {
//   sshowSlides(sslideIndex = n);
// }

// function sshowSlides(n) {
//   let i;
//   var sslides = document.getElementsByClassName("smySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > sslides.length) {sslideIndex = 1}    
//   if (n < 1) {sslideIndex = sslides.length}
//   for (i = 0; i < sslides.length; i++) {
//       sslides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   sslides[sslideIndex-1].style.display = "block";  
//   dots[sslideIndex-1].className += " active";
// }




// Tabs for SETTING section
function accopenCity(accevt, acccityName) {
  var i, acctabcontent, acctablinks;
  acctabcontent = document.getElementsByClassName("acc-tabcontent");
  for (i = 0; i < acctabcontent.length; i++) {
    acctabcontent[i].style.display = "none";
  }
  acctablinks = document.getElementsByClassName("acc-tablinks");
  for (i = 0; i < acctablinks.length; i++) {
    acctablinks[i].className = acctablinks[i].className.replace(" active", "");
  }
  document.getElementById(acccityName).style.display = "block";
  accevt.currentTarget.className += " active";
}

// Get the element with id="accdefaultOpen" and click on it
document.getElementById("accdefaultOpen").click();




// Tabs for SETTING section
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('activest')
    })
    tabs.forEach(tab => {
      tab.classList.remove('activest')
    })
    tab.classList.add('activest')
    target.classList.add('activest')
  })
})




// .edu email address details
// u: nathanieldo
// p: nathanieldo01
// e: 123seoman1@gmail.com



//Mobile Navigation
function openNav() {
  document.getElementById("mySidenavM").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenavM").style.width = "0";
}



// ###############     WEB CODE FOR MOBILE TOGGLE menubar  ###############
// {
//     const toggle = document.getElementById('toggle');
//     const sidebar = document.getElementById('sidenavM');

//     document.onclick = function(e) {
//         if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
//             toggle.classList.remove('activetoggle');
//             sidebar.classList.remove('activesidenavM')
//         }
//     }

//     toggle.onclick = function() {
//         toggle.classList.toggle('activetoggle');
//         sidebar.classList.toggle('activesidenavM')
//     }
// }