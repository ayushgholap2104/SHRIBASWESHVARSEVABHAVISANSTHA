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
    const projectcolors = [
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
        eventDesc: `
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
      {
        id: 3,
        eventTitle: "3) Skill Development Training Program",
        eventDesc: `
                Under the joint initiative of Savargaon Grampanchayat (Taluka Majalgaon, District Beed) and Shri Basaveshwar Sevabhavi Sanstha under the Yashaswini Social Campaign, a Skill Development Training Program was conducted for adolescent girls in Savargaon. The program provided hands-on training in Bandhani colouring, covering fabric selection, colour combinations, design techniques, and product preparation. Sessions on healthy nutrition and personal well-being were also included.
                In addition, a business training camp was organised for village youth, introducing career opportunities such as hotel business, rangoli order work, and vocational courses after 10th and 12th standards. The program was held under the guidance of Gramsevak Pawar Saheb, chaired by Hon. Abhiman Jagtap Sir, and graced by Swati Ardhapurkar Ma’am and Sheetal Gadade Ma’am. The initiative saw active participation from youth and villagers and reflects the organization’s commitment to skill development and community empowerment.
              `,
        eventMedia: [
          "img/Skill_development_training_program.jpg",
          "img/Skill_development_training_program1.jpg",
          "img/Skill_development_training_program2.jpg",
          "img/Skill_development_training_program3.jpg",
        ],
      },
      {
        id: 4,
        eventTitle: "4) Farmer Technology Fair",
        eventDesc: `
                Under the Yashaswini Social Campaign of Shri Basaveshwar Sevabhavi Sanstha (Shri Basaveshwar Charitable Organization), a series of community-focused programs were successfully organized on the 29th and 30th at Savargaon village, Taluka Majalgaon, District Beed. The initiative included a Farmer Technology Fair, an Income Enhancement Workshop, training sessions for educated unemployed youth, a health camp, and guidance on Ayurvedic practices for maintaining good health.
                Experts from various fields were invited to share practical knowledge and guidance, helping villagers improve agricultural practices, explore income-generating opportunities, and adopt healthier lifestyles. The programs received a positive response from the local community, with active participation from farmers, youth, and villagers. During the interactions, several local issues and challenges were identified, and the organization assured continued efforts to work towards their resolution. The overall coordination of the program was led by Lata Ram Alde, Taluka Coordinator, Parli Vaijnath.
              `,
        eventMedia: [
          "img/Yashaswini_social_campaign.jpg",
          "img/Yashaswini_social_campaign1.jpg",
          "img/Yashaswini_social_campaign2.jpg",
          "img/Yashaswini_social_campaign3.jpg",
        ],
      },
      {
        id: 5,
        eventTitle: "5) Blood Donation Camp",
        eventDesc: `
                A blood donation camp was organized by Shri Basaveshwar Sevabhavi Sanstha on the auspicious occasion of the birthday of His Holiness Sri Sri Ravi Shankar Gurudev. The camp received active participation from donors, volunteers, and members of the organization. The initiative aimed to create awareness about the importance of voluntary blood donation and its role in saving lives. Through this noble effort, the organization reaffirmed its commitment to social service, health awareness, and community welfare.
              `,
        eventMedia: [
          "img/Blood_donation_camp.jpg",
          "img/Blood_donation_camp1.jpg",
        ],
      },
      {
        id: 6,
        eventTitle: "6) Computer Literacy Training Program",
        eventDesc: `
                On behalf of Shri Basveshwar Charitable Trust, Parli Vaijnath, a Computer Literacy Training Program was organized at Maije Hiwra, Majalgaon. The program was conducted with the objective of improving digital awareness and helping students develop essential computer skills for future educational and career opportunities.
                Under the guidance of Kamble Sir and in the presence of Govinda Munde as the chief guest, students received hands-on training in basic computer operations, typing skills, internet usage, and commonly used applications. The event was held under the chairmanship of local leaders including Smt. Lata Tai Aalde and Ram Aalde, and witnessed enthusiastic participation from village youth.
                Through this initiative, Basveshwar Trust continues its efforts toward digital empowerment, skill development, and reducing the technology gap in rural communities.
              `,
        eventMedia: [
          "img/Computer_literacy_training_program.jpg",
        ],
      },
      {
        id: 7,
        eventTitle: "7) Health Camp and Vocational Training",
        eventDesc: `
                A Health Camp was organized at Sawargaon, Majalgaon under Basaveshwar Sevabhavi Sanstha and Yashaswini Samajik Abhiyan, Parli Vaijnath. The camp was held under the chairmanship of Sarpanch Jagtap, Deputy Sarpanch Naiknavare, and Gramsevak Pawar Saheb.
                Doctors Dr. Sachin Dak (Pediatrician), Dr. Mayuri Dak (Gynecologist), and Dr. Anandgaonkar provided free medical check-ups, benefiting many villagers, especially women. The event was attended by Sow. Latatai Alde, Ram Alde, Govind Munde, and other community members.
                Along with healthcare services, the organization promotes skill development and self-reliance. Women’s self-help groups receive training in preparing spices, household products, perfumes, detergents, phenol, food items, agarbatti, and improved agricultural fertilizers. The organization also conducts farmer consultations, technology fairs, youth training programs, and Ayurvedic health camps, contributing to rural development.
              `,
        eventMedia: [
          "img/Health_camp.jpg",
          "img/Health_camp1.jpg",
          "img/Health_camp2.jpg",
          "img/Health_camp3.jpg",
          "img/Health_camp4.jpg",
          "img/Health_camp5.jpg",
          "img/Health_camp6.jpg",
          "img/Health_camp7.jpg",
        ],
      },
      {
        id: 8,
        eventTitle: "8) Health Camp and Modern Agricultural Technology Fair",
        eventDesc: `
                On behalf of the Basaveshwar Charitable Organization and the Yashaswini Social Campaign, Parli Vaijnath, a Health Camp and Modern Agricultural Technology Fair was organized at Gram Panchayat Simri Pargaon, Majalgaon.
                The health camp was conducted with the presence of Dr. Ankushrao Jadhav and Ms. Rohini Bharad, under the chairmanship of Sarpanch Sayyed and Gramsevak Kapase Saheb. Ms. Latatai Alde, President of the Basaveshwar Organization, along with Ram Alde, Govind Munde, and local villagers, actively participated. Many villagers, including women, benefited from the free health check-up services.
                The organization also focuses on women empowerment and skill development, providing training in spice preparation, manufacturing 150–200 household utility products, and marketing skills. Training includes the preparation of perfumes (attar), detergent, phenyl, jelly, jam, sauce, incense sticks, and improved agricultural fertilizers.
                Additional initiatives include farmer study tours, technology fairs, training for educated unemployed youth, health camps, and Ayurvedic awareness programs, contributing to sustainable rural development.
              `,
        eventMedia: [
          "img/Modern_agricultural_technology_fair.jpg",
          "img/Modern_agricultural_technology_fair1.jpg",
          "img/Modern_agricultural_technology_fair2.jpg",
          "img/Modern_agricultural_technology_fair3.jpg",
          "img/Modern_agricultural_technology_fair4.jpg",
        ],
      },
      {
        id: 9,
        eventTitle: "9) Seva Pakhwada initiative",
        eventDesc: `
                As part of the Seva Pakhwada initiative, Shri Basveshwar Charitable Trust organized a Women’s Health Check-up, Treatment, and Guidance Camp, conducted from 17th September 2025 to 2nd October 2025.
                The camp was organized with the objective of promoting women’s health awareness and providing accessible medical support. Women from nearby villages actively participated and benefited from free health check-ups, medical consultations, and proper guidance related to personal health and well-being.
                Through this initiative, the Trust reaffirmed its commitment to community welfare, preventive healthcare, and women’s empowerment by ensuring timely medical assistance and spreading awareness about healthy lifestyles.
              `,
        eventMedia: [
          "img/Seva_pakhwada_intiative.jpg",
        ],
      },
      {
        id: 10,
        eventTitle: "10) Various initiatives were organized at Salgaon Grampanchayat",
        eventDesc: `
                As part of the Seva Pakhwada initiative, Shri Basveshwar Charitable Trust organized a Women’s Health Check-up, Treatment, and Guidance Camp, conducted from 17th September 2025 to 2nd October 2025.
                The camp was organized with the objective of promoting women’s health awareness and providing accessible medical support. Women from nearby villages actively participated and benefited from free health check-ups, medical consultations, and proper guidance related to personal health and well-being.
                Through this initiative, the Trust reaffirmed its commitment to community welfare, preventive healthcare, and women’s empowerment by ensuring timely medical assistance and spreading awareness about healthy lifestyles.
              `,
        eventMedia: [
          "img/Seva_pakhwada_intiative.jpg",
        ],
      },
    ]
    const project_container = document.querySelector('.project_container')
    events.forEach(data => {
      const project = document.createElement('div')
      project.classList.add('project');
      const randomColors = projectcolors[Math.floor(Math.random() * projectcolors.length)]
      project.style.setProperty('--theme_color', randomColors)
      const media_id = data.id;
      const media_title = data.eventTitle;
      project.setAttribute('project_id', media_id);
      project.setAttribute('project_title', media_title);
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
      data.eventMedia.forEach(media_img => {
        const media_cont = document.createElement('div')
        media_cont.classList.add('media_cont')
        media_cont.innerHTML = `<img src="${media_img}" alt="${data.eventTitle}" srcset="" />`
        media_displayer.appendChild(media_cont)
      })
      project_container.appendChild(project)
    })
  }
}

