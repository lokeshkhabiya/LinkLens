import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

const Header = () => {
  
  const navigate = useNavigate();

    return (
    <nav className="py-4 flex justify-between items-center">
        <Link to="/">
         <img src="src/assets/final-logo.png" className="h-20" alt="Logo" />
        </Link>

        <div>
            <Button onClick={() => navigate('/auth')}>Login</Button>
        </div>
    </nav>
  )
}

export default Header