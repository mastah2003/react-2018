import React from "react";

const LanguageContext = React.createContext();
const LanguageProvider = LanguageContext.Provider;
const LanguageConsumer = LanguageContext.Consumer;

export { LanguageProvider, LanguageConsumer };
