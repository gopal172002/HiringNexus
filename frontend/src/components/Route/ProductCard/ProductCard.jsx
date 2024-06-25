import React, { useState, useEffect } from "react";
import {
  AiFillAliwangwang,
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCopy } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FacebookShareButton } from 'react-share'
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import "../../../styles/styles"; 

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [share, setshare] = useState(null)
  const [link, setlink] = useState('')
  const mainLink = 'https://makranamarbledeal.com//openings'

  function shareLink(){
    setshare(prev=>!prev)
  }
  function copy(id){
    setlink(`${mainLink}?id=${id}`)
    navigator.clipboard.writeText(link)
      .then(() => {
        toast.success("Copied to clipboard");
      })
       setshare(prev=>!prev)

  }

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
// console.log(data.id);


   
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
          <FaShare
          className="cursor-pointer absolute right-2 top-27 text-gray-700"
          onClick={()=>{
            shareLink()
          }}/>
          {(share &&(
            <div className="bg-gray-200 p-1 absolute -top-10 rounded-lg flex items-center">
              <p>Copy Link</p>
              <div className="p-2 rounded-full hover:bg-gray-600 " onClick={()=>copy(data.id)}><FaCopy/></div>
            </div>
          ))}
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

