window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('.side_menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
  mediacont_slider()
})

function mediacont_slider(){
  left_slide_btn = document.querySelector('.left_slide_btn')
  right_slide_btn = document.querySelector('.right_slide_btn')
  media_container = document.querySelector('.media_displayer')
  total_media = document.querySelectorAll('.media_cont').length
  media_index = 0

  right_slide_btn.addEventListener('click',()=>{
    if (media_index < total_media - 1){
      media_index++
    }else{
      media_index =0
    }
    right_slide = media_index * -100
    media_container.style.transform = `translateX(${right_slide}%)`
  })

}