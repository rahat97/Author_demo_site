import React from 'react';
import ReactPlayer from 'react-player';

const Banner4 = () => {
    return (
        <div  className="py-10 bg-green-100">
            <div  className='text-center'>
                <h3  className='text-blue  text-3xl font-bold'>সৈয়দ জাহিদ হাসান এর কিছু গান...</h3>
                <h2  className='py-5 text-l'>
                    কবি, কথাশিল্পী, গবেষক, সমালোচক ও শিক্ষক সৈয়দ জাহিদ হাসান। তিনি গীতিকার ও সুরকার। সঙ্গীত অঙ্গনে তিনি 'ক্ষ্যাপা জাহিদ' নামেও পরিচিত।
                </h2>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <ReactPlayer width={480} height={240} controls url={"https://www.youtube.com/watch?v=UfQjNmKcci4"} />

                    <ReactPlayer width={480} height={240} controls url={"https://www.youtube.com/watch?v=UfQjNmKcci4"} />
                </div>
            </div>
        </div>
    );
};

export default Banner4;