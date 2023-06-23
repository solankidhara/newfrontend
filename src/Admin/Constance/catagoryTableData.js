import CategoryEditModel from "../Components/BodyTemplate/CategoryEditModel";

export const catagoryTableFields = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "name",
    field: "name",
    header: "Category Name",
    sortable: true,
  },
  {
    name: "description",
    field: "description",
    header: "Description",
    sortable: true,
  },
  {
    header: "Edit",
    body: CategoryEditModel,
    exportable: true,
  },
];
