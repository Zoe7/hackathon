import React from "react";

const Badges = () => {
  return (    
    <>
     {
       badges.map((data, id) => {
       return (
         <div className="container" ><img src={data.image} className="badgeImage"></img><strong>{data.name}</strong><br/><span className="smaller">{data.description}</span></div>
       );
     })};
    </>);
};

export default Badges;

const badges = [
  {
    name: "Beginner",
    image: "badge_blue.png"
  },
  {
    name: "Intermediate",
    image: "badge_copper.png"
  },
  {
    name: "Advanced",
    image: "badge_silver.png"
  },
  {
    name: "Expert",
    image: "badge_gold.png"
  },
];

const achievements = [
  {
    description: "Company setup data filled"
  },
  {
    description: "Entered business ID on supplier"
  },
  {
    description: "Entered email address on supplier"
  },
  {
    description: "Entered IBAN on supplier"
  },
  {
    description: "Entered VATNO on supplier"
  },
  {
    description: "50% suppliers have business ID"
  },
  {
    description: "80% match on imported invoice"
  },
  {
    description: "Send an invoice through AutoInvoice"
  },
  {
    description: "Import invoice from AutoInvoice"
  },
  {
    description: "VATNO recently validated for customer"
  }
];