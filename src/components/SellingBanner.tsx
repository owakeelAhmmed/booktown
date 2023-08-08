import banners from '@/assets/images/banner.jpg';

export default function SellingBanner() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-7 mb-7">
        <img src={banners} alt="" />
      </div>
    </>
  );
}
