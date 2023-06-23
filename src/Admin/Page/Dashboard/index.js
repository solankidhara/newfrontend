import { Form, Tab, Tabs } from "react-bootstrap";
import overviewContentData from "../../Constance/overviewContentData";
import CustomDatepicker from "../../Components/CustomDatepicker";
import FilledBtn from "../../Components/FilledBtn";
import OutlineBtn from "../../Components/OutlineBtn";
import OverviewContent from "../../Components/OverviewContent/index.js";
import { import_icon, print_icon, share_icon } from "../../Constance/icons";

import classes from "./dashboard.module.css";

const Dashboard = () => {
  document.title = "ABCStock Dashboard";

  return (
    <>
      <div className="mt-3">
        <div className="text-end">
          <div className={classes.dashboard_actions_container}>
            <div className={classes.dashboard_action}>
              <div className="d-inline-block me-3">
                <Form.Select style={{ height: "40px" }}>
                  <option>Select Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <CustomDatepicker className={"me-3"} />
            </div>
            <div className={classes.dashboard_action}>
              <OutlineBtn className="me-3" text={"Share"} icon={share_icon} />
              <OutlineBtn className="me-3" text={"Print"} icon={print_icon} />
              <FilledBtn text={"Export"} icon={import_icon} />
            </div>
          </div>
        </div>
        <Tabs
          defaultActiveKey="overview"
          id="uncontrolled-tab-example"
          className={"mb-3 mt-4 " + classes.dashboardTab}
        >
          <Tab eventKey="overview" title="Overview">
            <OverviewContent data={overviewContentData} />
          </Tab>
          <Tab eventKey="audiences" title="Audiences">
            Audiences
          </Tab>
          <Tab eventKey="demographics" title="Demographics">
            Demographics
          </Tab>
          <Tab eventKey="more" title="More">
            More
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
