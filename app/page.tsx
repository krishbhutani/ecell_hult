export default function HultPrizeAtNITHamirpur() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center bg-pink-400 text-white font-semibold text-lg h-100 px-5">
        <div className="flex items-center">
          OnCampus Program
          <span className='mx-5'><img className="h-14"  src="https://imgs.search.brave.com/IxH6pcYFoBWdY3a_L9A9puv1nTAw9ePjZA7CyAGATXY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbi1p/LXQtaGFtaXJwdXIt/bG9nby1rOWk5cnNo/dHZ3ejJkdm01LnBu/Zw" alt="NIT-Logo" /></span>
        </div>
        <div><img className="h-14"  src="data:image/png;base64,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" /></div>
      </div>

      <div className="flex flex-col flex-1 justify-between h-auto">
        <div className="flex-1 bg-black p-5 md:p-10 flex flex-col md:flex-row justify-between">
          <div className="flex-1 mb-5 md:mb-0">
            <h1 className="text-3xl font-bold mb-5">
              Bring Your Ideas to Life with the
              <br />
              <span className='text-5xl font-bold text-yellow-300'>
                Hult Prize at NIT Hamirpur!
              </span>
            </h1>
            <p className="mb-10 text-lg text-gray-200">Your journey to creating impactful solutions starts here.</p>
            <p className="mb-5 text-lg font-bold text-white">While registering keep this details in mind:</p>
            <p className='text-gray-200'>Select the correct details:</p>
            <ul className="list-disc pl-5 mb-1 text-gray-200 mx-3">
              <li>Country: India</li>
              <li>City: Hamirpur</li>
              <li>College: NIT Hamirpur</li>
            </ul>
            <p>
              <span className="flex items-center text-yellow-200 mb-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                Failure to select these options will result in your entry being disqualified.
              </span>
            </p>
            <p className="text-gray-200">Double-check your information before submitting the form.</p>
            <p className="mb-5">Ensure that you complete the registration process by the deadline to avoid missing out on this opportunity.</p>
            <div className="flex justify-center">
                            <a href="https://www.hultprize.org/startup-pre-registration-is-now-open/"><button className="bg-pink-500 text-white font-bold text-lg h-14 rounded-lg px-6 py-2">Register Now</button></a>

            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <p className="md:text-3xl md:font-bold text-white text-2xl font-semibold text-center">Mark the Date</p>
            <p className="text-4xl md:text-5xl font-bold text-pink-500 text-center">19 January 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-300 text-black p-5 md:p-8 flex flex-col md:flex-row justify-between">
        <div className="my-6 mx-3 flex justify-center items-center md:block">
          <p className="text-xl font-bold mx-1">Changing the world through</p>
          <p className="text-4xl font-extrabold text-pink-500">social enterprise</p>
        </div>
        <div className="text-center md:text-right mt-5 md:mt-0">
          <p className="font-bold">Contact Us</p>
          <p>Mail us: ecell@nith.ac.in</p>
          <p>Call us:</p>
          <p>Kartik: +91 8275451335</p>
          <p>Gyan: +91 7992217544</p>
          <p>Vaishnav: +91 9545778555</p>
        </div>
      </div>
    </div>
  );
}
