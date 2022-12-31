const ServiceArea = () => {
  return (
    <section>
      <div className="container mx-auto border-b border-border-light py-10">
        <div className="grid grid-cols-4 gap gap-7">
          <div className="flex items-center gap-4">
            <img
              className="h-11"
              src="/assets/services/service1.png"
              alt="service"
            />
            <div>
              <h4 className="text-base">Fast & Secure Delivery</h4>
              <span className="text-base">Tell about your service.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="h-11"
              src="/assets/services/service2.png"
              alt="service"
            />
            <div>
              <h4 className="text-base">Money Back Guarantee</h4>
              <span className="text-base">Within 10 days.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="h-11"
              src="/assets/services/service3.png"
              alt="service"
            />
            <div>
              <h4 className="text-base">24 Hour Return Policy</h4>
              <span className="text-base">No question ask.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="h-11"
              src="/assets/services/service4.png"
              alt="service"
            />
            <div>
              <h4 className="text-base">Pro Quality Support</h4>
              <span className="text-base">24/7 Live support.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
