import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import Facility from '../components/Facility'
import FeaturedProduct from '../components/FeaturedProduct'
import NewProduct from '../components/NewProduct'
import OfferSection from '../components/OfferSection'

const HomePage = () => {
  return (
    <>
    <Banner/>
    <Facility/>
    <FeaturedProduct/>
    <OfferSection/>
    <NewProduct/>
    {/* <BestSeller/> */}
    </>
  )
}

export default HomePage