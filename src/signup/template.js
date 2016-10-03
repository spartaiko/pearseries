var yo = require('yo-yo');
var landing = require('../landing')

var signupForm = yo`<form class="signup-form">
  <div class="section">
    <a class="btn btn-fb"><i class="fa fa-facebook-official hide-on-small-only" aria-hidden="true"></i> Facebook</a>
  </div>
  <div class="divider"></div>
  <div class="section">
    <input type="text" name="username" placeholder="Nombre de usuario" />
    <input type="password" name="password" placeholder="Contraseña" />
    <button class="btn waves-effect waves-light btn-signup btn-reg-med" type="submit">Regístrate</button>
  </div>
  <div class="row">
    <div class="login-box">
      ¿No tienes una cuenta? <a href="/signin">Regístrate</a>
    </div>
  </div>
</form>`;

module.exports = landing(signupForm);
