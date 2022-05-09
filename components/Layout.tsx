import type { ReactElement, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type ChildrenProps = {
  children: ReactNode
}

function Layout({children}:ChildrenProps) {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout