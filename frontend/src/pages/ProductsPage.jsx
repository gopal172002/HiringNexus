// import React from "react";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import styles from "../styles/styles";
// import { productData } from "../static/data";
// const ProductsPage = () => {    const [searchParams] = useSearchParams();
//     const categoryData = searchParams.get("category");
// console.log(searchParams);
// <h1>
//         Search results for <b>{searchParams.get("category")}</b>
//       </h1>
//     const filteredData = categoryData
//         ? productData.filter((product) => product.category === categoryData)
//         : productData;

//     return (
//         <div>
//             <Header activeHeading={3} />
//             <br />
//             <br />
//             <div className={`${styles.section}`}>
//                 <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//                     {filteredData.map((product, index) => (
//                         <ProductCard key={index} data={product} />
//                     ))}
//                 </div>
//                 {filteredData.length === 0 && (
//                     <h1 className="text-center w-full pb-[100px] text-[20px]">
//                         No Job Found!
//                     </h1>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default ProductsPage;
import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { productData } from "../static/data"; // Adjusted to import the correct data

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("openings");
    const idQuery = searchParams.get("id");

    console.log(searchParams);

    let filteredData = productData;

    if (categoryData) {
        filteredData = filteredData.filter((product) => product.category === categoryData);
    }

    if (idQuery) {
        filteredData = filteredData.filter((product) => product.id === parseInt(idQuery));
    }

    return (
        <div>
            <Header activeHeading={3} />
            <br />
            <br />
            <div className={`${styles.section}`}>
                <h1>
                    {categoryData ? (
                        <>
                            Search results for <b>{categoryData}</b>
                        </>
                    ) : idQuery ? (
                        <>
                            
                        </>
                    ) : (
                        "All Jobs"
                    )}
                </h1>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {filteredData.map((product, index) => (
                        <ProductCard key={index} data={product} />
                    ))}
                </div>
                {filteredData.length === 0 && (
                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                        No Job Found!
                    </h1>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProductsPage;
