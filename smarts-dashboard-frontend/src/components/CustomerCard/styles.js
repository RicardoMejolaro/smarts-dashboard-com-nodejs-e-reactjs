import styled from 'styled-components';

export const CardContainer = styled.article`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 100px 1fr;
  border-bottom: 2px solid #8F2056;
  border-radius: 1rem;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #E9E9E9;
    cursor: pointer;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CustomerImg = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`
export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem 0 0.5rem 1rem;
`
export const Label = styled.label`
  color: #8F2056;
  font-weight: bold;
`
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem 0 0.5rem 1.7rem;
`
export const Data = styled.span`
  color: #49535A;
  font-weight: bold;
`