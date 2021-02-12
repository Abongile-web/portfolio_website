//menu button
function menu() {
    document.querySelector(".navbar").classList.toggle("show");
  }

  //Contact form 
$(document).ready(function () {
  $('.submit').click(function (event) {

      var email = $('.email').val()
      var subject = $('.subject').val()
      var message = $('.message').val()
      var status = $('.status')
      status.empty()

      if(email.length > 5 && email.includes('@') && email.includes('.')){
          status.append('<div>Email is valid</div>')
      }
      else {
          event.preventDefault()
          status.append('<div>Email is not valid</div>')
      }

      if(subject.length >= 2) {
          status.append('<div>Subject is valid</div>')
      }
      else {
          event.preventDefault()
          status.append('<div>Subject is not valid</div>')
      }

      if(message.length >= 10) {
          status.append('<div>Message is valid</div>')
      }
      else {
          event.preventDefault()
          status.append('<div>Message is not valid</div>')
      }
  })
})