import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import { data } from "../utils/data";
import Navbar from '../components/NavBar';
import Footer from "../components/Footer";
import Slider from "../components/Slider"

export default function Home() {
  return (
    <div>
      <Layout title={"home page"}>
      <Slider />
      <section id="productos" className="productos-section"/>
      <section id="ofertas" className="ofertas-section"/>
        <h2 className="text-center mt-5 mb-5">Productos y Ofertas</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {data.products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
        </div>
        </Layout>
        <Footer />
    </div>
  );
}
