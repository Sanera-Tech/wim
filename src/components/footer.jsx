import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="additional-footer-info">
        <span>
          <img src="/logo.png" altenative="logo-image"></img>
          <h4 className="address">Lima, Peru</h4>
          <div>
            <a
              href="https://www.instagram.com/wimnutrition" 
              target="_blank"
              style={{ marginTop: '10px', display: 'inline-block' }}
            ><svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#f6f3dd" stroke-width="1.5"></rect>
              <circle cx="18" cy="6" r="1" fill="#f6f3dd"></circle>
              <circle cx="12" cy="12" r="5" stroke="#f6f3dd" stroke-width="1.5"></circle>
            </svg></a>
          </div>
        </span>
        <span>
          <h4 className="about-title">Quienes somos & Ayuda</h4>
          <div>
            <a href="/nuestra-historia">Nuestra Historia</a>
          </div>
          <div>
            <a href="/contáctanos"> Soporte</a>
          </div>
          <a href="/libro-de-reclamaciones"> 
            <img src="./libro-de-reclamaciones.png" alt="Reclaimation Policy" style={{ width: '100px', height: 'auto'}}></img>
          </a>
        </span>
      </div>
      <hr className="line-break"></hr>
      <div className="additional-footer-info">
        <span>
          <a href="/política-de-privacidad">Política de Privacidad</a> |
          <a href="/política-de-cambios-y-devoluciones"> ⁠Política de Cambios y/o Devoluciones</a> |
          <a href="/política-de-envíos"> Política de Envíos</a> |
          <a href="/términos-y-condiciones"> Términos y Condiciones</a>
          {/**this is for the reclaimation policy which is a bit different: <a href="/libro-de-reclamaciones"> Reclaimation Policy</a> */}
        </span>
        <span classname="copyright">
          Copyright © {new Date().getFullYear()} WIM | Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
