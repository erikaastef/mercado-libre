import { ProgressBarWrapper, ProgressBar, Container } from "./styles";

export default function Preloader({ visible }) {
    return (
        <Container visible={visible}>
            <ProgressBarWrapper>
                <ProgressBar />
            </ProgressBarWrapper>
        </Container>

    );
}