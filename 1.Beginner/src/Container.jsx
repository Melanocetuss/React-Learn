import React from 'react'

// Components ve Property kulanim ornegi 
function Container({ children }) {
    return (
        <>
            <div>ÜRÜN BİLGİLERİ</div><br />
            {children}
        </>
    )
}

export default Container