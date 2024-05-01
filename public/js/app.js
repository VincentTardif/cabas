
// const bigInfo = document.querySelector('.info-big');
// const meetUs = document.querySelector('.meetUs')
// console.log(bigInfo);
// bigInfo.addEventListener('click', function(hide) {
//     meetUs.style.display = "flex";
// });


const firstname = document.getElementById('firstName');
const submit = document.getElementsByClassName('form-contact')[0];
console.log(submit);

submit.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log("Clicked");

    // Email Code...
    Email.send({
        SecureToken : "68722464-071f-4aaf-ab64-4406bb012eb2",
        To : 'vincent@dupreclos.ovh',
        From : "vincent@dupreclos.ovh",
        Subject : "Test Email",
        Body : "Test"
    }).then(
      message => alert(message)
    );

});


