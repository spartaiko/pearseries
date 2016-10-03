var yo = require('yo-yo');

module.exports = function landing(box) {
	return yo`<div class="container">
    <div class="signup-box">
      <div class="pearseries">
        <img class="pear-logo" src="pear-logo.png" alt="pear-logo" />
        <div class="titulo-logo">
          <h1>pearseries</h1>
          <p>Certificate en tus series favoritas</p>
        </div>
      </div>
      ${box}
    </div>
    <div class="data-box">
        <div class="box box-1">
          <div class="icon">
            <i class="fa fa-certificate fa-3x" aria-hidden="true"></i>
          </div>
          <p><strong>Certificados</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam atque nisi eveniet labore sint voluptatum.</p>
        </div>
        <div class="box box-2">
          <div class="icon">
            <i class="fa fa-file-text fa-3x iconi" aria-hidden="true"></i>
          </div>
          <p><strong>Examenes</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda dicta fugit sapiente alias.</p>
        </div>
        <div class="box box-3">
          <div class="box-admision">
            <img class="flash-adm" src="flash-adm.png" alt="flash-adm" />
            <p class="p1-adm">Prueba</p>
            <p class="p2-adm">tus conocimientos</p>
            <a class="waves-effect waves-light btn btn-adm">admision</a>
          </div>
        </div>
    </div>
  </div>`
}

