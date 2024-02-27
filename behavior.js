const list = document.getElementById("Menu");
const UL = document.getElementById("UL");
const firstList = document.createElement('li');
const secondList = document.createElement('li');
const tableForLoginAndRegistration = document.createElement('div');
const inputNickName = document.createElement('input');
const password = document.createElement('input');
const login = document.createElement('button');
const Regform = document.createElement('form');

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

//set fields required
let displayNoneForLogin = login.onclick = function() {
    inputNickName.style.display = "none";
    password.style.display = "none";
    login.style.display = "none";
    tableForLoginAndRegistration.style.display = "none";
};
function displayNoneForRegistration(){
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
}
function setRequired()
{
    nme.setAttribute('required', true);
    surname.setAttribute('required', true);
    nickName.setAttribute('required', true);
    phone.setAttribute('required', true);
    age.setAttribute('required', true);
    mail.setAttribute('required', true);
    pass.setAttribute('required', true);
    repeatPassword.setAttribute('required', true);
    male.setAttribute('required', true);
    female.setAttribute('required', true);
    return ;
}
regButton.onclick = function() {
    setRequired();
    console.log();
    // regLabel.style.display = "none";
    // nme.style.display = "none";
    // surname.style.display = "none";
    // nickName.style.display = "none";
    // phone.style.display = "none";
    // age.style.display = "none";
    // mail.style.display = "none";
    // pass.style.display = "none";
    // repeatPassword.style.display = "none";
    // regButton.style.display = "none";
    // maleDiv.style.display = "none";
    // male.style.display = "none";
    // maleLabel.style.display = "none";
    // femaleDiv.style.display = "none";
    // female.style.display = "none";
    // femaleLabel.style.display = "none";
    // tableForLoginAndRegistration.style.display = "none";
    // firstEvent();
    // validateRegistration();
};
function displayBlockForRegistration()
{
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
}
function displayBlockForLogin()
{
    inputNickName.style.display = "block";
    password.style.display = "block";
    login.style.display = "block";
    tableForLoginAndRegistration.style.display = "block";
}
function appendChildeForRegistration()
{
    Regform.appendChild(regLabel);
    Regform.appendChild(nme);
    Regform.appendChild(surname);
    Regform.appendChild(nickName);
    Regform.appendChild(phone);
    Regform.appendChild(age);
    Regform.appendChild(mail);
    Regform.appendChild(pass);
    Regform.appendChild(repeatPassword);
    Regform.appendChild(maleDiv);
    Regform.appendChild(femaleDiv);
    Regform.appendChild(regButton);
    tableForLoginAndRegistration.appendChild(Regform);
}
function appendChildeForLogin()
{
    tableForLoginAndRegistration.appendChild(inputNickName);
    tableForLoginAndRegistration.appendChild(password);
    tableForLoginAndRegistration.appendChild(login);
}
// --------------------------------------------------



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


firstList.addEventListener('click', firstEvent = function() {

    displayNoneForRegistration();
    displayBlockForLogin();

    // Login and Register style
    tableForLoginAndRegistration.style.cssText = "position: absolute";
    tableForLoginAndRegistration.style.width = "600px";
    tableForLoginAndRegistration.style.height = "600px";
    tableForLoginAndRegistration.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    tableForLoginAndRegistration.style.top = "52%";
    tableForLoginAndRegistration.style.left = "50%";
    tableForLoginAndRegistration.style.border = "2px solid rgba(100, 93, 54, 0.7)";
    tableForLoginAndRegistration.style.borderRadius = "20%";
    tableForLoginAndRegistration.style.transform = "translate(-50%, -50%)";
    tableForLoginAndRegistration.style.cssText += 'z-index: 23000 !important;';

    // InputNickName style
    inputNickName.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px";
    inputNickName.placeholder = "Nickname";

    // Password style
    password.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px";
    password.placeholder = "Password";

    // Login style
    login.style.cssText = "margin : 30px 39%; height : 25px; width : 130px; margin-top : 15px; border-radius : 5px; background-color : rgba(0,0,0,0.2); color : white;";
    login.innerText = "Login";

    // append elements
    appendChildeForLogin();

    document.body.appendChild(tableForLoginAndRegistration);

});

secondList.addEventListener('click', function() {

    displayNoneForLogin();
    displayBlockForRegistration();

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
    mail.style.cssText = "display : block; margin : auto; height : 25px; width : 200px; margin-top : 15px; border-radius : 10px; background-color : rgba(0,0,0,0.3); placeholder : test; color : white; font-size : 16px"; 
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


    appendChildeForRegistration();

    document.body.appendChild(tableForLoginAndRegistration);
    
})


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isCorrectPassword(pass)
{
    return pass.value === repeatPassword.value;
}

function validateRegistration()
{

    const user = 
    {
        nme : nme.value,
        surname : surname.value,
        nickName : nickName.value,
        phone : phone.value,
        age : age.value,
        mail : mail.value,
        pass : pass.value,
        repeatPassword : repeatPassword.value,
        male : male.value,
        female : female.value
    }
    for(let val in user)
    {
        console.log(user[val]);
    }
}
    


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
