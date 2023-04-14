const sliderImage = document.querySelector('.slider-image img');
const thumbnails = document.querySelectorAll('.thumbnail');
const dropdownList = document.querySelectorAll('.h-dropdown-title');
document.querySelector('.mobil-menu').addEventListener('click', function () {

    this.classList.toggle('active');
    document.querySelector('.header-bottom nav').classList.toggle('active');
});



if(sliderImage) {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const thumbnailImage = thumbnail.querySelector('img');
            sliderImage.src = thumbnailImage.src;
        });
    });
}


dropdownList.forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
});


//

const menu1 = [
    {
        "title": "HANTECH Split Klimaanlage GWH 18000 BTU Modell Lomo",
        "link": "https://hantech.eu/produkt/hantech-split-klimaanlage-gwh-18000-btu-modell-lomo/",
        "img": "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-300x300.jpg"
    },
    {
        "title": "HANTECH Split Klimaanlage GWH 24000 BTU Modell Lomo",
        "link": "https://hantech.eu/produkt/hantech-split-klimaanlage-gwh-24000-btu-modell-lomo/",
        "img": "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-300x300.jpg"
    },
    {
        "title": "HANTECH Split Klimaanlage GWH 9000 BTU Modell Lomo",
        "link": "https://hantech.eu/produkt/hantech-split-klimaanlage-gwh-9000-btu-modell-lomo/",
        "img": "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-300x300.jpg"
    }
];
const menu2 = [];
const menu3 = [];
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

if(name === 'Wandklimageräte') {
    menu1.map(menuItem => {
        const item = `<a href="/product-detail.html?name=${menuItem.title.toLowerCase().replaceAll(' ','_')}" class="h-product">
        <div class="h-product__img">
          <img src="${menuItem.img}" alt="">
        </div>
        <h3>${menuItem.title}</h3>
        <div class="h-product__price">
          <span>€1300,00</span>
          <span class="old-price">€1500,00</span>
        </div>
        <small>inkl. MwSt. zzgl. Versand</small>
        <button type="button" class="h-button h-button__primary">Details</button>
      </a>`;

        document.querySelector('.h-products').innerHTML += item;
    });
    if(menu1.length < 1) {
        document.querySelector('.h-products').innerHTML += '<p class="kein-produkte">Es wurden keine Produkte gefunden, die deiner Auswahl entsprechen.</p>'
    }
}

if(name === 'Deckenkassetten') {
    console.log(menu2.length)
    if(menu2.length === 0) {
        document.querySelector('section .h-container').innerHTML += '<p class="kein-produkte">Es wurden keine Produkte gefunden, die deiner Auswahl entsprechen.</p>'
    } else {
        menu2.map(menuItem => {
            const item = `<a href="/product-detail.html?name=${menuItem.title.toLowerCase().replaceAll(' ','_')}" class="h-product">
        <div class="h-product__img">
          <img src="${menuItem.img}" alt="">
        </div>
        <h3>${menuItem.title}</h3>
        <div class="h-product__price">
          <span>€1300,00</span>
          <span class="old-price">€1500,00</span>
        </div>
        <small>inkl. MwSt. zzgl. Versand</small>
        <button type="button" class="h-button h-button__primary">Details</button>
      </a>`;

            document.querySelector('section .h-container').innerHTML += item;
        });
    }
}
if(name === 'Truhengeräte') {
    menu3.map(menuItem => {
        const item = `<a href="/product-detail.html?name=${menuItem.title.toLowerCase().replaceAll(' ','_')}" class="h-product">
        <div class="h-product__img">
          <img src="${menuItem.img}" alt="">
        </div>
        <h3>${menuItem.title}</h3>
        <div class="h-product__price">
          <span>€1300,00</span>
          <span class="old-price">€1500,00</span>
        </div>
        <small>inkl. MwSt. zzgl. Versand</small>
        <button type="button" class="h-button h-button__primary">Details</button>
      </a>`;

        document.querySelector('.h-products').innerHTML += item;
    });
    if(menu3.length < 1) {
        document.querySelector('section .h-container').innerHTML += '<p class="kein-produkte">Es wurden keine Produkte gefunden, die deiner Auswahl entsprechen.</p>'
    }
}
