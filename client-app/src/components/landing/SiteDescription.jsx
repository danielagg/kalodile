import React from "react";
import LocalizedStrings from "react-localization";

const SiteDescription = () => {
  let strings = new LocalizedStrings({
    en: {
      heading: "Got a gig but no gear? Want to try it out before buying?",
      descriptionLine1:
        "With Kalodile, you can rent any equipment, or offer your own.",
      descriptionLine2: "You specify when and for how much."
    },
    hu: {
      heading:
        "Este koncert de a delay megdöglött? Ki akarsz egy pedált próbálni, mielőtt megveszed?",
      descriptionLine1:
        "A Kalodile-n keresztül kölcsönözhetsz más zenészektől, vagy te is feltöltheted kölcsönzésre cuccaid.",
      descriptionLine2: "Te mondod meg mikor, mennyiért."
    }
  });

  // todo, obviously
  strings.setLanguage("hu");

  return (
    <div className="mt-4 p-6 text-center">
      <h1 className="font-display font-bold text-4xl">Kalodile</h1>
      <h2 className="mt-6 font-display text-xl">{strings.heading}</h2>
      <p className="mt-4 font-display">{strings.descriptionLine1}</p>
      <p className="font-display">{strings.descriptionLine2}</p>
    </div>
  );
};

export default SiteDescription;
