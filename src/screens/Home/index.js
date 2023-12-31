import React, { useState, useEffect } from 'react';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  CategoryInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
  KM,
  Raio
} from './style';

import Loading from '../../components/Loading'

//import tabBar from '../../components/CusttomTabBar'

import { AiOutlineSearch } from 'react-icons/ai';


//import SearchIcon from '../../assets/search.svg';
//import MyLocationIcon from '../../assets/my_location.svg';
import BarberItem from '../../components/BarberItem';

/*import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location'*/

import { SearchByLocation } from '../../Api'

const Home = () => {

  const [raio, setRaio] = useState('');
  //const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState();
  const [list, setList] = useState([]);
  const [mobile, setMobile] = useState(false);
  //const [reload, setReload] = useState(false);

  useEffect( () => {

    setLoading(true);

    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ){

      setMobile(true)

      setLoading(false);

    } else {
      
      setMobile(false)

      setLoading(false);

    }

    if ( mobile === true ) {

      const raio = sessionStorage.getItem('raio')
      const latClient = sessionStorage.getItem('latClient')
      const lonClient = sessionStorage.getItem('lonClient')

      if (latClient & lonClient) {
        
        setRaio(raio)

        getUserStorage(raio, latClient, lonClient)
        
      }
            
    } 
    
    if ( mobile === false ){
      
    }
    
  },[mobile]);

  const getUserStorage = async (raio, latClient, lonClient) => {

    const res = await SearchByLocation(raio, latClient, lonClient)
          
    if (res.data) {
            
      const dataFilter = res.data.data.filter((data) => {
      
        return data
      
      })

      setLoading(false)

      setList(dataFilter)  

      
      console.log("raio", raio,)
    }

  }
  
  const getUserLocation = async () => {
   
    if( mobile === true ) {

      if ( 'geolocation' in navigator ) {

        if (!raio) {
  
          alert("Adicione um raio de busca!")
          
        }
  
        setLoading(true);
        setList([]);
  
        navigator.geolocation.getCurrentPosition(success,)
        
        async function success (pos) {

          let latClient = null;
          let lonClient = null;
          
          if (pos) {

            latClient = pos.coords.latitude;
            lonClient = pos.coords.longitude;
            
          }

          console.log(raio, latClient, lonClient)

          await getUserStorage(raio, latClient, lonClient)

          sessionStorage.setItem("raio", raio)
          sessionStorage.setItem("latClient", latClient)
          sessionStorage.setItem("lonClient", lonClient)
    
          /* else {
    
            alert("erro")
    
          }*/
        
        }
        
      }
      
    } else {

    }
    
    //console.log(mobile)
    //console.log(list)
    
  }

  //const getBarbers = async () => {

  //}

  return (
    <Container>

      <Scroller>

        {loading &&
          <Loading/>
        }

        <HeaderArea>
          <HeaderTitle numberOfLiner={2}>Encontre o seu Serviço favorito!</HeaderTitle>
          <SearchButton >
            <AiOutlineSearch/>
          </SearchButton>
        </HeaderArea>

        <Raio>Selecione um categoria</Raio>

        <LocationArea >
          
          <CategoryInput
            type="text"
            placeholder = 'Categoria'
            //value = {raio}
            onChange={
              (e) => setRaio(e.target.value)
            }
          >
          </CategoryInput>

        </LocationArea>

        {
          mobile === true ?

          <Raio>Digite um raio de busca</Raio>
          :
          <Raio>Digite sua cidade atual</Raio>
        }
        
        {
          mobile === true ?

          <LocationArea >
            
            <LocationInput
              type="number"
              placeholder = '50km'
              value = {raio}
              onChange={
                (e) => setRaio(e.target.value)
              }
            >
            </LocationInput>
  
            {
              raio &&
              <KM>Km</KM>
            }
  
          </LocationArea>
          :
          <LocationArea >
            
            <LocationInput
              type="text"
              placeholder = 'Cidade'
              value = {raio}
              onChange={
                (e) => setRaio(e.target.value)
              }
            >
            </LocationInput>

          </LocationArea>
        }

        

        <LocationFinder onClick={getUserLocation}>
          Busca
        </LocationFinder>

        {loading &&
          <LoadingIcon size="large" color="#fff" />
        }

        
        <ListArea>

          

          {list.map((item, key) => (
            
            <BarberItem key={key} data={item} />
            
          ))
          }

        </ListArea>
        

      </Scroller>

    </Container>
  )
}

export default Home




















