import React, { useState } from "react";
import Navbar from "./navbar";
import "./servicios.css"; 

const Servicios = () => {
  // Estado para controlar la visibilidad de cada sección
  const [activeSection, setActiveSection] = useState(null);

  // Función para manejar el cambio de sección activa
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div>
      <Navbar />
      
      <div className="text-box"> 
        <h1>Servicios de Mantenimiento Doméstico</h1>
        <p>
          Nuestro mayor interés: Cuidar y mantener tu hogar en las mejores condiciones...
        </p>

        {/* Sección 1 */}
        <h2 onClick={() => toggleSection(1)} className="section-title">
          1. Limpieza General del Hogar <strong>(Ver más)</strong>
        </h2>
        {activeSection === 1 && (
          <p className="section-content">
            Ofrecemos un servicio de limpieza profunda, ideal para mantener cada rincón de tu hogar impecable...
          </p>
        )}

        {/* Sección 2 */}
        <h2 onClick={() => toggleSection(2)} className="section-title">
          2. Mantenimiento de Cocinas y Baños
        </h2>
        {activeSection === 2 && (
          <p className="section-content">
            La cocina y los baños son espacios que requieren cuidados especiales debido a su constante uso...
          </p>
        )}

        {/* Sección 3 */}
        <h2 onClick={() => toggleSection(3)} className="section-title">
          3. Organización de Espacios
        </h2>
        {activeSection === 3 && (
          <p className="section-content">
            ¿Te gustaría maximizar el espacio en tu hogar y mantener todo en orden? Ofrecemos un servicio de organización...
          </p>
        )}

        {/* Sección 4 */}
        <h2 onClick={() => toggleSection(4)} className="section-title">
          4. Mantenimiento de Jardines y Exteriores
        </h2>
        {activeSection === 4 && (
          <p className="section-content">
            Además del interior de tu hogar, también cuidamos tus áreas exteriores...
          </p>
        )}

        {/* Sección 5 */}
        <h2 onClick={() => toggleSection(5)} className="section-title">
          5. Limpieza Post-Obra
        </h2>
        {activeSection === 5 && (
          <p className="section-content">
            Si recientemente has realizado reformas o renovaciones en tu hogar, sabemos que la limpieza post-obra puede ser un reto...
          </p>
        )}

        {/* Sección 6 */}
        <h2 onClick={() => toggleSection(6)} className="section-title">
          6. Servicio de Lavado y Planchado de Ropa
        </h2>
        {activeSection === 6 && (
          <p className="section-content">
            Para que tengas más tiempo para disfrutar de las cosas que amas, ofrecemos un servicio de lavandería y planchado...
          </p>
        )}
      </div>
    </div>
  );
};

export default Servicios;
