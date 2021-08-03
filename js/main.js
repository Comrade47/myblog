var fnames=document.getElementById('fname');
var fnames_error=document.getElementById('fname_error');

var femails=document.getElementById('femail');
var femails_error=document.getElementById('femail_error');

var ftexts=document.getElementById('ftext');
var ftexts_error=document.getElementById('ftext_error');


function error_msg(){
  if(fnames.value==''){
    fnames_error.innerHTML="Please Enter Your Name";
    fnames_error.style="color:red;font-size:1.8rem; padding-top:1rem";
    fnames.style="border-color:red;color:red";
    return false
  }

  else if(femails.value==''){
      femails_error.innerHTML="Please Enter Your Email";
      femails_error.style="color:red;font-size:1.8rem; padding-top:1rem";
      femails.style="border-color:red;color:red";
      return false

  }

 
}

function remove_error(){
    if(fnames.value!=''){
        fnames_error.innerHTML="";
        fnames.style="border-color:inherit;color:inherit"
    }
    if(femails.value!=''){
        femails_error.innerHTML="";
        femails.style="border-color:inherit;color:inherit"
    }
  
}

fnames.addEventListener('blur',remove_error)
femails.addEventListener('blur',remove_error)
