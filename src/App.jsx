import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./layouts/LeftContainer";

import Visualization from "./layouts/Visualization/Visualization";

function App() {
  return (
    <div>
      <Header />
      <main className="w-full min-h-screen flex flex-grow items-center justify-center bg-gray-200 flex-wrap md:flex-nowrap">
        <LeftContainer />
        <Visualization />

      </main>
      <Footer />

    </div>
  );
}

export default App;
