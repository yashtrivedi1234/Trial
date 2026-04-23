import Herosection from "./components/Herosection";
import KaashtKartAbout from "./components/Kaashtkartabout";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import PopularProducts from "./components/PopularProducts";
import PromoCards from "./components/PromoCards";
import RecentEvents from "./components/RecentEvents";
import CallToAction from "./components/CallToAction";
import LatestArticles from "./components/LatestArticles";
import FAQ from "./components/FAQ";
import SectionProductGrid from "./components/SectionProductGrid";
import TrustStrip from "./components/TrustStrip";
export default function KaashtKartPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="mb-8 md:mb-10">
        <Herosection />
      </div>
      <KaashtKartAbout />
      <CategorySection />
      <PromoCards />
      <FeaturedProducts />
      <PopularProducts />
      <TrustStrip />
      <SectionProductGrid />
      <RecentEvents />
      <CallToAction />
      <LatestArticles />
      <FAQ />
      
    </div>
  );
}
