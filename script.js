function initChangeFormContent() {
  const form = document.querySelector('form')
  const fieldsForm = document.querySelector('form > div')

  if (form && fieldsForm) {
    function changeFormContent(event) {
      event.preventDefault()

      fieldsForm.outerHTML =
        '<p style="color: hsl(148, 92%, 39%)">Parabéns, você irá receber a nossa Newsletter pelo e-mail cadastrado!</p>'
    }

    form.addEventListener('submit', changeFormContent)
  }
}

initChangeFormContent()
