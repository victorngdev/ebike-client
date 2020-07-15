import React from "react";

import ProductCatalog from "../../components/catalog/catalog.component";
import Elementor from "../../components/elementor/elementor.component";
import Difference from "../../components/difference/difference.component";
import ElementorPopulate from "../../components/elementor-populate/elementor-populate.component";
import AwardLineup from "../../components/award-lineup/award-lineup.component";
import Favourite from "../../components/favourite/favourite.component";
import WayToGetBike from "../../components/way-get-bike/way-get-bike.component";

const HomePage = () => (
    <div className="homepage">
        <ProductCatalog />
        <Elementor />
        <Difference />
        <ElementorPopulate />
        <AwardLineup />
        <Favourite />
        <WayToGetBike />
    </div>
);

export default HomePage;
