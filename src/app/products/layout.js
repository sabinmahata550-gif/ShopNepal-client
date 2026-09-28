import React from 'react'
import ProductBanner from './_components/Banner'
export const metadata = {
    title: "Products",
}
const productLayout = ({ children }) => {
    return (
        <div className='container mx-auto py-16 px-4'>
            <ProductBanner />
            {children}

        </div>
    )
}

export default productLayout
