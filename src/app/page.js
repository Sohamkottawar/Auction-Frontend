import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-bannerImg bg-repeat  bg-cover bg-bottom">
      <div className="absolute inset-0 bg-bannerImg bg-cover bg-center lg:bg-fixed sm:bg-scroll">
        <div className="container mx-auto mb-40 px-20 py-64">
            <h1 className="text-white uppercase text-7xl font-bold">
              Choose your <br />best Player
            </h1>
            <p className="text-white w-full max-w-2xl my-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            TIt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
            </p>
        </div>
       
      </div>
      <div className="relative z-10 bg-transparent py-4 px-4 sm:px-8 lg:px-16">
        {/* The Navigation and other content go here */}
        <Navigation />
      </div>
    </div>
  );
}
