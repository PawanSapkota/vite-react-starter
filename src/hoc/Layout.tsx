import Footer from '@/components/footer/Footer'
import Toolbar from '@/components/toolbar/Toolbar'
import React from 'react'

type PropsType = {
    children: React.ReactNode
}

const Layout = ({ children }: PropsType) => {
    return (
        <div>
            <Toolbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout