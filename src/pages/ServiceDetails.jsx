import React from "react";
import Pricing from "../components/Pricing";
import PageHeader from "../components/PageHeader";


const ServiceDetails = () => {
  return (<>
    <PageHeader title="Service Details" />
    <Pricing
      title="Installation"
      description="*includes paid"
      price="1199"
    />
  </>)
};

export default ServiceDetails;
