import React, { useContext } from "react";
import RecordEmpty from "./RecordEmpty";
import Record from "./Record";
import { generalContext } from "../contexts/GeneralContext";

const RecordGroup = () => {
  const{records}=useContext(generalContext)
  return (
    <>
      {records.length === 0 && <RecordEmpty />}
      {records.map((record, index) => (
        <Record  key={record.id} index={index} record={record} />
      ))}
    </>
  );
};

export default RecordGroup;
