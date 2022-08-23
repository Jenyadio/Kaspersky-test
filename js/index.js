const popup = document.querySelector('.popup');
const infoPopup = document.querySelector('.bottom__info-popup');
const infoIcon = document.querySelector('.bottom__info-icon');
const offerUsers = document.querySelector('.offer__select-users');
const offerYears = document.querySelector('.offer__select-years');
const priceCurrent = document.querySelector('.offer__price-current');
const media = window.matchMedia('(max-width: 767px)');
const mobilePopupClosed = document.querySelector('.mobile-popup__closed');
const openMobilePopupButton = document.querySelector('.mobile-popup__closed-icon');
const mobilePopupOpened = document.querySelector('.mobile-popup__opened');
const body = document.querySelector('.body');
const closeMobilePopupButton = document.querySelector('.mobile-popup__opened-icon');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 800) {
      popup.classList.add('popup__active');
    } else {
      popup.classList.remove('popup__active')
    }
});

function openInfoPopup() {
    infoPopup.classList.toggle('bottom__info-popup-active');
}

function calculateOffer() {
    const yearsValue = offerYears.value;
    const usersValue = offerUsers.value;
    if (yearsValue === 1 && usersValue === 10) {
        priceCurrent.textContent = '1.000.000';
    } else {
        const newPrice = +yearsValue * +usersValue;
        priceCurrent.textContent = String(newPrice);
    }
}

window.addEventListener('scroll', function() {
    if (media.matches && window.pageYOffset > 1000) {
        mobilePopupClosed.classList.add('mobile-popup__closed-active');
    } else {
        mobilePopupClosed.classList.remove('mobile-popup__closed-active')
    }
});

function openMobilePopup() {
    mobilePopupOpened.classList.add('mobile-popup__opened-active');
    body.classList.add('stop-scroll');
}

function closeMobilePopup() {
    mobilePopupOpened.classList.remove('mobile-popup__opened-active');
    body.classList.remove('stop-scroll');
}

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    const windowHeight = document.documentElement.scrollHeight;

    if ((currentScroll + window.innerHeight) > (windowHeight - 20)) {
        mobilePopupClosed.classList.remove('mobile-popup__closed-active');
    }
})
    
infoIcon.addEventListener('click', openInfoPopup);
offerUsers.addEventListener('change', calculateOffer);
offerYears.addEventListener('change', calculateOffer);
openMobilePopupButton.addEventListener('click', openMobilePopup);
closeMobilePopupButton.addEventListener('click', closeMobilePopup);
