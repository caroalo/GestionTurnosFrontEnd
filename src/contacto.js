import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    
 
  <body>
    <h1 class="farm_h1"> Contacto </h1>

    <h3 class="farm_h3">Teléfonos</h3>
    <div class="textbox_centro">
    <p class="farm_p"> Teléfono: +54 3571 471660</p>
    <p class="farm_p"> WhatsApp: +54 3571 614607</p>
  </div>
    
    <h3 class="farm_h3">Ubicación</h3>
    <div class="container_imagen_sombra">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.3329554051193!2d-64.25801069050338!3d-32.19525777380329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd63e320990b59%3A0xefe2dee33bc7b47a!2sFarmacia%20Mengo%20de%20Aloisio!5e0!3m2!1ses-419!2sar!4v1727053980467!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    
      </div>
      <br>
      

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
  )


export default Navbar;
