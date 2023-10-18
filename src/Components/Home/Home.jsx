import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-10 bg-cover"
        style={{
          backgroundImage:
            "url(https://consumer.tcimg.net/assets/_next/static/images/hero-image-xl-da74f735c7d818b0df4545b958540724.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Your Dream Car Awaits! Explore Now. </h1>
            <button className="text-white bg-accent-focus btn">Shop Now</button>
          </div>
        </div>
      </div>
      <Brands></Brands>
    </div>
  );
};

export default Home;
