import ListOfContentEditModel from "../Components/BodyTemplate/ListOfContentEditModel";

export const listOfContetField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "name",
    field: "name",
    header: "Content Name",
    sortable: true,
  },
  {
    name: "categoryName",
    field: "categoryName",
    header: "Category",
    sortable: true,
  },
  {
    name: "contentType",
    field: "contentType",
    header: "Content Type",
    sortable: true,
  },
  {
    header: "Edit",
    body: ListOfContentEditModel,
    exportable: true,
  },
];
