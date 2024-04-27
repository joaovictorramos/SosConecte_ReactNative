import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { DataTable, List } from 'react-native-paper';

import card1 from './assets/images/icons/hospital-geral.png'
import card2 from './assets/images/icons/poste-de-sinalizacao.png'
import card3 from './assets/images/icons/familia.png'
import card4 from './assets/images/icons/remedio.png'
import card5 from './assets/images/icons/hospital-particular.png'
import card6 from './assets/images/icons/clinica.png'
import card7 from './assets/images/icons/unidade-pronto-atendimento.png'
import card8 from './assets/images/icons/caixa-de-primeiros-socorros.png'
import card9 from './assets/images/icons/recem-nascido.png'

const Stack = createStackNavigator();
const cardsEX = [
  { name: 'CLINICA TRAUMA ORTOPEDICA TIJUCA LTDA ME', address: 'RUA CONDE DE BONFIM, 344, TIJUCA - RIO DE JANEIRO - RJ', shift: 'MANHÃ E TARDE'},
  { name: '021 DENTAL BARRA DA TIJUCA ODONTOLOGIA LTDA', address: 'AVENIDA DAS AMERICAS, 3665, BARRA DA TIJUCA, RIO DE JANEIRO - RJ', shift: 'MANHÃ E TARDE' },
  { name: 'CLINICA ODONTOLOGICA UNIAO TIJUCAS LTDA', address: 'BAYER FILHO, 1400, CENTRO, Santa Catarina - SC', shift: 'MANHÃ E TARDE' },
  { name: 'CLINICA ODONTOLOGICA UNIAO TIJUCAS LTDA', address: 'BAYER FILHO, 1400, CENTRO, Santa Catarina - SC', shift: 'MANHÃ E TARDE' },
  { name: 'CLINICA ODONTOLOGICA UNIAO TIJUCAS LTDA', address: 'BAYER FILHO, 1400, CENTRO, Santa Catarina - SC', shift: 'MANHÃ E TARDE' },
]


function MainScreen({ navigation }){
  const [value, setValue] = useState('');

  const nameCards = ['Hospital Geral', 'Posto de Saúde', 'Clínica da Família', 'Farmácia', 'Hospital Particular', 'Clínica', 'UPA', 'Pronto Socorro Geral', 'Centro de Parto']
  const imageCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9]  

  return (
    <ImageBackground source={require('./assets/images/fundo.jpg')} resizeMode='cover' style={{flex: 1}}>      
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require('./assets/images/logo/logo-sosconecte.png')}
          />

          <TextInput
            style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Busque pelos estabelecimentos"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ListingScreen')}
          >
            <Text style={styles.buttonText}>Procurar</Text>
          </TouchableOpacity>

          <View style={styles.filterContainer}>
            <Ionicons name="filter" size={24} color="black" />
            <Text style={styles.filterText}>Filtrar</Text>
          </View>

          <View style={styles.grid}>
            {nameCards.map((nameCard,index) => (
              <View key={`${nameCard}-${index}`} style={styles.gridItem}>
                <Image source={imageCards[index]} style={styles.gridItemImage} />
                <Text style={styles.gridItemText}>{nameCard}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function ListingScreen({ navigation }){
  return (
    <View style={stylesListingScreen.listingContainer}>
      <View style={stylesListingScreen.logoContainer}>
        <Image
           style={styles.logo}
           source={require('./assets/images/logo/logo-sosconecte.png')}
        />
      </View>
      <View style={stylesListingScreen.textContainer}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Listagem:
        </Text>
      </View>
      <View style={{marginTop: 215, paddingLeft: 20, paddingRight: 20}} >
        <FlatList
          data={cardsEX} style={{ height: '100%' }}
          renderItem={({item, index}) => (
            <TouchableOpacity 
              key={`${item.name}-${index}`}
              onPress={() => navigation.navigate('DisplayScreen', {
                name: item.name,
                address: item.address
              })}
              style={{ 
                marginBottom: 10, 
                backgroundColor: '#fff', 
                borderRadius: 5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 14, padding: 10, fontWeight: 'bold' }}>
                {`Nome: ${item.name} \n\nEndereço: ${item.address}`}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

function DisplayScreen({ route }){
  const name = route.params.name
  const address = route.params.address

  return (
    <View style={{backgroundColor: '#c4ffff'}}>
      <View style={stylesListingScreen.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/images/logo/logo-sosconecte.png')}
        />
      </View>
      <View>
        <Text style={{textAlign: 'center', marginTop: 200, marginBottom: 10 , paddingLeft: 15, paddingRight: 15, fontSize: 20, fontWeight: 'bold' }}>
          {name}
        </Text>
      </View>

      <DataTable style={{ height: '100%' }}>
        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title style={{}}>TIPO</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {`POSTO DE SAÚDE`}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>ESTADO</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {`RIO DE JANEIRO`}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>CIDADE</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {`RIO DE JANEIRO`}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>ENDEREÇO</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {address}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>TELEFONE</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {`2124843994`}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>HORÁRIOS</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {`24 Hrs`}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 
      </DataTable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#c4ffff' barStyle='light-content' />
      <Stack.Navigator screenOptions={ headerShown=false } initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'SOS Conecte', headerStyle: { backgroundColor: '#c4ffff' } }} />
        <Stack.Screen name="ListingScreen" component={ListingScreen} options={{ title: '', headerStyle: { backgroundColor: '#c4ffff' } }} />
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} options={{ title: '', headerStyle: { backgroundColor: '#c4ffff' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesDisplayScreen = StyleSheet.create({
  tableHeader: {
    padding: 10,
  },
  tableTitle: {
    fontWeight: 'bold'
  },
  tableCell: {
    paddingRight: 50,
  },
  tableText: {
    width: 200,
    fontWeight: '500'
  }
})

const stylesListingScreen = StyleSheet.create({
  listingContainer: {
    margin: 0, 
    padding: 0, 
    backgroundColor: '#c4ffff'
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: 170,
    left: 10,
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    position: 'absolute',
    top: 50,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 16
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 0,
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    fontSize: 16,
  },
  filterText: {
    marginLeft: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  gridItem: {
    width: '30%',
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#b0dceb',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridItemText: {
    marginTop: 5,
    paddingLeft: 1,
    paddingRight: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  gridItemImage: {
    width: 32,
    height: 32,
    tintColor: '#000'
  },
});
