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




var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmE4ZmU4ZjBhN2FiMWVjNzg4Y2Q3ZWFjNDg4ZWM2NjQ3MjhmN2Y5OTAzNjI3M2MwNjEwNzczNzBlMzQ1MWRhNzE3MjU1MzUwNzNiNWNiMDYiLCJpYXQiOjE2ODE0Mjc5ODIuMDcwNCwibmJmIjoxNjgxNDI3OTgyLjA3MDQsImV4cCI6MTY4MTUxNDM4Mi4wNjg4LCJzdWIiOiIyMyIsInNjb3BlcyI6WyIqIl19.lJtx7h3LIN3tMPssMuWitJOhshyVgPs6PTIVnvyeHs9xAdcfTga4BNl9vuFn6in6YuIw0t17qygx-cJiWP_phbcDqtCunrde_DHDE10eAGNZB447wEqmaQ0jgwRNQXS57YffUETRovwdlQuL3BiUzZD9jlG804rNfHifg72BefXfkqm-MpkpYGakVAgNWAPXye0WKb8E3sQ63EvH1wUOiUBjNyNRZB2j2V79G7tJdHxfbKg8a1mmcj5ltZoiitQcXW-I99omcywSQzh4sMYSVYmsS_ayBb6sRLwlL9odURN_hXVgMK701i9N_MFRgGvRyzxFTHkTqXsRi-k4lR9X_YYJt_0I1cxVSyyYe4Qw-mtXqlwKG1s_6lgu-i7PPf46DN2EkWGaBUsl3Uncg8tRMxLXCozi8r1OKVO149h6abXvRdpxWz4YIBEmsFXJJuPXzjE78XA10bbvroTHBEY9gEBHQkZtrCEw4jfhB1jq1_ErBsDHau1qN3RWu_HzXbKOBqcu3_apjM1rxjr6_xJ8MWifha0nO-GJWdId5bFJxFN54YSSHCojvtpdqM6fA8JAEhaM613wMuDqiTofznymq9XBJBoo9gXNS_L-SbBta5GQKjgpoQyCSYdqJO7gysYJDOIoD6ZpFBki5CwnJK_DJJCjAr1Nm6MGJiLl-ptha4A");
myHeaders.append("Cookie", "plentyID=eyJpdiI6IjNPNFI3TC96ZGtMWVVGMktmRklub0E9PSIsInZhbHVlIjoiNVlJTDllUDRNTk9TTWxpWTl0NU9YK1gvRWlJK2VOY1k3R3JRd3laY04veUgyTy80UjBERys3alRDTnc4dThIaiIsIm1hYyI6IjgyZjk4YWYyZjdlYWFhODdjZThhMWVjYzI4OGVkMTZjMmE2NzVmMmE0YmU3OGU1ZDk5ZjNkN2Q1NWFmZjE0NDEiLCJ0YWciOiIifQ%3D%3D");

var formdata = new FormData();

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'no-cors'
};

fetch("https://www.actec-klima.de/rest/categories", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));