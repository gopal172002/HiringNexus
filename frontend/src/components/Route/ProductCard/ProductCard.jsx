// import React, { useState } from "react";
// import {
//     AiFillHeart,
//     AiFillStar,
//     AiOutlineEye,
//     AiOutlineHeart,
// } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import { useDispatch, useSelector } from "react-redux";
// import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
// import {
//     addToWishlist,
//     removeFromWishlist,
// } from "../../../redux/actions/wishlist";
// import { useEffect } from "react";


// const ProductCard = ({ data, isEvent }) => {
//     const { wishlist } = useSelector((state) => state.wishlist);
//     const { cart } = useSelector((state) => state.cart);
//     const [click, setClick] = useState(false);
//     const [open, setOpen] = useState(false);
//     const dispatch = useDispatch();
//    //console.log(data.price);
//     useEffect(() => {
//         if (wishlist && wishlist.find((i) => i.id === data.id)) {
//             setClick(true);
//         } else {
//             setClick(false);
//         }
//     }, [wishlist]);

//     const removeFromWishlistHandler = (data) => {
//         setClick(!click);
//         dispatch(removeFromWishlist(data));
//     };

//     const addToWishlistHandler = (data) => {
//         setClick(!click);
//         dispatch(addToWishlist(data));
//     };



//     return (
//         <>
//             <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
//                 <div className="flex justify-end"></div>
                
//                     <img
//                         src={`${ data?.image_Url[0].url}`}
//                         alt="products1"
//                         className="w-full h-[170px] object-contain"
//                     />
             
//                <div className="flex flex-col items-center">
//   <h4 className="pb-3 font-[500] text-center">
//     {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
//   </h4>
//   <Link to={data.jobUrl} className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
//     Apply Now
//   </Link>
// </div>

//                 <div>
//                     {click ? (
//                         <AiFillHeart
//                             size={22}
//                             className="cursor-pointer absolute right-2 top-5"
//                             onClick={() => removeFromWishlistHandler(data)}
//                             color={click ? "red" : "#333"}
//                             title="Remove from wishlist"
//                         />
//                     ) : (
//                         <AiOutlineHeart
//                             size={22}
//                             className="cursor-pointer absolute right-2 top-5"
//                             onClick={() => addToWishlistHandler(data)}
//                             color={click ? "red" : "#333"}
//                             title="Add to wishlist"
//                         />
//                     )}
//                     <AiOutlineEye
//                         size={22}
//                         className="cursor-pointer absolute right-2 top-14"
//                         onClick={() => setOpen(!open)}
//                         color="#333"
//                         title="Quick view"
//                     />  
                    
//                     {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductCard;



import React, { useState, useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import "../../../styles/styles"; // Assuming you have a global styles file

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i.id === data.id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer ">
       <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex justify-end">
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5 text-red-500"
              onClick={() => removeFromWishlistHandler(data)}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5 text-gray-700"
              onClick={() => addToWishlistHandler(data)}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14 text-gray-700"
            onClick={() => setOpen(!open)}
            title="Quick view"
          />
        </div>
        <img
          src={`${data?.image_Url[0].url}`}
          alt="product"
          className="w-full h-[170px] object-contain mt-3 rounded-md"
        />
        <div className="flex flex-col items-center mt-3">
          <h4 className="pb-3 font-medium text-center text-gray-800">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <Link
            to={data.jobUrl}
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
          >
            Apply Now
          </Link>
        </div>
        </div>
        {open && (
          <ProductDetailsCard setOpen={setOpen} data={data} />
        )}
      </div>
    </>
  );
};

export default ProductCard;

