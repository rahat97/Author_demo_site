import React from 'react';
import frontpic from '../../assets/images/home_1.jpg';
// import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div  className="hero min-h-screen bg-slate-300">
            <div  className="hero-content flex-col lg:flex-row-reverse">
                <img src={frontpic} alt='chair-img'  className="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-20'>
                    <h1  className="text-7xl font-bold text-purple-800">Syed Jahid Hasan </h1>
                    <h3 className='py-5 text-2xl font-bold text-red-800'>Writer | Poet | Teacher | columnist | Singer | Song Writer</h3>
                    <h3 className='text-l font-bold text-red-800'>লেখক | কবি | শিক্ষক | সংবাদপত্রের কলমলেখক | কথাশিল্পী | সংগীতলেখক</h3>

                    <p  className="py-6"> সৈয়দ জাহিদ হাসান (১৯৮২-) ফরিদপুর জেলায় ভাংগা উপজেলার কাউলিবেড়া গ্রামে জন্মগ্রহণ করেন। সৈয়দ জাহিদ হাসান কবি, কথাশিল্পী, গবেষক ও সমালোচক হিসাবে সমাদৃত। তিনি বাংলা সাহিত্যে স্নাতক ও স্নাতকোত্তর ডিগ্রি লাভ করেন ঢাকা বিশ্ববিদ্যালয় থেকে। সরকারী কলেজে অধ্যাপনায় নিয়োজিত। ‘বাউল কোষ’, ‘আজো আমি একা’, ‘দেশপ্রেমিকের অগোছালো সংলাপ’, ‘যুদ্ধজয়ের ইশতেহার’, ‘রমণ’, ‘নীলকণ্ঠ ভালোবাসা’, ‘ভাবাঞ্জলি’ তাঁর কয়েকটি উল্লেখযোগ্য বই। তিনি নবাব সিরাজদ্দৌলা স্বর্ণপদকে ভূষিত হয়েছেন।</p>
                    {/* <PrimaryButton>Get Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;