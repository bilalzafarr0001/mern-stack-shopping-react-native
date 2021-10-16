import React ,{useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
const countries = require("../../../assets/countries.json");
const countries = require("../../../assets/countries.json");


import { Container, Header, Content, Icon, Picker, Form } from "native-base";
const Locations = () =>{
   
    const [ country, setCountry ] = useState();
    return (
        
        <Picker
        mode="dropdown"
        iosIcon={<Icon name={"arrow-down"} />}
        headerStyle={{ backgroundColor: 'orange' }}
        headerBackButtonTextStyle={{ color: '#fff' }}
        headerTitleStyle={{ color: '#fff' }}
        selectedValue={country}
        onValueChange={(x) => setCountry(x)}
       >
           {paymentCards.map((c, index) => {
               return <Picker.Item 
               key={c.name} 
               label={c.name} 
               value={c.name} />
           })}
       </Picker>
      );
}


export default Locations;