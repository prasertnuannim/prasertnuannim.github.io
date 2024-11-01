(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7558:(e,t,r)=>{Promise.resolve().then(r.bind(r,2487)),Promise.resolve().then(r.bind(r,4028)),Promise.resolve().then(r.bind(r,810)),Promise.resolve().then(r.bind(r,4390))},5645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(7437),i=r(2265),n=r(7551),a=r(357);let l=function(e){let{}=e,t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{(async()=>{let e=new n.aN({apiKey:a.env.NEXT_PUBLIC_MAPS_API,version:"weekly"}),{Map:r}=await e.importLibrary("maps"),{Marker:s}=await e.importLibrary("marker"),i={lat:17.8749,lng:103.07663},l=new r(t.current,{center:i,zoom:14,mapId:"My Location"});new s({map:l,position:i}).addListener("click",()=>{window.open("https://www.google.com/maps/search/?api=1&query=".concat(i.lat,",").concat(i.lng),"_blank")}),l.addListener("click",e=>{if(e.latLng){let t=e.latLng.lat(),r=e.latLng.lng();window.open("https://www.google.com/maps/search/?api=1&query=".concat(t,",").concat(r),"_blank")}})})()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"text-3xl justify-start p-2",children:"Location."}),(0,s.jsx)("div",{className:"map-container mt-3",children:(0,s.jsx)("div",{ref:t,className:"map"})})]})}},3264:(e,t,r)=>{"use strict";r.d(t,{default:()=>a,q:()=>l});var s=r(7437),i=r(2265);let n=(0,i.createContext)(null);function a(e){let{children:t}=e,[r,a]=(0,i.useState)("#home"),[l,c]=(0,i.useState)(0);return(0,s.jsx)(n.Provider,{value:{activeSection:r,setActiveSection:a,timeOfLastClick:l,setTimeOfLastClick:c},children:t})}function l(){let e=(0,i.useContext)(n);if(!e)throw Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");return e}},3492:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});var s=r(6044),i=r(2265),n=r(3264);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,{ref:r,inView:a}=(0,s.YD)({threshold:t}),{setActiveSection:l,timeOfLastClick:c}=(0,n.q)();return(0,i.useEffect)(()=>{a&&Date.now()-c>1e3&&l(e)},[a,l,c,e]),{ref:r}}},810:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(7437),i=r(3492);r(2265);var n=r(6648);let a=e=>{let{ref:t}=(0,i.r)("#itinerary",.5);return(0,s.jsx)("section",{ref:t,id:"itinerary",className:"mb-28 max-w-[74rem] text-center sm:mb-0",children:(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/itinerary.jpg",width:"480",height:"480",alt:"photo",quality:"100",priority:!0,className:"shadow-xl object-cover"})})})})})}},2487:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(7437),i=r(3492),n=r(2265),a=r(6648),l=r(9343),c=r(8472);function o(){let[e,t]=(0,n.useState)(!1),[r,i]=(0,n.useState)(""),{register:a,handleSubmit:o,formState:{errors:d},setValue:u}=(0,l.cI)(),m=async e=>{try{(await c.Z.post("/api/send-otp",{phone:e.phone})).data.success?(t(!0),i("OTP sent to your phone.")):i("Failed to send OTP.")}catch(e){console.error(e),i("An error occurred. Please try again.")}},h=async e=>{try{(await c.Z.post("/api/verify-otp",e)).data.success?i("OTP verified successfully."):i("Invalid OTP. Please try again.")}catch(e){console.error(e),i("An error occurred. Please try again.")}};return(0,s.jsxs)("div",{children:[e?(0,s.jsxs)("form",{onSubmit:o(h),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"OTP"}),(0,s.jsx)("input",{...a("otp",{required:"OTP is required"}),type:"text",className:"border rounded p-2"}),d.otp&&(0,s.jsx)("p",{className:"text-red-600",children:d.otp.message})]}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded",children:"Verify OTP"})]}):(0,s.jsxs)("form",{onSubmit:o(m),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Phone Number"}),(0,s.jsx)("input",{...a("phone",{required:"Phone number is required"}),type:"text",placeholder:"+1234567890",className:"border rounded p-2"}),d.phone&&(0,s.jsx)("p",{className:"text-red-600",children:d.phone.message})]}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded",children:"Send OTP"})]}),r&&(0,s.jsx)("p",{children:r})]})}let d=e=>{let{ref:t}=(0,i.r)("#blessing",.5);return(0,s.jsxs)("section",{ref:t,id:"blessing",className:"mb-28 max-w-[74rem] text-center sm:mb-0",children:[(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(a.default,{src:"/blessing.jpg",width:"480",height:"480",alt:"photo",quality:"100",priority:!0,className:"shadow-xl object-cover"})})})}),(0,s.jsx)(o,{})]})}},4028:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(7437),i=r(3492);r(2265);var n=r(6648);let a=e=>{let{ref:t}=(0,i.r)("#invitations",.5);return(0,s.jsx)("section",{ref:t,id:"invitations",className:"mb-28 max-w-[74rem] text-center sm:mb-0",children:(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/invitations.webp",width:"480",height:"480",alt:"photo",quality:"100",priority:!0,className:"shadow-xl object-cover"})})})})})}},4390:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(7437),i=r(7818),n=r(5645),a=r(3492);function l(){let{ref:e}=(0,a.r)("#venue",.5);return(0,s.jsx)("section",{ref:e,id:"venue",className:"mb-28 max-w-[74rem] sm:mb-0",children:(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{})})})}(0,i.default)(()=>Promise.resolve().then(r.bind(r,5645)),{loadableGenerated:{webpack:()=>[5645]},ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[894,130,215,744],()=>t(7558)),_N_E=e.O()}]);