(function () {
    let renderListCards = function () {
      
        function listCards(cat) {
            let arr = [];
            cat.forEach(cat => {
                arr.push(`
                <div class="card">
                    <div class="">
                        <div class="figure">
                        <img class="card-img" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image">
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${cat.name}</h5>
                        <p class="card-subtitle">${cat.category}</p>
                        <p class="card-text">${cat.description}</p>
                        <ul class="clear">
                        <li class="">
                            <i class="mi mi-MapPin2"></i>
                            <span>${cat.address}</span>
                        </li>
                        <li class="">
                            <i class="mi mi-Phone"></i>
                            <span>${cat.phone}</span>
                        </li>
                        <li class="">
                            <i class="mi mi-Mail"></i>
                            <span>${cat.email}</span>
                        </li>
                        </ul>
                    </div>
                    <div class="card-footer bg-transparent">
                        <a href="#"><i class="mi mi-instagram" style="color:#BF0077;"></i></a>
                        <a href="#"><i class="mi mi-dribbble" style="color:#E3008C;"></i></a>
                        <a href="#"><i class="mi mi-vimeo" style="color:#0078D7;"></i></a>
                        <a href="#"><i class="mi mi-reddit-alien" style="color:#EF6950;"></i></a>
                    </div>
                 </div>`)
            });
            return arr;
        }

        function categorias(card) {
            return `
            ${card.data.map(cat => `
            <div class="item">
                <h2>${cat.category}</h2>
                <div class="owl-carousel cards">${cat.cards ? listCards(cat.cards) : null}</div>
            </div>`).join('\n')}
            `;

        }
        document.getElementById("items").innerHTML = `${cardsData.map(categorias).join('\n')}`;
    }
    renderListCards();

    $('.cards').owlCarousel(
        {
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoPlay: 2000,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        }
    );


})();