import React from 'react'
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

function Navbar() {
    const showMobileMenu = (e) => {
        e.preventDefault();
        if (!document.querySelector(".mobilmenu").classList.contains('-translate-y-96')) {
            document.querySelector(".mobilmenu").classList.add('-translate-y-96')

        }
        else {
            document.querySelector(".mobilmenu").classList.remove('-translate-y-96')
        }
    }
    return (
        <div>
            <div className='w-full bg-emerald-950 h-20 z-10 relative'>
                <div className='logo w-full flex justify-center items-center xl:justify-start xl:pl-2  '>
                    <h1 className='text-slate-50 text-3xl italic mt-4 '>Emre</h1>
                </div>
                <div className='float-end mr-4 -mt-8 flex flex-row'>
                    <ul className='xl:flex flex-row gap-x-32 hidden'>
                        <li className='text-slate-50 text-2xl italic'>Ana Sayfa</li>
                        <li className='text-slate-50 text-2xl italic'>Menü</li>
                        <li className='text-slate-50 text-2xl italic'>Müşteri Deneyimi</li>
                        <li className='text-slate-50 text-2xl italic'>Sosyal Medya</li>
                    </ul>
                    <button onClick={showMobileMenu} className='xl:hidden'><ViewWeekIcon className='text-slate-50 xl:hidden' /></button>
                </div>
            </div>
            <div className='  w-full h-56 bg-orange-700  flex justify-center items-center mobilmenu transition delay-100 ease-in z-0 absolute -translate-y-96 xl:-translate-y-96 '>
            <ul className='mt-4 ml-16'>
                <li className='text-slate-50 text-2xl mb-4 italic'>Ana Sayfa</li>
                <li className='text-slate-50 text-2xl mb-4 italic'>Menü</li>
                <li className='text-slate-50 text-2xl mb-4 italic'>Müşteri Deneyimi</li>
                <li className='text-slate-50 text-2xl mb-4 italic'>Sosyal Medya</li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar