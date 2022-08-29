$(document).ready(function() {

  var form = $('#form'),
      email = $('#email'),
      fname = $('#fname'),
	  lname = $('#lname'),
	  message = $('#message'),
	  myImage = $('#myImage'),
      info = $('#info'),
      loader = $('#loader'),
      submit = $("#subnewtopic");
  
  form.on('input', '#email, #fname, #lname, #message, #myImage', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });
 


	
   


  submit.on('click', function(e) {
    info.html('Loading...').css('color', 'red').slideDown();
    e.preventDefault();
    if(validate()) {
      sendEmail().done(function(data) {
        if(data.success) {
          email.val('');
		  fname.val('');
          lname.val('');
          message.val('');
		  myImage.val('');
          //info.html('Message sent!').css('color', 'green').slideDown();
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(fname.val()) === "") {
      fname.css('border-color', 'red');
      valid = false;
    }
	if($.trim(lname.val()) === "") {
      lname.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
	if($.trim(myImage.val()) === "") {
      myImage.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }
  function manage(txt) {
        var bt = document.getElementById('subnewtopic');
        var ele = document.getElementsByTagName('input'); 

        // Loop through each element.
        for (i = 0; i < ele.length; i++) {

            // Check the element type.
            if (ele[i].type == 'text' && ele[i].value == '') {
                bt.disabled = true;    // Disable the button.
                return false;
            }
            else {
                bt.disabled = false;   // Enable the button.
            }
        }
    }

});