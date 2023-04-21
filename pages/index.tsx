import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";

type Inputs = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const payload = await response.json();
      if (!payload.success) {
        //
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="columns is-multiline"></div>
      <section className="section header hero is-large">
        <div className="columns container">
          <div className="column is-four-fifths">
            <div className="column is-12 is-6-desktop mx-auto">
              <p className="title">Payfona</p>
              <p className="subtitle">
                We provide accurate invoicing solutions for businesses of all
                sizes.
              </p>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="button is-primary"
                  onClick={() => {
                    router.push("https://payfona.netlify.app/register");
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
      <section className="about-section" id="about-section">
        <div className="about-section-intro">
          <p className="header-small is-upper-case">What is Payfona</p>
          <h1 className="header-large">Power Your Payments with Payfona.</h1>
          <p className="description">
            Welcome to Payfona - your one-stop solution for all your software
            service needs! Our business is dedicated to providing you with
            top-notch invoicing, subscription management, and virtual
            point-of-sale (POS) services that are easy to use, reliable, and
            affordable. At Payfona, we understand that managing financial
            transactions can be a challenging task for any business. That&apos;s
            why we&apos;ve designed our software services to simplify the
            process, so you can focus on what really matters - growing your
            business.
          </p>
        </div>
        <div className="columns m-5 about-section-first">
          <div className="column">
            <Image
              src="/images/about-section-first.jpg"
              alt="About Section Image"
              width={600}
              height={600}
            />
          </div>
          <div className="column">
            <h1 className="is-size-1">Invoicing</h1>
            <p className="about-section-info is-mobile">
              Say goodbye to the hassle of manually creating and tracking
              invoices. With Payfona, you can quickly generate
              professional-looking invoices and send them to your clients with
              just a few clicks. Our platform also allows you to set up
              automatic payment reminders and add payment options, so you can
              get paid on time and keep your cash flow steady
            </p>
          </div>
        </div>
        <div className="columns m-5 about-section-first">
          <div className="column">
            <h1 className="is-size-1">Subscriptions</h1>
            <p className="about-section-info is-mobile">
              If your business offers subscription-based services, Payfona can
              help you manage them seamlessly. Our software makes it easy to
              create, update, and cancel subscriptions, as well as track
              customer usage and billing history. Whether your own a gym or your
              are a landlord we can help with recurring payments
            </p>
          </div>
          <div className="column">
            <Image
              src="/images/about-section-second.jpg"
              alt="About Section Image"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="columns m-5 about-section-first">
          <div className="column">
            <Image
              src="/images/about-section-third.jpg"
              alt="About Section Image"
              width={600}
              height={600}
            />
          </div>
          <div className="column">
            <h1 className="is-size-1">Virtual (POS)</h1>
            <p className="about-section-info is-mobile">
              If your business offers subscription-based services, Payfona can
              help you manage them seamlessly. Our software makes it easy to
              create, update, and cancel subscriptions, as well as track
              customer usage and billing history. Whether your own a gym or your
              are a landlord we can help with recurring payments
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="columns contact-us">
          <div className="column left-show">
            <h1 className="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">
              Contact Us
            </h1>
            <p className="feedback-text">
              We all love feedback especially us, reach out to us on anything
              and everything
            </p>
          </div>
          <div className="column right-details">
            <div>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className={`input ${errors.name && "is-danger"}`}
                          type="text"
                          placeholder="Your Name"
                          {...register("name", {
                            required: "Name is required.",
                            maxLength: {
                              value: 20,
                              message: "Name is too long",
                            },
                            minLength: {
                              value: 3,
                              message: "Name too short",
                            },
                          })}
                        />
                      </div>
                      {errors.name && (
                        <p className="help is-danger">
                          {errors.name.message || "Input is invalid"}
                        </p>
                      )}
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className={`input ${errors.email && "is-danger"}`}
                          type="email"
                          placeholder="Your Email"
                          {...register("email", {
                            required: "Email is required",
                            maxLength: {
                              value: 30,
                              message: "Email is too long",
                            },
                            pattern: {
                              value:
                                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/,
                              message: "Email is not valid",
                            },
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p className="help is-danger">
                          {errors.email.message || "Input is invalid"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className={`input ${errors.topic && "is-danger"}`}
                          type="text"
                          placeholder="Provide the subject of this communication"
                          {...register("topic", {
                            required: "A topic is required",
                          })}
                        />
                      </div>
                      {errors.topic && (
                        <p className="help is-danger">
                          {errors.topic.message || "Invalid input"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <textarea
                          className={`textarea ${
                            errors.message && "is-danger"
                          }`}
                          placeholder="Explain how we can help you"
                          {...register("message", {
                            required: "A message is required",
                          })}
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className="help is-danger">
                          {errors.message.message || "Invalid input"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <button className="button is-secondary is-block is-full-width text-white">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
