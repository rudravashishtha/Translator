import { IconLink } from '@tabler/icons-react'
import React from 'react'

function LinkPaste({handleLinkPaste}: any) {
  return (
    <label htmlFor='link-input' className='cursor-pointer'>
        <IconLink size={21} />
    </label>
  )
}

export default LinkPaste