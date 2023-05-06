import React from 'react'

function ListHeadings(props) {
  return (
    <>
        <div className='text-left mx-24 pt-4 pb-4 border-b-2'>
            <h1 className='text-4xl font-bold'>{props.text}</h1>
            
        </div>
    </>
  )
}

export default ListHeadings