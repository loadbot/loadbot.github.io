;(function() {
  document.getElementById('submit').addEventListener('click', function() {
    window.invisibleGrecaptcha
      .execute('6LdPpqgeAAAAAGXX071JLnh8-B5r3ngbO7fpoTIO')
      .then(console.log)
      .catch(console.error)
  })
})()
