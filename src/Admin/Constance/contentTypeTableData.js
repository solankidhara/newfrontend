import TypeOfContentModel from "../Components/BodyTemplate/TypeOfContentEditModel";

export const contentTypeTableField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "label",
    field: "label",
    header: "Content Type",
    sortable: true,
  },
  {
    header: "Edit",
    body: TypeOfContentModel ,
    exportable: true,
  },
];
