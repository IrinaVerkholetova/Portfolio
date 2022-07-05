import React from "react";
import "./footer.css";
import { FormattedMessage } from "react-intl";
// import GitHubIcon from "@material-ui/icons/GitHub";

export const Footer = () => {
  return (
    <section className="footer">
      &copy; 2022{" "}
      <FormattedMessage id="DEVELOPER" defaultMessage="Irina Verkholetova" />{" "}
      {/* <a target="_blank" href="https://github.com/IrinaVerkholetova">
        <GitHubIcon />
      </a> */}
    </section>
  );
};
