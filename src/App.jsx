import React, { useState } from "react";
import SelectForm from "./components/SelectForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";
import Headers from "./components/Headers";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const openDrawerEditable = () => {
    setOpenDrawer(!openDrawer);
  };
  const [products, setProduct] = useState([
    { id: 1, name: "apple", price: 2.4 },
    { id: 2, name: "mango", price: 3 },
    { id: 3, name: "orange", price: 1.5 },
  ]);
  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => {
    setRecord([...records, newRecord]);
  };
  const deleteRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };

  return (
    <div className="max-w-[700px] mx-auto min-h-screen flex flex-col">
      <Headers />
      <SelectForm products={products} addRecord={addRecord} />
      <RecordTable records={records} deleteRecord={deleteRecord} />
      <Footer openDrawerEditable={openDrawerEditable} />
      <ProductDrawer
        addProduct={addProduct}
        products={products}
        openDrawer={openDrawer}
        openDrawerEditable={openDrawerEditable}
      />
    </div>
  );
};

export default App;
