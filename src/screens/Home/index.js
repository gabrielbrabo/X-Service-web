import React, { useState, } from 'react';

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

import { AiOutlineSearch } from 'react-icons/ai';


//import SearchIcon from '../../assets/search.svg';
//import MyLocationIcon from '../../assets/my_location.svg';
//import BarberItem from '../../components/BarberItem';

/*import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location'*/

//import { SearchByLocation } from '../../Api'

const Home = () => {

  const [raio, setRaio] = useState('');
  //const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [list, setList] = useState([]);
  
  const getUserLocation = async () => {
   
    /*let { status } = await requestForegroundPermissionsAsync()

    if ( status === 'granted' ) {

      if (!raio) {

        alert("Adicione um raio de busca!")
        
      }

      setLoading(true);
      setList([]);

      const info = await getCurrentPositionAsync()
      console.log(info.coords)
      
      let latClient = null;
      let lonClient = null;

      if (info) {
        latClient = info.coords.latitude;
        lonClient = info.coords.longitude;
      }

      const res = await SearchByLocation(raio, latClient, lonClient)
    
      if (res.data) {
        
        const dataFilter = res.data.data.filter((data) => {

          return data

        })
        setList(dataFilter)

      } else {

        alert("erro")

      }
      
      */setLoading(false)
    
    
  }

  //const getBarbers = async () => {

  //}

  return (
    <Container>
      <Scroller>

        <HeaderArea>
          <HeaderTitle numberOfLiner={2}>Encontre o seu Salão favorito!</HeaderTitle>
          <SearchButton >
            <AiOutlineSearch/>
          </SearchButton>
        </HeaderArea>
        
        <Raio>Digite um raio de busca</Raio>

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

        <LocationFinder onPress={getUserLocation}>
          Busca
        </LocationFinder>

        {loading &&
          <LoadingIcon size="large" color="#fff" />
        }

        
        <ListArea>

          

          {//list.map((item, key) => (
            
            //<BarberItem key={key} data={item} />
            
          //))
          }

        </ListArea>
        

      </Scroller>
    </Container>
  )
}

export default Home




















