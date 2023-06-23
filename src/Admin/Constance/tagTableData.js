import EditTagModel from "../Components/BodyTemplate/EditTagModel";

export const tagTableField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "label",
    field: "label",
    header: "Tag Name",
    sortable: true,
  },
  {
    header: "Edit",
    body: EditTagModel,
    exportable: true,
  },
];
