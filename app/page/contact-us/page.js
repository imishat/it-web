function Page() {
  return (
    <div className="space-y-4 h-screen">
      <h2 className="text-5xl font-bold flex justify-center mt-6">
        Contact us
      </h2>
      <p>
        Thank you for considering IT Platform BD for your digital marketing
        needs. We are a leading digital marketing agency dedicated to helping
        businesses thrive in the online world. Whether you need assistance with
        social media marketing, search engine optimization, content creation, or
        website development, our team of experts is here to provide you with
        top-notch services.
      </p>

      <p>
        To get in touch with us, you can reach out to our company number at +1
        (786) 947-3724. Our friendly and knowledgeable customer service
        representatives are ready to answer any questions you may have and guide
        you through our services. You can also email us at
        itplatformbd24@gmail.com for any inquiries or to schedule a
        consultation.
      </p>

      <p>
        At IT Platform BD, we value strong relationships with our clients and
        believe in providing personalized solutions tailored to your specific
        business goals. Our team of skilled professionals is passionate about
        helping businesses establish a strong online presence and achieve
        success in the digital realm.
      </p>

      <p>
        Don't hesitate to contact us today to discuss your digital marketing
        needs. We look forward to partnering with you and helping your business
        thrive in the ever-evolving digital landscape.
      </p>

      {/* Contact us form */}
      <div className="flex items-center w-full">
        <div className="w-full space-y-4">
          <p>Best regards,</p>
          <p>Mobile: +1 (786) 947-3724</p>
          <p>Mobile: +44 7307 346912</p>
          <p>Email: itplatformbd24@gmail.com</p>

          <p>Address: World Wide</p>

          <p>[Nahid] IT Platform BD</p>
        </div>
        <form className="w-full">
          <div class="mb-1">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full border  px-3 py-4"
            />
          </div>
          <div class="mb-1">
            <input
              type="email"
              placeholder="Your Email"
              class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        "
            />
          </div>
          <div class="mb-1">
            <textarea
              rows="4"
              placeholder="Your Message"
              class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        "
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="
                        w-full
                        text-white
                        bg-orange-500 hover:bg-orange-400 duration-300
                        rounded
                        border 
                        p-3
                        "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
