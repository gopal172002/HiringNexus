// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import styles from "../styles/styles";
// import productData from "../static/data";
//
// const ProductsPage = () => {
//     const [searchParams] = useSearchParams();
//     const categoryData = searchParams.get("category");
//     const { allProducts } = useSelector((state) => state.products);
//     const [data, setData] = useState([productData]);
//
//     useEffect(() => {
//         if (categoryData === null) {
//             const d = allProducts;
//             setData(d);
//         } else {
//             const d =
//                 allProducts && allProducts.filter((i) => i.category === categoryData);
//             setData(d);
//         }
//         // window.scrollTo(0,0);
//     }, [allProducts]);
//
//     return (
//         <div>
//             <Header activeHeading={3} />
//             <br />
//             <br />
//             <div className={`${styles.section}`}>
//                 <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//                     {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//                 </div>
//                 console.log(data);
//                 {data && data.length === 0 ? (
//                     <h1 className="text-center w-full pb-[100px] text-[20px]">
//                         No products Found!
//                     </h1>
//                 ) : null}
//             </div>
//             <Footer />
//         </div>
//     );
// };
//
// export default ProductsPage;









//
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import styles from "../styles/styles";
// import productData from "../static/data";
//
// const ProductsPage = () => {
//     const [searchParams] = useSearchParams();
//     const categoryData = searchParams.get("category");
//     const { allProducts } = useSelector((state) => state.products);
//     const [data, setData] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 if (categoryData === null) {
//                     setData(allProducts || []); // Use empty array if allProducts is undefined
//                 } else {
//                     const filteredData = allProducts && allProducts.filter((i) => i.category === categoryData);
//                     setData(filteredData || []); // Use empty array if filteredData is undefined
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 // Handle error (e.g., show an error message to the user)
//             }
//         };
//
//         fetchData();
//     }, [allProducts, categoryData]);
//
//     return (
//         <div>
//             <Header activeHeading={3} />
//             <br />
//             <br />
//             <div className={`${styles.section}`}>
//                 <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//                     {data && data.length > 0
//                         ? data.map((product, index) => (
//                             <ProductCard key={index} data={product} />
//                         ))
//                         : <p>Loading...</p>
//                     }
//                 </div>
//                 {data.length === 0 && (
//                     <h1 className="text-center w-full pb-[100px] text-[20px]">
//                         No products Found!
//                     </h1>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// };
//
// export default ProductsPage;
//


import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { productData } from "../static/data";
const ProductsPage = () => {    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");

    const filteredData = categoryData
        ? productData.filter((product) => product.category === categoryData)
        : productData;

    return (
        <div>
            <Header activeHeading={3} />
            <br />
            <br />
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {filteredData.map((product, index) => (
                        <ProductCard key={index} data={product} />
                    ))}
                </div>
                {filteredData.length === 0 && (
                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                        No products Found!
                    </h1>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProductsPage;
