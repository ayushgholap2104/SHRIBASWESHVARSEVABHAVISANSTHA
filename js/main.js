window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
  functions.mediadataBinding()
})
const functions = {
  mediadataBinding: function () {
    const projectcolors= [
      "#eab308",
      "#ef4444",
      "#22c55e",
      "#3b82f6",
      "#c74a9b",
    ]
    const randomColors = projectcolors[Math.floor(Math.random() * projectcolors.length)]
    const events = [
      {
        id: 1,
        eventTitle: "1) Professional beauty parlour course training",
        eventDesc:`
                  Under the aegis of Shri Basaveshwar Sevabhavi Sanstha,a
                  professional beauty parlour training program was organized
                  with the objective of empowering women through skill
                  development and entrepreneurship. The program equipped
                  participants with practical knowledge and hands-on training,
                  enabling them to build sustainable livelihoods. To encourage
                  excellence and initiative, the top three participants,
                  recognized for their outstanding performance and progress,
                  were awarded a beauty parlour chair and a hair dryer. These
                  resources were provided to support them in establishing their
                  own beauty parlour businesses and achieving financial
                  independence. Such initiatives highlight the organization’s
                  continued commitment to promoting women’s empowerment,
                  self-reliance, and inclusive community development.
                `,
        eventMedia: [
          "img/Professional_beauty_parlour_course_training.jpg",
        ],
      },
      {
        id: 2,
        eventTitle: "2) Vavar mitra program",
        eventDesc: `
                Under the Vavar Mitra / Saheli Training Program, this initiative
                is being implemented through Shri Basaveshwar Social Welfare
                Organization with the objective of improving the living
                standards of farmers in rural areas and promoting sustainable,
                organic farming practices. As part of the project, trained Vavar
                Mitra / Saheli members assist farmers in installing a small
                solar-powered “Jadugar” device. This device helps detect the
                presence of flies in cattle sheds, fruit flies, and pest density
                in agricultural fields. By providing accurate monitoring, it
                reduces the need for excessive chemical spraying and supports
                healthier crop management while ensuring better yields. Through
                the promotion of organic farming methods, the project aims to
                minimize harmful effects on human health, protect the
                environment, and create long-term benefits for farming
                communities. This initiative reflects a strong commitment to
                sustainable agriculture and rural development.
              `,
        eventMedia: [
          "img/Vavar_mitra.jpg",
          "img/Vavar_mitra1.jpg",
          "img/Vavar_mitra2.jpg",
          "img/Vavar_mitra3.jpg",
        ],
      },
    ]
    const project_container = document.querySelector('.project_container')
    events.forEach(data => {
      const project = document.createElement('div')
      project.classList.add('project');
      const randomColors = projectcolors[Math.floor(Math.random() * projectcolors.length)]
      project.style.setProperty('--theme_color',randomColors)
      const media_id = data.id;
      const media_title = data.eventTitle;
      project.setAttribute('project_id', media_id);
      project.setAttribute('project_title',media_title );
      project.innerHTML =
        `
            <div class="project_title">
              <h2>${data.eventTitle}</h2>
            </div>
            <div class="project_content">
              <div class="project_content_media">
                <div class="media_displayer"></div>
              </div>
              <div class="project_description">
                <p>${data.eventDesc}</p>
              </div>
            </div>
      `
      const media_displayer = project.querySelector('.media_displayer')
      data.eventMedia.forEach(media_img=>{
        const media_cont = document.createElement('div')
        media_cont.classList.add('media_cont')
        media_cont.innerHTML = `<img src="${media_img}" alt="${data.eventTitle}" srcset="" />`
        media_displayer.appendChild(media_cont)
      })
      project_container.appendChild(project)
    })
  }
}

