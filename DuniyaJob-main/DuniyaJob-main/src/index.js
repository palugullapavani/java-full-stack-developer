// import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "./context/AuthContext";
// import { QueryProvider } from "./lib/react-query/QueryProvider";
// import { ToastContainer,  } from "react-toastify";
import 'react-toastify/ReactToastify.css'

ReactDom.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    {/* <NextUIProvider> */}
        {/* <QueryProvider> */}
            {/* <AuthProvider> */}
                <App />
                {/* <ToastContainer /> */}
            {/* </AuthProvider>     */}
        {/* </QueryProvider> */}
        {/* </NextUIProvider> */}
    </BrowserRouter>

)