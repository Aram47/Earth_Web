const list = document.getElementById("Menu");
const UL = document.getElementById("UL");
const firstList = document.createElement('li');
const secondList = document.createElement('li');
const tableForLoginAndRegistration = document.createElement('div');
const NestedDiv = document.createElement('div');
const inputNickName = document.createElement('input');
const password = document.createElement('input');
const login = document.createElement('button');

let firstEvent;

const regLabel = document.createElement('h1');
const nme = document.createElement('input');
const surname = document.createElement('input');
const nickName = document.createElement('input');
const phone = document.createElement('input');
const age = document.createElement('input');
const mail = document.createElement('input');
const pass = document.createElement('input');
const repeatPassword = document.createElement('input');
const regButton = document.createElement('button');
const maleDiv = document.createElement('div');
const male = document.createElement('input');
const maleLabel = document.createElement('span');
const femaleDiv = document.createElement('div');
const female = document.createElement('input');
const femaleLabel = document.createElement('span');




UL.addEventListener('mouseover', function(event) {
    UL.style.cursor = "pointer";

    firstList.innerText = "Login";
    secondList.innerText = "Registration";
    firstList.style.color = "white";
    secondList.style.color = "white";
    firstList.style.display = "block";
    secondList.style.display = "block";

    UL.appendChild(firstList);
    UL.appendChild(secondList);
});


UL.addEventListener('mouseleave', function() {
    firstList.style.display = "none";
    secondList.style.display = "none";
});

const callFirst = firstList.addEventListener('click', firstEvent = function() {


    NestedDiv.style.display = "block";
    inputNickName.style.display = "block";
    password.style.display = "block";
    login.style.display = "block";
    tableForLoginAndRegistration.style.display = "block";

    // Login and Register style
    tableForLoginAndRegistration.style.cssText = "position: absolute";
    tableForLoginAndRegistration.style.width = "600px";
    tableForLoginAndRegistration.style.height = "500px";
    tableForLoginAndRegistration.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    tableForLoginAndRegistration.style.top = "50%";
    tableForLoginAndRegistration.style.left = "50%";
    tableForLoginAndRegistration.style.border = "2px solid rgba(100, 93, 54, 0.7)";
    tableForLoginAndRegistration.style.borderRadius = "20%";
    tableForLoginAndRegistration.style.transform = "translate(-50%, -50%)";
    tableForLoginAndRegistration.style.cssText += 'z-index: 23000 !important;';

    // Nested Div style
    NestedDiv.style.width = "200px";
    NestedDiv.style.height = "400px";
    NestedDiv.style.margin = "auto";
    NestedDiv.style.position = "absolute";
    NestedDiv.style.top = "0";
    NestedDiv.style.left = "0";
    NestedDiv.style.bottom = "0";
    NestedDiv.style.right = "0";

    // InputNickName style
    inputNickName.style.marginBottom = "20px";
    inputNickName.placeholder = "Nickname";
    inputNickName.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    inputNickName.style.width = "100%";
    inputNickName.style.height = "7%";
    inputNickName.style.border = "2px solid rgba(0, 0, 0, 0.9)";
    inputNickName.style.borderRadius = "20%";

    // Password style
    password.style.marginBottom = "20px";
    password.placeholder = "Password";
    password.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    password.style.width = "100%";
    password.style.height = "7%";
    password.style.border = "2px solid rgba(0, 0, 0, 0.9)";
    password.style.borderRadius = "20%";

    // Login style
    login.style.margin = "0 auto";
    login.style.display = "block";
    login.innerText = "Login";
    login.style.color = "gold";
    login.style.backgroundColor = "black";
    login.style.width = "50%";
    login.style.height = "7%";
    login.style.border = "2px solid rgba(0, 0, 0, 0.9)";
    login.style.borderRadius = "15%";

    // append elements
    NestedDiv.appendChild(inputNickName);
    NestedDiv.appendChild(password);
    NestedDiv.appendChild(login);
    tableForLoginAndRegistration.appendChild(NestedDiv);
    document.body.appendChild(tableForLoginAndRegistration);

});

secondList.addEventListener('click', function() {

    regLabel.style.display = "block";
    nme.style.display = "block";
    surname.style.display = "block";
    nickName.style.display = "block";
    phone.style.display = "block";
    age.style.display = "block";
    mail.style.display = "block";
    pass.style.display = "block";
    repeatPassword.style.display = "block";
    regButton.style.display = "block";
    maleDiv.style.display = "block";
    male.style.display = "block";
    maleLabel.style.display = "block";
    femaleDiv.style.display = "block";
    female.style.display = "block";
    femaleLabel.style.display = "block";
    tableForLoginAndRegistration.style.display = "block";

    maleDiv.style.cssText = "display: flex; align-items: center;";

    male.type = "radio";
    male.style.margin = "15px 0 15px 44%";
    male.name = "gender";

    maleLabel.textContent = "Male";
    maleLabel.style.cssText = "color : white; margin-left : 10px";
    
    maleDiv.appendChild(male);
    maleDiv.appendChild(maleLabel);

    femaleDiv.style.cssText = "display: flex; align-items: center;";

    female.type = "radio";
    female.style.margin = "15px 0 15px 44%";
    female.name = "gender";

    femaleLabel.textContent = "Female";
    femaleLabel.style.cssText = "color : white; margin-left : 10px";

    femaleDiv.appendChild(female);
    femaleDiv.appendChild(femaleLabel);

    tableForLoginAndRegistration.style.cssText = "position: absolute";
    tableForLoginAndRegistration.style.width = "600px";
    tableForLoginAndRegistration.style.height = "600px";
    tableForLoginAndRegistration.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    tableForLoginAndRegistration.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    tableForLoginAndRegistration.style.top = "52%";
    tableForLoginAndRegistration.style.left = "50%";
    tableForLoginAndRegistration.style.border = "2px solid rgba(100, 93, 54, 0.7)";
    tableForLoginAndRegistration.style.borderRadius = "20%";
    tableForLoginAndRegistration.style.transform = "translate(-50%, -50%)";
    tableForLoginAndRegistration.style.cssText += 'z-index: 23000 !important;';

    regLabel.innerHTML = "Registration";
    regButton.innerHTML = "Register";

    regLabel.style.cssText = "margin : 15px 36% 30px; margin-top : 15px; color : white";
    nme.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px";
    surname.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
    nickName.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
    phone.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
    age.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
    mail.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test"; 
    pass.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
    repeatPassword.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
    regButton.style.cssText = "margin : 30px 39%; height : 25px; width : 130px; margin-top : 15px; border-radius : 5px; background-color : rgba(0,0,0,0.2); color : white"

    nme.placeholder = "Enter your name";
    surname.placeholder = "Enter your surname";
    nickName.placeholder = "Enter your nickname";
    phone.placeholder = "Enter your phone";
    age.placeholder = "Enter your age";
    mail.placeholder = "Enter your mail";
    pass.placeholder = "Enter your password";
    repeatPassword.placeholder = "Repeat your password";

    phone.type = "number";
    age.type = "number";
    mail.type = "mail";
    pass.type = "password";
    repeatPassword.type = "password";

    tableForLoginAndRegistration.appendChild(regLabel);
    tableForLoginAndRegistration.appendChild(nme);
    tableForLoginAndRegistration.appendChild(surname);
    tableForLoginAndRegistration.appendChild(nickName);
    tableForLoginAndRegistration.appendChild(phone);
    tableForLoginAndRegistration.appendChild(age);
    tableForLoginAndRegistration.appendChild(mail);
    tableForLoginAndRegistration.appendChild(pass);
    tableForLoginAndRegistration.appendChild(repeatPassword);
    tableForLoginAndRegistration.appendChild(maleDiv);
    tableForLoginAndRegistration.appendChild(femaleDiv);
    tableForLoginAndRegistration.appendChild(regButton);

    document.body.appendChild(tableForLoginAndRegistration);
    
})

login.onclick = function() {
    NestedDiv.style.display = "none";
    inputNickName.style.display = "none";
    password.style.display = "none";
    login.style.display = "none";
    tableForLoginAndRegistration.style.display = "none";
};

regButton.onclick = function() {
    regLabel.style.display = "none";
    nme.style.display = "none";
    surname.style.display = "none";
    nickName.style.display = "none";
    phone.style.display = "none";
    age.style.display = "none";
    mail.style.display = "none";
    pass.style.display = "none";
    repeatPassword.style.display = "none";
    regButton.style.display = "none";
    maleDiv.style.display = "none";
    male.style.display = "none";
    maleLabel.style.display = "none";
    femaleDiv.style.display = "none";
    female.style.display = "none";
    femaleLabel.style.display = "none";
    tableForLoginAndRegistration.style.display = "none";
    callFirst('click', firstEvent());
};
