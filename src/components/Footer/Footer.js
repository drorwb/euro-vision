import React from 'react'
import '../Footer/Footer.css'

const Footer = () =>{
    const year = new Date().getFullYear()
    return(
        <div className='the-footer'>
            <footer>
                <p>This website created by - <a target='_blank' href='https://www.linkedin.com/in/dror-brown-404930177/'>Dror Brown</a> | <a target='_blank' href='https://www.linkedin.com/in/jonathan-morag/'>Jonathan Morag</a> | <a target='_blank' href='https://www.linkedin.com/in/noa-feldberg-9b5917148/'>Noa Feldberg</a></p>
                <p>all rights reserved  ⓒ{year} </p>
            </footer>
        </div>
    )
}

export default Footer;