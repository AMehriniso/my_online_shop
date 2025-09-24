const productlist = [
    {
        id: 1,
        name: "Karma",
        price: 4000,
        description: "Четвёртый полноформатный альбом Stray Kids, выпущенный 22 августа 2025 года, последний камбек",
        img: {
            pic: 'photo/KARMA.jpg',
            alt: 'Karma'
        }
    },
    {   
        id: 2,
        name: "ATE",
        price: 3400,
        description: "Девятый мини-альбом Stray Kids c хитом 'Chk Chk Boom' в качестве заглавного трека",
        img: {
            pic:'photo/ATE.jpg',
            alt: 'ATE'
        }
    }, 
    { 
        id: 3,
        name: "5-STAR",
        price: 2000,
        description: "Третий студийный альбом Stray Kids, был признан лучшим альбомом на церемониях Billboard Music Awards",
        img: {
            pic:'photo/5-STAR.jpg',
            alt: '5-STAR'
        }
    },
    {
        id: 4,
        name: "NOEASY",
        price: 2500,
        description: "Второй студийный альбом Stray Kids, содержит одну из самых любимых песен создателя сайта",
        img: {
            pic:'photo/NOEASY.jpg',
            alt: 'NOEASY'
        }
    },

    {
        id: 5,
        name: "Christmas EveL",
        price: 2000,
        description: "Cингловый альбом Stray Kids, сочетающий в себе новогоднюю атмосферу и фирменный стиль группы",
        img: {
            pic:'photo/Christmas_EveL.jpg',
            alt: 'Christmas EveL'
        }
    },

    {
        id: 6,
        name: "I Am Not",
        price: 3000,
        description: "Дебютный альбом Stray Kids, символизирующий начало их пути и поиска их  собственного стиля",
        img: {
            pic:'photo/I_Am_Not.jpg',
            alt: 'I Am Not'
        }
    }




];
const basket = [];
const catalogList = document.getElementById('catalog-list');
const modal = document.querySelector('.modal');
const form = document.getElementById('order-form');
const successBlock = document.querySelector('.success');



function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = product.id;
    card.innerHTML = `
        <img src="${product.img.pic}" alt="${product.img.alt}" class="card-img">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-description">${product.description}</p>
        <p class="card-price">Цена: ${product.price} руб.</p>
        <button class="buy-button">Купить</button>
    `;
    return card;
}

function addToBasket(product) {
  const idx = basket.findIndex(p => p.id === product.id);
  if (idx > -1) {
    basket[idx].quantity = (basket[idx].quantity || 1) + 1;
  } else {
    basket.push({ ...product, quantity: 1 });
  }
  renderbasket();
}

function renderbasket() {
    const basketList = document.querySelector('.basket-list');

    const itemsHtml = basket.map(item => {
      const q = item.quantity || 1;
      return `
        <li data-id="${item.id}">
            <div class="basket-item">
              <p>${item.name} — ${item.price} руб.</p>
              <div class="quantity-controls">
                  <button class="decrease" aria-label="Уменьшить">−</button>
                  <span class="quantity">${q}</span>
                  <button class="increase" aria-label="Увеличить">+</button>
              </div>
            </div>
        </li>
      `;
    }).join('');
    localStorage.setItem('basket', JSON.stringify(basket)); 
    basketList.innerHTML = `
        <div>
            <ul class="basket-ul">
            ${itemsHtml || '<li><em>Корзина пуста</em></li>'}
            </ul>
        </div><br>
        <div class="price-counter">
            <p>Общая сумма: <strong>${basketTotal()} руб.</strong></p>
            <button class="checkout-button">Оформить заказ</button>
        </div>
      `;
    bindCheckout();
}

