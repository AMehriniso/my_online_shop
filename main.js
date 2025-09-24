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
