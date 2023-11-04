import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import FormProvider from "./context/FormProvider.jsx";
import ChatGroupProvider from "./context/ChatGroupProvider.jsx";
import ScreenSizeProvider from "./context/ScreenSizeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormProvider>
    <ScreenSizeProvider>
      <ChatGroupProvider>
        <App />
      </ChatGroupProvider>
    </ScreenSizeProvider>
  </FormProvider>
);
