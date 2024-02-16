import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
    return (
        <div
            className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
            style={{
                backgroundImage:
                    "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
            }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1
                    className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
                >
                    Best Organic Food Products<br /> Tathagat: A Farmer
                </h1>
                <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
                    Tathagat is a farmer who does chemical free farming<br /> He belives in philosophy on "Happy Farming"{" "}
                    <br />
                </p>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5`}>
            <span className="text-white font-Poppins text-25 flex items-center justify-center h-full">
   Store
</span>


                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
