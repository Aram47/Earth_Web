const list = document.getElementById("Menu");
const UL = document.getElementById("UL");
const firstList = document.createElement('li');
const secondList = document.createElement('li');
const tableForLoginAndRegistration = document.createElement('div');



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

firstList.addEventListener('click', function() {
    tableForLoginAndRegistration.style.display = "none";

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

    const NestedDiv = document.createElement('div');
    const inputNickName = document.createElement('input');
    const password = document.createElement('input');
    const login = document.createElement('button');



    NestedDiv.appendChild(inputNickName);
    NestedDiv.appendChild(password);
    NestedDiv.appendChild(login);
    tableForLoginAndRegistration.appendChild(NestedDiv);
    document.body.appendChild(tableForLoginAndRegistration);


    // NestedDiv.style.width = "200px";
    // NestedDiv.style.height = "400px";
    NestedDiv.style.top = "50%";
    NestedDiv.style.left = "50%";
    NestedDiv.style.transform = "translate(-50%, -50%)";


    tableForLoginAndRegistration.style.display = "block";

});

secondList.addEventListener('click', function() {

})