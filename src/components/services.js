// import React from 'react'
// import { useState } from "react";
// import igmcard from '../assests/عن-صيت.jpeg'
// function Services() {

//     const [hoverState, setHoverState] = useState("before");
//     return (
//         <div
//             className="relative w-100 h-100 border rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
//             onMouseEnter={() => setHoverState("during")}
//             onMouseLeave={() => setHoverState("after")}
//         >
//             <div className="absolute inset-0 flex items-center transition-all duration-500"
//                 style={{ transform: hoverState === "during" ? 'translateX(-50%)' : hoverState === "after" ? 'translateX(-25%)' : 'translateX(0)' }}>
//                 <img src={igmcard} alt="Card" className="col-md-4 object-cover" />
//                 <div className={`w-1/2 p-4 transition-opacity duration-500 ${hoverState === "during" ? 'opacity-100' : 'opacity-0'}`}>
//                     <h3 className="text-lg font-semibold">عنوان الكارد</h3>
//                     <p className="text-sm text-gray-600">هذا نص تجريبي يظهر عند تمرير الماوس.</p>
//                     <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">اضغط هنا</button>
//                 </div>
//             </div>
//             {hoverState !== "during" && (
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                     <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">اضغط هنا</button>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Services










// import React from 'react'
// import { useState } from "react";
// import igmcard from '../assests/عن-صيت.jpeg'
// import img2 from '../assests/صيت للمقاولات.jpeg'
// function Services() {

//     const [hoverState, setHoverState] = useState("before");


//     return (


//         <div className="flex justify-center items-center min-h-screen">
//             <div
//                 className="relative w-[100px] max-w-xs border rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
//                 onMouseEnter={() => setHoverState("during")}
//                 onMouseLeave={() => setHoverState("after")}
//             >
//                 <div className="relative flex items-center transition-all duration-500"
//                     style={{
//                         transform: hoverState === "during" ? 'translateX(50%)' : hoverState === "after" ? 'translateX(25%)' : 'translateX(0)'
//                     }}>
//                     <img
//                         src={hoverState === "during" ? igmcard : img2}
//                         alt="Card"
//                         className="w-[200px] object-cover transition-all duration-500"
//                         style={{ height: "300px" }}
//                     />
//                     <div className={`w-1/2 p-4 transition-all duration-500 ${hoverState === "during" ? 'translate-x-[-50%] opacity-100' : 'translate-x-0 opacity-0'}`}>
//                         <h3 className="text-lg font-semibold">عنوان الكارد</h3>
//                         <p className="text-sm text-gray-600">هذا نص تجريبي يظهر عند تمرير الماوس.</p>
//                         <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">اضغط هنا</button>
//                     </div>
//                 </div>
//                 {hoverState !== "during" && (
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                         <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">اضغط هنا</button>
//                     </div>
//                 )}
//             </div>
//         </div>



//     )
// }

// export default Services
import React from 'react'

function Services() {
  return (
    <div>
      
    </div>
  )
}

export default Services

