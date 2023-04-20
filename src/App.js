import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./component/Header/Header";
import HeaderContent from "./component/Header/HeaderContent";
import HeaderFooter from "./component/Header/HeaderFooter";
import About from './component/About/About';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="bar" style={{ scaleX }} />
      <div className="main-app">
        <div className="header-wrapper">
          <Header />
        </div>
        <section>
          <HeaderContent />
        </section>
        <HeaderFooter />
        <section>
          <About />
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
    </>
  );
}

export default App;
