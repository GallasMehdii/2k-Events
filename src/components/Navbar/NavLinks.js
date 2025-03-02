import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next'; // Import translation hook

const NavLinks = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#about">
        {t("About")}
      </HashLink>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#services">
        {t("Services")}
      </HashLink>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" to="/">
        {t("Portfolio")}
      </HashLink>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" to="/contact#contact">
        {t("Contact Us")}
      </HashLink>

    </>
  )
}

export default NavLinks;
