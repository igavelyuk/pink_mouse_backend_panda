module.exports = function (website) {
  var pageStruct =`
  <!doctype html>
  <html lang="uk">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Суши Панда - Білая Церква</title>
    <!-- <link href="https://fonts.googleapis.com./css?family=Baloo+Bhaina|Rubik+Mono+One" rel="stylesheet"> -->

    <link href="${website}/css/fontawesome.css" rel="stylesheet">
    <link href="${website}/css/fonts.css" rel="stylesheet">
    <link href="${website}/css/brands.css" rel="stylesheet">
    <link href="${website}/css/solid.css" rel="stylesheet">

    <link rel="stylesheet" href="${website}/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="${website}/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="${website}/css/bootstrap.min.css">
    <link rel="stylesheet" href="${website}/css/main.css">
  </head>

  <body>
    <header>
      <img class="nav-logo fixed-top" src="${website}/img/logo.png" alt="burger-panda-bc" />
      <nav class="navbar navbar-expand-lg navbg-panda-color fixed-top text-right">
        <div class="">
          <p class="nav-tel-size text-right" href="#" tabindex="-1" aria-disabled="true"><i class="fas fa-phone-square-alt"></i> Киев.(067)7554141</p>
        </div>
        <button class="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
          <div class="col-md-4">

          </div>
          <div class="navbar-nav">
            <a href="${website}/" class="nav-item nav-link active"><i class="fas fa-hamburger color-black"></i>Повернутися на головну<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link d-lg-none d-xl-none" href="viber://add?number=380969601414"><i class="fab fa-viber color-black"></i> Передзвонимо</a>
            <a class="nav-item nav-link d-lg-none d-xl-none" href="tel:380969601414"><i class="fas fa-id-card-alt color-black"></i> Додайте нас</a>
          </div>
        </div>
      </nav>
    </header>
    <section class="section-social">
      <img class="spacer" src="${website}/img/iconmonstr-smiley-8.svg"  height="300" width="300" alt="instagram icon"/>
      <p>Заказ выполнен, ожидайте звонка.</p>
      <p><a href="${website}/" class="nav-item nav-link active"><i class="fas fa-hamburger color-black"></i>Повернутися на головну ТУТ<span class="sr-only">(current)</span></a></p>
      <p><i class="fa fa-arrow-circle-down" aria-hidden="true"></i>або відвідайте наші соціальні мережі.<i class="fa fa-arrow-circle-down" aria-hidden="true"></i></p>
    </section>
    <section class="container section-social">
      <div class="row">
        <div class="col">
          <a href="https://twitter.com/pandasushibc/">
          <img src="${website}/img/iconmonstr-twitter-3.svg" height="150" width="150" alt="iconmonstr-twitter">
          </a>
        </div>
        <div class="col">
          <a href="https://instagram.com/pandasushibc/">
            <img src="${website}/img/iconmonstr-instagram-1.svg" height="150" width="150" alt="iconmonstr-instagram"/>
          </a>
        </div>
        <div class="col">
          <a href="https://facebook.com/pandasushibc/">
          <img src="${website}/img/iconmonstr-facebook-3.svg" height="150" width="150" alt="iconmonstr-facebook">
          </a>
        </div>
      </div>
    </section>
    <script src="${website}/js/jquery-3.4.1.min.js" crossorigin="anonymous" type="application/javascript"></script>
    <script src="${website}/js/popper.min.js" crossorigin="anonymous" type="application/javascript"></script>
    <!-- <script src="${website}/tooltip.min.js" crossorigin="anonymous" type="application/javascript"></script> -->
    <script src="${website}/js/bootstrap.bundle.min.js" crossorigin="anonymous" type="application/javascript"></script>
    <script src="${website}/js/bootstrap.min.js" crossorigin="anonymous" type="application/javascript"></script>
    <script src="${website}/js/script.js" crossorigin="anonymous" type="application/javascript"></script>
  </body>

  </html>
  `;
    console.log(website);

    return pageStruct
};
