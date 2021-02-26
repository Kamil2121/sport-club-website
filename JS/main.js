const navSlide = () => {
  const burger = document.querySelector('.nav-burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    //toggle links
    nav.classList.toggle('nav-active-burger');

    //animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.5) + 's';
      }
    });

    //burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();





jQuery(document).ready(function(){
  /*"use strict";
  $('#slider-carousel').carouFredSel({
      responsive:true,
      width:'100%',
      circular:true,
      scroll:{
                items:1,
                duration:500,
                pauseOnHover:true
      },
      auto:true,
      items:
      {
        visible:{
            min:1,
            max:1
        },
        height:"variable"
      },
      pagination:{
          container:".sliderpager",
          pageAnchorBuilder:false
      }
  });*/

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=60){
      $("nav").addClass('nav-scroll');
    }
    else if ($("nav").hasClass('nav-scroll')){
      $("nav").removeClass('nav-scroll');
    }
  });

});

const showCategory = event => {
  const getId = event.id;
  const buttons = document.querySelectorAll('.button-category button');
  for (i=0; i<buttons.length; i++) {
    if(buttons[i].hasAttribute('class')) {
      buttons[i].classList.remove('active');
    }
  }
  event.classList.add('active');
  const tabs = document.querySelectorAll('.tab-' + getId);
  const allTabs = document.querySelectorAll('.col-md-6');
  // alert(allTabs.length);
  // alert(tabs.length);
  for (i=0; i<allTabs.length; i++) {
      allTabs[i].classList.add('hideTab');
  }

  tabs[0].classList.remove('hideTab');
  tabs[1].classList.remove('hideTab');
  tabs[2].classList.remove('hideTab');
}

const showScore = obj => {
  const id = obj.id;
  const scoreWindow = document.querySelector('.wynikMeczu');
  const enemyTeam = document.querySelector('#enemyTeam');
  const score1 = document.querySelector('#score1');
  const score2 = document.querySelector('#score2');

  switch (id) {
    case 'm1':
      enemyTeam.innerHTML = 'Freedom Topspin I Skarżysko';
      score1.innerHTML = '17';
      score2.innerHTML = '1';
      break;
    case 'm2':
      enemyTeam.innerHTML = 'LUKS Radość Porzecze';
      score1.innerHTML = '5';
      score2.innerHTML = '13';
      break;
    case 'm3':
      enemyTeam.innerHTML = 'KS Polonia MC Auto Serwis Kielce';
      score1.innerHTML = '-';
      score2.innerHTML = '-';
      break;
    case 'm4':
      enemyTeam.innerHTML = 'UKS Orlęta Bilcza I';
      score1.innerHTML = '11';
      score2.innerHTML = '7';
      break;
    case 'm5':
      enemyTeam.innerHTML = 'UKS Orlęta Bilcza II';
      score1.innerHTML = '18';
      score2.innerHTML = '0';
      break;
    case 'm6':
      enemyTeam.innerHTML = 'STS Zgoda Janik';
      score1.innerHTML = '14';
      score2.innerHTML = '4';
      break;
    case 'm7':
      enemyTeam.innerHTML = 'MZKS Alit Ożarów';
      score1.innerHTML = '13';
      score2.innerHTML = '5';
      break;
    case 'm8':
      enemyTeam.innerHTML = 'Freedom Topspin II Skarżysko';
      score1.innerHTML = '15';
      score2.innerHTML = '3';
      break;
    case 'm9':
      enemyTeam.innerHTML = 'Freedom Topspin III Skarżysko';
      score1.innerHTML = '17';
      score2.innerHTML = '1';
      break;
    case 'm10':
      enemyTeam.innerHTML = 'GKS Góral Górno';
      score1.innerHTML = '17';
      score2.innerHTML = '1';
      break;
    case 'm11':
      enemyTeam.innerHTML = 'KS ŚWIT Działoszyce';
      score1.innerHTML = '12';
      score2.innerHTML = '6';
      break;
    case 'm12':
      enemyTeam.innerHTML = 'KS Global Pharma Orlicz 1924 Suchedniów';
      score1.innerHTML = '14';
      score2.innerHTML = '4';
      break;
    case 'm13':
      enemyTeam.innerHTML = 'KS Polonia MC Auto Serwis Kielce';
      score1.innerHTML = '1';
      score2.innerHTML = '9';
      break;
    case 'm14':
      enemyTeam.innerHTML = 'UKS Orlęta Bilcza';
      score1.innerHTML = '1';
      score2.innerHTML = '9';
      break;
    case 'm15':
      enemyTeam.innerHTML = 'LKS Biała Rawska';
      score1.innerHTML = '3';
      score2.innerHTML = '7';
      break;
    case 'm16':
      enemyTeam.innerHTML = 'KS Energetyk AMŁ Dzianiny Łódź';
      score1.innerHTML = '5';
      score2.innerHTML = '5';
      break;
    case 'm17':
      enemyTeam.innerHTML = 'MLUKS Brzeziny';
      score1.innerHTML = '8';
      score2.innerHTML = '2';
      break;
    case 'm18':
      enemyTeam.innerHTML = 'UKS Agaris Maków';
      score1.innerHTML = '2';
      score2.innerHTML = '8';
      break;
    case 'm19':
      enemyTeam.innerHTML = 'UMKS Księżak Łowicz';
      score1.innerHTML = '8';
      score2.innerHTML = '2';
      break;
    case 'm20':
      enemyTeam.innerHTML = 'ULKS Moszczenica';
      score1.innerHTML = '8';
      score2.innerHTML = '2';
      break;
    case 'm21':
      enemyTeam.innerHTML = 'MKS Jedynka Łódź';
      score1.innerHTML = '4';
      score2.innerHTML = '6';
      break;
    case 'm22':
      enemyTeam.innerHTML = 'MUKS Włókniarz Pabianice';
      score1.innerHTML = '6';
      score2.innerHTML = '4';
      break;
    case 'm23':
      enemyTeam.innerHTML = 'GLKS Burza Pawlikowice';
      score1.innerHTML = '5';
      score2.innerHTML = '5';
      break;
  }

  scoreWindow.style.display = "block";
}

function closeWindowScore() {
  const scoreWindow = document.querySelector('.wynikMeczu');
  scoreWindow.style.display = "none";
}


