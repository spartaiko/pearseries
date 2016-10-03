var yo = require('yo-yo');
var landing = require('../landing')

var signinForm = yo`<form class="signup-form">
      <div class="section">
        <a class="btn btn-fb"><i class="fa fa-facebook-official hide-on-small-only" aria-hidden="true"></i> Facebook</a>
      </div>
      <div class="divider"></div>
      <div class="section">
        <input type="email" name="email" placeholder="Correo electrónico" />
        <input type="text" name="name" placeholder="Nombre completo" />
        <input type="text" name="username" placeholder="Nombre de usuario" />
        <input type="password" name="password" placeholder="Contraseña" />
        <button class="btn waves-effect waves-light btn-signup btn-reg-med" type="submit">Regístrate</button>
      </div>
      <div class="row">
        <div class="login-box">
          ¿Tienes una cuenta? <a href="/signup">Entrar</a>
        </div>
      </div>
    </form>`;

module.exports = landing(signinForm);