import "./App.css";
import Popup from "./options/Components/PopupComponents/Popup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Popup />
    </QueryClientProvider>
  );
}

export default App;
