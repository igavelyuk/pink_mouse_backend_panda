module.exports = function (website) {
  var pageStruct =`
  <!doctype html>
  <html lang="uk">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Бургер Панда 404 - Білая Церква</title>
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
    <div class="alert alert-danger alert-dismissible first-plane stick-bottom">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Помилка 404</strong> помилка коду АНТІБОТА.
    </div>


    <!-- <button id="alive" type="button" class="btn btn-success fixed-top" data-toggle="tooltip" title="Алита Чат"><i class="fas fa-sms"></i></button>
    <div id="anitachat" class="anita-bar fixed-top">
      <button id="anitaclose" type="button" class="btn btn-success anita-close"><i class="fas fa-times-circle"></i></button>
    </div> -->


    <header>
      <img class="nav-logo fixed-top" src="${website}/img/logo.png" alt="burger-panda-bc" />
      <nav class="navbar navbar-expand-lg navbg-panda-color fixed-top text-right">
        <div class="">
          <p class="nav-tel-size text-right" href="#" tabindex="-1" aria-disabled="true"><i class="fas fa-phone-square-alt"></i> Киев.(067)7554141</p><br>
        </div>
        <button class="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
          <div class="col-md-4">

          </div>
          <div class="navbar-nav">
            <a href="${website}/" class="nav-item nav-link active"><i class="fas fa-hamburger color-black"></i> Повернутися на головну<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link d-lg-none d-xl-none" href="viber://add?number=380969601414"><i class="fab fa-viber color-black"></i> Передзвонимо</a>
            <a class="nav-item nav-link d-lg-none d-xl-none" href="tel:380969601414"><i class="fas fa-id-card-alt color-black"></i> Додайте нас</a>
          </div>
        </div>
      </nav>
    </header>
    <section class="section404">
      <p>404</p>
      <p>Щойно Панда</p>
      <p>заблукала в лісі!</p>
      <p><a href="${website}/" class="nav-item nav-link active"><i class="fas fa-hamburger color-black"></i>Повернутися на головну ТУТ<span class="sr-only">(current)</span></a></p>
      <p><i class="fa fa-arrow-circle-down" aria-hidden="true"></i>або відвідайте наші соціальні мережі.<i class="fa fa-arrow-circle-down" aria-hidden="true"></i></p>
    </section>
    <section class="container section-social">
      <div class="row">
        <div class="col">
          <a href="https://twitter.com/pandasushibc/">
          <img src="${website}/img/iconmonstr-twitter-3.svg" height="150" width="150" alt="twitter icon">
          </a>
        </div>
        <div class="col">
          <a href="https://instagram.com/pandasushibc/">
            <img src="${website}/img/iconmonstr-instagram-1.svg" height="150" width="150" alt="instagram icon"/>
          </a>
        </div>
        <div class="col">
          <a href="https://facebook.com/pandasushibc/">
          <img src="${website}/img/iconmonstr-facebook-3.svg" height="150" width="150" alt="facebook icon">
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
