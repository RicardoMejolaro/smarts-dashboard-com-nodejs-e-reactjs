import styled from 'styled-components';

export const FiltersContainer = styled.div`
    width: 720px;
    min-height: 250px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    border: 2px solid #8F2056;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    box-sizing: border-box;
`
export const TitleButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
`
export const FilterTitle = styled.h2`
    color: #49535A;
    font-size: 1.5rem;
    align-self: flex-start;
    padding: 0.8rem 0;
`
export const SortingFiltersContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #99225C;
    padding: 10px;
`
export const FilterButton = styled.button`
    background-color: #99225C;
    color: #FFFFFF;
    font-weight: bold;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 2s ease-in-out;
    outline: none;
    margin-right: 10px;

    &:hover {
        background-color: #8F2056;
    }
`
export const FilterByDatesContainer = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #99225C;
    padding: 10px;
`
export const FilterInput = styled.input`
    height: 3rem;
    margin: 0 0.8rem 0 0.4rem;
    border-radius: 0.8rem;
    border: 2px solid #99225C;
    outline: 0;
    padding: 0 1.6rem;
    font-size: 1.6rem;
    margin-bottom: 10px;
`
export const LabelInput = styled.label`
    color: #8F2056;
    font-weight: bold;
    margin-bottom: 10px;
`

export const FormButton = styled.button`
    background-color: #99225C;
    color: #FFFFFF;
    font-weight: bold;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 0.6rem;
    transition: all 2s ease-in-out;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: #8F2056;
    }
`