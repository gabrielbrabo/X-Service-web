import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #63C2D1;
  min-height: 89vh;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const Scroller = styled.div`
  display: grid;
  background-color: #63C2D1;
  align-items: center;
  padding: 20px;
  position: absolute;
`;
export const HeaderArea = styled.div`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.text`
  width: 260px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const SearchButton = styled.button`
  background-color: transparent;
  border: none;

  svg {
    color: #fff;
    font-size: 24px;
  }
`;
export const LocationArea = styled.div`
  background: #83D6E3;
  display: flex;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 24px;
`;
export const LocationInput = styled.input`
  font-size: 16px;
  color: #fff;
  width: 22%;
  height: 40px;
  font-size: 25px;
  color: #fff;
  background-color: #83D6E3;
  border-color: #000;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  
  &

  &::placeholder {
    color: #268596;
  }
`;
export const CategoryInput = styled.input`
  font-size: 16px;
  color: #fff;
  width: 85%;
  height: 40px;
  font-size: 25px;
  color: #fff;
  background-color: #83D6E3;
  border-color: #000;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  
  &

  &::placeholder {
    color: #268596;
  }
`;
export const LocationFinder = styled.button`
  display: flex;
  height: 60px;
  font-size: 20px;
  background-color: #268596;
  border-radius: 30px;
  border: none;
  justify-content: center;
  align-items: center
`;
export const LoadingIcon = styled`
  margin-top: 50px;
`;
export const ListArea = styled.div`
  width 100%;
  margin-top: 30px;
  margin-bottom: 80px;
`;
export const KM = styled.text`
  font-size: 25px;
  justify-content: center;
`;
export const Raio = styled.text`
  margin-left: 30px;
  font-size: 20px;
`;

