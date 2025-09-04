import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Profile />
    </div>
  );
}
export default App;
