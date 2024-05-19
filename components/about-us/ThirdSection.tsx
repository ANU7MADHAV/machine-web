import EnquiryForm from "./EnquiryForm";

const ThirdSection = () => {
  return (
    <div className="flex flex-col">
      <section className="text-center">
        <h3 className="font-semibold text-xl">Get in Touch With Us</h3>
        <p className="font-serif text-center text-sm my-3 ">
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
