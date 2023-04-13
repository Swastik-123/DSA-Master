
let form_id = document.getElementById("formId");

function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mishra.swastik0211@gmail.com",
        Password : "E41A73D0945213531DE0813DAD832578E117",
        To : 'mishra.swastik0211@gmail.com',
        From : "mishra.swastik0211@gmail.com",
        Subject : "New Email Come from DSA MASTER for Enquiry",
        Body : "Name: " + document.getElementById("name").value
                +"<br/> Email: "+ document.getElementById("email").value
                +"<br/> Phone No: "+ document.getElementById("phone").value
                +"<br/> Message: "+ document.getElementById("message").value
    }).then(
      message => alert("Email send successfully!")
    );
    
}
/*
E41A73D0945213531DE0813DAD832578E117
*/


