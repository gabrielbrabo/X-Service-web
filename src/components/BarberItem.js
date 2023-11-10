import { React,} from 'react';
import styled from 'styled-components';

//import { useNavigate } from 'react-router-dom'

//import { getavataruser } from '../Api'

//import Stars from '../components/Stars';

const Area = styled.div`
  background: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;
const InfoArea = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;
const UserName = styled.text`
  font-size: 17px;
  font-weight: bold;
`;
const SeeProfileButton = styled.button`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
const SeeProfileButtonText = styled.text`
  font-size: 15px;
  color: #268596;
`;

export default function BarberItem ({ data }) {

  const clickProfile = () => {
    /*navigate('', {
      id: data._id,
      avatar: data.avatar,
      name: data.name,
      //stars: data.stars
    });*/
  }

  const avatar = data.avatar 
  console.log(avatar) 
  return (
    <Area onPress={clickProfile}>
      <Avatar src={ `${ avatar }`} loading="eager" alt="" />
      <InfoArea>
        <UserName>{data.name}</UserName>

                

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  )
}