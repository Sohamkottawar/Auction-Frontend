import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-bannerImg bg-repeat  bg-cover bg-bottom">
      <div className="absolute inset-0 bg-bannerImg bg-cover bg-center lg:bg-fixed sm:bg-scroll">
        <div className="container mx-auto mb-40 px-20 py-64">
            <h1 className="text-white uppercase text-7xl font-bold">
              Choose your <br />best Player
            </h1>
            <p className="text-gray-300 w-full max-w-2xl my-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            TIt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
            </p>
        </div>
       </div> 
         
      <div className="relative z-10 bg-transparent py-4 px-4 sm:px-8 lg:px-16">
        {/* The Navigation and other content go here */}
        <Navigation />
      </div>
      <div className="bg-bannerImg2 bg-cover bg-bottom py-64">
        <div className="container mx-auto px-20">
          {/* Add any additional content here for the second section */}
        </div>
      </div>
      <div className="bg-bannerImg2 bg-cover bg-bottom py-96">
          <div className="container mx-auto text-center r align-text-top">
            <h2 className="text-4xl font-bold text-red-800 mb-4 text-center">
              Advanced Features
            </h2>
            <p className="text-gray-600 font-bold ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
           </p>
          </div>          
      </div>
      <div className="bg-bannerImg2 bg-cover bg-bottom py-96">
          <div className="container mx-auto text-center r align-text-top">
            <h2 className="text-4xl font-bold text-red-800 mb-4 text-center ">
              Pricing Plan
            </h2>
            <p className="text-gray-600 font-bold ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
           </p>
          </div>          
      </div>
      <div className="bg-bannerImg2 bg-cover bg-bottom py-96">
          <div className="container mx-auto text-center r align-text-top">
            <h2 className="text-4xl font-bold text-red-800 mb-4 text-center">
              Get in Touch with us!
            </h2>
          </div>          
      </div>
    </div>
      
   
    
  );
}
