import React from 'react'

// Components ve Property kulanim ornegi 
function Product({ brand, productName, price }) {
    return (
        <>
            <div>
                <div>Marka: {brand}</div>
                <div>Model: {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div><br />
        </>
    )
}

export default Product