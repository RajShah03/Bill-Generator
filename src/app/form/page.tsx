'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function InvoiceGenerator() {
  const [items, setItems] = useState([{ 
    itemName: '', 
    hsnCode: '', 
    weight: '', 
    unit: '', 
    karat: '', 
    rate: '', 
    amount: '0.00' 
  }])

  const [totals, setTotals] = useState({
    totalAmount: 0,
    cgst: 0,
    sgst: 0,
    grandTotal: 0
  })

  useEffect(() => {
    calculateTotals()
  }, [items])

  const calculateTotals = () => {
    const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.amount || '0'), 0)
    const cgst = totalAmount * 0.015
    const sgst = totalAmount * 0.015
    const grandTotal = totalAmount + cgst + sgst

    setTotals({
      totalAmount: totalAmount.toFixed(2),
      cgst: cgst.toFixed(2),
      sgst: sgst.toFixed(2),
      grandTotal: grandTotal.toFixed(2)
    })
  }

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }

    if (field === 'weight' || field === 'rate') {
      const weight = parseFloat(newItems[index].weight) || 0
      const rate = parseFloat(newItems[index].rate) || 0
      newItems[index].amount = (weight * rate).toFixed(2)
    }

    setItems(newItems)
  }

  const addItem = () => {
    setItems([...items, { itemName: '', hsnCode: '', weight: '', unit: '', karat: '', rate: '', amount: '0.00' }])
  }

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
  }

  const handleSaveAndGenerateInvoice = () => {
    // Save the invoice data (you can implement this part as needed)
    console.log('Invoice Data:', { items, totals })

    // Generate a printable invoice
    const printContents = document.getElementById('invoiceContent')?.innerHTML
    const originalContents = document.body.innerHTML

    document.body.innerHTML = printContents || ''
    window.print()
    document.body.innerHTML = originalContents
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <Card className="max-w-[1200px] mx-auto bg-white shadow-lg" id="invoiceContent">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-yellow-600 mb-2">RAJ JEWELLERS</h1>
            <p className="text-green-700 text-sm">
              G-5, Silver Spring Complex, Opp. Parekh Jewellers, Navapura Karwa Road, Surat, 395003
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="buyerName" className="text-gray-700">Buyer Name:</Label>
              <Input id="buyerName" className="w-full bg-gray-50" />

              <Label htmlFor="address" className="text-gray-700">Address:</Label>
              <Input id="address" className="w-full bg-gray-50" />

              <Label htmlFor="gstin" className="text-gray-700">GSTIN:</Label>
              <Input id="gstin" className="w-full bg-gray-50" />

              <Label htmlFor="panNo" className="text-gray-700">PAN No.:</Label>
              <Input id="panNo" className="w-full bg-gray-50" />

              <Label htmlFor="mobileNo" className="text-gray-700">Mobile No.:</Label>
              <Input id="mobileNo" className="w-full bg-gray-50" />
            </div>
            <div>
              <Label htmlFor="sellerGstin" className="text-gray-700">Seller GSTIN:</Label>
              <Input id="sellerGstin" className="w-full bg-gray-50" />

              <Label htmlFor="mobileNo2" className="text-gray-700">Mobile No.:</Label>
              <Input id="mobileNo2" className="w-full bg-gray-50" />

              <Label htmlFor="panNo2" className="text-gray-700">PAN No.:</Label>
              <Input id="panNo2" className="w-full bg-gray-50" />

              <Label htmlFor="invoiceNo" className="text-gray-700">Invoice No.:</Label>
              <Input id="invoiceNo" className="w-full bg-gray-50" />

              <Label htmlFor="date" className="text-gray-700">Date:</Label>
              <Input id="date" type="date" className="w-full bg-gray-50" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left text-gray-700">Item Name</th>
                  <th className="border p-2 text-left text-gray-700">HSN Code</th>
                  <th className="border p-2 text-left text-gray-700">Weight</th>
                  <th className="border p-2 text-left text-gray-700">Unit</th>
                  <th className="border p-2 text-left text-gray-700">Karat</th>
                  <th className="border p-2 text-left text-gray-700">Rate</th>
                  <th className="border p-2 text-left text-gray-700">Amount</th>
                  <th className="border p-2 text-left text-gray-700 no-print">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">
                      <Input 
                        value={item.itemName} 
                        onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                        className="w-full bg-gray-50"
                      />
                    </td>
                    <td className="border p-2">
                      <Input 
                        value={item.hsnCode} 
                        onChange={(e) => handleItemChange(index, 'hsnCode', e.target.value)}
                        className="w-full bg-gray-50"
                      />
                    </td>
                    <td className="border p-2">
                      <Input 
                        type="number"
                        value={item.weight} 
                        onChange={(e) => handleItemChange(index, 'weight', e.target.value)}
                        className="w-full bg-gray-50"
                      />
                    </td>
                    <td className="border p-2">
                      <Input 
                        value={item.unit} 
                        onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                        className="w-20 bg-gray-50"
                      />
                    </td>
                    <td className="border p-2">
                      <Input 
                        value={item.karat} 
                        onChange={(e) => handleItemChange(index, 'karat', e.target.value)}
                        className="w-20 bg-gray-50"
                      />
                    </td>
                    <td className="border p-2">
                      <Input 
                        type="number"
                        value={item.rate} 
                        onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
                        className="w-24 bg-gray-50"
                      />
                    </td>
                    <td className="border p-2">
                      <Input 
                        value={item.amount} 
                        readOnly 
                        className="w-full bg-gray-100"
                      />
                    </td>
                    <td className="border p-2 no-print">
                      <Button onClick={() => removeItem(index)} variant="destructive" size="sm">
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
                {/* Totals Row */}
                <tr className="bg-gray-50">
                  <td colSpan={6} className="border p-2 text-right font-bold text-gray-700">Total Amount:</td>
                  <td className="border p-2 text-gray-700">{totals.totalAmount}</td>
                  <td className="border p-2 no-print"></td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={6} className="border p-2 text-right font-bold text-gray-700">CGST (1.5%):</td>
                  <td className="border p-2 text-gray-700">{totals.cgst}</td>
                  <td className="border p-2 no-print"></td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={6} className="border p-2 text-right font-bold text-gray-700">SGST (1.5%):</td>
                  <td className="border p-2 text-gray-700">{totals.sgst}</td>
                  <td className="border p-2 no-print"></td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={6} className="border p-2 text-right font-bold text-gray-700">Grand Total:</td>
                  <td className="border p-2 text-gray-700">{totals.grandTotal}</td>
                  <td className="border p-2 no-print"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-between">
            <div>
              <p className="text-gray-700">Customer Seal & Signature</p>
              <div className="mt-16 border-t border-gray-300 w-48"></div>
            </div>
            <div className="text-right">
              <p className="text-gray-700">For Raj Jewellers</p>
              <div className="mt-16 border-t border-gray-300 w-48"></div>
              <p className="text-sm text-gray-700">Authorized Signatory</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4 no-print">
            <Button onClick={handleSaveAndGenerateInvoice} className="bg-green-500 text-white hover:bg-green-600">
              Save and Generate Invoice
            </Button>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}