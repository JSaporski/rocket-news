function initChangeFormContent() {
  const btnForm = document.querySelector('form button')
  const fieldsForm = document.querySelector('form > div')

  if (btnForm && fieldsForm) {
    function changeFormContent() {
      fieldsForm.outerHTML =
        '<p style="color: hsl(148, 92%, 39%)">Parabéns, você irá receber a nossa Newsletter pelo e-mail cadastrado!</p>'
    }

    btnForm.addEventListener('click', changeFormContent)
  }
}

initChangeFormContent()
