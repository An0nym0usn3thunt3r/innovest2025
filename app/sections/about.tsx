// import React from "react";
// import { Building2, Users, BookOpen, Brain, Coffee } from "lucide-react";

// const Card = ({ children, className }) => {
//   return (
//     <div
//       className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default function AboutUs() {
//   const facilities = [
//     { icon: <Coffee className="w-6 h-6" />, name: "Co-Working Facility" },
//     { icon: <Building2 className="w-6 h-6" />, name: "Financial Support" },
//     { icon: <Brain className="w-6 h-6" />, name: "Fabrication Facility" },
//     { icon: <Brain className="w-6 h-6" />, name: "Mentorship" },
//     { icon: <BookOpen className="w-6 h-6" />, name: "Reading Area" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
//               About Us
//             </h1>
//             <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//               I-Scale Innovation Foundation (IGNITE), a Section-8,
//               Not-for-Profit company, recognised as a Nodal Institute by
//               Government of Gujarat (GoG).
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Key Features */}
//       <div className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
//             <div className="aspect-w-16 aspect-h-9 mb-8">
//               <img
//                 src="/api/placeholder/1200/400"
//                 alt="Innovation Center"
//                 className="rounded-xl object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               One of the largest Incubator, Co-Working Space, Research &
//               Development Laboratory in Gujarat, well-furnished over an area of
//               20,000 sq. ft. to support startups from across the nation.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Facilities Section */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Our Facilities
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {facilities.map((facility, index) => (
//               <Card key={index}>
//                 <div className="flex flex-col items-center text-center">
//                   <div className="p-3 bg-blue-100 rounded-full mb-4">
//                     {facility.icon}
//                   </div>
//                   <h3 className="font-semibold text-lg">{facility.name}</h3>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* University Section */}
//       <div className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-8">
//             About Silver Oak University
//           </h2>
//           <div className="bg-gray-50 rounded-2xl p-8">
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               <div className="flex-1">
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Silver Oak University has about 23,000+ students pursuing
//                   Diploma, UG, PG, and Doctoral programs at our campus. We have
//                   various courses under the umbrella of Silver Oak University
//                   including:
//                 </p>
//                 <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     College of Technology
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     College of Nursing
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     College of Pharmacy
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     College of Physiotherapy
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     College of Animation & Multimedia
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     Institute of Management
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     Institute of Science
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="w-4 h-4 mr-2" />
//                     Faculty of Law
//                   </li>
//                 </ul>
//               </div>
//               <div className="flex-1">
//                 <div className="aspect-w-4 aspect-h-3">
//                   <img
//                     src="/api/placeholder/800/600"
//                     alt="Silver Oak University Campus"
//                     className="rounded-xl object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
