import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="acerca_de.html">Acerca de nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
          </li>
          <li class="nav-item"></li>
            <a class="nav-link" href="turnos.html">Gestión de Turnos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="atencion_farmaceutica.html">Atención Farmacéutica</a></li>
              <li><a class="dropdown-item" href="obras_sociales.html">Atención de Obras Sociales</a></li>
              <li><a class="dropdown-item" href="encargo.html">Encargos</a></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  )


export default Navbar;
