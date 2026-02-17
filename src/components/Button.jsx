import React from 'react'
import "./Button.css"


const Button = ({ buttonName, onclick, classNameButton, iconButton, phoneNumber }) => {
  const handleClick = (e) => {
    if (phoneNumber) {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const cleanNumber = phoneNumber.replace(/\s/g, '');

      if (isMobile) {
        // Direct call on mobile
        window.location.href = `tel:${cleanNumber}`;
      } else {
        // WhatsApp on desktop
        const whatsappNumber = cleanNumber.startsWith('0') ? '33' + cleanNumber.substring(1) : cleanNumber;
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
      }
    }

    if (onclick) {
      onclick(e);
    }
  };

  return (
    <button className={`button ${classNameButton}`} onClick={handleClick}>
      {iconButton} {buttonName}
    </button>
  );
};

export default Button
