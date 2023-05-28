import { FC } from 'react'
import { Link } from 'react-router-dom'

const MainPage: FC = () => {
    return (
        <div className="App">
            <h1>Hello!</h1>
            <p>It is Login and Register Forms Components with React, Redux and TypeScript!</p>

            <div>
                <div>
                    <p>To see Login:</p>
                    <Link to="/login">Login</Link>
                </div>

                <div>
                    <p>To see Registration:</p>
                    <Link to="/registration">Registration</Link>
                    <p></p>
                </div>
            </div>

        </div>
    )
}

export default MainPage
