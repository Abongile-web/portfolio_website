//menu button
document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('navbar_show');
})

let menu_items = document.querySelectorAll('.navbar ul li');
for (let i = 0; i < menu_items.length -1; i++) {
    console.log(menu_items[i]);
    menu_items[i].addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('navbar_show');
    })
}

document.querySelector('.logo').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('navbar_show');
})

  //Contact form 
$(document).ready(function () {
  $('.submit').click(function (event) {

      var email = $('.email').val()
      var subject = $('.subject').val()
      var message = $('.message').val()
      var status = $('.status')
      status.empty()

      if(email.length > 1 && email.includes('@') && email.includes('.')){
          status.append('<div>Email is valid</div>')
      }
      else {
          event.preventDefault()
          status.append('<div>Email is not valid</div>')
      }

      if(subject.length >= 1) {
          status.append('<div>Subject is valid</div>')
      }
      else {
          event.preventDefault()
          status.append('<div>Subject is not valid</div>')
      }

      if(message.length >= 1) {
          status.append('<div>Message is valid</div>')
      }
      else {
          event.preventDefault()
          status.append('<div>Message is not valid</div>')
      }
  })
})

AOS.init({
    easing: 'ease-in-quad',
  });