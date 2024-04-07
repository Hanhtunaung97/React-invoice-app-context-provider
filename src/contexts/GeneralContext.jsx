import React, { createContext, useState } from "react";

export const generalContext = createContext();
const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [products, setProduct] = useState([
    { id: 1, name: "apple", price: 2.4 },
    { id: 2, name: "mango", price: 3.5 },
    { id: 3, name: "orange", price: 1.5 },
  ]);
  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => {
    const isExistedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );
    if (isExistedRecord) {
      return updateRecord(isExistedRecord.id, newRecord.quantity);
    }
    return setRecord([...records, newRecord]);
  };
  const deleteRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };
  const updateRecord = (id, addQuantity) => {
    setRecord(
      records.map((record) => {
        if (record.id === id) {
          const newQuantity = record.quantity + addQuantity;
          const newCost = record.price * newQuantity;
          return {
            ...record,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return record;
      })
    );
  };
  return (
    <generalContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addProduct,
        records,
        addRecord,
        deleteRecord,
        updateRecord,
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export default GeneralContextProvider;
