const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            submitButton.setAttribute('disbled', 'disabled');
            input.nextElementSibling.classList.remove('error');
        }else {
            submitButton.removeAttribute('disbled');
            input.nextElementSibling.classList.remove('error')
        }
    }

    const inoutEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');

    inoutEmail.addEventListener('input', validateEmail);

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inoutEmail.value,
                    password: inputPassword.value,
                })
            }).then((Response) => {
                return Response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;