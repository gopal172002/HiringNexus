import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { categoriesData, productData } from "../../static/data";
import styles from '../../styles/styles';
import Navbar from './Navbar.jsx'
import DropDown from './DropDown.jsx'
const Headers = ({ activeHeading }) => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const { isSeller } = useSelector((state) => state.seller);
    const { wishlist } = useSelector((state) => state.wishlist);
    const { cart } = useSelector((state) => state.cart);
    const { allProducts } = useSelector((state) => state.products);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openWishlist, setOpenWishlist] = useState(false);
    const [open, setOpen] = useState(false);


    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts =
            productData &&
            productData.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
        setSearchData(filteredProducts);
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <div className={`${styles.section}`}>
        <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex item-centre justify-between'>
            <div>
                <Link to="/your-route">
                    <img src="#"/> {/* Replace # with the correct URL */}
                </Link>
            </div>
            <div className="w-[50%] relative">
                <input
                    type="text"
                    placeholder="Search Product..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                />
                <AiOutlineSearch
                    size={30}
                    className="absolute right-2 top-1.5 cursor-pointer"
                />
                  {searchData && searchData.length !== 0 ? (
                            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                {searchData &&
                                    searchData.map((i, index) => {
                                        return (
                                            <Link to={`/product/${i._id}`}>
                                                <div className="w-full flex items-start-py-3">
                                                    <img
                                                        src={`${i.images[0]?.url}`}
                                                        alt=""
                                                        className="w-[40px] h-[40px] mr-[10px]"
                                                    />
                                                    <h1>{i.name}</h1>
               
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        ) : null}
            </div>
             <div className={`${styles.button}`}>
                       <Link to={`/shop`}>
                            <h1 className="text-[#fff] flex items-center">
                                 Shop Now
                            </h1>
                       </Link>
                    </div>
        </div>
       {/* <div className={`${styles.section} relative ${styles.noramlFlex} justify-between`}>

       </div> */}
       <div
                    className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
                >
                    {/* categories */}
                    <div onClick={() => setDropDown(!dropDown)}>
                        <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                            <button
                                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                            >
                                All Categories
                            </button>
                            <IoIosArrowDown
                                size={20}
                                className="absolute right-2 top-4 cursor-pointer"
                                onClick={() => setDropDown(!dropDown)}
                            />
                            {dropDown ? (
                                <DropDown
                                    categoriesData={categoriesData}
                                    setDropDown={setDropDown}
                                />
                            ) : null}
                        </div>
                    </div>
                    {/* navitems */}
                    <div className={`${styles.noramlFlex}`}>
                        <Navbar active={activeHeading} />
                    </div>

                    <div className="flex">
                        <div className={`${styles.noramlFlex}`}>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={() => setOpenWishlist(true)}
                            >
                                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
                            </div>
                        </div>

                        <div className={`${styles.noramlFlex}`}>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={() => setOpenCart(true)}
                            >
                                <AiOutlineShoppingCart
                                    size={30}
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
                            </div>
                        </div>

                        <div className={`${styles.noramlFlex}`}>
                            <div className="relative cursor-pointer mr-[15px]">
                                {isAuthenticated ? (
                                    <Link to="/profile">
                                        <img
                                            src={`${user?.avatar?.url}`}
                                            className="w-[35px] h-[35px] rounded-full"
                                            alt=""
                                        />
                                    </Link>
                                ) : (
                                    <Link to="/login">
                                        <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        
                        {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

                        
                        {/* {openWishlist ? (
                            <Wishlist setOpenWishlist={setOpenWishlist} />
                        ) : null} */}
                    </div> 
                </div>
</div>
    );
};

export default Headers;
