export const userTableField = [
  {
    header: "No",
    body: (_, { rowIndex }) => rowIndex + 1,
  },
  {
    name: "userName",
    field: "userName",
    header: "User Name",
    sortable: true,
  },
  {
    name: "firstName",
    field: "firstName",
    header: "First Name",
    sortable: true,
  },
  {
    name: "lastName",
    field: "lastName",
    header: "Last Name",
    sortable: true,
  },
  {
    name: "email",
    field: "email",
    header: "Email",
    sortable: true,
  },
];
