import React from 'react'

import '../Grid.css'

const Hero1img = ({ img, children }) => {
    return (
        <div style={{
            position: "relative",
            margin: "78px 0",
            height: "300px",
            display: "flex",
            overflow: "hidden"
        }}>
            <div className={`grid`}>
                <div style={{ width: '100%' }}>
                    <img src={img} alt=""
                        style={{
                            width: '100%',
                            backgroundPosition: "center top",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            visibility: "inherit"
                        }}
                    />
                    <div style={{
                            color: "#fff",
                            fontSize: "35px",
                            fontWeight: "bold",
                            textAlign: "left",
                            letterSpacing: "0px",
                            lineHeight: "27px",
                            position: "absolute",
                            bottom: "20%",
                            left: "5%",
                            textTransform: "uppercase"
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero1img