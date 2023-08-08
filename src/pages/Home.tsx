import { Button } from '@/components/ui/button';
import banner from '@/assets/images/24307396_6920933.jpg';
// import hero from '@/assets/images/hero.png';
import Footer from '@/layouts/Footer';
import HomeProduct from '@/components/HomeProduct';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Hello <br /> SOLAR PLUSE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary mt-20">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" style={{ height: '500px' }} />
        </div>
      </div>
      <HomeProduct />
      <Footer />
    </>
  );
}
