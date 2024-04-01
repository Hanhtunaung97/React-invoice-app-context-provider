import React from "react";
import RecordEmpty from "./RecordEmpty";
import Record from "./Record";

const RecordGroup = ({ records,deleteRecord }) => {
  return (
    <>
      {records.length === 0 && <RecordEmpty />}
      {records.map((record, index) => (
        <Record deleteRecord={deleteRecord} key={record.id} index={index} record={record} />
      ))}
    </>
  );
};

export default RecordGroup;
