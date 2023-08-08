import { Button } from '@/components/ui/button';
import banner from '@/assets/images/23186847_6736959.jpg';
import Footer from '@/layouts/Footer';
import HomeProduct from '@/components/HomeProduct';
import SellingBanner from '@/components/SellingBanner';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            <span className="text-red-500 text-6xl">Get</span> Your New <br />
            <span className="text-red-500 text-6xl">Book</span> with The <br />
            <span className="text-red-500 text-6xl">Best</span> Price
          </h1>

          <div className="text-primary mt-20">
            <p>
              <span className="text-red-500 ">From</span> applied literature to
              educational resources we have a lot of textbooks
            </p>
            <p>
              to offer you we provide only the{' '}
              <span className="text-red-500 ">best</span> book for rent
            </p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" style={{ height: '500px' }} />
        </div>
      </div>
      <HomeProduct />
      <SellingBanner />
      <Footer />
    </>
  );
}
