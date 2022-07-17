import React, { FC } from "react";
import "./portfolio-page.css";

import { WelcomeComponent } from "src/components/sections/welcome/welcome.component";
import { AboutMeComponent } from "src/components/sections/about-me/about-me.component";
import { SkillsComponent } from "src/components/sections/skills/skills.component";
import { BannerComponent } from "src/components/sections/banner/banner.component";
import { ResumeComponent } from "src/components/sections/resume/resume.component";
import { ContactComponent } from "src/components/sections/contact/contact.component";
import { Footer } from "antd/lib/layout/layout";

interface PortfolioPageProps {}

export const PortfolioPageComponent: FC<PortfolioPageProps> = ({}) => {
  return (
    <>
      <WelcomeComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <BannerComponent />
      <ResumeComponent />
      <ContactComponent />
      <Footer />
    </>
  );
};
