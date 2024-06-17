// import React, { useState } from "react";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import styles from "../styles/styles";

// const FAQPage = () => {
//     return (
//         <div>
//             <Header activeHeading={5} />
//             <Faq />
//             <Footer />
//         </div>
//     );
// };

// const Faq = () => {
//     const [activeTab, setActiveTab] = useState(0);

//     const toggleTab = (tab) => {
//         if (activeTab === tab) {
//             setActiveTab(0);
//         } else {
//             setActiveTab(tab);
//         }
//     };

//     return (
//         <div className={`${styles.section} my-8`}>
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
//             <div className="mx-auto space-y-4">
//                 {/* single Faq */}

//                 <div className="border-b border-gray-200 pb-4">
//                     <button
//                         className="flex items-center justify-between w-full"
//                         onClick={() => toggleTab(2)}
//                     >
//             <span className="text-lg font-medium text-gray-900">
//               What is your return policy?
//             </span>
//                         {activeTab === 2 ? (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                     {activeTab === 2 && (
//                         <div className="mt-4">
//                             <p className="text-base text-gray-500">
//                                 If you're not satisfied with your purchase, we accept returns
//                                 within 30 days of delivery. To initiate a return, please email
//                                 us at support@tathagatafarmer.com with your order number and a
//                                 brief explanation of why you're returning the item.
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="border-b border-gray-200 pb-4">
//                     <button
//                         className="flex items-center justify-between w-full"
//                         onClick={() => toggleTab(3)}
//                     >
//             <span className="text-lg font-medium text-gray-900">
//               How do I track my order?
//             </span>
//                         {activeTab === 3 ? (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                     {activeTab === 3 && (
//                         <div className="mt-4">
//                             <p className="text-base text-gray-500">
//                                 {/* You can track your order by clicking the tracking link in your
//                                 shipping confirmation email, or by logging into your account on
//                                 our website and viewing the order details. */}
//                                 We will contact you after recieve your order and send message on every step of delivery track.
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="border-b border-gray-200 pb-4">
//                     <button
//                         className="flex items-center justify-between w-full"
//                         onClick={() => toggleTab(4)}
//                     >
//             <span className="text-lg font-medium text-gray-900">
//               How do I contact customer support?
//             </span>
//                         {activeTab === 4 ? (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                     {activeTab === 4 && (
//                         <div className="mt-4">
//                             <p className="text-base text-gray-500">
//                                 You can contact our customer support team by emailing us at
//                                 support@tathagatafarmer.com, or by calling us at 89620xxxxxx
//                                 between the hours of 9am and 5pm EST, Monday through Friday.
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="border-b border-gray-200 pb-4">
//                     <button
//                         className="flex items-center justify-between w-full"
//                         onClick={() => toggleTab(5)}
//                     >
//             <span className="text-lg font-medium text-gray-900">
//               Can I change or cancel my order?
//             </span>
//                         {activeTab === 5 ? (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                     {activeTab === 5 && (
//                         <div className="mt-4">
//                             <p className="text-base text-gray-500">
//                                 Unfortunately, once an order has been placed, we are not able to
//                                 make changes or cancellations. If you no longer want the items
//                                 you've ordered, you can return them for a refund within 30 days
//                                 of delivery.
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="border-b border-gray-200 pb-4">
//                     <button
//                         className="flex items-center justify-between w-full"
//                         onClick={() => toggleTab(6)}
//                     >
//             <span className="text-lg font-medium text-gray-900">
//               Do you offer international shipping?
//             </span>
//                         {activeTab === 6 ? (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                     {activeTab === 6 && (
//                         <div className="mt-4">
//                             <p className="text-base text-gray-500">
//                                 Currently, we only offer shipping within the India.
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="border-b border-gray-200 pb-4">
//                     <button
//                         className="flex items-center justify-between w-full"
//                         onClick={() => toggleTab(7)}
//                     >
//             <span className="text-lg font-medium text-gray-900">
//               What payment methods do you accept?
//             </span>
//                         {activeTab === 7 ? (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 className="h-6 w-6 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                     {activeTab === 7 && (
//                         <div className="mt-4">
//                             <p className="text-base text-gray-500">
//                                 We accept UPI,visa,rupay payment method also we have
//                                 cash on delivery system.
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FAQPage;

import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Faq />
            <Footer />
        </div>
    );
};

const Faq = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
            <div className="mx-auto space-y-4">
                {/* single Faq */}

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(1)}
                    >
            <span className="text-lg font-medium text-gray-900">
              How do I apply for a job?
            </span>
                        {activeTab === 1 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 1 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                To apply for a job, simply browse through our job listings and click on the job title that interests you. On the job details page, click the "Apply Now" button and follow the instructions to submit your application.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(2)}
                    >
            <span className="text-lg font-medium text-gray-900">
              What should I include in my application?
            </span>
                        {activeTab === 2 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 2 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Your application should include a well-written resume and a cover letter that outlines your qualifications, experience, and why you are interested in the position. Make sure to tailor your cover letter to the specific job you are applying for.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(3)}
                    >
            <span className="text-lg font-medium text-gray-900">
              How do I prepare for an interview?
            </span>
                        {activeTab === 3 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 3 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Preparing for an interview involves researching the company, understanding the job requirements, and practicing common interview questions. Make sure to dress appropriately and arrive on time. Bring copies of your resume and any other required documents.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(4)}
                    >
            <span className="text-lg font-medium text-gray-900">
              How can I improve my chances of getting hired?
            </span>
                        {activeTab === 4 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 4 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                To improve your chances of getting hired, make sure your resume is up-to-date and tailored to the job you are applying for. Networking and building relationships within your industry can also be very helpful. Additionally, gaining relevant experience and skills through internships, volunteering, or additional coursework can make you a more attractive candidate.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(5)}
                    >
            <span className="text-lg font-medium text-gray-900">
              What are the benefits of creating an account?
            </span>
                        {activeTab === 5 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 5 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Creating an account on our platform allows you to save job listings, receive job alerts, and apply for jobs more quickly. You can also track your application status and manage your resume and cover letters in one place.
                            </p>
                        </div>
                    )}
                </div>

                {/* <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(6)}
                    >
            <span className="text-lg font-medium text-gray-900">
              How do I reset my password?
            </span>
                        {activeTab === 6 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 6 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                If you need to reset your password, click on the "Forgot Password" link on the login page. Enter your email address and we will send you instructions on how to reset your password.
                            </p>
                        </div>
                    )}
                </div> */}

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(7)}
                    >
            <span className="text-lg font-medium text-gray-900">
              How can I contact support?
            </span>
                        {activeTab === 7 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 7 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                You can contact our support team by emailing us at gopalkalsiya1h@gmail.com, or by calling us at 8962027377 between the hours of 9am and 5pm EST, Monday through Friday.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
