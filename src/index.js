import "hamburgers/_sass/hamburgers/hamburgers.scss";
import "slick-carousel";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import "./js/slick";
import MicroModal from 'micromodal';
import "./sass/styles.scss";
import $ from 'jquery';

const showHamburgerMenu = () => {
  $(".hamburger").addClass("is-active");
  $(".hamburger-menu").addClass('show');
  $(".hamburger-overlay").removeClass('hide');
  $(".hamburger-overlay").addClass('show');
  $(window).on("keydown", hendleKeyPress);

  $(".hamburger").on("click", CloseHamburgerMenu);
}

const CloseHamburgerMenu = e => {
  $(".hamburger-menu").removeClass('show');
  $(".hamburger-overlay").addClass('hide');
  $(".hamburger").removeClass('is-active');
  $(window).off("keydown", hendleKeyPress);

  $(".hamburger").off("click", CloseHamburgerMenu);
}

const hendleKeyPress = e => {
  if (e.code !== "Escape") {
    return;
  }
  CloseHamburgerMenu();
};

$(".hamburger-overlay").on("click", function (e) {
  if (e.target === e.currentTarget) {
    CloseHamburgerMenu();
  }
});

$(".hamburger").on("click", showHamburgerMenu);


  // TOOLTIP
  const removeTooltip = (e) => {
    const tooltip = $(e.target).closest('.tooltip');
    tooltip.toggleClass('show');
  }

  const openTooltip2 = (e, openTooltip, tooltip) => {
    if (openTooltip[0] === tooltip[0]) {
      openTooltip.removeClass('show');
      return;
    }

    if (openTooltip.length !== 0) {
      openTooltip.removeClass('show');
    }

    tooltip.addClass('show');
  }

  const heandleClickTooltip = (e) => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    const openTooltip = $('.tooltip.show');
    const tooltip = $(e.target).siblings('.tooltip');
    let action = e.target.dataset.action;

    switch (action) {
      case "location-tooltip":
      case "phone-tooltip":
        openTooltip2(e, openTooltip, tooltip);
        break;
      case "close-tooltip":
        removeTooltip(e);
        break;
      case "caret-tooltip":
        MicroModal.show('note-editor-modal');
        break;
      default:
        console.log("some error");
    }
  }

  $('.smart-menu').on('click', heandleClickTooltip);

  // HAMBURGER MENU 

  const changeViewMenu = (e) => {
    if (e.target.nodeName !== 'LI') {
      return;
    }

    const menu = e.target.dataset.menu;
    const activeMenu = $('.main-menu_header li.active');

    if (menu === "main-menu") {
      $('.main-menu-list').show();
      $('.serv-menu-list').hide();
      activeMenu ? activeMenu.removeClass('active') : '';
      $(e.target).addClass('active');
    } else {
      $('.serv-menu-list').show();
      $('.main-menu-list').hide();
      activeMenu ? activeMenu.removeClass('active') : '';
      $(e.target).addClass('active');
    }

  }

  const handleFilter = () => {
    $('.filter-content').removeClass('visually-hidden');
    $('.form-overlay').on('click', function (e) {
      if (e.currentTarget !== e.target) {
        return
      }
      $('.filter-content').addClass('visually-hidden');
    })
  }

  $('.main-menu_header').on('click', changeViewMenu);
  $('.filter-params').on('click', handleFilter);

  $('.filter_close').on('click', () => {
    $('.filter-content').addClass('visually-hidden');
  });

$('.advert-video-play').on('click', function(){
  MicroModal.show('modal-video');
})