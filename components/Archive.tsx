import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import {motion} from 'framer-motion'

const Archive = () => {
  const [showMore, setShowMore] = useState(false);  
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>
          Other Noteworthy Projects
        </h2>
        <p className='text-sm font-titleFont text-textGreen'>
          view the archive
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10
      lgl:px-10'>
        <ArchiveCard
          title="Educare English Learning Academy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
           quae recusandae commodi expedita doloremque!"
           listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
           link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          title="Educare English Learning Academy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
           quae recusandae commodi expedita doloremque!"
           listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
           link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          title="Educare English Learning Academy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
           quae recusandae commodi expedita doloremque!"
           listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
           link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          title="Educare English Learning Academy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
           quae recusandae commodi expedita doloremque!"
           listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
           link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          title="Educare English Learning Academy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
           quae recusandae commodi expedita doloremque!"
           listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
           link="https://www.educareenglishlearningacademy.com/"
        />

        {
          showMore && (
            <>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
                  quae recusandae commodi expedita doloremque!"
                  listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                  link="https://www.educareenglishlearningacademy.com/"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
                  quae recusandae commodi expedita doloremque!"
                  listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                  link="https://www.educareenglishlearningacademy.com/"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
                  quae recusandae commodi expedita doloremque!"
                  listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                  link="https://www.educareenglishlearningacademy.com/"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
                  quae recusandae commodi expedita doloremque!"
                  listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                  link="https://www.educareenglishlearningacademy.com/"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
                  quae recusandae commodi expedita doloremque!"
                  listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                  link="https://www.educareenglishlearningacademy.com/"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid fuga tempora consectetur? Nihil consequuntur sapiente 
                  quae recusandae commodi expedita doloremque!"
                  listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                  link="https://www.educareenglishlearningacademy.com/"
                />
              </motion.div>
            </>
          )
        }
      </div>
      <div className='mt-12 flex items-center justify-center'>
        {
          showMore ? <button
          onClick={() => setShowMore(false)}
          className='w-36 h-12 rounded-md text-textGreen text-[13px] border
          border-textGreen hover:bg-hoverColor duration-300'
        >
          Show less
          </button> : <button
          onClick={() => setShowMore(true)}
          className='w-36 h-12 rounded-md text-textGreen text-[13px] border
          border-textGreen hover:bg-hoverColor duration-300'
        >
          Show more
        </button>
        }
      </div>  
    </div>
  )
}

export default Archive