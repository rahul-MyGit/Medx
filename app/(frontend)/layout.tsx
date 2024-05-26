import React, { ReactNode } from 'react'

import  Navbar from "../../components/frontend/Navbar";
function layout({children} : {children : ReactNode}) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout
