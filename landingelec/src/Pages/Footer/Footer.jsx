import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='container-footer'>
      <div className="footer-content">
        {/* Section principale */}
        <div className="footer-section footer-main">
          <h2 className="footer-logo">⚡ Électricien Julien</h2>
          <p className="footer-tagline">Votre expert en électricité depuis 2010</p>
          <p className="footer-description">
            Service professionnel et fiable pour tous vos besoins électriques.
            Intervention rapide 24h/24 et 7j/7.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <span className="footer-icon">📞</span>
              <a href="tel:0661315907">06 61 31 59 07</a>
            </li>
            <li className="footer-item">
              <span className="footer-icon">📧</span>
              <a href="mailto:contact@electricien-julien.fr">contact@electricien-julien.fr</a>
            </li>
            <li className="footer-item">
              <span className="footer-icon">📍</span>
              <span>Paris et Île-de-France</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-title">Nos Services</h3>
          <ul className="footer-list">
            <li className="footer-item">Installation électrique</li>
            <li className="footer-item">Dépannage d'urgence</li>
            <li className="footer-item">Mise aux normes</li>
            <li className="footer-item">Rénovation électrique</li>
          </ul>
        </div>

        {/* Horaires */}
        <div className="footer-section">
          <h3 className="footer-title">Disponibilité</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <span className="footer-badge">24/7</span>
              Urgences
            </li>
            <li className="footer-item">Lun - Ven: 8h - 19h</li>
            <li className="footer-item">Sam: 9h - 17h</li>
            <li className="footer-item">Dim: Sur rendez-vous</li>
          </ul>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2024 Électricien Julien. Tous droits réservés.
          </p>
          <div className="footer-badges">
            <span className="quality-badge">✓ Certifié</span>
            <span className="quality-badge">✓ Assuré</span>
            <span className="quality-badge">✓ Garantie</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
