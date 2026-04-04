import React,{ useEffect, useState } from 'react'

function App() {
  // Input state
  const [productname, setProductname] = useState("")
  const [originalPrice, setOriginalPrice] = useState(0)
  const [discountedPercentage, setDiscountedPercentage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  // output state
  const [discountedPrice,setDiscountedPrice] = useState(0)
  const [totalBil,setTotalBil] = useState(0)
  const [statusMessage,setStatusMessage] = useState('')

  useEffect(()=>{
    const discountAmount = (originalPrice*discountedPercentage) / 100
    const pricePerItem = originalPrice - discountAmount
    const finalBill = pricePerItem * quantity

    setDiscountedPrice(pricePerItem)
    setTotalBil(finalBill)

    if (discountedPercentage < 20) {
      setStatusMessage('Low Discount');
    } else if (discountedPercentage >= 20 && discountedPercentage <= 50) {
      setStatusMessage('Good Deal');
    } else {
      setStatusMessage('Amazing Offer');
    }

  },  [originalPrice, discountedPercentage, quantity]);

   //Reset Handler
  const handleReset = () => {
    setProductname('');
    setOriginalPrice(0);
    setDiscountedPercentage(0);
    setQuantity(1);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
    <h2>Discount Calculator</h2>

    {/* Input Fields */}
    <div style={{ marginBottom: '15px' }}>
      <label>Product Name: </label>
      <input 
        type="text" 
        value={productname} 
        onChange={(e) => setProductname(e.target.value)} 
        placeholder="e.g. Headphones"
      />
      {!productname && <p style={{ color: 'red', fontSize: '12px' }}>Please enter product name</p>}
    </div>

    <div style={{ marginBottom: '10px' }}>
      <label>Original Price ($): </label>
      <input 
        type="number" 
        value={originalPrice} 
        onChange={(e) => setOriginalPrice(Math.max(0, parseFloat(e.target.value) || 0))} 
      />
    </div>

    <div style={{ marginBottom: '10px' }}>
      <label>Discount (%): </label>
      <input 
        type="number" 
        value={discountedPercentage} 
        onChange={(e) => setDiscountedPercentage(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))} 
      />
    </div>

    <div style={{ marginBottom: '10px' }}>
      <label>Quantity: </label>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
      />
    </div>

    <hr />

    {/* Output Display */}
    <div>
      <p><strong>Discounted Price:</strong> ${discountedPrice.toFixed(2)}</p>
      <p><strong>Total Bill:</strong> ${totalBil.toFixed(2)}</p>
      <p><strong>Status:</strong> {statusMessage}</p>
    </div>

    <button onClick={handleReset} style={{ marginTop: '10px', cursor: 'pointer' }}>
      Reset Fields
    </button>
  </div>
  )
}

export default App
