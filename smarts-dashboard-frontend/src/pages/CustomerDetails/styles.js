import styled from 'styled-components';

export const MainContainer = styled.main`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DetailsContainer = styled.section`
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 1rem auto;
`
export const Title = styled.h1`
    color: #49535A;
    font-size: 2rem;
    margin-top: 1rem;
`
export const TitleName = styled.span`
    color: #8F2056;
    font-size: 1.8rem;
    margin-top: 1rem;
`
export const TitleSection = styled.h3`
    color: #49535A;
    font-size: 1.5rem;
    margin: 1rem 0;
`
export const InfoContainer = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    background-color: #FFFFFF;
    border-radius: 1rem;
`
export const InfoDataContainer = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    margin: 0.5rem;
`
export const Label = styled.label`
    color: #8F2056;
    font-weight: bold;
    margin-right: 0.5rem;
`
export const CustomerInfo = styled.span`
    color: #49535A;
    font-weight: bold;
`
export const TimelineContainer = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    background-color: #FFFFFF;
    border-radius: 1rem;
`
export const TimelineCard = styled.div`
    width: 95%;
    background-color: #8F2056;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem;
    margin: 0 0.5rem;
`
export const TimelineDataContainer = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.5rem;
`
export const TimelineTitle = styled.label`
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 0.5rem;
`
export const TimelineData = styled.span`
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 0.5rem;
`

export const ImagesContainer = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    background-color: #FFFFFF;
    border-radius: 1rem;
`
export const SectionMapContainer = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    background-color: #FFFFFF;
    border-radius: 1rem;
    padding: 1rem;
`

export const MapIframe = styled.iframe`
    background-color: black;
`