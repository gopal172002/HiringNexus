import React, { useEffect, useState } from "react";
import {
    AiFillHeart,
    AiOutlineHeart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlist";

const ProductDetailsCard = ({ setOpen, data }) => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (wishlist && wishlist.find((i) => i.id === data.id)) {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [wishlist, data]);

    const removeFromWishlistHandler = (data) => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
    };

    const addToWishlistHandler = (data) => {
        setClick(!click);
        dispatch(addToWishlist(data));
    };

    return (
        <div className="bg-[#fff]">
            {data ? (
                <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
                    <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-auto bg-white rounded-md shadow-sm relative p-4">
                        <RxCross1
                            size={30}
                            className="absolute right-3 top-3 z-50 cursor-pointer"
                            onClick={() => setOpen(false)}
                        />

                        <div className="block w-full 800px:flex">
                            <div className="w-full 800px:w-[50%]">
                                <img src={`${data?.image_Url[0].url}`} alt="Product" className="rounded-md"/>
                                <div className="flex items-center mt-4">
                                    <img
                                        src={`${data?.shop.url}`}
                                        alt="Shop"
                                        className="w-[50px] h-[50px] rounded-full mr-2"
                                    />
                                    <div>
                                        <h3 className={`${styles.shop_name}`}>
                                            {data.shop.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                                <h1 className={`${styles.productTitle} text-[20px]`}>
                                    {data.name}
                                </h1>
                                <p className="mt-4">{data.description}</p>
                                <div className="flex items-center mt-12 justify-between pr-3">
                                    <div>
                                        {click ? (
                                            <AiFillHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => removeFromWishlistHandler(data)}
                                                color="red"
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => addToWishlistHandler(data)}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>
                                    <Link to={data.jobUrl} className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProductDetailsCard;
