"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() { 
    const pathname = usePathname();

    const isActive = (path : string) => pathname === path;
    console.log("This is pathname :",pathname)

  

    const linkVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        
        <div className="relative bg-gradient-to-r from-blue-50 to-pink-50 bg-opacity-80">
            {/* Glass Effect Layer */}
            <div className="absolute inset-0 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative w-full py-4 px-8 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="flex items-center h-12"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Image
                        src="/images/logo.png" // Corrected image path
                        alt="Krishna Test"
                        width={114} // Specify dimensions
                        height={114}
                        className="object-contain"
                    />
                </motion.div>

                {/* Quick Links */}
                <div className="flex gap-6">
                    {[
                        { path: '/support', label: 'Support' },
                        { path: '/privacy', label: 'Privacy' },
                        { path: '/terms', label: 'Terms' },
                        { path: '/refund', label: 'Refund' },
                    ].map(({ path, label }) => (
                        <motion.div
                            key={path}
                            variants={linkVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link href={path} className={`relative text-sm font-medium px-3 py-2 transition-colors ${
                                        isActive(path)
                                            ? 'text-blue-700'
                                            : 'text-blue-900 hover:text-blue-700'
                                    }`}>
                              
                                    
                                
                                    {label}
                                    {isActive(path) && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700"
                                            initial={false}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                              
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
