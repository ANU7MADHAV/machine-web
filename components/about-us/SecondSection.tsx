import { IoMdBasketball } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const SecondSection = () => {
  return (
    <div className="bg-[#FCFBF1] my-6 py-4 px-4">
      <section>
        <h2 className="font-semibold text-xl">Our Values</h2>
        <p className="font-serif text-sm my-3">
          At the core of Phoenix Packaging Solutions is a commitment to
          excellence, integrity, and customer satisfaction. We believe in
          building long-lasting relationships with our clients by providing
          top-notch products, unparalleled service, and innovative solutions
          tailored to their specific needs.
        </p>
      </section>
      <section>
        <h2 className="font-bold my-5 text-base">
          Why Choose Phoenix Packaging Solutions?
        </h2>
        <div className="flex flex-col items-center justify-around gap-y-5 lg:flex-row">
          <section className="mx-8">
            <h3 className="flex items-center gap-x-3 text-base font-medium">
              <span className="rounded-full bg-[#FFC048] p-[3px] text-xl text-white lg:p-[5px]">
                <IoMdBasketball />
              </span>
              Extensive Selection
            </h3>
            <p className="font-serif text-sm text-justify my-1 pl-1">
              We offer a wide variety of packaging machines to cater to diverse
              product types and packaging needs.
            </p>
          </section>
          <section className="mx-8">
            <h3 className="flex items-center gap-x-3 text-base font-medium">
              <span className="rounded-full bg-[#FFC048] p-[3px] text-xl text-white lg:p-[5px]">
                <IoShieldOutline />
              </span>
              Superior Protection
            </h3>
            <p className="font-serif text-sm text-justify my-1 pl-1">
              Our machines ensure your products arrive at their destination safe
              and sound.
            </p>
          </section>
          <section className="mx-8">
            <h3 className="flex items-center gap-x-3 text-base font-medium">
              <span className="rounded-full bg-[#FFC048] p-[3px] text-xl text-white lg:p-[5px]">
                <IoCallOutline />
              </span>
              Expert Support
            </h3>
            <p className="font-serif text-sm text-justify my-1 pl-1">
              Our knowledgeable team is here to assist you in selecting the
              right equipment and answer any questions you may have.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
