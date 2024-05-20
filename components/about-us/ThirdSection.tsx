import EnquiryForm from "./EnquiryForm";

const ThirdSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:pl-12 items-center my-6 px-5 mt-12 ">
      <section className="text-center">
        <h3 className="font-semibold md:text-left text-xl">
          Get in Touch With Us
        </h3>
        <p className="font-serif md:text-left text-center text-sm my-3 ">
          Whether you&apos;re a small startup or a large corporation, Phoenix
          Packaging Solutions is here to meet all your packaging needs. Contact
          us today to discover how we can help your business thrive with our
          cutting-edge packaging solutions.
        </p>
      </section>
      <section>
        <EnquiryForm />
      </section>
    </div>
  );
};

export default ThirdSection;
