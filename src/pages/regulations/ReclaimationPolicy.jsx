import React, { useState } from "react";
import "../../styles/regulations/reclaimationPolicy.css";
import axios from "axios";
import { objectToFormData } from "../../utils/objToForm";

const countryCodes = [
  { code: '+61', name: 'Australia' },
  { code: '+43', name: 'Austria' },
  { code: '+32', name: 'Belgium' },
  { code: '+55', name: 'Brazil' },
  { code: '+1-CAN', name: 'Canada' }, 
  { code: '+1-US', name: 'United States' },  
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+420', name: 'Czech Republic' },
  { code: '+45', name: 'Denmark' },
  { code: '+20', name: 'Egypt' },
  { code: '+358', name: 'Finland' },
  { code: '+33', name: 'France' },
  { code: '+49', name: 'Germany' },
  { code: '+30', name: 'Greece' },
  { code: '+852', name: 'Hong Kong' },
  { code: '+36', name: 'Hungary' },
  { code: '+354', name: 'Iceland' },
  { code: '+91', name: 'India' },
  { code: '+353', name: 'Ireland' },
  { code: '+972', name: 'Israel' },
  { code: '+39', name: 'Italy' },
  { code: '+81', name: 'Japan' },
  { code: '+52', name: 'Mexico' },
  { code: '+31', name: 'Netherlands' },
  { code: '+64', name: 'New Zealand' },
  { code: '+47', name: 'Norway' },
  { code: '+51', name: 'Peru' },
  { code: '+63', name: 'Philippines' },
  { code: '+48', name: 'Poland' },
  { code: '+351', name: 'Portugal' },
  { code: '+7', name: 'Russia' },
  { code: '+65', name: 'Singapore' },
  { code: '+27', name: 'South Africa' },
  { code: '+82', name: 'South Korea' },
  { code: '+34', name: 'Spain' },
  { code: '+46', name: 'Sweden' },
  { code: '+41', name: 'Switzerland' },
  { code: '+66', name: 'Thailand' },
  { code: '+90', name: 'Turkey' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+58', name: 'Venezuela' },
  { code: '+84', name: 'Vietnam' },
  { code: '+95', name: 'Myanmar' },
];

const ReclamationPolicy = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const endpoint = "https://kvmw4umflsmijxt34bfkyxevba0emwju.lambda-url.eu-north-1.on.aws/";
  const prodURI = "https://wim-backend.onrender.com/";
  const devURI = "http://localhost:3500/";
  const URI = prodURI;
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      name: name,
      lastName: lastName,
      address:address,
      documentType:documentType,
      documentNumber: documentNumber,
      email: email,
      phoneNumber: phoneNumber,
      countryCode: countryCode,
      claimType: claimType,
      claimDescription: claimDescription,
      relatedTo: relatedTo,
      claimAmount: claimAmount,
      claimDate: claimDate,
    };
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const result = await response.json();
      const newOrderFormData = await objectToFormData(formData);
      console.log(newOrderFormData)
      const axiosResponse = await axios.post(`${URI}claim/`, newOrderFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (axiosResponse.status !== 200 && axiosResponse.status !== 201) {
        throw new Error(`Error: ${axiosResponse.status} ${axiosResponse.statusText}`);
      }
  
      console.log('Form submission result:', result);
  
      // Clear form fields
      setName("");
      setLastName("");
      setAddress("");
      setDocumentType("");
      setDocumentNumber("");
      setEmail("");
      setPhoneNumber("");
      setCountryCode("+51");
      setClaimType("");
      setClaimDescription("");
      setRelatedTo("");
      setClaimAmount("");
      setClaimDate("");
  
      // Set success message
      setSuccessMessage("Reclamation has been filed successfully!");
    } catch (error) {
      console.error('Form submission error:', error);
  
      // Handle error, e.g., show an error message to the user
      setErrorMessage("There was an error submitting the form. Please try again.");
    }
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
            {claimType !== "Queja" && (
            <div className="form-group">
              <label htmlFor="claimAmount">Monto a reclamar</label>
              <input
                type="text"
                className="form-control"
                id="claimAmount"
                value={claimAmount}
                onChange={(e) => setClaimAmount(e.target.value)}
              />
            </div>
            )}
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

          {/* Display success message */}
          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReclamationPolicy;
