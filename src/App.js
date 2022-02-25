import Banner from "./components/Banner";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Navbar from "./components/Navbar";

// const width = window.innerWidth;
// const breakpoint = 465;
function App(props) {
  return (
    <div>
      <Navbar />
      <Banner />
      <Body1 />
      <Body2 />
    </div>
  );
}

export default App;
