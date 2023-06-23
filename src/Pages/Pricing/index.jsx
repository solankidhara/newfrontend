import pricing from "../../Components/constance/pricings";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import Subscription from "../../Components/common/Subscription/Subscription";
import fLinks from "../../Components/constance/footerList";
import social from "../../Components/constance/socialMedia";

const Pricing = () => {
  document.title = "Royalty Free Videos, Images Prices and Plans";
  return (
    <div className="g-0 container-fluid">
      <Subscription packages={pricing} />
      <div style={{ marginTop: "14vh" }}>
        <FooterBar lists={fLinks} social={social} />
      </div>
    </div>
  );
};

export default Pricing;
