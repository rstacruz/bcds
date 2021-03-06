onmount('p', function () {
  unorphan(this)
})

onmount('[href="#register"]', function () {
  on(this, 'click', function (e) {
    openRegisterForm()
  })
})

onmount('[role~="register"]', function () {
  on(this, 'click', function (e) {
    e.preventDefault()
    openRegisterForm()
  })
})

function openRegisterForm () {
  document.querySelector('[role~="register"]').className += ' _hide'

  var form = document.querySelector('#register-form')
  form.className = form.className.replace(/_hide/g, '')

  var footer = document.querySelector('.register-info')
  footer.className = footer.className.replace(/_hide/g, '')

  setTimeout(function () {
    form.querySelector('input').focus()
  }, 25)
}

onmount()

function on (el, event, handler) {
  if (el.addEventListener) {
    el.addEventListener(event, handler)
  } else {
    el.attachEvent('on' + event, function () {
      handler.call(el)
    })
  }
}
