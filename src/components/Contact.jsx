import React, { useState, FormEvent } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { toast } from "react-hot-toast"; // Make sure this is installed

const Contact = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    email: "",
    phone: "",
    Lname: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will contact you shortly.");
    setFormData({
      Fname: "",
      email: "",
      phone: "",
      Lname: "",
      message: "",
    });
    alert("Thank You! We will contact you shortly.");
  };

  return (
    <section id="contact" className="p-8 md:p-12 lg:p-20 max-w-7xl mx-auto">
      <div className="bg-white">
        {/* Head info */}
        <div className="flex flex-col gap-4 items-center mb-8">
          <h1 className="bg-red-100 text-red-500 rounded-2xl px-4 py-1 w-fit font-semibold">
            Contact Us
          </h1>
          <h3 className="font-semibold text-xl md:text-2xl">
            Let's Build Something Amazing
          </h3>
          <p className="text-gray-500 text-center">
            Ready to start your new lifestyle, Contact us today
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-stretch mt-10 gap-10">
          {/* Contact Numbers */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 md:gap-10 h-full justify-center">
            <div className="flex p-4 border-2 border-gray-300 hover:border-red-500 rounded-lg gap-5 transition duration-300 ease-in-out">
              <div className="bg-red-100 rounded-xl p-2 h-fit">
                <Phone className="text-red-500 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1 text-lg">Phone</h3>
                <p className="text-gray-600">+91 9377221716</p>
                <p className="text-gray-600">+91 9327168439</p>
              </div>
            </div>

            <div className="flex p-4 border-2 border-gray-300 hover:border-red-500 rounded-lg gap-5 transition duration-300 ease-in-out">
              <div className="bg-red-100 rounded-xl p-2 h-fit">
                <Mail className="text-red-500 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1 text-lg">Email</h3>
                <p className="text-gray-600">sun@gmail.com</p>
              </div>
            </div>
            <div className="flex p-4 border-2 border-gray-300 hover:border-red-500 rounded-lg gap-5 transition duration-300 ease-in-out">
              <div className="bg-red-100 rounded-xl p-2 h-fit">
                <Clock className="text-red-500 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1 text-lg">Working Hours</h3>

                <p className="text-gray-600">Mon-Sun: 10:00AM-7:00PM</p>

                <p className="text-gray-600">
                  Festival may affect working hours
                </p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="border-2 border-gray-300 p-6 md:p-8 rounded-lg w-full lg:w-2/3 h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <label className="block mb-1 text-gray-700 font-medium text-sm">
                    Full Name
                  </label>

                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, Fname: e.target.value })
                    }
                    placeholder="First Name"
                    className=" rounded-lg px-3 py-2 w-full border border-gray-500 "
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-700 font-medium text-sm">
                    Project Type
                  </label>

                  <input
                    required
                    value={formData.Lname}
                    onChange={(e) =>
                      setFormData({ ...formData, Lname: e.target.value })
                    }
                    placeholder="Last Name"
                    className="rounded-lg px-3 py-2 w-full border border-gray-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-700 font-medium text-sm">
                    Phone Number
                  </label>

                  <input
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 Mobile Number"
                    className="rounded-lg px-3 py-2 w-full border border-gray-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-700 font-medium text-sm">
                    Email Address
                  </label>

                  <input
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter Your Email ID"
                    className="rounded-lg px-3 py-2 w-full border border-gray-500"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block mb-1 text-gray-700 font-medium text-sm">
                    Message
                  </label>

                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="What are you looking for?"
                    rows={4}
                    className="rounded-lg px-3 py-2 w-full border border-gray-500 h-auto resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 font-semibold transition duration-300 w-full md:w-auto cursor-pointer" // Removed redundant onSubmit prop from button
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
