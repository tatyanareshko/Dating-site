// GET
const PROFILE_DATA = 'https://dating-site1.herokuapp.com/api/tutorials';

const getData = () => {

    fetch('https://dating-site1.herokuapp.com/api/tutorials')

        .then(
            (req) => {
                return req.json();
            }

        )
        .then(
            (data) => {
               
                let topUsers = document.querySelector('#top');

                let womanUsers = document.querySelector('#woman_page');

                let manUsers = document.querySelector('#man_page');

                topUsers.innerHTML = '';
                womanUsers.innerHTML = '';
                manUsers.innerHTML = '';

                //top Users
             
                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === "top") {

                        topUsers.innerHTML += `
                        <div class="swiper-slide card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                 <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                                <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn" data-greed="1">
                                <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
                            </div>
                        </div>
                    </div>
                `


                    }
                }


                //Woman Users

                for (let i = 0; i < data.length; i++) {
                    if (data[i].sexType === 0) {

                        womanUsers.innerHTML += `
                        <div class="swiper-slide card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                                <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn" data-greed="1">
                                <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
                            </div>
                        </div>
                    </div>
                `

                    }
                }

                //Man Users

                for (let i = 0; i < data.length; i++) {
                    if (data[i].sexType === 1) {

                        manUsers.innerHTML += `
                        <div class="swiper-slide card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                               <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn" data-greed="1">
                                <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
                            </div>
                        </div>
                    </div>
                `

                    }
                }
                

            }

        )
        .catch(
            err => {
                console.log(err);
            }

        )

    new Swiper('.image-slider', {
     
        slidesPerView: 4.5,
        watchOverflow: true,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            strech: 50,
            slideShadows: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }


    });

    setTimeout(sayHello, 1000);

}

getData();


