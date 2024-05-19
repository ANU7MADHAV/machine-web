import Image from "next/image";
import about1 from "@/public/about-us1.jpeg";
import about2 from "@/public/about-us2.jpeg";

const FirstSection = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <section>
          <h2 className="font-semibold my-3 text-center text-xl">About us</h2>
          <p className="font-serif text-sm my-3">
            Welcome to Phoenix Packaging Solutions, your trusted partner in the
            world of packaging solutions. Situated at Door No: 13/183 A, Opp.
            Municipal Building, Koorkenchery, Thrissur, our company specializes
            in trading high-quality packing machines to meet the diverse needs
            of modern businesses.
          </p>
        </section>
        <Image src={about1} alt="about-us-1" />
      </div>
      <div className="md:grid grid-cols-2 my-3 items-center gap-x-3">
        <Image src={about2} alt="about-us" className="md:block hidden" />
        <section className="my-3">
          <h2 className="font-semibold my-3 text-center text-xl">Our Story</h2>
          <p className="font-serif text-sm my-3">
            Phoenix Packaging Solutions is the brainchild of Mr. Bhagyesh, a
            seasoned entrepreneur with a passion for delivering excellence in
            every aspect of the packaging industry. With a deep-rooted
            understanding of the market and years of practical experience, Mr.
            Bhagyesh leads our team with a commitment to customer satisfaction
            and innovation.
          </p>
        </section>
        <Image src={about2} alt="about-us" className="visible md:hidden" />
      </div>
    </div>
  );
};

export default FirstSection;
