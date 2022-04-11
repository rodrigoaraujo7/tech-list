import { Header, Box, Content, Title, Text } from "./styles";

export default function TechPage() {
    return (
        <>
        <Header>
            <div className="left" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="../icons/return-dark.png" />
                <h2 style={{ marginLeft: '1rem' }}>Return</h2>
            </div>
            <div className="right">
                <Box />
            </div>
        </Header>

        <Content>
            <Title>Tech Title</Title><br />
            <Text>lorem</Text>
        </Content>
        </>
    )
}