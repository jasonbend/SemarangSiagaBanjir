import React, { useState } from "react";
import "./DonationPage.css";

function DonationPage() {
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const receiptData = {
      amount,
      bank,
      accountNumber,
      date: new Date().toLocaleString(),
    };
    setReceipt(receiptData);
  };

  return (
    <div className="donation-page">
      <h2>Donation Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Jumlah Donasi</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bank</label>
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            required
          >
            <option value="">Pilih Bank</option>
            <option value="BRI">BRI</option>
            <option value="BCA">BCA</option>
            <option value="BNI">BNI</option>
            <option value="Mandiri">Mandiri</option>
            <option value="Bank Jateng">Bank Jateng</option>
            <option value="BTN">BTN</option>
            <option value="BSI">BSI</option>
            <option value="CIMB Niaga">CIMB Niaga</option>
          </select>
        </div>
        <div className="form-group">
          <label>Nomor Rekening</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kirim Donasi</button>
      </form>
      {receipt && (
        <div className="receipt">
          <h3>Transfer Receipt</h3>
          <p>Amount: {receipt.amount}</p>
          <p>Bank: {receipt.bank}</p>
          <p>Account Number: {receipt.accountNumber}</p>
          <p>Date: {receipt.date}</p>
        </div>
      )}
    </div>
  );
}

export default DonationPage;
