//var nome = prompt("Qual seu nome?")
//alert("Oi " + nome + ", estou configurando os links da página :)");

/**
* Checking if document is ready utizizing Jquery
*/
$(document).ready(function () {
  
  // Button right in text (or utilize querySelector - recommended)
  const right = `<button class="button-arrow -right">
    <span class="content">Voltar</span>
  </button>`;
  
  // Button left in text (or utilize querySelector - recommended)
  const left = `<button class="button-arrow -left">
    <span class="content">Avançar</span>
  </button>`;
  
  // Initializing slick carousel in section main-carousel, with configurations to show only 4 slides and next 1 slide in display.
  $(".main-carousel").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: left,
    nextArrow: right,
  });
});
