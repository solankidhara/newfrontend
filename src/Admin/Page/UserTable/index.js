import axios from "axios";
import { useEffect, useState } from "react";
import CustomTable from "../../Components/CustomTable";
import { userTableField } from "../../Constance/userTableData";

const UserTable = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("admin/users");
      setUserDetails(data);
    })();
  }, []);

  return (
    <>
      <CustomTable
        columns={userTableField}
        rows={userDetails}
        dataKey={"_id"}
        size={"large"}
        paginator={true}
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rowsLimit={10}
        rowsPerPageOptions={[10, 50, 100]}
      />
    </>
  );
};

export default UserTable;
