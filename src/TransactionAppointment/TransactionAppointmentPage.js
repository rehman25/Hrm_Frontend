import React, { useState } from "react";
import Header from "../components/Includes/Header";
import TransactionAppointmentCom from "../TransactionAppointment/transactionAppointmentCom";

const TransactionAppointmentPage = (props) => {
 

  return (
    <>
      <div>
        <Header/>
      </div>
      <div className="mt-5">
        <TransactionAppointmentCom />
      </div>
    </>
  );
};

export default TransactionAppointmentPage;
