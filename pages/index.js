import Image from 'next/image';
import Head from 'next/head';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FaHandsHelping, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faStethoscope, faHandsHelping, faBullhorn, faRocket, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb, faBookOpen, faTree, faUsers, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function SocialProject() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false); // State to control showing About Us
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const items = [
        {
          title: "EDUCATION",
          desc: "We are dedicated to providing a strong educational foundation that fosters critical thinking, instills core values, and nurtures creativity alongside essential knowledge and skills. Our goal is to empower individuals to become compassionate, informed, and responsible members of society, contributing meaningfully to its growth and development.",
          icon: faGraduationCap,
        },
        {
          title: "MEDICAL CAMPS",
          desc: "Our medical camps play a vital role in bridging the healthcare gap by delivering essential medical care and interventions to families and children in rural villages. These services ensure that health issues, which might otherwise go unnoticed, are identified and treated, improving overall community well-being.",
          icon: faStethoscope,
        },
        {
          title: "WOMEN EMPOWERMENT",
          desc: "Our women empowerment programs are dedicated to fostering independence and enhancing quality of life. We equip women with the essential tools and skills needed to achieve both personal and professional success, empowering them to take charge of their futures.",
          icon: faHandsHelping,
        },
        {
          title: "AWARENESS PROGRAMS",
          desc: "Our awareness efforts are dedicated to promoting preventive measures and empowering individuals. By encouraging proactive solutions, we aim to build stronger and healthier communities.",
          icon: faBullhorn,
        },
        {
          title: "MENTORSHIP",
          desc: "Through our dedicated mentorship programs, we support children, individuals, and families in making transformative changes. Our guidance fosters personal growth and empowers them to lead fulfilling and meaningful lives.",
          icon: faRocket,
        },
        {
          title: "SUSTAINABILITY INITIATIVE",
          desc: "Our sustainability initiatives are designed to help villages and social organizations achieve self-sufficiency. By promoting eco-friendly practices and empowering communities, we create lasting impacts that foster long-term resilience and sustainability.",
          icon: faLeaf,
        },
      ];
  return (
    <div>
      {/* Transparent Header */}
      <header className="bg-transparent text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">The Social Project</h1>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <nav className={`md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-gray-300" onClick={() => setShowAboutUs(false)}>Home</a></li>
              <li><a href="#about" className="hover:text-gray-300" onClick={() => setShowAboutUs(true)}>About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#get-involved" className="hover:text-gray-300">Get Involved</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#shop" className="hover:text-gray-300">Shop</a></li>
              <li><a href="#donate" className="hover:text-gray-300">Donate</a></li>
            </ul>
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 bg-transparent text-black p-4 absolute w-full left-0 top-16 z-20">
            <a href="#home" className="hover:text-gray-600" onClick={() => setShowAboutUs(false)}>Home</a>
            <a href="#about" className="hover:text-gray-600" onClick={() => setShowAboutUs(true)}>About</a>
            <a href="#projects" className="hover:text-gray-600">Projects</a>
            <a href="#blog" className="hover:text-gray-600">Blog</a>
            <a href="#get-involved" className="hover:text-gray-600">Get Involved</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
            <a href="#shop" className="hover:text-gray-600">Shop</a>
            <a href="#donate" className="hover:text-gray-600">Donate</a>
          </div>
        )}
      </header>

      {/* Main Section */}
      <section className="relative bg-gradient-to-r from-purple-400 to-pink-500 text-white p-8 flex flex-col md:flex-row items-center justify-center min-h-screen pt-24">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-lg mb-4 md:text-xl">SET THE CHANGE IN MOTION</h1>
          <p className="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl">
          Secure her path to a <br />brighter future&hellip;
          </p>
          <div className="flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Join Us"
              className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="p-3 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition duration-200 w-32">
              Join Us
            </button>
          </div>
        </div>

        {/* Image or About Us Section */}
        <div className="md:w-1/2 text-center">
          {showAboutUs ? (
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              
            </div>
          ) : (
            <Image src="/child.png" alt="A child receiving support" width={500} height={500} className="w-full h-auto object-cover rounded-lg" />
          )}
        </div>
      </section>

      {/* Empowering Communities Section */}
      <section className="bg-white text-gray-800 p-8 md:p-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">EMPOWERING COMMUNITIES: OVERCOMING THE CYCLE OF POVERTY AND INEQUALITY</h2>
          <p className="mb-4">
            In a world where poverty and inequality continue to hinder progress for millions, countless individuals and families are left without the resources they need to thrive. At The Social Project, we are committed to changing this narrative by empowering the most vulnerable members of our society—including children, youth, women, and marginalized communities—through education, mentorship, health camps, and social initiatives.
          </p>
          <p className="mb-4">
            Our mission is to provide essential support across various areas:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Education:</strong> Offering quality education and life skills to children and youth, ensuring they have the tools to build a brighter future.
            </li>
            <li>
              <strong>Women Empowerment:</strong> Empowering women through skills training and support programs, helping them achieve financial independence and improved quality of life.
            </li>
            <li>
              <strong>Health and Awareness:</strong> Conducting health camps, awareness programs, and environmental initiatives that promote well-being and sustainable living.
            </li>
            <li>
              <strong>Community Support:</strong> Collaborating with local organizations and social groups to foster growth and resilience within communities.
            </li>
          </ul>
          <p className="font-bold mb-4">
            Together, we can make a lasting impact—transforming lives and creating a world where everyone has the chance to succeed.
          </p>
          <div className="mt-8">
            <a href="#donate" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <div className="bg-white text-gray-800">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">What we do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-4 overflow-hidden">
                <div className="hexagon border-4 border-orange-500 flex justify-center items-center">
                  <FontAwesomeIcon icon={item.icon} className="text-3xl text-purple-500" />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          width: 128px; /* Set width for the hexagon */
          height: 128px; /* Set height for the hexagon */
          background-color: white; /* Background color for hexagon */
        }
      `}</style>
    </div>
    <div className="bg-gray-100">
  <div className="max-w-8xl mx-auto p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">
        A MODEL BRINGING POSITIVE IMPACT IN THE SOCIETY
      </h1>
      <p className="text-center text-lg text-gray-600">
        Can transform lives forever...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        
        {/* Love & Care Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Love & Care</h2>
          <p className="text-gray-600 mt-2">
            Children are the foundation of our society, and nurturing them with love and care is
            crucial for fostering a healthy, prosperous, and harmonious world. By surrounding children
            with compassion and support, we help them grow into well-rounded individuals who contribute
            positively to their communities and society at large.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-blue-500 p-4 rounded-lg">
            <FontAwesomeIcon icon={faHandsHelping} className="text-white text-3xl" />
          </div>
        </div>

        {/* Awareness Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Awareness</h2>
          <p className="text-gray-600 mt-2">
            Awareness is a vital tool that influences the minds and actions of the younger generation,
            equipping them to understand and engage with the world effectively. By fostering awareness
            in children, we prepare them to become informed, responsible, and empathetic individuals
            who are empowered to drive positive change in society.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-green-500 p-4 rounded-lg">
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-4xl" />
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Education</h2>
          <p className="text-gray-600 mt-2">
            Education is a fundamental pillar of societal development and advancement. It provides
            children with the essential knowledge, skills, and values needed to become informed,
            responsible, and engaged citizens. The benefits of education extend well beyond individual
            success; it drives economic growth, fosters social harmony, and promotes innovation
            throughout society.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-red-500 p-4 rounded-lg">
            <FontAwesomeIcon icon={faBookOpen} className="text-white text-3xl" />
          </div>
        </div>

        {/* Creating Opportunities Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Creating Opportunities</h2>
          <p className="text-gray-600 mt-2">
            Creating opportunities for children goes beyond merely providing access to education and
            resources. It involves empowering the next generation to realize their full potential and
            make meaningful contributions to society. By investing in these opportunities, we lay the
            foundation for a more prosperous, innovative, and harmonious world.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-purple-500 p-4 rounded-lg">
            <FontAwesomeIcon icon={faUsers} className="text-white text-3xl" />
          </div>
        </div>

        {/* Environment Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Environment</h2>
          <p className="text-gray-600 mt-2">
  The environment in which children grow up is vital in shaping their futures and, 
  consequently, the future of society. A supportive, nurturing, and stimulating environment 
  significantly enhances children&apos;s development and generates a ripple effect of positive 
  outcomes for the community and the world.
</p>

        </div>
        <div className="flex justify-center items-center">
          <div className="bg-green-600 p-4 rounded-lg">
            <FontAwesomeIcon icon={faTree} className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                <div className="mt-16 text-center bg-gradient-to-r from-gray-800 to-black p-4 md:p-8 rounded-lg">
  <h2 className="text-2xl font-bold text-white">Donate Now</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mt-8">
    {/* Donation Card 1 */}
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg md:text-xl font-bold">EmpowerHER</h3>
      <p className="text-lg mt-2">₹ 2,000</p>
      <p className="mt-4">Sponsor a Girl Child</p>
      <ul className="mt-4 text-sm">
        <li>Education & Child Development</li>
        <li>Mentorship & Guidance</li>
      </ul>
      <button className="mt-6 bg-white text-blue-500 font-bold py-2 px-4 rounded">Donate</button>
    </div>

    {/* Donation Card 2 */}
    <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg relative">
      <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-bl-lg">
        MOST COMMON
      </div>
      <h3 className="text-lg md:text-xl font-bold">KnowlEDGE</h3>
      <p className="text-lg mt-2">₹ 1,800</p>
      <p className="mt-4">Education & Child Development</p>
      <ul className="mt-4 text-sm">
        <li>Access to Quality Education</li>
        <li>Learning Resources</li>
      </ul>
      <button className="mt-6 bg-white text-green-500 font-bold py-2 px-4 rounded">Donate</button>
    </div>

    {/* Donation Card 3 */}
    <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg md:text-xl font-bold">HouseHOLD</h3>
      <p className="text-lg mt-2">₹ 2,200</p>
      <p className="mt-4">Support a Family</p>
      <ul className="mt-4 text-sm">
        <li>Basic Necessities</li>
        <li>Healthcare & Nutrition</li>
      </ul>
      <button className="mt-6 bg-white text-red-500 font-bold py-2 px-4 rounded">Donate</button>
    </div>

    {/* Donation Card 4 */}
    <div className="bg-purple-500 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg md:text-xl font-bold">ProVISION</h3>
      <p className="text-lg mt-2">₹ 2,000</p>
      <p className="mt-4">Support a Project</p>
      <ul className="mt-4 text-sm">
        <li>Community Development</li>
        <li>Infrastructure & Resources</li>
      </ul>
      <button className="mt-6 bg-white text-purple-500 font-bold py-2 px-4 rounded">Donate</button>
    </div>

    {/* Donation Card 5 */}
    <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg md:text-xl font-bold">One-Time Donation</h3>
      <p className="text-lg mt-2">Any Amount</p>
      <p className="mt-4">Any Project</p>
      <ul className="mt-4 text-sm">
        <li>Flexibility in Contribution</li>
        <li>Impact on Multiple Areas</li>
      </ul>
      <button className="mt-6 bg-white text-yellow-500 font-bold py-2 px-4 rounded">Donate</button>
    </div>
  </div>
</div>


      {/* Newsletter Section */}
      <div>
      <Head>
        <script async src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
       
      </Head>

      <div className="bg-gray-100">
        <div className="bg-white py-20">
          <h1 className="text-center text-5xl font-bold mb-8">IMPACT NARRATIVES</h1>
          <div className="flex justify-center items-center">
            <i className="fas fa-chevron-left text-3xl text-gray-400"></i>
            <div className="mx-4 p-4 bg-white flex items-center">
              <Image
                src="https://via.placeholder.com/300x200
"
                alt="Child with a hopeful expression"
                className="w-24 h-24 object-cover rounded-full mr-4"
              />
              <div>
              <p className="text-sm text-gray-600">
  &quot;This shop had everything I was looking for plus so much more. From the minute I walked in,
  everyone made me feel so incredibly welcome. I will definitely be back.&quot;
</p>

                <p className="text-sm text-gray-600 mt-2">- Nadia L.</p>
              </div>
              <div className="ml-4 p-4 bg-blue-500 text-white text-center">
                <p className="font-bold">JOIN HANDS WITH US TO MAKE MANY MORE DREAMS COME TRUE.</p>
              </div>
            </div>
            <i className="fas fa-chevron-right text-3xl text-gray-400"></i>
          </div>
        </div>

        <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black mb-4 md:mb-0">Subscribe to our newsletter</h2>
          <div className="flex items-center mb-4 md:mb-0">
            <input
              className="p-2 border border-gray-400 rounded-l dark:bg-gray-600 dark:text-white dark:border-gray-500"
              type="email"
              placeholder="Email"
            />
            <button className="bg-gray-400 text-white p-2 rounded-r">GO</button>
          </div>
          <button className="bg-teal-400 text-white p-2 rounded">Donate</button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* First Card */}
          <div className="bg-white p-4 shadow-md">
            <FaHandsHelping className="text-4xl text-teal-400 mb-4" /> {/* Replace image with icon */}
            <p className="text-lg font-bold text-black">A Positive IMPACT can transform lives forever</p>
            <button className="bg-teal-400 text-white p-2 mt-4 rounded">
              MAKE THIS WORLD A BETTER PLACE
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-black">Know a Child in Need?</h3>
            <button className="bg-teal-400 text-white p-2 mb-4 rounded">Call +91 971 000 1010 Today!</button>
            <p className="text-sm flex items-center text-black">
              <FaPhone className="mr-2" /> +91 971 000 1010
            </p>
            <p className="text-sm flex items-center text-black">
              <FaEnvelope className="mr-2" /> contact@thesocialprojects.org
            </p>
            <p className="text-sm flex items-center text-black">
              <FaGlobe className="mr-2" /> www.thesocialprojects.org
            </p>
            <p className="text-sm flex items-center text-black">
              <FaMapMarkerAlt className="mr-2" /> 393, Keesaradari Road, Nagavada, Tamil Nadu, India.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-black">JOINT SPONSORSHIP PROGRAM</h3>
            <p className="text-sm mb-4 text-black">
              In a world where challenges can seem insurmountable, our Joint Sponsorship Program empowers you
              to make a difference. By teaming up with friends, family, or colleagues, you can collectively sponsor
              a child, providing them with the hope and security of knowing that someone cares. Join hands today!
            </p>
            <h3 className="text-xl font-bold mb-4 text-black">Want to Get Involved?</h3>
            <div className="flex items-center">
              <input
                className="p-2 border border-gray-400 rounded-l dark:bg-gray-600 dark:text-white dark:border-gray-500"
                type="email"
                placeholder="Email"
              />
              <button className="bg-gray-400 text-white p-2 rounded-r">GO</button>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-black">Navigate</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">HOME</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">ABOUT US</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">PROJECTS</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">BLOG</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">GET INVOLVED</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">DONATE</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">CONTACT</a>
              </li>
            </ul>
            <h3 className="text-xl font-bold mb-4 text-black">Donate Now</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">SPONSOR A GIRL CHILD</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">EDUCATE A CHILD</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">SUPPORT A FAMILY</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">SUPPORT A PROJECT</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">ONE TIME DONATION</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center">
                <Image
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-VvdIWsDHpiSPGvHVT7zfeFs9.png?..."
                  alt="The Social Project logo"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <p className="text-sm">THE SOCIAL PROJECT</p>
                  <p className="text-sm">www.thesocialprojects.org</p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-VvdIWsDHpiSPGvHVT7zfeFs9.png?..."
                  alt="The Social Project logo"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <p className="text-sm">Be a Hero, Sponsor Today</p>
                  <p className="text-sm">Help a Child in Need</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
