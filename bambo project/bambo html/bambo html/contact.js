var params;
function sendMail(){
    params={
     name: document.getElementById("Name").value,
     Email: document.getElementById("Email-id").value,
     Contact: document.getElementById("Contact").value,
     Subject: document.getElementById("Subject").value,
     Message: document.getElementById("Message").value,
 };
 
 const serviceID="service_m8py1fa";
 const templateid="template_50r5oyb";
 
 emailjs.send(serviceID,templateid,params)
 
 .then((res)=>{
         document.getElementById("Name").value,
         document.getElementById("Email-id").value,
         document.getElementById("Contact").value,
         document.getElementById("Subject").value,
         document.getElementById("Message").value
 
      console.log(res);
      //alert("Your message sent successfully...");
 
      if (Message !== undefined && Message !== null && Message !== '') {
         swal("Success", "Your data was sent successfully.", "success");
     } else {
         swal("Failed", "Something is wrong", "error");
     }

 
 })

 
}