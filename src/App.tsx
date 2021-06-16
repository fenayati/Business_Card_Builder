import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import HCardBuilder from "./pages/HCardBuilder";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HCardBuilder />
    </ThemeProvider>
  );
}

export default App;
