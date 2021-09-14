import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./GlobalStyles";
import Route from "./Route";

function App() {
  return (
    <>
      <HelmetProvider>
        <GlobalStyles />
        <Route />
      </HelmetProvider>
    </>
  );
}

export default App;
