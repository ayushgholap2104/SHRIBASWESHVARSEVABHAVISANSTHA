window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
})
const form = document.getElementById('contact_form')
async function feedback_msg(event){
  event.preventDefault()
  const status = document.querySelector('.popup')
  data = new FormData(event.target)

  try {
    var res = fetch(event.target.action,{
      method: form.method,
      body:data,
      data_type:{'accept':'application/json'}
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

  const close_btn = document.getElementById('close_btn')
  close_btn.addEventListener('click',()=>{
    status.classList.remove('active')
  })
  form.addEventListener('submit',feedback_msg())
}