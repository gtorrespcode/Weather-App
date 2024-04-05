import Header from "./components/Header";
import WeatherArea from "./components/WeatherArea";
import OldProjectWarning from "./components/OldProjectWarning";
const oldProject = true;

function App() {
  if (oldProject) {
    return <OldProjectWarning />;
  } else {
    return (
      <div
        className="w-full h-screen bg-gradient-to-br from-[#12A8F9] to-[#034366] border-2 border-[#12A8F9]  py-8 
    md:bg-center  lg:bg-center"
      >
        <Header />
        <WeatherArea />
      </div>
    );
  }
}

export default App;
