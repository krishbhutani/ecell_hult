import Image from 'next/image';
export default function HultPrizeAtNITHamirpur() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center bg-pink-400 text-white font-semibold text-lg h-80 px-5 py-10">
        <div className="flex items-center">
           <span className='mx-5'><Image className="h-14"  src="https://github.com/krishbhutani/ecell_hult/blob/master/app/Copy%20of%20Profile%20Pic.pptx%201.png?raw=true" alt="NIT-Logo" /></span>
          OnCampus <br> </br>Program
          <span className='mx-5'><Image className="h-14"  src="https://github.com/krishbhutani/ecell_hult/blob/master/app/n-i-t-hamirpur-logo-k9i9rshtvwz2dvm5.png?raw=true" alt="NIT-Logo" /></span>
        </div>
        <div className='mx-5'><Image className="h-14"  src="https://github.com/krishbhutani/ecell_hult/blob/master/app/E-Cell%20Logo%20-%20Release_Logo%20-%20White%20with%20Tagline.png?raw=true" alt="NIT-Logo"/></div>
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
            <div className="flex justify-start">
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
