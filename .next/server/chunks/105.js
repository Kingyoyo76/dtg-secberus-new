exports.id=105,exports.ids=[105],exports.modules={3035:(e,t,r)=>{Promise.resolve().then(r.bind(r,1572)),Promise.resolve().then(r.bind(r,938)),Promise.resolve().then(r.t.bind(r,8327,23)),Promise.resolve().then(r.bind(r,933)),Promise.resolve().then(r.bind(r,6618))},636:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5303:()=>{},1572:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(326),a=r(7577),o=r(4019),l=r(938),i=r(772);let n=[{headline:"100% of Trial Users Found Gaps Other Tools Missed!",className:"text-yellow-400"},{headline:"Why Risk Fines When We Can Help You Prevent Them?",className:"text-white"},{headline:"Use Secberus As Your Last Line of Defense!",className:"text-yellow-400"},{headline:"Cover All Your Bases with Secberus",className:"text-white"}],c=()=>{let[e,t]=(0,a.useState)(!1),[r,c]=(0,a.useState)(0),{openHubspotForm:d}=(0,l.O)();(0,a.useEffect)(()=>{localStorage.removeItem("hasSeenPopup");let e=setTimeout(()=>{t(!0)},2e4);return()=>clearTimeout(e)},[]),(0,a.useEffect)(()=>{if(!e)return;let t=setInterval(()=>{c(e=>(e+1)%n.length)},5e3);return()=>clearInterval(t)},[e]);let m=()=>{t(!1),localStorage.setItem("hasSeenPopup","true")};return e?s.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70",children:(0,s.jsxs)("div",{className:"relative w-full max-w-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-xl shadow-2xl p-6 md:p-8 text-white",children:[s.jsx("button",{onClick:m,className:"absolute top-3 right-3 text-white/80 hover:text-white transition-colors","aria-label":"Close popup",children:s.jsx(o.Z,{className:"w-6 h-6"})}),(0,s.jsxs)("div",{className:"text-center space-y-6",children:[s.jsx("div",{className:"h-32 flex items-center justify-center",children:s.jsx("h2",{className:`text-3xl md:text-4xl font-extrabold leading-tight transition-all duration-1000 ${n[r].className}`,style:{opacity:1,transform:"translateY(0)",animation:"fadeInUp 1s ease-out"},children:n[r].headline},r)}),s.jsx(i.z,{onClick:()=>{m(),d()},className:"w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5",children:"Start Free Trial"})]})]})}):null}},772:(e,t,r)=>{"use strict";r.d(t,{z:()=>c});var s=r(326),a=r(7577),o=r(6438),l=r(9360),i=r(7863);let n=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",primary:"bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 font-bold rounded-full shadow-md"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10",cta:"px-12 py-8 text-xl"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...l},c)=>{let d=a?o.g7:"button";return s.jsx(d,{className:(0,i.cn)(n({variant:t,size:r,className:e})),ref:c,...l})});c.displayName="Button"},938:(e,t,r)=>{"use strict";r.d(t,{CTAFormProvider:()=>b,O:()=>f});var s=r(326),a=r(7577),o=r.n(a),l=r(4019);function i({isOpen:e,onClose:t,children:r}){(0,a.useRef)(null);let[i,n]=o().useState(!1);return((0,a.useCallback)(e=>{"Escape"===e.key&&t()},[t]),i&&e)?s.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:(0,s.jsxs)("div",{className:"min-h-screen px-4 flex items-center justify-center",children:[s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 transition-opacity",onClick:t,"aria-hidden":"true"}),(0,s.jsxs)("div",{className:"relative bg-white rounded-lg w-full max-w-md mx-auto my-8 md:my-16 shadow-xl transform transition-all",children:[s.jsx("button",{onClick:t,className:"absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 p-2 rounded-full","aria-label":"Close modal",children:s.jsx(l.Z,{className:"h-5 w-5"})}),s.jsx("div",{className:"max-h-[90vh] overflow-y-auto",children:s.jsx("div",{id:"hubspot-form-container",className:"w-full min-h-[400px]",children:r})})]})]})}):null}var n=r(4723),c=r(7256),d=r(4064);let m=c.z.object({firstName:c.z.string().min(2,"First name is required"),lastName:c.z.string().min(2,"Last name is required"),email:c.z.string().email("Invalid email address").refine(e=>{let t=e.split("@")[1]?.toLowerCase();return!!t&&!["gmail.com","yahoo.com","hotmail.com","outlook.com","aol.com"].includes(t)},"Please use your work email address"),phoneNumber:c.z.string().min(10,"Phone number must be at least 10 digits").regex(/^[0-9+\-() ]+$/,"Invalid phone number format"),companyName:c.z.string().min(2,"Company name is required"),message:c.z.string().optional()});function u({onSubmit:e,onClose:t,isSubmitting:r}){let{register:a,handleSubmit:o,formState:{errors:l},reset:i}=(0,n.cI)({resolver:(0,d.F)(m)}),c=async t=>{try{await e(t),i()}catch(e){console.error("Form submission error:",e)}};return(0,s.jsxs)("form",{onSubmit:o(c),className:"space-y-4",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"firstName",className:"block text-sm font-medium text-gray-700 mb-1",children:"First Name"}),s.jsx("input",{...a("firstName"),type:"text",id:"firstName",placeholder:"John",className:`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 placeholder-gray-400 ${l.firstName?"border-red-500":"border-gray-300"}`,disabled:r}),l.firstName&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:l.firstName.message})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"lastName",className:"block text-sm font-medium text-gray-700 mb-1",children:"Last Name"}),s.jsx("input",{...a("lastName"),type:"text",id:"lastName",placeholder:"Doe",className:`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 placeholder-gray-400 ${l.lastName?"border-red-500":"border-gray-300"}`,disabled:r}),l.lastName&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:l.lastName.message})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Work Email"}),s.jsx("input",{...a("email"),type:"email",id:"email",placeholder:"john@company.com",className:`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 placeholder-gray-400 ${l.email?"border-red-500":"border-gray-300"}`,disabled:r}),l.email&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:l.email.message})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"phoneNumber",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),s.jsx("input",{...a("phoneNumber"),type:"tel",id:"phoneNumber",placeholder:"(123) 456-7890",className:`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 placeholder-gray-400 ${l.phoneNumber?"border-red-500":"border-gray-300"}`,disabled:r}),l.phoneNumber&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:l.phoneNumber.message})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"companyName",className:"block text-sm font-medium text-gray-700 mb-1",children:"Company Name"}),s.jsx("input",{...a("companyName"),type:"text",id:"companyName",placeholder:"Acme Inc.",className:`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 placeholder-gray-400 ${l.companyName?"border-red-500":"border-gray-300"}`,disabled:r}),l.companyName&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:l.companyName.message})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message (Optional)"}),s.jsx("textarea",{...a("message"),id:"message",rows:4,placeholder:"Tell us about your needs...",className:`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 placeholder-gray-400 ${l.message?"border-red-500":"border-gray-300"}`,disabled:r}),l.message&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:l.message.message})]}),(0,s.jsxs)("div",{className:"flex justify-end space-x-3 mt-6",children:[s.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors",disabled:r,children:"Cancel"}),s.jsx("button",{type:"submit",disabled:r,className:"px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-colors",children:r?"Submitting...":"Start Trial"})]})]})}var p=r(2179),h=r(7863);function x({show:e,onClose:t,message:r="Thank you! We'll be in touch shortly."}){return(0,s.jsxs)("div",{className:(0,h.cn)("fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 transform z-50 flex items-center gap-3 border border-green-200",e?"translate-y-0 opacity-100":"-translate-y-4 opacity-0 pointer-events-none"),children:[s.jsx(p.Z,{className:"h-6 w-6 text-green-600"}),s.jsx("p",{className:"text-gray-800 font-medium",children:r})]})}let g=(0,a.createContext)(void 0);function b({children:e}){let[t,r]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!1),[n,c]=(0,a.useState)(!1),[d,m]=(0,a.useState)(!1),p=async e=>{c(!0);try{if(!(await fetch("/api/hubspot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw Error("Failed to submit form");r(!1),m(!0)}catch(e){throw console.error("Form submission error:",e),e}finally{c(!1)}},h=()=>{r(!1)},b=()=>{l(!1)};return(0,s.jsxs)(g.Provider,{value:{openHubspotForm:()=>{r(!0)},openHubspotMeeting:()=>{l(!0)},isFormModalOpen:t,isMeetingModalOpen:o,closeFormModal:h,closeMeetingModal:b},children:[e,s.jsx(x,{show:d,onClose:()=>m(!1),message:"Thank you! We'll be in touch shortly to discuss how we can help you save time on compliance."}),s.jsx(i,{isOpen:t,onClose:h,children:(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Get Started with DTG"}),s.jsx("p",{className:"text-gray-600 mb-6",children:"Fill out the form below and we'll be in touch shortly."}),s.jsx(u,{onSubmit:p,onClose:h,isSubmitting:n})]})}),s.jsx(i,{isOpen:o,onClose:b,children:(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Schedule a Meeting"}),s.jsx("div",{className:"w-full h-[800px]",children:s.jsx("iframe",{src:"https://meetings.hubspot.com/jhamdi?embed=true",frameBorder:"0",style:{width:"100%",height:"100%",minHeight:"800px",border:"none"},title:"Schedule Meeting"})})]})})]})}function f(){let e=(0,a.useContext)(g);if(void 0===e)throw Error("useCTAForm must be used within a CTAFormProvider");return e}},7863:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(1135),a=r(1009);function o(...e){return(0,a.m6)((0,s.W)(e))}},2991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>d});var s=r(9510),a=r(7366),o=r.n(a);r(7272);var l=r(8570);let i=(0,l.createProxy)(String.raw`C:\Users\youne\Desktop\Mydtgcompliance secberus\contexts\cta-form-context.tsx#CTAFormProvider`);(0,l.createProxy)(String.raw`C:\Users\youne\Desktop\Mydtgcompliance secberus\contexts\cta-form-context.tsx#useCTAForm`);var n=r(9720);let c=(0,r(5782).default)(()=>r.e(664).then(r.bind(r,2664)),{loadableGenerated:{modules:["app\\layout.tsx -> @/components/conversion-popup"]},ssr:!1}),d={metadataBase:new URL("https://dtgcompliance.vercel.app"),title:{default:"DTG Compliance | Cloud Security & Compliance Management",template:"%s | DTG Compliance"},description:"Eliminate compliance gaps and minimize audit risks with DTG Compliance. Enterprise-grade cloud security and compliance management solutions. Trust. But Verify!",keywords:"cloud compliance, security compliance, audit risk management, enterprise security, cloud governance, DTG Compliance, Secberus"};function m({children:e}){return(0,s.jsxs)("html",{lang:"en",className:"scroll-smooth",children:[(0,s.jsxs)("head",{children:[s.jsx("meta",{name:"theme-color",content:"#7c3aed"}),s.jsx("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),s.jsx("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),s.jsx(n.default,{id:"schema-org",type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"DTG Compliance",applicationCategory:"SecurityApplication",description:"Cloud security and compliance management solution",operatingSystem:"Cloud",applicationSubCategory:"Enterprise Security",offers:{"@type":"Offer",availability:"https://schema.org/InStock",price:"0",priceCurrency:"USD"},provider:{"@type":"Organization",name:"DTG Compliance",description:"Enterprise cloud security and compliance management solutions provider",url:"https://dtgcompliance.vercel.app"}})})]}),s.jsx("body",{className:o().className,children:(0,s.jsxs)(i,{children:[e,s.jsx(c,{})]})})]})}},9644:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(9510);function a(){return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"}),s.jsx("p",{className:"text-gray-600",children:"Loading..."})]})})}},7272:()=>{}};