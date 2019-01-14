import React from "react";
import { LanguageConsumer } from "../LanguageContext/LanguageContext";

const withLanguage = WrappedComponent => {
  return props => (
    <LanguageConsumer>
      {value => <WrappedComponent {...props} language={value} />}
    </LanguageConsumer>
  );
};

export default withLanguage;
