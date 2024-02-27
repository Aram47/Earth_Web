const list = document.getElementById("Menu");
const UL = document.getElementById("UL");
const firstList = document.createElement('li');
const secondList = document.createElement('li');
const tableForLoginAndRegistration = document.createElement('div');
const inputNickName = document.createElement('input');
const password = document.createElement('input');
const login = document.createElement('button');
const regButton = document.createElement('button');


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

const callLoginPage = firstList.addEventListener('click', function() {

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

});

login.onclick = function() {
    tableForLoginAndRegistration.style.display = "none";
};

regButton.onclick = function() {
    secondList.style.display = "none";
    callLoginPage();
};