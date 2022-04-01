import { Container, Socialmedia } from "./styles"

export default function Footer() {
    return (
        <Container>
            {/* <h1>dev.rodrigoaraujo@gmail.com</h1> */}
            <div>
                <Socialmedia className="devicon-github-original"></Socialmedia>
                <Socialmedia className="devicon-linkedin-plain"></Socialmedia>
            </div>
        </Container>
    )
}