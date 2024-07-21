import { ThemeProvider } from "./contexts/Theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider value={"dark"}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
