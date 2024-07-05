onload = function() {
const contactForm = () => {
    const radios = document.querySelectorAll(".cont-form__radio-wrap");
    const radioDot = document.querySelectorAll(".cont-form__radio-selected");
    const check2 = document.getElementById("check2");
    const check = document.querySelector(".cont-form__check");
    const submit = document.querySelector(".cont-form__form-submit");
    const form = document.querySelector(".cont-form__container");
    const form2 = document.querySelector(".cont-form__form-cont");
    const main = document.querySelector(".cont-form__main");
    const success = document.querySelector(".cont-form__success");
    const input = document.querySelectorAll(".cont-form__inpt");
    const error = document.querySelectorAll(".cont-form__error");
    const text = document.querySelector(".cont-form__inpt--text");
    const allInputs = [input[4], input[5], input[6], input[7], input[8]];
    const errorMessages = ['This field is required', 'Please enter a valid email address', 'Please select a query type', 'To submit this form, please consent to being contacted'];
    const errorArr = [...error];
    const inptArr = [input[0], input[1]];
    const radioArr = [...radios];



    //select radio button
    const radioSelect = () => {
        radios[0].addEventListener("click", function() {
            radioDot[0].classList.add("cont-form__show")
            radioDot[1].classList.remove("cont-form__show");
            radios[0].style.background = 'hsl(148, 38%, 91%)';
            radios[1].style.background = '#fff';
            radios[0].style.borderColor = 'hsl(169, 82%, 27%)';
            radios[1].style.borderColor = 'hsl(186, 15%, 59%)';
        })

        radios[1].addEventListener("click", function() {
            radioDot[1].classList.add("cont-form__show")
            radioDot[0].classList.remove("cont-form__show");
            radios[1].style.background = 'hsl(148, 38%, 91%)';
            radios[0].style.background = '#fff';
            radios[1].style.borderColor = 'hsl(169, 82%, 27%)';
            radios[0].style.borderColor = 'hsl(186, 15%, 59%)';
        })
    }

    radioSelect();


    //show error messages
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const showErrors = () => {
        for (let i = 0; i < inptArr.length; i++) {
            if (inptArr[i].value.length < 1) {
                errorArr[i].classList.add("cont-form__show");
                errorArr[i].innerHTML = errorMessages[0];
            } 
            if (inptArr[i].value.length > 0) {
                errorArr[i].classList.remove("cont-form__show");
            }
        }
        if (input[2].value.length < 1 || !email.test(input[2].value)) {
            errorArr[2].classList.add("cont-form__show");
            errorArr[2].innerHTML = errorMessages[1];
        } 
        if (input[2].value.length > 0 && email.test(input[2].value)) {
            errorArr[2].classList.remove("cont-form__show");
        }
        if (text.value.length < 1) {
            errorArr[4].classList.add("cont-form__show");
            errorArr[4].innerHTML = errorMessages[0];
        } 
        if (text.value.length > 0) {
            errorArr[4].classList.remove("cont-form__show");
        }
        if (check.checked === false) {
            errorArr[5].classList.add("cont-form__show");
            errorArr[5].innerHTML = errorMessages[3];
        } else if (check.checked) {
            errorArr[5].classList.remove("cont-form__show");
        }
          if (!radioDot[0].classList.contains("cont-form__show") && !radioDot[1].classList.contains("cont-form__show")) {
            errorArr[3].classList.add("cont-form__show");
            radioArr.forEach(r => r.style.borderColor = 'hsl(0, 66%, 54%)');
            errorArr[3].innerHTML = errorMessages[2];
        }
          if (radioDot[0].classList.contains("cont-form__show") || radioDot[1].classList.contains("cont-form__show")) {
            errorArr[3].classList.remove("cont-form__show");
            radioArr.forEach(r => r.style.borderColor = 'hsl(186, 15%, 59%)');
        }
        for (let i = 0; i < input.length; i++) {
            if (errorArr[i].classList.contains("cont-form__show")) {
                input[i].style.borderColor = 'hsl(0, 66%, 54%)';
            } 
            if (errorArr[i].classList.contains("cont-form__show") === false) {
                input[i].style.borderColor = 'hsl(186, 15%, 59%)';
            }
        }
    }

    const disableInputs = () => {
       allInputs.forEach(i => i.disabled = true);
    }

    //reset form info after submitting
    const formReset = () => {
        form.style.display = 'none';
        form2.style.display = 'flex';
        disableInputs();
    }

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        showErrors();
        if (errorArr.every(e => e.classList.contains("cont-form__show")) === false && inptArr.every(e => e.value.length > 0) && check.checked === true && (radioDot[0].classList.contains("cont-form__show") || radioDot[1].classList.contains("cont-form__show")) && text.value.length > 0 && email.test(input[2].value)) {
        formReset();
        main.setAttribute("style", "height: 100%");
       }
    })












}





contactForm();






















}
