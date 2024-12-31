import React from 'react';
import Image from 'next/image';

const TaxInvoice: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between mb-6">
        <div className="flex-grow text-center">
          <h1 className="text-xl font-bold">TAX INVOICE</h1>
          <p className="text-sm italic">(ORIGINAL FOR RECIPIENT)</p>
        </div>
      </div>

      {/* IRN and Acknowledgment Details */}
      <div className="flex justify-end mb-4">
        <div className="grid grid-cols-[auto,auto] gap-x-2">
          <span className="font-semibold">Invoice No.:</span>
          <span>4392</span>
          <span className="font-semibold">Dated:</span>
          <span>2-Dec-24</span>
        </div>
      </div>

      {/* Seller and Buyer Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Seller Details */}
        <div className="border p-3">
          <p className="font-bold">RAJ JEWELLERS</p>
          <p>G-5,Silver Springs comp.,Opp. Parekh Jewellers, Karwa Road, Navapura, Surat</p>
          <p>Pan No: AQEPS2959J</p>
          <p>E-Mail: rajgold2003@gmail.com</p>
          <p>GSTIN/UIN: 24AQEPS2959J1ZF</p>
          <p>State Name: Gujarat, Code : 24</p>
        </div>

        {/* Consignee Details */}
        <div className="border p-3">
          <p className="font-semibold">Consignee (Ship to)</p>
          <p>Raj Jewellers</p>
          <p>10/713, 101, Vrajbhumi Apt., Hawadia Chakla, Ambaji Road, Surat</p>
          <p>GSTIN/UIN: 24AQEPS2959J1ZF</p>
          <p>PAN/IT No: AQEPS2959J</p>
          <p>State Name: Gujarat, Code: 24</p>
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="border">
            <th className="border p-2 text-left">Description of Goods</th>
            <th className="border p-2">HSN/SAC</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Rate</th>
            <th className="border p-2">per</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="border p-2">
              GOLD BAR(999)<br/>
              ACM0748
            </td>
            <td className="border p-2 text-center">71081200</td>
            <td className="border p-2 text-right">100.000 gms</td>
            <td className="border p-2 text-right">7,596.18</td>
            <td className="border p-2 text-center">gms</td>
            <td className="border p-2 text-right">7,59,618.45</td>
          </tr>
          <tr>
            <td colSpan={6} className="p-2">
              <div className="flex justify-between">
                <div>
                  <p>Less :</p>
                </div>
                <div className="text-right">
                  <p>CGST: 11,394.28</p>
                  <p>SGST: 11,394.28</p>
                  <p>TCS: 783.00</p>
                  <p>ROUND OFF: (-)0.01</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border">
            <td colSpan={2} className="border p-2">Total</td>
            <td className="border p-2 text-right">100.000 gms</td>
            <td colSpan={2} className="border"></td>
            <td className="border p-2 text-right">₹ 7,83,190.00</td>
          </tr>
        </tfoot>
      </table>

      {/* Amount in Words */}
      <div className="mb-4">
        <p>Amount Chargeable (in words)</p>
        <p className="font-bold">INR Seven Lakh Eighty Three Thousand One Hundred Ninety Only</p>
      </div>

      {/* Tax Details */}
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="border">
            <th className="border p-2">Taxable Value</th>
            <th colSpan={2} className="border p-2">Central Tax</th>
            <th colSpan={2} className="border p-2">State Tax</th>
            <th className="border p-2">Total Tax Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="border p-2 text-right">7,59,618.45</td>
            <td className="border p-2 text-center">1.50%</td>
            <td className="border p-2 text-right">11,394.28</td>
            <td className="border p-2 text-center">1.50%</td>
            <td className="border p-2 text-right">11,394.28</td>
            <td className="border p-2 text-right">22,788.56</td>
          </tr>
        </tbody>
      </table>

      {/* Tax Amount in Words */}
      <div className="mb-1">
        <p>Tax Amount (in words) :</p>
        <p className="font-bold">INR Twenty Two Thousand Seven Hundred Eighty Eight and Fifty Six paise Only</p>
      </div>

      {/* Company Details */}
      <div className="mb-1">
        <p>Company's PAN : AQEPS2959J</p>
      </div>

      {/* Declaration and Bank Details Section */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="font-bold">Declaration:</p>
          <ol className="list-decimal pl-4 text-xs">
            <li>GOODS PURCHASED AND KEPT OUR PREMISES AND SENDING AT THE CUSTOMER'S RISK</li>
            <li>NO CLAIM FOR SHORTAGE AND PURITY AGAINST</li>
            <li>GOODS ONCE SOLD CAN NOT BE TAKEN BACK.</li>
            <li>PLEASE CONFIRM YOUR GST AND PAN NUMBER.</li>
            <li>NO CLAIM ABOUT INCORRECT GST NUMBER AFTER</li>
          </ol>
        </div>

        <div>
          <p className="font-bold">Company's Bank Details:</p>
          <table className="w-full text-xs">
            <tbody>
              <tr>
                <td>A/c Holder's Name:</td>
                <td>RAJ JEWELLERS</td>
              </tr>
              <tr>
                <td>Bank Name:</td>
                <td>Surat people co-operative bank Ltd.</td>
              </tr>
              <tr>
                <td>A/c No.:</td>
                <td>304011818643</td>
              </tr>
              <tr>
                <td>Branch & IFS Code:</td>
                <td>Parsi Sheri & SPCB0251001</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-8">
        <div>
          <p>Customer's Seal and Signature</p>
        </div>
        <div className="text-right">
          <p>FOR RAJ JEWELLERS</p>
          <p className="mt-8">Authorised Signatory</p>
        </div>
      </div>

      {/* Generated Invoice Note */}
      <div className="text-center text-sm mt-4">
        <p>This is a Computer Generated Invoice</p>
      </div>
    </div>
  );
};

export default TaxInvoice;

