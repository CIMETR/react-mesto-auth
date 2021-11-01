import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation()
  if (location.pathname === '/sign-up' || location.pathname ===  '/sign-in') return <></>

  return (
    <footer className="footer">
      <p className="footer__copyrights">&copy; 2021 Константин Антипин</p>
    </footer>
  ) 
}

export default Footer