"use client"
import Image from 'next/image';
import {useState,useEffect, use} from 'react';

type ClientFacultyPageProps = {
  facultyData: any; 
  facultyName: string;
}

const ClientFacultyPage: React.FC<ClientFacultyPageProps> = ({ facultyData, facultyName }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
    <>
        {/*通常時のヘッダー */}
        <div className="flex-1">
            <div
                className="relative w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/faculty_header.png')" }}
            >
                <div className="absolute inset-0 bg-white/60" />
                <div className="relative flex items-center flex-col">
                    <h1 className="text-[5.5rem] font-bold pt-20">{facultyName}</h1>
                    <p className="mt-1 font-bold text-2xl font-serif tracking-tight">
                        {facultyData.englishFacultyName}
                    </p>
                    <p className="mt-10 font-normal max-w-2xl mb-10">
                        {facultyData.facultyDescription}
                    </p>
                </div>
            </div>
        </div>
        {/* スクロール時のヘッダー */}
        <header
            className={`transition-opacity ease-in-out duration-300 w-full fixed top-0 left-0 z-50 ${
            isSticky ? "opacity-100" : "opacity-0 pointer-events-none"
            } `}
        >
            <div
              className="w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/faculty_header.png')" }}
            >
                <div className="absolute inset-0 bg-white/60"/>
                <div className="relative flex items-center flex-col">
                    <h1 className="text-[5.5rem] font-bold pt-20">{facultyName}</h1>
                    <p className="mt-1 font-bold text-2xl font-serif tracking-tight">
                        {facultyData.englishFacultyName}
                    </p>
                </div>
            </div> 
        </header>
    </>
  );
}
export default ClientFacultyPage;