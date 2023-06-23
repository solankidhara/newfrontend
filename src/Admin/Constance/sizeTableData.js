import SizeEditModel from "../Components/BodyTemplate/SizeEditModel";

export const sizeTableField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "label",
    field: "label",
    header: "Size",
    sortable: true,
  },
  {
    header: "Edit",
    body: SizeEditModel,
    exportable: true,
  },
];
