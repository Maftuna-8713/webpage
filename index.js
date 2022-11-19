let modal = document.querySelector('.modal-window')
function showModal(){
    modal.style.display = 'flex'
    // modal.classList.add('.active')

}
function closeModal(){
    modal.style.display = 'none'
}




let modaltwo = document.querySelector('.modal-windowtwo')
function showModaltwo(){
    modaltwo.style.display = 'flex'
    // modal.classList.add('.active')

}
function closeModaltwo(){
    modaltwo.style.display = 'none'
}


$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }); 