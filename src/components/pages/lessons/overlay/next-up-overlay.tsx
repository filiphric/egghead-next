import {useNextUpData} from 'hooks/use-next-up-data'
import Link from 'next/link'
import * as React from 'react'

const NextUpOverlay: React.FunctionComponent<{
  lesson: any
  send: any
  url: string
}> = ({lesson, send, url}) => {
  const {nextLessonTitle, nextUpPath} = useNextUpData(url)
  return (
    <>
      <img
        src={lesson.course.square_cover_480_url}
        alt={`illustration of ${lesson.course.title} course`}
        className="w-12 md:w-16 lg:w-32"
      />
      <div className="mt-4 md:mt-6 lg:mt-8">Up Next</div>
      <h3 className="text-md md:text-lg lg:text-xl font-semibold mt-4 text-center">
        {nextLessonTitle}
      </h3>
      <div className="flex mt-6 md:mt-10 lg:mt-16">
        <button
          className="border border-blue-600 rounded px-3 py-2 flex items-center hover:bg-gray-900 transition-colors duration-200 ease-in-out"
          onClick={() => send('LOAD')}
        >
          <IconRefresh className="w-6 mr-2" /> Watch again
        </button>
        <NextResourceButton
          path={nextUpPath}
          className="bg-blue-600 rounded px-3 py-2 flex items-center ml-4 hover:bg-blue-500 transition-colors duration-200 ease-in-out"
        >
          <IconPlay className="w-6 mr-2" /> Play next
        </NextResourceButton>
      </div>
      <div className="mt-8 text-xs md:mt-12 lg:mt-20">
        Feeling stuck?{' '}
        <a href="#" className="font-semibold">
          Get help from egghead community
        </a>
      </div>
    </>
  )
}

export default NextUpOverlay

const NextResourceButton: React.FunctionComponent<{
  path: string
  className: string
}> = ({children, path, className = ''}) => {
  return (
    <Link href={path || '#'}>
      <a className={className}>{children || 'Next Lesson'}</a>
    </Link>
  )
}

const IconPlay: React.FunctionComponent<{className: string}> = ({
  className = '',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
)

const IconRefresh: React.FunctionComponent<{className: string}> = ({
  className = '',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)
