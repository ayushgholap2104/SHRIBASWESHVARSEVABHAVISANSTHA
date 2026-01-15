window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
  functions.aboutDatabinding()
  toggle_theme()
})

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
