import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
      Landing Page (unprotected)
      
      <ul className="flex">
        <li>
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LandingPage
