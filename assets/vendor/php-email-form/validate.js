/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/



// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');
  
//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       let thisForm = this;
      
//       let action = thisForm.getAttribute('action');
//     //   let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!')
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');
      
//       let formData = new FormData( thisForm );
      
//       php_email_form_submit(thisForm, action, formData);
      
//     //   if ( recaptcha ) {
//     //     if(typeof grecaptcha !== "undefined" ) {
//     //       grecaptcha.ready(function() {
//     //         try {
//     //           grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//     //           .then(token => {
//     //             formData.set('recaptcha-response', token);
//     //             php_email_form_submit(thisForm, action, formData);
//     //           })
//     //         } catch(error) {
//     //           displayError(thisForm, error)
//     //         }
//     //       });
//     //     } else {
//     //       displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//     //     }
//     //   } else {
//     //     php_email_form_submit(thisForm, action, formData);
//     //   }
//     });
//   });
  
//   function php_email_form_submit(thisForm, action, formData) {
//       console.log(action)
      
//     //   $.ajax({
//     //         type: "POST",
//     //         url: action,
//     //         data: formData,
//     //         cache : false,
//     //         processData: false,
//     //         success: function(data) {
//     //             thisForm.querySelector('.loading').classList.remove('d-block');
    
//     //             thisForm.querySelector('.sent-message').classList.add('d-block');
//     //             thisForm.reset(); 
//     //         }
//     //     });
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       return response.text();
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//     //   if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//     //   } else {
//     //     throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//     //   }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
    
//     if(error == 'Error: Message sent Successfully')
//     { 
//       let part = String(error).slice(6,35);
//       thisForm.querySelector('.error-message').innerHTML = part + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
//       thisForm.querySelector('.error-message').classList.add('d-block');
      
//     }else{
//       thisForm.querySelector('.error-message').innerHTML = error + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
//       $('#error-message').css("background-color","red");
//       thisForm.querySelector('.error-message').classList.add('d-block');
//     }
//   }

// })();
