window.addEventListener("load", () => {
  applySavedTheme()
})

function toggle_theme(){
  const body = document.body
  const icon = document.getElementById('icon')
  body.classList.toggle('dark_theme')

  if (body.classList.contains('dark_theme')){
    icon.classList.replace('bi-brightness-high-fill','bi-moon-fill')
    document.documentElement.classList.add('dark_theme')
    localStorage.setItem('theme','dark')
  }else{
    icon.classList.replace('bi-moon-fill','bi-brightness-high-fill')
    document.documentElement.classList.remove('dark_theme')
    localStorage.setItem('theme','light')
  }
}

function applySavedTheme(){
  const savedTheme = localStorage.getItem('theme')
  const icon = document.getElementById('icon')
  if (savedTheme === 'dark'){
    document.body.classList.add('dark_theme')
    document.documentElement.classList.add('dark_theme')
    icon.classList.replace('bi-brightness-high-fill','bi-moon-fill')
  }
}
