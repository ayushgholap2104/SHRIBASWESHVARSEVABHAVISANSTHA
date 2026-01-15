window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
  functions.mediadataBinding()
  toggle_theme()
})

const functions = {
  mediadataBinding: function () {
    // const randomColors = projectcolors[Math.floor(Math.random() * projectcolors.length)]
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
                Various community development initiatives were organized at Salgaon Grampanchayat, Majalgaon Taluka, Beed District, by Shri Basaveshwar Charitable Trust in collaboration with the Yashaswini Social Campaign, Parli Vaijnath. The activities included soil testing, distribution of first aid kits, a modern farming technology fair, an income enhancement camp, and skill training for educated unemployed youth. The program was chaired by Shri Bhima Rao Rathod and guided by Prof. Shantilal Lahoti, an agriculture expert, while soil testing was conducted by K. L. Jagtap Sir from Khamgaon. Sarpanch Nitin Rathod, Gramsevak Waghmare Sir, along with farmers and villagers, actively participated in the event. First aid kits were distributed in village schools, Anganwadis, Mini Anganwadi groups, and Grampanchayat offices to strengthen basic healthcare support. The event was attended by Smt. Lata Tai Aalde, President of the organization, along with Ram Aalde, Govind Munde, and many community members. Through this initiative, women’s self-help groups received training in perfume making, detergent powder, phenyl, jelly, jam, sauce, incense sticks, improved farming practices, and fertilizer preparation, marking an important step toward empowerment, self-reliance, and sustainable rural development.
              `,
        eventMedia: [
          "img/Various_initiatives_at_salgaon_grampanchayat.jpg",
          "img/Various_initiatives_at_salgaon_grampanchayat2.jpg",
          "img/Various_initiatives_at_salgaon_grampanchayat3.jpg",
          "img/Various_initiatives_at_salgaon_grampanchayat4.jpg",
          "img/Various_initiatives_at_salgaon_grampanchayat5.jpg",
          "img/Various_initiatives_at_salgaon_grampanchayat6.jpg",
          "img/Various_initiatives_at_salgaon_grampanchayat7.jpg",
        ],
      },
      {
        id: 11,
        eventTitle: "11) Women’s gathering was organized at Parli",
        eventDesc: `
                On behalf of Shri Basaveshwar Sevabhavi Sanstha, a special women’s gathering was recently organized at Parli Vaijnath, bringing together women from various walks of life. The event aimed to foster community bonding, encourage knowledge sharing, and provide a platform for women to engage in meaningful discussions on health, education, and social empowerment. Participants had the opportunity to interact with experts, gain insights into modern practices, and explore initiatives designed to improve overall well-being. The gathering also highlighted the importance of women supporting one another and contributing actively to the development of their families and society. Through this thoughtful initiative, Shri Basaveshwar Sevabhavi Sanstha demonstrated its ongoing commitment to the welfare, education, and empowerment of women in the region.
              `,
        eventMedia: [
          "img/Women_gathering.jpg",
          "img/Women_gathering1.jpg",
        ],
      },
      {
        id: 12,
        eventTitle: "12) Farmer Guidance Camp",
        eventDesc: `
                Under the guidance of Shri Basaveshwar Sevabhavi Sanstha, a specialized agricultural guidance camp was recently organized in Ghalatwadi village with the aim of supporting local farmers in enhancing their income and adopting innovative farming practices. The camp served as a comprehensive platform for farmers to receive practical advice on modern agricultural techniques, efficient resource management, and strategies to diversify and expand agriculture-related businesses. Experts and experienced practitioners shared valuable insights on crop selection, soil health, irrigation methods, and market opportunities, helping participants make informed decisions for sustainable growth. In addition to technical guidance, the camp emphasized the importance of entrepreneurship in agriculture, encouraging farmers to explore new avenues such as agro-processing, organic farming, and cooperative ventures. Through this initiative, Shri Basaveshwar Sevabhavi Sanstha reaffirmed its commitment to empowering farmers, promoting economic development, and strengthening the agricultural community in the region.
              `,
        eventMedia: [
          "img/Guidance_camp_at_ghalatwadi_village.jpg",
        ],
      },
      {
        id: 13,
        eventTitle: "13) Modern Agricultural Technology Fair at Varula",
        eventDesc: `
                Under the auspices of Shri Basaveshwar Sevabhavi Sanstha, a Modern Agricultural Technology Fair was recently organized at Varula, bringing together farmers and agricultural enthusiasts from the region. The event aimed to provide comprehensive guidance on supplementary businesses such as poultry farming, goat rearing, and dairy management, alongside introducing innovative agricultural practices that can enhance productivity and sustainability. Farmers were encouraged to diversify their sources of income, moving beyond dependence on a single crop, and to adopt modern techniques that prepare them to meet future challenges with confidence. In addition, the fair offered valuable insights into government schemes, support programs, and resources available to the farming community, empowering participants with knowledge and practical tools for growth. Through such initiatives, Shri Basaveshwar Sevabhavi Sanstha continues its dedicated efforts to educate, guide, and strengthen farmers, fostering resilience, prosperity, and long-term development in the agricultural sector.
              `,
        eventMedia: [
          "img/Modern_agricultural_technology_fair_varula.jpg",
        ],
      },
      {
        id: 14,
        eventTitle: "14) Women’s Gathering at Khodwa Savargaon",
        eventDesc: `
                On 15th August 2025, under the guidance of Shri Basveshwar Sevabhavi Sanstha, a Women’s Gathering was organized at Khodwa Savargaon, bringing together women from various Self-Help Groups to participate in a specialized training program on spice production. The event aimed to empower women with practical skills and knowledge that could help them become self-reliant and pursue entrepreneurship.
                During the program, the participants actively engaged in learning how to prepare high-quality spices, manage proper packaging, and develop effective branding strategies. They were also introduced to marketing techniques, including digital marketing tools, and received guidance on how to reach households efficiently, allowing them to establish a recognizable and trusted brand identity. Experts shared valuable insights, emphasizing the importance of quality, presentation, and customer engagement in creating a successful business.
                The women showed great enthusiasm and determination to apply these learnings in their own ventures, marking a significant step towards financial independence and personal empowerment. Through initiatives like this, Shri Basveshwar Sevabhavi Sanstha continues to support and inspire women, enabling them to take charge of their economic future and contribute meaningfully to their communities.
              `,
        eventMedia: [
          "img/Women_gathering_at_khodwa_savargaon.jpg",
        ],
      },
      {
        id: 15,
        eventTitle: "15) Special Farmer Guidance Program",
        eventDesc: `
                A special farmer guidance program was recently organized under the aegis of Shri Basveshwar Sevabhavi Sanstha in collaboration with Khatgavhan Grampanchayat, Majalgaon Taluka, bringing together local farmers to enhance their agricultural knowledge and practices.
                Respected Agriculture Officer, Mr. Kishor Jagtap, led the program and provided detailed guidance on increasing crop yields, implementing essential precautions, and effectively utilizing modern seeds and fertilizers to achieve better productivity. Farmers also learned about innovative techniques that can help make their farming practices more efficient and sustainable.
                The participants actively engaged in the program, asking questions and showing enthusiasm for adopting modern farming methods. Expressing their heartfelt gratitude, the farmers left with renewed confidence and determination to take steps toward progressive and sustainable agriculture.
                All the farmers expressed their gratitude and took a step forward towards modern & progressive farming.
              `,
        eventMedia: [
          "img/Farmer_guidance_program_khadva.jpg",
        ],
      },
      {
        id: 16,
        eventTitle: "16) Business Training & Guidance Camp",
        eventDesc: `
                Under the aegis of Shri Basveshwar Charitable Trust, a comprehensive Business Training and Guidance Camp was recently organized with the aim of empowering women to become self-reliant and develop essential entrepreneurship skills. The program provided participants with practical knowledge and hands-on training in areas such as business planning, financial management, marketing strategies, and effective decision-making. Experts and mentors shared valuable insights, guiding women on how to start and manage their own ventures successfully. The camp also emphasized the importance of confidence, innovation, and perseverance in entrepreneurship, encouraging participants to take proactive steps toward establishing their own businesses. Through such initiatives, Shri Basveshwar Charitable Trust continues to foster women’s economic independence, build leadership skills, and contribute to the overall development and empowerment of the community.
              `,
        eventMedia: [
          "img/Bussiness_training_and_guidance_program.jpg",
        ],
      },
      {
        id: 17,
        eventTitle: "17) Bakery & Cake-making Training Program",
        eventDesc: `
                Under the guidance of Shri Basaveshwar Charitable Trust, a Bakery and Cake-Making Training Program was successfully organized for women with the aim of promoting self-employment and entrepreneurship.The program witnessed enthusiastic participation from college girls and women, who were trained in various aspects of bakery preparation, hygiene standards, and quality maintenance.
                The beneficiaries actively engaged in the hands-on sessions and gained practical knowledge that enabled them to confidently apply their skills. As a result of this training, many participants have already begun accepting bakery and cake orders from their homes, marking an important step toward financial independence and self-reliance.
                Through such impactful initiatives, Shri Basaveshwar Charitable Trust continues to empower women by equipping them with market-oriented skills and supporting them in building successful entrepreneurial ventures. 
              `,
        eventMedia: [
          "img/Bakery_and_cake_making_training.jpg",
        ],
      },
      {
        id: 18,
        eventTitle: "18) Inauguration of the Women’s Counseling Center",
        eventDesc: `
                The Women’s Counseling Center was inaugurated under the auspices of Shri Basaveshwar Social Service Organization, marking a significant step toward supporting and empowering women.
                In their personal, social, and professional lives, women often face various challenges that require understanding, guidance, and emotional support. With this vision, the organization has established the Women’s Counseling Center to provide proper guidance, counseling, and the right direction to help women overcome difficulties and make informed decisions.
                This initiative holds special importance for women in rural areas, where access to such support systems is often limited. By offering a safe and supportive environment, Shri Basaveshwar Social Service Organization aims to strengthen confidence, promote self-reliance, and contribute meaningfully to the empowerment and well-being of women in the community.
              `,
        eventMedia: [
          "img/Inaugration_of_women_counselling_centre.jpg",
        ],
      },
      {
        id: 19,
        eventTitle: "19) Beauty Parlour Training Course",
        eventDesc: `
                Under the guidance of Shri Basaveshwar Sevabhavi Sanstha, a Beauty Parlour Training Course is currently being conducted for women with the aim of creating better career and self-employment opportunities.
                Through this course, participants are receiving hands-on training in hair cutting techniques, professional makeup skills, and basic beauty care practices. The program focuses on developing practical expertise, confidence, and customer-handling skills, enabling women to explore careers in the beauty industry or start their own parlour services.
                This initiative reflects Shri Basaveshwar Sevabhavi Sanstha’s continued commitment to empowering women by providing skill-based training that supports financial independence and long-term livelihood development.
              `,
        eventMedia: [
          "img/Beauty_parlour_training_program.jpg",
          "img/Beauty_parlour_training_program1.jpg",
        ],
      },
      {
        id: 20,
        eventTitle: "20) Eco-friendly Raksha Bandhan",
        eventDesc: `
                Under the guidance of Shri Basaveshwar Charitable Trust, Raksha Bandhan was celebrated in a unique and eco-friendly manner through the Gomay Raksha Sutra initiative, where rakhis made from cow dung were used, promoting sustainability and respect for nature.
                Anganwadi children joyfully tied rakhis to one another and to a dedicated social worker doctor, symbolizing love, protection, and gratitude. The celebration beautifully reflected Indian cultural values while instilling awareness about environmental responsibility from a young age.
                This thoughtful initiative blended tradition with eco-consciousness, turning Raksha Bandhan into a festival of pure joy, strong bonds, and care for nature, leaving a lasting impression on the hearts of everyone involved.
              `,
        eventMedia: [
          "img/Eco_friendly_raksha_bandhan.jpg",
        ],
      },
      {
        id: 21,
        eventTitle: "21) Nauvari Saree Cutting and Stitching Training",
        eventDesc: `
                Under the guidance of Shri Basaveshwar Charitable Trust, a three-month skill development training program is being conducted for women, focusing on Nauvari saree cutting and stitching, aari work, and various saree cutting techniques. The program aims to preserve traditional craftsmanship while equipping women with practical skills that can lead to self-employment and income generation.
                Participants are receiving hands-on training under expert guidance, learning both traditional and modern methods of tailoring and decorative work. This initiative not only helps women enhance their creativity and technical expertise but also empowers them to achieve financial independence. Through such programs, Shri Basaveshwar Charitable Trust continues its commitment to women’s empowerment, skill development, and sustainable livelihoods.
              `,
        eventMedia: [
          "img/Saree_cutting_technique_program.jpg",
          "img/Saree_cutting_technique_program1.jpg",
          "img/Saree_cutting_technique_program2.jpg",
        ],
      },
      {
        id: 22,
        eventTitle: "22) Fashion Designing Course",
        eventDesc: `
                A fashion designing course is conducted at a very low cost under Shri Basaveshwar Sevabhavee Sanstha, Parli Vaijnath, with the objective of making skill-based education affordable and accessible to aspiring students and women. The course is designed to nurture creativity while providing practical training in designing, stitching, pattern making, and fabric selection. Participants are guided by experienced trainers and are encouraged to develop their own design ideas and enhance their technical skills. This initiative aims to create better career opportunities, promote self-employment, and support financial independence through fashion and design skills.
              `,
        eventMedia: [
          "img/Fashion_designing_course.jpg",
        ],
      },
      {
        id: 23,
        eventTitle: "23) Tree Plantation Drive",
        eventDesc: `
                In celebration of the birthday of Hon. Devendra Fadnavis Ji, we came together to mark the occasion with a meaningful green initiative by organizing a tree plantation drive.This activity symbolized our collective commitment to environmental protection and sustainable development.
                Each sapling planted represents a promise toward building a cleaner, greener, and healthier future for generations to come.The initiative also encouraged community participation and raised awareness about the importance of nurturing nature and preserving ecological balance.
                Let us continue to work together in caring for the environment and contributing positively toward a sustainable and greener tomorrow.
              `,
        eventMedia: [
          "img/Tree_plantation_drive.jpg",
          "img/Tree_plantation_drive1.jpg",
        ],
      },
      {
        id: 24,
        eventTitle: "24) Bandhani Printing Training",
        eventDesc: `
                On the occasion of International Women’s Day, Shri Basaveshwar Charitable Organization conducted a Bandhani Printing Training session with the objective of promoting women’s empowerment and self-reliance. The program aimed to provide women with skill-based training that could open doors to self-employment and creative entrepreneurship.
                Under the expert guidance of Swati Ardhapurkar Madam, the participants learned traditional Bandhani printing techniques and gained practical knowledge to transform their creativity into sustainable income-generating opportunities. The session inspired confidence and enthusiasm among the participants, marking a meaningful step toward financial independence and women’s empowerment.
              `,
        eventMedia: [
          "img/Bandhani_printing_training_session.jpg",
        ],
      },
      {
        id: 25,
        eventTitle: "25) Session On Benefits of self-help Groups",
        eventDesc: `
                On the occasion of Chhatrapati Shivaji Maharaj Jayanti, a special awareness and guidance session was organized to educate women on the importance, benefits, and financial management of Self-Help Groups (SHGs). The session focused on strengthening financial literacy and promoting collective growth among women through SHGs.
                Sunanda Nirmale Tai, Taluka President of SHGs, shared valuable insights on the significant role of Self-Help Groups in enhancing women’s financial independence, encouraging savings, and supporting small-scale entrepreneurship.
                Katkar Madam introduced various skill development opportunities, particularly affordable beauty parlour training courses, motivating women to explore self-employment and entrepreneurial ventures.
                Lata Tai Aalde emphasized the importance of financial stability within families and highlighted how education and proper financial planning contribute to building a secure and better future.
                This meaningful initiative aims to empower women and foster self-reliance. All interested women are encouraged to participate in such programs and take a confident step toward financial independence, personal growth, and sustainable development.
              `,
        eventMedia: [
          "img/Session_on_self_help_groups.jpg",
        ],
      },
      {
        id: 26,
        eventTitle: "26) Education Drive",
        eventDesc: `
                On the birth anniversary of Krantijyoti Savitribai Phule, we had the privilege of supporting young minds by distributing notebooks and pens to students. This initiative was a humble effort to encourage education and inspire children to pursue learning with confidence and determination.
                By providing essential educational materials, we aim to empower students and nurture a brighter future built on knowledge and opportunity. Together, let us continue to uphold the values of Savitribai Phule by promoting education as a foundation for social progress.
                Heartfelt thanks to everyone who supported and contributed to making this initiative meaningful and successful.
              `,
        eventMedia: [
          "img/Education_drive.jpg",
          "img/Education_drive1.jpg",
        ],
      },
      {
        id: 27,
        eventTitle: "27) Health Check-up Camp",
        eventDesc: `
                On 15th August 2024, we proudly celebrated Independence Day by organizing a Health Check-up Camp 🇮🇳. The initiative was dedicated to promoting awareness about health, early diagnosis, and preventive care among the community.
                The camp provided basic health check-ups and guidance, encouraging people to prioritize their well-being as an essential part of true independence. It served as a reminder that a healthy nation is the foundation of a strong and progressive country.
                Together, through this meaningful effort, we took a step toward building a healthier, stronger, and more aware India.
              `,
        eventMedia: [
          "img/health_checkup_camp.jpg",
          "img/health_checkup_camp1.jpg",
        ],
      },
    ]
    const project_container = document.querySelector('.project_container')
    events.forEach(data => {
      const project = document.createElement('div')
      project.classList.add('project');
      themeColor(project)
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

let previousColor = null
function themeColor(project){
  const projectcolors = [
      "#eab308",
      "#ef4444",
      "#22c55e",
      "#3b82f6",
      "#c74a9b",
    ]
  let randomColors;
  do{
    randomColors = projectcolors[Math.floor(Math.random() * projectcolors.length)]
  }while(previousColor == randomColors)

  project.style.setProperty('--theme_color', randomColors)
  previousColor = randomColors
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