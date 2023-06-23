import EditFileTypeModel from "../Components/BodyTemplate/EditFileTypeModel";


export const fileTypeTableField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "label",
    field: "label",
    header: "File Name",
    sortable: true,
  },
  {
    header: "Edit",
    body: EditFileTypeModel,
    exportable: true,
  },
];
