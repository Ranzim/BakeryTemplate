// winow navbar stickey js
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


// end navbar stickry js ====

// =======productdetails js==============

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector(".img-showcase img:first-child")
        .clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
-(imgId - 1) * displayWidth
}px)`;
}

window.addEventListener("resize", slideImage);

// ==========end productdetails js==========


var noti = document.querySelector('.cart_notify');

var select = document.querySelector('.select');
var button = document.getElementsByClassName('addtocard');
for (but of button) {
    but.addEventListener('click', (e) => {
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');


        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";
        if (clone) {
            noti.onclick = () => {
                select.classList.toggle('display');
            }
        }


    })

}

// ==========filter for searchbar====================
  function filter() {
            let input = document.querySelector('.searchbar').value //<-- Changed to querySelector
            input = input.toLowerCase();
            let cards = document.querySelectorAll('.card');
             //<-- Changed to querySelectorAll with '.card' selector.

            //loop over cards and compare search with title.
            cards.forEach((el) => {
                let title = el.querySelector('.title').textContent.toLowerCase();
                el.style.display = title.includes(input) ? "list-item " : "none ";
            });
        }

// end  the  filter for serachbar =================



// a==================about us page js ==========
function myFunction() {
    location.replace("http://127.0.0.1:5501/bakary/productdetail.html")
}