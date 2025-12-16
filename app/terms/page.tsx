'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingElements from '../components/FloatingElements';
import Footer from '../components/Footer';

function TermsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'portrait' | 'wedding'>('portrait');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'wedding') {
      setActiveTab('wedding');
    } else {
      setActiveTab('portrait');
    }
  }, [searchParams]);

  const portraitTerms = [
    'Client pays 50% to secure the shooting date and full payment is made on the day of the shoot.',
    'Please under no circumstances should you post our unedited photos(previews) posting without our approval is an offense.',
    'We do no refund.',
    'We don\'t give raw files out please but insisting comes at a fee please.',
    'Home Services Comes with an extra Charge of 800Cedis. Due to the conveying of Studio equipments.',
    'Additional 200cedis is added if it\'s a brand shoot eg, Hair, makeup.',
    'Rescheduling of a shoot attract 50% additional payment to the actual package selected.',
    'Clients settles all Transportations involved.',
    'Extra photo edit cost 100cedis.',
    'Additional GHc200 is added if it\'s a maternity Photoshoot.',
    '7 working days to produce results.',
    'Makeup at the studio attract GHc100 fee',
    'Hair Styling at the studio attract GHc100 fee',
    'Adding another person attract additional half of the actual package selected and number of pictures stay same.',
    'Express deliveries or Work comes with additional GHc400.',
    'Request for receipt anytime payment is made.',
    'Getting late for a shoot attract a penalty of GHc100.',
    'Raw Files are deleted after a month of Shooting…..So any extra edits should be discussed as soon as possible.',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <Navigation />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/legal.jpeg"
            alt="Terms and Conditions"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollAnimation animationType="zoom">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Terms and Conditions</span>
              <span className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl animate-pulse"></span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-lg text-gray-200 mb-6">
              Please read our terms and conditions carefully
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={400}>
            <div className="flex items-center justify-center gap-4 mt-6">
              <a 
                href="https://www.instagram.com/weddings_n_vows/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transform hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram - Weddings and Vows"
              >
                <svg className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/gido_photography/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transform hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram - Gido Photography"
              >
                <svg className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@weddings_n_vows?_r=1&_t=ZM-928FgsWHAca" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transform hover:scale-110 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Tabs */}
          <ScrollAnimation animationType="zoom">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab('portrait')}
                  className={`px-6 py-3 rounded-md font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeTab === 'portrait'
                      ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  Portrait
                </button>
                <button
                  onClick={() => setActiveTab('wedding')}
                  className={`px-6 py-3 rounded-md font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeTab === 'wedding'
                      ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  Wedding
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Portrait Tab Content */}
          {activeTab === 'portrait' && (
            <>
              <ScrollAnimation animationType="zoom">
                <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-8 text-center relative inline-block">
                  <span className="relative z-10">TERMS AND CONDITIONS</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 animate-pulse"></span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay={200}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <ul className="space-y-4">
                    {portraitTerms.map((term, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay={400}>
                <div className="mt-12 text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg mb-2">
                    FEEL FREE TO GO THROUGH OUR PORTRAITS
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    AND DO NOT FORGET WE OWN{' '}
                    <a 
                      href="https://www.instagram.com/weddings_n_vows/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold underline transition-colors"
                    >
                      @Weddings and Vows
                    </a>
                    {' '}on Instagram as well THANK YOU
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay={600}>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    MAKING PART-PAYMENT MEANS YOU HAVE AGREED TO THE TERMS AND POLICIES OF THE CONTRACT.
                  </p>
                </div>
              </ScrollAnimation>
            </>
          )}

          {/* Wedding Tab Content */}
          {activeTab === 'wedding' && (
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="text-center mb-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">TERMS AND CONDITIONS - LAST UPDATED, 22ND February, 2025</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">TERMS AND CONDITIONS</h2>
                  </div>

                  <p className="leading-relaxed">
                    You are welcome to Weddings_n_Vows. We are a media coverage company that focuses Photography, Videography and digital marketing. Below are the terms and conditions for the services rendered by our Company. Your use of our Services indicates your acceptance of these Terms and agreement to be bound by them. Acceptance of these Terms and Conditions creates a binding contract between You and Weddings_n_Vows, whereby you agree to use the Services only in accordance with these Terms. If you have questions about these Terms, please contact Customer Support. Your use of the Services is entirely conditioned on and subject to your compliance with these Terms. If you do not agree with these Terms, do not access or use the Services.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">Payment & Refund Policies</h3>
                    <p className="leading-relaxed">
                      We accept 50% as deposit to secure or book a date with us. The payment can be done By Bank Deposit or by mobile money account provided by our representative. The other 50% of payments should or can be made a day before the event or on the date of event. Kindly note that under no circumstance will any image or products will be sent until full payment is made to the accounts provided. Kindly note that we do not accept any payment in instalment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">CANCELATION</h3>
                    <p className="leading-relaxed">
                      Payments made are not refundable upon cancellation of booking. However, if event date changes, we will reschedule to another date provided the client accept to pay extra 50% of the chosen package. The payment made however is transferable to another client or as a voucher (same amount) for future use of our services if they had been a change in date and that date is not available. We are liable to refund the full amount if we fail to show up for the event after deposit has been made but no compensation should be made for situations beyond our control.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">MODE OF WORK</h3>
                    <p className="leading-relaxed">
                      We believe in working together with our clients to provide the best service and results. In view of this we require enough time when shooting important parts of events such us Bridal Preperation and Groom Dress up if necessary and Exclusive Pictures. In situations like this we require at least thirty minutes each to provide and do our best. In situations where client is not able to give us the chance and time to take these pictures or videos ( if videos are required in the selected package) due to pressure and time constraints we will not be held liable. And also booking us means you are in love with our style so we deliver our style and no more no less with regards to what we can and can not do.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">DELIVERY OF ITEMS</h3>
                    <p className="leading-relaxed mb-3">
                      Pre-wedding – A date is selected weeks before the appointed date for the images to be taken at a location recommended or selected by the client. However , if the location selected by client or photographer demands cost for the location where the pictures will be taken, the client will be liable for that cost if agreed upon. Watermarked Raw images are sent to client via cloud to select the number of images as stated on the package chosen. Final images of pre-wedding are sent 2-5 working days as at when the images were taken. Event final delivery : Kindly note that photo books, albums and frames are handled by a third party so such items will be delivered as to when we receive the finished products in case of any delays. Final Works delivery estimate is within 2 - 8 working weeks. (i.e Photos and Videos)
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Clients are to see to it that there's no form of treat or Force (DISRESPECT) on any representative of Weddings_n_Vows.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Any additional request made excluding the stated items on an invoice or package may or may not incur an extra cost to the client.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Meeting before wedding(CONSULTATION) is set at a fee.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Clients are to bare the cost of any form of transportation involved.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Attending the wedding rehearsal comes at a fee which can be bargained and agreed between our representative and the client.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Clients are to know that in situations that we are to lodge, accommodation fees are catered for by Clients.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>Clients are to see to it that any representative of Weddings_n_Vows is well feed for effective working.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">Receipt</h3>
                    <p className="leading-relaxed">
                      A receipt is generated once every payment is made towards an event – Full Name, Event Date, Event Locations. On the receipt is stated transactions made with us. Kindly insist and request for a receipt when payment or refund is made.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      © 2025 Weddings_n_Vows. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default function Terms() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
        <Navigation />
        <FloatingElements />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    }>
      <TermsContent />
    </Suspense>
  );
}

