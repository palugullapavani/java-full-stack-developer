const form=document.querySelector("form");

const fullname= document.getElementById("name");
const email= document.getElementById("email");
const message= document.getElementById("message");


function sendEmail(){

    const bodyMessage =  ` FullName: ${fullname.value}<br> Email:${email.value}<br> <br> message:${message.value}`

Email.send({

    SecureToken : "e5009786-1f22-4824-8cc0-0f500107e0bf",
    To : 'pavanipalugulla8@gmail.com',
    From : "pavanipalugulla8@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
        Swal.fire({
            title: "Success!",
            text: "Message sent Successfully!",
            icon: "success"
        });
    }else{
        swal.fire({
            title:"Failed!",
            text: "Message senting is Failed!",
            icon: "error"
        })
    }
}
);

}

function checkInputs(){
    const items=document.querySelectorAll(".item");

    for(const item of items){

        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");

        }

        if(items[1].value !=""){
            checkEmail();
        }
        items[1].addEventListener("keyup",() =>{
            checkEmail();
        });


        if(items[2].value !=""){
            checkPhone();
        }


        items[2].addEventListener("keyup",() =>{
            checkPhone();
        });

        item.addEventListener("keyup",() =>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail=document.querySelector(".error-txt email");

  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if(email.value !=""){
        errorTxtEmail.innerText="Enter a Valid Email Address"
    }
    else{
        errorTxtEmail.innerText="Email Address Can't be Blank "
    }
  }
  else{
    email.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");


  }

}



