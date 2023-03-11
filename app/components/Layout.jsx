import NavTop from './NavTop'
import NavBottom from './NavBottom'
import NavLeft from './NavLeft'
import ModalProvider from "@/providers/modalProvider";

export default function Layout({ children }) {
    return (
     <ModalProvider>
         <div>
             <div className="app">
                 <NavLeft />
                 <NavTop />
                 <div className="main">
                     {children}
                     <NavBottom />
                 </div>
             </div>
             <div id="modals"></div>
         </div>
     </ModalProvider>
    )
  }