import React, { ReactNode } from 'react'

function layout({children} : {children : ReactNode}) {
  return (
    <div>
        <h2>Dashboard page layout</h2>
        {children}
    </div>
  )
}

export default layout
