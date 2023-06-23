import LicenseEditModel from "../Components/BodyTemplate/LicenseEditModel";

export const licenseTableField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "label",
    field: "label",
    header: "License Name",
    sortable: true,
  },
  {
    header: "Edit",
    body: LicenseEditModel,
    exportable: true,
  },
];
