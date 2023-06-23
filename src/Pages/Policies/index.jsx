import { Container } from "react-bootstrap";
import fLinks from "../../Components/constance/footerList";
import links from "../../Components/constance/navLinks";
import social from "../../Components/constance/socialMedia";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import classes from "./index.module.css";

const Policies = () => {
  return (
    <div className="g-0 container-fluid">
      <Container className={"d-flex " + classes.head}>
        <div className={classes.title}>Terms of Use</div>
      </Container>
      <Container className={"d-flex justify-content-center " + classes["list-container"]}>
        <ol className={classes.list}>
          <li>Text holder text holder text holder text holder text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder</li>
          <li>text holder text holder text holder text holder</li>
        </ol>
      </Container>
      <Container className={classes.details}>
        Lorem ipsum dolor sit amet consectetur. Maecenas blandit eget nisi in sed in nisl magna. Duis consectetur sit aliquam vel tellus
        neque. Ut porttitor fermentum sagittis adipiscing etiam aliquet vitae elit. In purus purus at vulputate id mi nulla etiam. Nam donec
        neque ut mi dignissim elementum. Turpis quis ullamcorper magna viverra. Pellentesque bibendum sagittis pellentesque donec ac. Leo
        iaculis aliquam nisi lectus auctor eget augue. Leo vulputate id magna arcu posuere ut tempus. Ultricies gravida dui turpis
        consectetur bibendum. Augue tortor cursus risus aliquam sed. Duis tristique vestibulum duis ultrices. Congue morbi ac faucibus
        mollis curabitur lectus magna dui tempor. Tortor pretium ridiculus non sit lectus dolor vitae. Urna quis tortor ullamcorper vitae
        tincidunt aliquam praesent. Lobortis at odio et arcu nibh aliquet habitasse est gravida. Nulla semper aliquet laoreet sagittis
        gravida lacus vestibulum fringilla tristique. Nunc nunc ut turpis sed in viverra. Netus aliquam semper tristique senectus nibh
        scelerisque ullamcorper egestas adipiscing. Nec bibendum dui eu lorem. Potenti tristique eu interdum eu egestas arcu diam. Elementum
        mattis sit eu viverra est ipsum ultrices. Velit molestie neque venenatis vulputate iaculis enim ipsum suspendisse auctor. Nullam
        lectus neque elit a justo purus in arcu duis. Velit quisque odio semper morbi massa. Eu augue ipsum sed ut ut pellentesque. Platea
        vitae velit nunc elementum vulputate. Est elit vitae nulla amet. Laoreet eget penatibus ac viverra vitae in. Mauris ut gravida
        commodo bibendum mauris amet aliquam euismod posuere. Varius nibh amet est velit euismod. Nunc lacus vitae euismod fermentum auctor
        id ut bibendum. Metus lectus fermentum gravida molestie. Tincidunt eu commodo tincidunt lacus ac leo. Dignissim nisi purus sed duis.
        Mauris diam fermentum at in auctor lobortis aenean. Duis ullamcorper at aliquet facilisis lectus tempus senectus. Ornare mi id
        posuere amet amet. Consectetur feugiat leo blandit pellentesque fermentum vestibulum imperdiet tincidunt. Lorem convallis viverra
        urna vitae eu. Tincidunt tristique cursus cras viverra ultricies eleifend. Aliquam blandit enim pellentesque ut tristique et
        habitasse. Malesuada tincidunt eget vitae venenatis faucibus et dapibus. Tellus et non tincidunt lacus vestibulum. Facilisis aliquam
        ornare pharetra quisque duis sem ut turpis. Magna venenatis phasellus mus elit bibendum nibh. Blandit id eu in sagittis ut proin. Eu
        eget id turpis ipsum. Diam ut lacus netus auctor ac lacus in urna.
      </Container>
      <FooterBar lists={fLinks} social={social} />
    </div>
  );
};

export default Policies;
