window.addEventListener("load", () => {
  sidebarpop()
  functions.aboutDatabinding()
  up_btn()
})

function up_btn(){
  const btn_up = document.querySelector('#btn-up')
  btn_up.addEventListener('click', () =>{
    window.scrollTo({top:0 , behavior:'smooth' })
  })

  window.addEventListener('scroll',() =>{
    const scrollY = window.scrollY
    if (scrollY == 0){
      btn_up.style.opacity = '0'
      btn_up.style.pointerEvents = 'none'
    }else{
      btn_up.style.opacity = '1'
      btn_up.style.pointerEvents = 'auto'
    }

  })
}

function sidebarpop(){
  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
}

const functions = {
  aboutDatabinding: function () {
    const dataContainer = [
      {
        id: 1,
        aboutTitle: "Introduction of NGO",
        aboutMedia: "../img/SBSO_introduction.jpg"
      },
      {
        id: 2,
        aboutTitle: "Core of NGO",
        aboutMedia: "../img/SBSO_core.jpg"
      },
      {
        id: 3,
        aboutTitle: "Founder of NGO",
        aboutMedia: "../img/SBSO_founder.jpg"
      },
    ]
    const NGO_cont = document.querySelector('.NGO_cont')
    dataContainer.forEach(data =>{
      const SBSO = document.createElement('div')
      SBSO.classList.add('SBSO')
      const about_id = data.id;
      const about_title = data.aboutTitle;
      SBSO.setAttribute('cont_id',about_id)
      SBSO.setAttribute('cont_title',about_title)
      SBSO.innerHTML = `
        <img src="${data.aboutMedia}" alt="${data.aboutTitle}" srcset="" />
      `
      NGO_cont.appendChild(SBSO)
    })
  }
}
