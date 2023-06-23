import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const MainTable = (props) => {
  const {
    columns,
    rows,
    dataKey,
    globalFilterFields,
    header,
    size,
    filters,
    filterDisplay,
    paginator,
    paginatorTemplate,
    currentPageReportTemplate,
    rowsPerPageOptions,
    rowsLimit,
  } = props;

  return (
    <Card>
      <DataTable
        dataKey={dataKey}
        value={rows}
        globalFilterFields={globalFilterFields}
        header={header}
        size={size}
        filters={filters}
        filterDisplay={filterDisplay}
        paginator={paginator}
        paginatorTemplate={paginatorTemplate}
        currentPageReportTemplate={currentPageReportTemplate}
        rows={rowsLimit}
        rowsPerPageOptions={rowsPerPageOptions}
      >
        {columns.map((product) => (
          <Column
            field={product.field}
            header={product.header}
            sortable={product.sortable}
            key={product.name}
            filter={product.filter}
            body={product.body}
            exportable={product.exportable}
          ></Column>
        ))}
      </DataTable>
    </Card>
  );
};

export default MainTable;
