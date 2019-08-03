import React from "react";

// Components
import AuthStatusHeaderBar from "../auth/AuthStatusHeaderBar";
import SiteDescription from "./SiteDescription";
import MainListingSearch from "./MainListingSearch";
import HeroActionButtons from "./HeroActionButtons";

const HomePageContainer = () => {
  return (
    <div>
      <AuthStatusHeaderBar />
      <SiteDescription />
      <MainListingSearch />
      <HeroActionButtons />
    </div>
  );
};

export default HomePageContainer;
