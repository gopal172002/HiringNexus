import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    footercompanyLinks,
    footerProductLinks,
    footerSupportLinks,
} from "../../static/data";
import logoimage from '../../images/logoFarmer.png'
const Footer = () => {
    return (
        <div className="bg-[#000] text-white">
            <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
                <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
       
<img
    src={logoimage}
    alt="logo"
    class="w-40 h-30"
/>


                    <br />
                    <p>Chemical free grocery products.</p>
                    <div className="flex items-center mt-[15px]">
    <a href="https://www.facebook.com/share/VLZ1xx8Hw2JFD4tw/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook size={25} className="cursor-pointer" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
        />
    </a>
    <a href="https://www.instagram.com/tathabarodh?igsh=MXAyNGV0aW9iaDdvYQ==" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
        />
    </a>
    <a href="https://youtube.com/@tathagatbarodh4258?si=CpWI_4CCaICf6SM9" target="_blank" rel="noopener noreferrer">
        <AiFillYoutube
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
        />
    </a>
</div>

                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Company</h1>
                    {footerProductLinks.map((link,index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Shop</h1>
                    {footercompanyLinks.map((link,index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Support</h1>
                    {footerSupportLinks.map((link,index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
            >
                <span>© since 2020</span>
                <span>Terms · Privacy Policy</span>
                <div className="sm:block flex items-center justify-center w-full">
                    <img
                        src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
