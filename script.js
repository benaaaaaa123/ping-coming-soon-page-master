let txt = "Please provide a valid email address";
let txt1 = "The email address provided is correct";
let test = document.getElementById("test1");
let myButton = document.getElementById("butt");


let pole = document.getElementById("polex1");

function sprawdzEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

myButton.addEventListener("click", function () {

    let wprowadzonyEmiail = pole.value;

    if (sprawdzEmail(wprowadzonyEmiail)) {
        test.innerHTML = txt1;
    } else {
        test.innerHTML = txt;
    }
});