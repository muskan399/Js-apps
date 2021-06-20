console.log("Form Validation Application")
const name_regex=/^[a-zA-Z]+$/;
const number_regex=/^\d{10}$/;
const email_regex=/^[(-_a-zA-Z)]+@[(a-zA-Z)]+\.[(a-zA-Z)]+$/;
let  name=document.getElementById('name');
let number=document.getElementById('number');
let email=document.getElementById('email');
let btn=document.getElementById('btn');
let msg=document.getElementById('msg');
let success_msg=document.getElementById('success_msg');
let name_error=document.getElementById('name_error');
let phone_error=document.getElementById('phone_error');
let email_error=document.getElementById('email_error');
let email_validate=false;
let number_validate=false;
let name_validate=false;
console.log(success_msg);

name.addEventListener("blur",check_name);
function check_name(event)
{
    if(name_regex.exec(name.value)==null )
    {
        success_msg.classList.remove('show');
        name_validate=false;
        msg.classList.add('show');
        name_error.innerText="Not Applicable, Please enter alphabets";
        console.log("NO");
    }
    else
    {
        name_validate=true;
        
        name_error.innerText="";
        msg.classList.remove('show');
    }
}
number.addEventListener("blur",check_number);
function check_number(event)
{
    if(number_regex.exec(number.value)==null )
    {
        success_msg.classList.remove('show');
        number_validate=false;
        msg.classList.add('show');
        phone_error.innerText="Not Applicable, Please enter 10 digit number";
    }
    else
    {
        number_validate=true;
        msg.classList.remove('show');
        phone_error.innerText="";
    }
}
email.addEventListener("blur",check_email);
function check_email(event)
{
    if(email_regex.exec(email.value)==null )
    {
        email_validate=false;
        success_msg.classList.remove('show');
        msg.classList.add('show');
        email_error.innerText="Not Applicable, Please enter in this form abc@xyz.pq";
    }
    else
    {
        email_validate=true;
        msg.classList.remove('show');
        email_error.innerText="";
    }
}
btn.addEventListener("click",sendRequest);
function sendRequest(event)
{
    event.preventDefault();
    if(email_validate && number_validate && name_validate)
    {
        success_msg.classList.add('show');
        msg.classList.remove('show');
    }
    else
    {
        success_msg.classList.remove('show');
        msg.classList.add('show');
    }
}
