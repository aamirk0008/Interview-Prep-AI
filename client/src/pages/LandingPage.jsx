import React, { useState } from 'react'

import { APP_FEATURES } from "../utils/data";
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from "react-icons/lu";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage , setCurrentPage] = useState("login");

  const handleCTA = () => {}
  return (
    <>
    <div className='w-full min-h-full bg-[#FFFCEF]'>
      <div className='w-125 h-125 bg-amber-200/20 blur-[65px] absolute top-0 left-0'/>
        <div className='container mx-auto px-4 pt-6 pb-50 relative z-10'>
          <header className='flex items-center justify-between mb-16'>
            <div className='text-xl text-black font-bold'>
              Interview Prep AI
            </div>
            <button className='bg-linear-to-r from-primary to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer' onClick={() => setOpenAuthModal(true)}>Login / SignUp</button>
          </header>

        {/* Hero Content */}
          <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
              <div className='flex items-center justify-start mb-2'>
                <div className='flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300'>
                  <LuSparkles/>  AI Powered
                </div>
              </div>
              <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>Ace Interviews with <br />
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold'>AI-Powered</span>{" "}
              Learning
              </h1>
            </div>

            <div className='w-full md:w-1/2'> 
              <p className='text-[17px] text-gray-900 mr-0 md:mr-20 mb-6'>
                Get ready to ace your interviews with our AI-powered interview preparation platform. Tailored to your resume and job description, our platform offers personalized questions, real-time feedback, and a comprehensive question bank to help you succeed. Practice with simulated interview sessions and track your progress with detailed analytics. Start your journey to interview success today!
              </p>

              <button className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer' 
              onClick={handleCTA}>Get Started</button>
            </div>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default LandingPage