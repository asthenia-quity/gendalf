document.querySelectorAll('.label').forEach((label) => {
    label.addEventListener('click', () => {
        document.querySelector('.qa').style.height = '405px';
        let content = label.nextElementSibling;

        if (content.classList.contains('active')) {
            content.style.maxHeight = 0;
            content.classList.remove('active');
            label.classList.remove('active-label');
        } else {
            document.querySelectorAll('.content').forEach((el) => {
                el.style.maxHeight = 0;
                el.classList.remove('active');
                el.previousElementSibling.classList.remove('active-label');
            });
            
            document.querySelector('.qa').style.height = '900px';
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('active');
            label.classList.add('active-label'); 
        }
    });
});
$.mask.definitions['u'] = ['1|2|3|4|5|6|9']
$("#telephone").mask("+7 (u99) 999-99-99", {autoclear: false});


if(document.documentElement.clientWidth){
    document.querySelector('.burger_btn').addEventListener('click', ()=>{
        const burger_menu = document.querySelector('.header__burger');
        const header_mob = document.querySelector('.header');
        const heig = window.getComputedStyle(header_mob).height;

        if(window.getComputedStyle(header_mob).height == '98px'){
            burger_menu.style.display = 'flex';
            header_mob.style.height = '301px';
        } 

        if(heig == '301px'){
            burger_menu.style.display = 'none';
            header_mob.style.height = '98px';
        } 
    })
}


document.addEventListener('DOMContentLoaded', () => {
        
    const carousel = document.querySelector('.cards__list');
    const items = document.querySelectorAll('.cards__list-item');
    const totalItems = items.length;
    let index = 0;
    for (let i = 0; i < totalItems; i++) {
        let clone = items[i].cloneNode(true);
        carousel.appendChild(clone);
    }

    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight); // Ширина элемента с учетом margin

    function moveCarousel() {
        index++;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;

        if (index === totalItems) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(0)`;
                index = 0;
                
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }

    setInterval(moveCarousel, 3000); 
})


$('.life-lent__cards').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive:[
        {
            
            breakpoint: 789,
            settings:{
                slidesToShow: 1
            }
        },

        {
            
            breakpoint: 1001,
            settings:{
                slidesToShow: 3
            }
        },
        
    ]
  });


  const fio = document.querySelector('input[name="fio"]');
  const number = document.querySelector('input[name="number"]');
  const email = document.querySelector('input[name="email"]');
  const dolznost = document.querySelector('input[name="dolznost"]');
  
  fio.addEventListener('blur', () => {
      if(fio.value == ""){
          fio.style.border = '2px solid #FD7583';
          fio.classList.add('no');
      } else {
          fio.style.border = '2px solid #9BCC37';
          fio.classList.add('yes');
      }
  });
  
  number.addEventListener('blur', () => {
      const len_number = number.value.split('_').length-1;
      console.log(len_number, number.value)
      if(len_number > 0 || number.value == ''){
          number.style.border = '2px solid #FD7583';
          number.classList.add('no');
      } else {
          number.style.border = '2px solid #9BCC37';
          number.classList.add('yes');
      }
  });
  
  email.addEventListener('blur', () => {
      if(email.value == ""){

          email.style.border = '2px solid #FD7583';
          email.classList.remove('yes');
          email.classList.add('no');
      } else {

          email.style.border = '2px solid #9BCC37';
          email.classList.add('yes');
      }
  });
  
  dolznost.addEventListener('blur', () => {
      if(dolznost.value == ""){

          dolznost.style.border = '2px solid #FD7583';
          dolznost.classList.add('no');
      } else {

          dolznost.style.border = '2px solid #9BCC37';
          dolznost.classList.add('yes');
      }
  });
  
  document.querySelector('.footer__rec').addEventListener('submit', ()=>{
      event.preventDefault();
      const len_number = number.value.split('_').length-1;
      let category, index = 0;
  
      if(document.querySelector('input[name="category"]:checked')){
          category = document.querySelector('input[name="category"]:checked').id;
      } else{
          category = '';
      }
  
      let values = [fio , email, dolznost, category]
  
      for(i=0; i< values.length-1; i++){
          let val = values[i].value;
          if(val == false){
              values[i].style.border = '2px solid #FD7583';
              values[i].classList.add('no');
              index++;
          } else{
              values[i].style.border = '2px solid #9BCC37';
              values[i].classList.add('yes');
          }
      }
  
      if(len_number > 0 || number.value == ''){
          number.style.border = '2px solid #FD7583';
          number.classList.add('no');
          index++;
      }  else{
          number.style.border = '2px solid #9BCC37';
          number.classList.add('yes');
      }
  
      if(values[3] != ''){
          document.getElementById('category-label').style.border = '2px solid #9BCC37';
      } else{
          document.getElementById('category-label').style.border = '2px solid #FD7583';
          index++;
      }

      const file_input = document.querySelector('input[name="file"]');
  
  
      if(file_input.value == ''){
          alert("Прикрепите резюме");
          document.getElementById('file').style.border = '2px solid #FD7583';
          document.getElementById('file').style.color = '#FD7583';
          document.getElementById('btnform').src = 'images/btnform_no.png';
          document.getElementById('btnform').classList.add('pulse');
          setTimeout(() => {
              document.getElementById('btnform').classList.remove('pulse');
          }, 30)
          index++;
      } else{
          document.getElementById('file').style.border = '2px solid #9BCC37';
          document.getElementById('file').style.color = '#9BCC37';
          document.getElementById('btnform').src = 'images/btnform.png';
      }
  
      if(index == 0){
          alert("Данные отправлены");
      } else{
          alert("Данные введены неверно. Повторите ввод");
      }
  });