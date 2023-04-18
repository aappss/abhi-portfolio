import AnimatedCursor from "react-animated-cursor";
import Header from "./component/Header/Header";
import HeaderContent from "./component/Header/HeaderContent";
import HeaderFooter from "./component/Header/HeaderFooter";

function App() {
  return (
    <div className="main-app">
      <div className="header-wrapper">
        <Header />
      </div>
      <section>
        <HeaderContent />
      </section>
      <HeaderFooter />
      <section>
        <HeaderContent />
      </section>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        innerScale={0.5}
        outerScale={5}
        outerAlpha={0.2}
        hasBlendMode={true}
        outerStyle={{
          border: '0px solid #fff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#fff'
        }}
      />
    </div>
  );
}

export default App;
