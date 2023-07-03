$(document).ready(function(){


       // input mask
   Inputmask("+7 (999) 999-99-99").mask('input[type=tel]');

   // open/close select-input
   $(document).on('click','.select-input__head',function(e){
    $(this).closest('.select-input').toggleClass('open')
   })

   // set select input value
   $(document).on('click',('.select-input__item'),function(e){
        let textTarget = $(this).text()
        $(('.select-input__item')).removeClass('active')
       
        $('.select-input__current-value').text(textTarget)
        $(this).addClass('active')
        $(this).closest('.select-input').toggleClass('open')

   })


   // increment product quantity
   $(document).on('click','.product__quantity-btn--add',function(e){
    let current_quantity = + $('.product__quantity-input input').val()

    if(current_quantity<9000){
        current_quantity +=1
        $('.product__quantity-input input').val(current_quantity)
    } 
   })

   // decrement product quantity
   $(document).on('click','.product__quantity-btn--remove',function(e){
    let current_quantity = + $('.product__quantity-input input').val()
    if(current_quantity!==1){
        current_quantity -= 1
        $('.product__quantity-input input').val(current_quantity)
        return
    }
   })

   // handler input button newsletter
   $(document).on('click','.news-letter__form .input__icon',function(e){
    if($('.news-letter__form input').val().length >0){
        $('.news-letter__form input').val('')
    }
   })

   const openModal = () =>{
    $('.modal').addClass('isOpen')
    if( $('.modal').hasClass('isOpen')){
        $(document.body).addClass('modal-open')
    }
   }

   const closeModal = () =>{
    $('.modal').removeClass('isOpen')
    $(document.body).removeClass('modal-open')
   }

   $(document).on('click','.product__buy-fast',()=>{
    openModal()
  
   })

   $(document).on('click','.modal__close-icon',()=>{
    closeModal()
  
   })

   // handler slide preview 
   $('.preview-product__item img').on('click',function(e){
    $('.preview-product__item').removeClass('active')
    $(this).closest('.preview-product__item').addClass('active')
    let srcTarget= $(this).attr('src')
    $('.preview-product__img img').attr('src', srcTarget)
   })
   let currentActiveImg = $('.preview-product__img img')
   const setCurrentImgPrevie = (listAllImg, currentImg) =>{
       $(listAllImg).each((index,el) =>{
           if($(el).closest('.preview-product__item').hasClass('active')){
               $(currentActiveImg).attr('src',$(el).attr('src'))
               console.log(el)
           }
       })
   }
    setTimeout(()=>{
    setCurrentImgPrevie( $('.preview-product__item img'),$('.preview-product__img img'))
    },3000)

    // handler menu 

    $(document).on('click','.header__burger',function(e){
        $('.header__menu').addClass('isOpenMenu')
    })
    $(document).on('click','.menu__close-icon',function(e){
        $('.header__menu').removeClass('isOpenMenu')
    })

    $(window).resize(function(e){
        if(window.screen.width >1200){
           
            if( $('.header__menu').hasClass('isOpenMenu')){
                $('.header__menu').removeClass('isOpenMenu')
            }
        }
    })

    $(document).on('click','.menu__item',()=> {
        $('.header__menu').removeClass('isOpenMenu')
    })



})