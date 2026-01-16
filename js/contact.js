window.addEventListener("load", () => {
  sidebarpop()
})

function sidebarpop(){
  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
}
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

