import React from "react";

// Components
import AuthStatusHeaderBar from "../auth/AuthStatusHeaderBar";
import SiteDescription from "./SiteDescription";
import MainListingSearch from "./MainListingSearch";
import HeroActionButtons from "./HeroActionButtons";
import ListItemContainer from "../listings/ListItemContainer";

const HomePageContainer = () => {
  return (
    <div>
      <AuthStatusHeaderBar />
      <SiteDescription />
      <MainListingSearch />
      <HeroActionButtons />
      <ListItemContainer />
    </div>
  );
};

export default HomePageContainer;
