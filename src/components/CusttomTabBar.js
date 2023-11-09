import React from "react";
import styled from "styled-components";
import { MdHome, MdSearch, MdFavorite } from "react-icons/md"
import { RxAvatar } from "react-icons/rx"

//import { UserContext } from "../contexts/UserContext";

/*
import HomeIcon from "../assets/home";
import SearchIcon from "../assets/search";
import TodayIcon from "../assets/today";
import FavoriteIcon from "../assets/favorite";
import AccountIcon from "../assets/account";
*/

const TabArea = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #4EADBE;
`;
const TabItem = styled.div`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
/*const TabItemCenter = styled.div`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 35px;
  border: 3px solid #4EADBE;
  margin-top: -20px;
`;*/
const AvatarIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default function CusttomTabBar ( ) {

  /*const { state: user } = useContext(UserContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
    
  }*/

  const avatar = sessionStorage.getItem('avatar')

  console.log("avatar",  avatar)
  
  return (
    <TabArea>
        <TabItem>
          <MdHome width="24" height="24" fill="#FFFFFF" />
        </TabItem>
        <TabItem>
           <MdSearch width="24" height="24" fill="#FFFFFF" />
        </TabItem>
        <TabItem >
          <MdFavorite width="24" height="24" fill="#FFFFFF" />
        </TabItem>
        <TabItem >
            {avatar ?
              <AvatarIcon src={`${avatar}`}  />
              :
              <RxAvatar  width="24" height="24" fill="#FFFFFF" />
            }
        </TabItem>
  </TabArea>
  );
}