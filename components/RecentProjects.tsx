"use client";

import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { PinContainer } from './ui/3d-pin'
import { useTranslations } from 'next-intl'

const RecentProjects = () => {
  const t = useTranslations("Projects");
  const keys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'] as const;
//   const keys2 = ['project1.iconList', 'project2.iconList', 'project3.iconList', 'project4.iconList', 'project5.iconList' , 'project6.iconList'] as const;

  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {keys.map((key) => (
                <div key={key} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] '>
                    <ClientOnly>
                        <PinContainer title={t(`${key}.link`)} href={t(`${key}.link`)}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src='/bg.png' alt='bg-img'/>
                                </div>
                                <img src={t(`${key}.img`)} alt={t(`${key}.title`)}className='z-10 absolute bottom-0' />
                            </div>

                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ' >
                                {t(`${key}.title`)}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 '>
                                {t(`${key}.des`)}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {t.raw(`${key}.iconLists`).map((key : string, index : number) => (
                                        <div key={key} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                            <img src={key} alt={key} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                                </div>
                            </div>
                        </PinContainer>
                    </ClientOnly>
                </div>
            ))}
        </div>
    </div>  
  )
}

function ClientOnly({ children, ...delegated }: {
    children?: React.ReactNode;
  }) {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    if (!hasMounted) {
      return null;
    }
    return (
      <div {...delegated}>
        {children}
      </div>
    );
}


export default RecentProjects