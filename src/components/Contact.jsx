import React from "react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cacb3383-3400-4f20-a270-61ad04ebbf31");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-[400px] md:ml-[35%] flex items-center justify-center">
      <div className="bg-white m-7 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className='text-[36px] rowdies-bold pb-3 text-center font-bold'>Contact Us
          <span className='block mt-2 mx-auto w-[64px] border-t-4 border-[#ff7a32]'></span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a32]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a32]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a32]"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#ff7a32] text-white font-semibold rounded-lg hover:bg-white hover:border-2 hover:text-black border-[#ff7a32] focus:outline-none focus:ring-2 focus:ring-[#ff7a32]"
          >
            Submit Form
          </button>
        </form>

        <div className="mt-4 text-center text-gray-700">{result}</div>
      </div>
    </div>
  );
}

export default Contact;
