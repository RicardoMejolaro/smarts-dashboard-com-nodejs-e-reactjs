import styled from 'styled-components';

export const MainContainer = styled.main`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DashboardContainer = styled.section`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
`
export const Title = styled.h1`
    color: #8F2056;
    font-size: 2.5rem;

`
export const DataContainer = styled.div`
    width: 720px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #8F2056;
    border-radius: 10px;
    background-color: #FFFFFF;

    display: ${props => props.view === 'notFound' ? 'none' : ''};
`
export const PaginateButton = styled.button`
    background-color: #99225C;
    color: #FFFFFF;
    font-weight: bold;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem;
    transition: all 2s ease-in-out;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: #8F2056;
    }
`
export const PaginateTitle = styled.span`
    color: #49535A;
    font-weight: bold;
`
export const PaginateTitleActual = styled.span`
    background-color: #8F2056;
    color: #FFFFFF;
    padding: 0.3rem;
    border-radius: 0.5rem;
    font-weight: bold;
`