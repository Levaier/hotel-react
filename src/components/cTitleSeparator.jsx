import React from 'react'
import { ThemeProvider } from 'react-bootstrap';

import '../assets/css/cTitleSeparator.css';

export default function CTitleSeparator({ title, color }) {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div className='title-container'>
                <h2 className={color}>{title}</h2>
            </div>
        </ThemeProvider>

    )
}
