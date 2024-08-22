'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react'

export default function LocalSwitcher() {
    const [isPending, startTransition] =useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectingChange = (e: ChangeEvent<HTMLSelectElement>) =>{
        const nextLocale = e.target.value;
        startTransition(()=>{
            router.replace(`/${nextLocale}`);
        })
    }
  return (
    <label className='border-2 rounded'>
        <p className='sr-only'>change language</p>
        <select
            defaultValue={localActive}
            className='bg-transparent py-2 text-sm items-center'
            onChange={onSelectingChange}
        >
            <option value='en'>English</option>
            <option value='ko'>한국어</option>
        </select>
    </label>
  )
}
