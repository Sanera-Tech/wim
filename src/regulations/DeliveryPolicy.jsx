import React from "react";
import "../styles/regulations/deliveryPolicy.css";

const DeliveryPolicy = () => {
  return (
    <div className="delivery-policy-container">
    <div className="delivery-policy">
      <h1>Política de Envíos</h1>
      <p>
        La presente son los Términos y Condiciones de la empresa WIM NUTRITION S.A.C., 
        con domicilio fiscal en Cal. Breton Nro. 131, San Borja, Lima, Perú, la cual se 
        encuentra en armonía con la normativa vigente sobre protección de Datos Personales 
        (Ley 29733 y Decreto Supremo 003-2013-JUS). Se señalan las finalidades de la 
        información que usted nos otorga, quiénes son los encargados de tratarla, el tiempo 
        de almacenamiento en nuestras Bases de Datos, las medidas de protección y los medios 
        para ejercer sus derechos como titular de los Datos Personales.
      </p>

      <h2>Cobertura</h2>
      <p>
        Se realizarán envíos a los siguientes distritos del departamento de Lima únicamente:
      </p>
      <ul>
        <li>Barranco</li>
        <li>Chorrillos</li>
        <li>Jesús María</li>
        <li>La Molina</li>
        <li>La Victoria</li>
        <li>Lince</li>
        <li>Magdalena</li>
        <li>Miraflores</li>
        <li>Pueblo Libre</li>
        <li>San Borja</li>
        <li>San Isidro</li>
        <li>San Miguel</li>
        <li>Surco</li>
        <li>Surquillo</li>
      </ul>

      <h2>Cronograma de envíos</h2>
      <ul>
        <p>Delivery Gratis por compras mayores a S/90</p>
        <p>
          Recepción de pedidos y despachos:
          </p>
          <ul>
            <li>Atención de pedidos desde Lunes 00:00 hasta Miércoles 23:59 → Se entrega el día Viernes</li>
            <li>Atención de pedidos desde Jueves 00:00 hasta Domingo 23:59 → Se entrega el día Martes</li>
          </ul>
        
      </ul>

      <h2>Importante</h2>
      <ul className="importante">
        <li>Las entregas en los días señalados se harán dentro del horario siguiente: 9:00 hasta las 20:00.</li>
        <li>De no encontrarse el cliente en su domicilio en el rango horario estipulado, WIM NUTRITION se reserva el derecho de reprogramar la hora/fecha de despacho. Un representante de la empresa se pondrá en contacto para definir esta reprogramación.</li>
        <li>WIM NUTRITION se reserva el derecho de cambiar la hora/fecha de entrega por motivos de fuerza mayor. En tal caso, un representante de WIM NUTRITION se pondrá en contacto con el cliente para coordinar una nueva fecha/hora de despacho.</li>
      </ul>

      <p>
        Esperemos que esta política de envíos te brinde claridad sobre nuestros tiempos y condiciones de entrega. Si tienes alguna pregunta adicional, no dudes en contactarnos a <a href="mailto:wimnutritionsoporte@gmail.com">wimnutritionsoporte@gmail.com</a>.
      </p>
    </div>
  </div>
  );
};

export default DeliveryPolicy;