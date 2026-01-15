window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
  toggle_theme()
})
const form = document.getElementById('contact_form')
async function feedback_msg(event){
  event.preventDefault()
  const status = document.querySelector('.popup')
  data = new FormData(event.target)

  try {
    var res = await fetch(event.target.action,{
      method: form.method,
      body:data,
      headers:{'accept':'application/json'}
    })

    if (res.ok){
      status.classList.add('active')
      form.reset()
    }else{
      status.innerHTML = 'Oops! There Was a Problem Submitting Your Form'
    }

  } catch (err) {
    console.log(err)
  }
}
form.addEventListener('submit',feedback_msg)
const close_btn = document.getElementById('close_btn')

close_btn.addEventListener('click',()=>{
  document.querySelector('.popup').classList.remove('active')
})

function toggle_theme(){
  const body = document.body
  const icon = document.getElementById('icon')
  body.classList.toggle('dark_theme')

  if (body.classList.contains('dark_theme')){
    icon.classList.replace('bi-brightness-high-fill','bi-moon-fill')
    document.documentElement.classList.add('dark_theme')
  }else{
    icon.classList.replace('bi-moon-fill','bi-brightness-high-fill')
    document.documentElement.classList.remove('dark_theme')
  }
}