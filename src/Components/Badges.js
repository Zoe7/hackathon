import React from "react";

const Badges = () => {
  return (
    <div className="container badges">
      {achievements.map(data => {
        return <Achievement data={data} />;
      })}
    </div>
  );
};

const Achievement = ({ data }) => {
  const badge = badges[Math.floor(Math.random() * badges.length)];

  return (
    <div class="achievement">
      <img src={badge} className="badgeImage" />
      <span class="badge-description">{data}</span>
    </div>
  );
};

export default Badges;

const badges = [
  "badge_blue.png",
  "badge_copper.png",
  "badge_silver.png",
  "badge_gold.png"
];

const achievements = [
  "Company setup data filled",
  "Entered business ID on supplier",
  "Entered email address on supplier",
  "Entered IBAN on supplier",
  "Entered VATNO on supplier",
  "50% suppliers have business ID",
  "80% match on imported invoice",
  "Send an invoice through AutoInvoice",
  "Import invoice from AutoInvoice",
  "VATNO recently validated for customer"
];
