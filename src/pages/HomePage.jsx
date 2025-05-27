import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import Facility from '../components/Facility'
import Faq from '../components/faq/Faq'
import FeaturedProduct from '../components/FeaturedProduct'
import NewProduct from '../components/NewProduct'
import OfferSection from '../components/OfferSection'
import SpringSale from '../components/SpringSale'

const HomePage = () => {
  return (
    <>
    <Banner/>
    <Facility/>
    <FeaturedProduct/>
    <OfferSection/>
    <NewProduct/>
    <SpringSale/>
    <BestSeller/>
    <Faq/>
    </>
  )
}

export default HomePage