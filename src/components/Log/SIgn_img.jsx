import React from 'react'
import IMG from '../../assets/products/log.png'
const SIgn_img = () => {
    return (
        <>
            <div className="right_data mt-5" style={{ width: "100%" }}>
                <div className="sign_img mt-5">
                    <img src={IMG}style={{ maxWidth: 400 }} alt="" />
                </div>
            </div>
        </>
    )
}

export default SIgn_img