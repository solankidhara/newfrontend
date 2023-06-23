import PromoCard from "../../Components/Cards/PromoCard";
import fLinks from "../../Components/constance/footerList";
import links from "../../Components/constance/navLinks";
import royaltyFreeImage from "../../Components/constance/royaltyFreeImage";
import social from "../../Components/constance/socialMedia";
import CategoryBrowser from "../../Components/common/CategoryBrowser/CategoryBrowser";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import PlanPrompt from "../../Components/common/Plans/PlansPrompt";
import PromoContent from "../../Components/common/PromoContent/PromoContent";
import SearchMenu from "../../Components/common/SearchSec/Search";

const Page3D = () => {
  return (
    <div className="g-0 container-fluid">
      <SearchMenu
        bs-class-controls="mt-5"
        name="3d"
        placeholder="search for 3D"
        selected="3d"
        path="./images/3dBGCrop.png"
        alt="3D-page background"
        options={links}
      />
      <PromoCard>
        <PromoContent text="OBJ file for all your 3D Model Needs" />
      </PromoCard>
      <div style={{ margin: "14vh 0" }}>
        <CategoryBrowser categories={royaltyFreeImage}>Browse trending video category</CategoryBrowser>
      </div>
      <PlanPrompt text="Check all pricing and plans" btnLabel="Check Now" />
      <FooterBar lists={fLinks} social={social} />
    </div>
  );
};

export default Page3D;
