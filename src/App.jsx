import Header from "./components/Header/Header";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div>
      <Header />
      <h1 className="app-title">Reviews Website Prompt Project</h1>
      <ReviewSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
