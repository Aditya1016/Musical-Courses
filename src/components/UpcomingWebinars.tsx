import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: "Introduction to Music Theory",
            description:
                "Learn the basics of music theory, including scales, chords, and rhythm.",
            link: "https://musictheory.net",
        },
        {
            title: "Guitar for Beginners",
            description:
                "A comprehensive course for beginners to learn guitar, covering basic chords, strumming patterns, and simple songs.",
            link: "https://guitarlessons.com",
        },
        {
            title: "Piano Masterclass",
            description:
                "An advanced course for piano players looking to improve their technique and performance skills.",
            link: "https://pianolessons.com",
        },
        {
            title: "Vocal Training 101",
            description:
                "Learn the fundamentals of vocal training, including breathing techniques, pitch control, and vocal exercises.",
            link: "https://vocaltraining.com",
        },
        {
            title: "Music Production with Ableton Live",
            description:
                "A course on music production using Ableton Live, covering everything from basic beat making to advanced production techniques.",
            link: "https://ableton.com",
        },
        {
            title: "Sample Course",
            description:
                "Detailed course which covers the basics of musics",
            link: "#",
        },
    ]
    return (
        <div className='p-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED WEBINARS
                    </h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                        Enhance Your Musical Journey
                    </p>
                </div>
                <div className='mt-10'>
                    <HoverEffect 
                    items={featuredWebinars.map(webinar => (
                        {
                            title: webinar.title,
                            description: webinar.description,
                            link: webinar.link
                        }
                    ))} />
                </div>
                <div className='mt-10 text-center'>
                    <Link href={'/'}
                        className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars