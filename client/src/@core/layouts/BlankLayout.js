// ** React Imports
import { useEffect, useState } from 'react'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import { useFooterType } from '@hooks/useFooterType'

import FooterComponent from './components/footer'

import classnames from 'classnames'

const BlankLayout = ({ children, footer, ...rest }) => {
  // ** Hooks
  const [skin, setSkin] = useSkin()
  const [footerType, setFooterType] = useFooterType()

  // ** States
  const [isMounted, setIsMounted] = useState(false)

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  // ** Vars
  const footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  }

  return (
    <div className='blank-page'>
      <div className='app-content content'>
        <div className='content-wrapper'>
          <div className='content-body'>{children}</div>
        </div>
      </div>
      <footer
        className={classnames(`footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {
          'd-none': footerType === 'hidden'
        })}
      >
        {footer ? (
          footer({ footerType, footerClasses })
        ) : (
          <FooterComponent footerType={footerType} footerClasses={footerClasses} />
        )}
      </footer>
    </div>
  )
}

export default BlankLayout
