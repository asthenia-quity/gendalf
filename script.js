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


document.querySelector('.footer__rec').addEventListener('submit', ()=>{
    event.preventDefault();

    const fio = document.querySelector('input[name="fio"]');
    const number = document.querySelector('input[name="number"]');
    const email = document.querySelector('input[name="email"]');
    const dolznost = document.querySelector('input[name="dolznost"]');
    let category, index = 0;

    if(document.querySelector('input[name="category"]:checked')){
        category = document.querySelector('input[name="category"]:checked').id;
    } else{
        category = '';
    }

    let values = [fio, number , email, dolznost, category]

    for(i=0; i< values.length-1; i++){
        let val = values[i].value;
        if(val == false){
            console.log(val)
            values[i].style.border = '2px solid #FD7583';
            values[i].classList.add('no');
            index++;
        } else{
            values[i].style.border = '2px solid #9BCC37';
            values[i].classList.add('yes');
        }
    }

    console.log(values[4])

    if(values[4] != ''){
        document.getElementById('category-label').style.border = '2px solid #9BCC37';
    } else{
        document.getElementById('category-label').style.border = '2px solid #FD7583';
        index++;
    }


    if(index == 0){
        alert("Данные отправлены");
    } else{
        alert("Данные введены неправильно");
    }
});

$.mask.definitions['u'] = ['1|2|3|4|5|6|9']
$("#telephone").mask("+7 (u99) 999-99-99", {autoclear: false});


if(document.documentElement.clientWidth){
    document.querySelector('.burger_btn').addEventListener('click', ()=>{
        const burger_menu = document.querySelector('.header__burger');
        const header_mob = document.querySelector('.header');
        const heig = window.getComputedStyle(header_mob).height;

        if(window.getComputedStyle(header_mob).height == '101px'){
            burger_menu.style.display = 'flex';
            header_mob.style.height = '301px';
        } 

        if(heig == '301px'){
            burger_menu.style.display = 'none';
            header_mob.style.height = '101px';
        } 
    })
}





