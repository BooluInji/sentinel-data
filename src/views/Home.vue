<template>
  <main id="Home-page">
    <h1>My Files</h1>
    <br />

    <div id="app">
      <ejs-grid :dataSource="data" :allowSorting="true">
        <e-columns>
          <e-column
            field="OrderID"
            headerText="Order ID"
            textAlign="Right"
            width="90"
          ></e-column>
          <e-column
            field="CustomerID"
            headerText="Customer ID"
            width="120"
          ></e-column>
          <e-column
            field="Freight"
            headerText="Freight"
            textAlign="Right"
            format="C2"
            width="90"
          ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </main>
</template>

<script>
// Registering Syncfusion license key
import { registerLicense } from "@syncfusion/ej2-base";
import { GridPlugin, Page, Sort } from "@syncfusion/ej2-vue-grids";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cWWNCf1JpRGdGfV5yd0VPal5XTnNdUj0eQnxTdEZiWX5bcnVWRmVZWU1+Xg=="
);
import { GridComponent } from "@syncfusion/ej2-vue-grids";

export default {
  components: {
    "ejs-grid": GridComponent,
  },
  data() {
    return {
      data: [
        { OrderID: 10248, CustomerID: "VINET", Freight: 32.38 },
        { OrderID: 10249, CustomerID: "TOMSP", Freight: 11.61 },
        { OrderID: 10250, CustomerID: "HANAR", Freight: 65.83 },
        { OrderID: 10251, CustomerID: "VICTE", Freight: 41.34 },
        { OrderID: 10252, CustomerID: "SUPRD", Freight: 51.3 },
        { OrderID: 10253, CustomerID: "HANAR", Freight: 58.17 },
        { OrderID: 10254, CustomerID: "CHOPS", Freight: 22.98 },
        { OrderID: 10255, CustomerID: "RICSU", Freight: 148.33 },
        { OrderID: 10256, CustomerID: "WELLI", Freight: 13.97 },
      ],
    };
  },
  provide: {
    grid: [Sort],
  },
};
</script>

<style lang="scss" scoped>
@import "/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

h1,
p {
  color: var(--light);
}
</style>
