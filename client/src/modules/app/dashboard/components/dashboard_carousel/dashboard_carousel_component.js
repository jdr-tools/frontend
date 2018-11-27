const carouselController = function carouselControllerFunction ($timeout) {
  'ngInject'

  $timeout(() => {
    $('.owl-carousel').owlCarousel({
      loop:true,
      dots: true,
      margin:10,
      items: 1,
      responsive: {
        "0": {
          nav: false
        },
        "960": {
          nav: true
        }
      }
    })
  }, 200)
}

export default {
  controller: carouselController,
  controllerAs: 'vm',
  templateUrl: '/client/src/modules/app/dashboard/components/dashboard_carousel/dashboard_carousel.html',
  bindings: {
    filenames: '='
  }
}