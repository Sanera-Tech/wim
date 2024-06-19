import React, { useState } from "react";
import "../styles/regulations/reclaimationPolicy.css";

const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+51', name: 'Peru' },
  { code: '+91', name: 'India' },
  // Add more country codes as needed
];

const ReclamationPolicy = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+51");
  const [claimType, setClaimType] = useState("");
  const [claimDescription, setClaimDescription] = useState("");
  const [relatedTo, setRelatedTo] = useState("");
  const [claimAmount, setClaimAmount] = useState("");
  const [claimDate, setClaimDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", {
      name,
      lastName,
      address,
      documentType,
      documentNumber,
      email,
      phoneNumber: `${countryCode} ${phoneNumber}`,
      claimType,
      claimDescription,
      relatedTo,
      claimAmount,
      claimDate,
    });
  };

  return (
    <div className="reclamation-form-container-wrapper">
      <div className="reclamation-form-container">
        <h1>LIBRO DE RECLAMACIONES</h1>
        <p>WIM NUTRITION S.A.C.</p>
        <p>RUC: 20607520519</p>
        <p>Cal. Breton Nro. 131, San Borja, Lima, Peru</p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellidos:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Opciones de documento:</label>
            <div className="form-row">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="documentTypeDNI"
                  value="DNI"
                  checked={documentType === "DNI"}
                  onChange={(e) => setDocumentType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="documentTypeDNI">
                  DNI
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="documentTypeCE"
                  value="CE"
                  checked={documentType === "CE"}
                  onChange={(e) => setDocumentType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="documentTypeCE">
                  CE
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="documentTypeRUC"
                  value="RUC"
                  checked={documentType === "RUC"}
                  onChange={(e) => setDocumentType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="documentTypeRUC">
                  RUC
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="documentNumber">Número Documento:</label>
              <input
                type="text"
                className="form-control"
                id="documentNumber"
                value={documentNumber}
                onChange={(e) => setDocumentNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Celular:</label>
            <div className="input-group">
              <div className="input-group-prepend select-wrapper">
                <select
                  className="form-control"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                className="form-control-phone"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Motivo</label>
              <div className="form-row">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="claimTypeReclamo"
                    value="Reclamo"
                    checked={claimType === "Reclamo"}
                    onChange={(e) => setClaimType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="claimTypeReclamo">
                    Reclamo*
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="claimTypeQueja"
                    value="Queja"
                    checked={claimType === "Queja"}
                    onChange={(e) => setClaimType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="claimTypeQueja">
                    Queja**
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Relacionado a</label>
              <div className="form-row">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="relatedToProduct"
                    value="Producto"
                    checked={relatedTo === "Producto"}
                    onChange={(e) => setRelatedTo(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="relatedToProduct">
                    Producto
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="relatedToServicio"
                    value="Servicio"
                    checked={relatedTo === "Servicio"}
                    onChange={(e) => setRelatedTo(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="relatedToServicio">
                    Servicio
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="claimDate">Fecha de Reclamo/Queja</label>
              <input
                type="text"
                className="form-control"
                id="claimDate"
                value={claimDate}
                onChange={(e) => setClaimDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="claimAmount">Monto a reclamar</label>
              <input
                type="text"
                className="form-control"
                id="claimAmount"
                value={claimAmount}
                onChange={(e) => setClaimAmount(e.target.value)}
              />
              {claimType === "Queja" && (
                <small className="form-text text-muted">
                  If Motivo: Queja (N.A.)
                </small>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="claimDescription">
              Detalle del Reclamo/Queja según indica el cliente
            </label>
            <textarea
              className="form-control"
              id="claimDescription"
              rows="3"
              value={claimDescription}
              onChange={(e) => setClaimDescription(e.target.value)}
            />
          </div>

          <small className="form-text text-muted">
            *Reclamo: Disconformidad relacionada a los productos y/o servicios.
          </small>
          <small className="form-text text-muted">
            **Queja: Disconformidad no relacionada a los productos y/o servicios o, malestar o descontento a la atención al público
          </small>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReclamationPolicy;
