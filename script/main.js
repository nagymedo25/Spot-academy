// Main section Scripting //


let open_btn = document.getElementById('open');
let close_btn = document.getElementById('close');
let ul = document.getElementById('ul');
let a_array = document.getElementsByClassName('list-item');


open_btn.onclick = function(){
    ul.className = 'active'
}

close_btn.onclick = function(){
    ul.className = 'disappel'
}

for(let i = 0 ; i < a_array.length ; i++) {
    a_array[i].onclick = function(){
        ul.className = 'disappel'
    }
}






// animation//

let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let number3 = document.getElementById('num3');


setTimeout(() => {
    
    // num1 function

    setInterval(function(){
        number1.innerHTML ++
        if(number1.innerHTML >= 4) {
            number1.innerHTML = 4; 
        }
    },150)
    
    // num2 function
       
    setInterval(function(){
            number2.innerHTML ++
            if(number2.innerHTML >= 42) {
                number2.innerHTML = 42; 
            }
    },50)
    
    
    // num2 function
   
        setInterval(function(){
            number3.innerHTML ++
            if(number3.innerHTML >= 3) {
                number3.innerHTML = 3; 
            }
        },150)

}, 500);


// About Scripting //

let buttons = document.querySelectorAll('.btn'); // جميع الأزرار لها نفس الكلاس
let selections = document.getElementsByClassName('selection');

// normaly //

buttons[0].style.background = 'var(--green)';
buttons[0].style.color = 'black';


buttons.forEach((button, index) => {
    button.onclick = function() {
        for (let i = 0; i < selections.length; i++) {
            selections[i].style.display = i === index ? 'block' : 'none';
        }

        buttons.forEach(btn => {
            btn.style.background = '';
            btn.style.color = '';
        });

        button.style.background = 'var(--green)';
        button.style.color = 'black';
    }
});

// Animation in Scroll //

let input = document.getElementById('input');
let output = document.getElementById('output');
const AboutPosition = input.getBoundingClientRect().top + window.scrollY;

setInterval(function(){
    if(window.scrollY >= AboutPosition) {
        input.style.animation = 'input 4s';
        input.style.transform = 'none';
        input.style.opacity = '1';
        // output

        output.style.animation = 'output 5s';
        output.style.transform = 'none';
        output.style.opacity = '1';

        // selections 

        selections[0].style.animation = 'output 5s';
        selections[1].style.animation = 'output 5s';
        selections[2].style.animation = 'output 5s';
    }

},100)


// Services Scripting //

let h2 = document.getElementById('h2');
let cards = document.getElementById('cards');
const ServicesPosition = h2.getBoundingClientRect().top + window.scrollY;

setInterval(function(){
    if(window.scrollY >= ServicesPosition - 100) {
        
        h2.style.animation = 'h2 4s';
        h2.style.transform = 'none';
        h2.style.opacity = '1';
        
        // cards

        cards.style.animation = 'cards 4s';
        cards.style.transform = 'none';
        cards.style.opacity = '1';

    }

},100)


// work animation //

let work_h2 = document.getElementById('work-h2');
let work_aside = document.getElementById('work-aside');
let gallary = document.getElementById('gallary');
const WorkPosition = work_h2.getBoundingClientRect().top + window.scrollY;


setInterval(function(){
    if(window.scrollY >= WorkPosition - 300  ) {
        
        work_aside.style.animation = 'aside 4s';
        work_aside.style.transform = 'none';
        work_aside.style.opacity = '1';
        
        // cards

        gallary.style.animation = 'aside-reverse 4s';
        gallary.style.transform = 'none';
        gallary.style.opacity = '1';

    }


},100)

// work //

let work_category = document.querySelectorAll('.category-btn');
let work_types = document.querySelectorAll('.types');
let work_title = document.querySelectorAll('.h');

for(let i = 0 ; i < work_category.length ; i++) {
    work_category[i].onclick = function(){
        
        work_category.forEach(type => {
            type.style.background = '';
        });

        work_types.forEach(type => {
            type.style.display = 'none'; 
        });

     work_title.forEach(type => {
            type.style.display = 'none'; 
        });


        work_category[i].style.backgroundColor = 'rgb(96, 102, 102)';
     work_title[i].style.display = 'block'
        work_types[i].style.display = 'flex';
    }
}

// Drop down
    let categoryButtons = document.querySelectorAll('.category');
    let types = document.querySelectorAll('.types');
    let titles = document.querySelectorAll('.h');
    let btn_media = document.getElementById('btn-media');

    btn_media.style.background = 'rgb(96, 102, 102)'

    



    for(let i = 0 ; i < categoryButtons.length ; i++) {

        categoryButtons[i].onclick = function(){
            
            categoryButtons.forEach(type => {
                type.style.background = '';
            });

            types.forEach(type => {
                type.style.display = 'none'; 
            });

            titles.forEach(type => {
                type.style.display = 'none'; 
            });


            categoryButtons[i].style.backgroundColor = 'rgb(96, 102, 102)';
            titles[i].style.display = 'block'
            types[i].style.display = 'flex';
        }
    }


// responsive nav //

let work_open = document.getElementById('work-open');
let work_close = document.getElementById('work-close');
let drop = document.getElementById('drop');


work_open.onclick = function(){
    drop.style.display = 'block';
    work_close.style.display = 'block'
    work_open.style.display = 'none'
}

work_close.onclick = function(){
    drop.style.display = 'none';
    work_close.style.display = 'none'
    work_open.style.display = 'block'
}

// الحصول على عناصر DOM
const popupContainer = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closePopup = document.getElementById("popup-close");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
const imageCount = document.getElementById("image-count");
const images = document.querySelectorAll(".photos img"); // الصور

let currentImageIndex = 0;

// فتح النافذة المنبثقة عند النقر على الصورة
images.forEach((image, index) => {
    image.addEventListener("click", function () {
        currentImageIndex = index;
        updatePopupImage();
        popupContainer.style.display = "block";
        document.body.style.overflow = "hidden"; // إخفاء التمرير
    });
});

// تحديث الصورة المعروضة والمعلومات
function updatePopupImage() {
    popupImg.src = images[currentImageIndex].src;
    imageCount.textContent = `${currentImageIndex + 1} / ${images.length}`; // عدد الصور
}

// إغلاق النافذة المنبثقة
closePopup.addEventListener("click", function () {
    popupContainer.style.display = "none";
    document.body.style.overflow = "auto"; // إرجاع التمرير
});

// التنقل إلى الصورة السابقة
prevArrow.addEventListener("click", function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updatePopupImage();
    }
});

// التنقل إلى الصورة التالية
nextArrow.addEventListener("click", function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updatePopupImage();
    }
});

// Contant animation //

// work animation //

let contact_header = document.getElementById('contact_header');
let contact_h2 = document.getElementById('work-h2');
let contact_card1 = document.getElementById('contact_card1');
let contact_card2 = document.getElementById('contact_card2');
let contact_social = document.getElementById('contact_social');
const contactPosition = contact_h2.getBoundingClientRect().top + window.scrollY;


setInterval(function(){
    if(window.scrollY >= contactPosition + 300 ) {
        
        // header //

        contact_header.style.animation = 'header 4s';
        contact_header.style.transform = 'none';
        contact_header.style.opacity = '1';

        // cards


        contact_card1.style.animation = 'aside-reverse 4s';
        contact_card1.style.transform = 'none';
        contact_card1.style.opacity = '1';
        

        contact_card2.style.animation = 'aside 4s';
        contact_card2.style.transform = 'none';
        contact_card2.style.opacity = '1';

        // social //

        contact_social.style.animation = 'aside 4s';
        contact_social.style.transform = 'none';
        contact_social.style.opacity = '1';

    }


},100)


