import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { DataTable, HelperText, List } from 'react-native-paper';

import card1 from './assets/images/icons/hospital-geral.png'
import card2 from './assets/images/icons/poste-de-sinalizacao.png'
import card3 from './assets/images/icons/homecare.png'
import card4 from './assets/images/icons/remedio.png'
import card5 from './assets/images/icons/policlinica.png'
import card6 from './assets/images/icons/centro-de-saude.png'
import card7 from './assets/images/icons/unidade-pronto-atendimento.png'
import card8 from './assets/images/icons/caixa-de-primeiros-socorros.png'
import card9 from './assets/images/icons/recem-nascido.png'
import { findByName, findBySpecificType } from './function/Service'; 

const Stack = createStackNavigator();
let pickers = ['', '', '']


function MainScreen({ navigation }){
  const [value, setValue] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const [selectedValue, setSelectedValue] = useState([]);

  const [pickerValues, setPickerValues] = useState(['', '', '']);

  const nameCards = ['Hospital Geral', 'Posto de Saúde', 'Home Care', 'Farmácia', 'Policlínica', 'Centro de Saúde', 'UPA', 'Pronto Socorro Geral', 'Centro de Parto']

  const imageCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9]  

  const handleChangeText = (inputText) => {
    const result = findByName(value, pickers)
    const resultJson = JSON.parse(result)
    if(resultJson != ''){
      navigation.navigate('ListingScreen', {result})
    }else{
      setErrorModalVisible(true)
    }
    pickers = ['', '', '']
  }

  const resetPickerValues = () => {
    setModalVisible(!modalVisible)
    pickers = ['', '', '']
  }

  const handlePickerValues = (pickerText) => {
    if(pickerText[0] == '1'){
      if(pickerText == '1_HOMECARE'){
        pickerText = '1_HOME CARE'
      }
      pickers[0] = pickerText.replace('1_','') // type

    }else if(pickerText[0] == '2'){
      pickers[1] = pickerText.replace('2_','') // state

    }else if(pickerText[0] == '3'){
      pickers[2] = pickerText.replace('3_','') // time
    }
    console.log(pickers)
  }

  const handleGridItems = (index) => {
    const result = findBySpecificType(index)
    navigation.navigate('ListingScreen', {result})
    pickers = ['', '', '']
  }

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
            placeholder="Busque pelos estabelecimentos"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleChangeText}
          >
            <Text style={styles.buttonText}>Procurar</Text>
          </TouchableOpacity>

          <Pressable
            style={[stylesFilterScreen.button, stylesFilterScreen.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="filter" size={24} color="black" />
            <Text style={stylesFilterScreen.textStyle}>Filtrar</Text>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={stylesFilterScreen.centeredView}>
              <View style={stylesFilterScreen.modalView}>
                <Text style={stylesFilterScreen.modalText}>Filtros:</Text>
                <Picker 
                  selectedValue={selectedValue} 
                  style={{ height: 50, width: 250 }} 
                  mode={"dialog"} 
                  onValueChange={handlePickerValues}
                > 
                  <Picker.Item label="Tipo" value="" />
                  <Picker.Item label="Centro de Parto" value="1_CENTRO DE PARTO" /> 
                  <Picker.Item label="Centro de Saúde" value="1_CENTRO DE SAÚDE" /> 
                  <Picker.Item label="Farmácia" value="1_FARMÁCIA" />
                  <Picker.Item label="Hospital Geral" value="1_HOSPITAL GERAL" /> 
                  <Picker.Item label="Policlínica" value="1_POLICLÍNICA" />
                  <Picker.Item label="Posto de Saúde" value="1_POSTO DE SAÚDE" />
                  <Picker.Item label="Pronto Atendimento" value="1_PRONTO ATENDIMENTO" />
                  <Picker.Item label="Pronto Socorro" value="1_PRONTO SOCORRO" />
                  <Picker.Item label="Home Care" value="1_HOMECARE" />
                </Picker>
                <Picker 
                  selectedValue={selectedValue} 
                  style={{ height: 50, width: 250 }} 
                  mode={"dialog"} 
                  onValueChange={handlePickerValues} 
                > 
                  <Picker.Item label="Estado" value="" />
                  <Picker.Item label="Rondônia" value="2_RONDÔNIA" /> 
                  <Picker.Item label="Acre" value="2_ACRE" /> 
                  <Picker.Item label="Amazonas" value="2_AMAZONAS" /> 
                  <Picker.Item label="Roraima" value="2_RORAIMA" /> 
                  <Picker.Item label="Pará" value="2_PARÁ" /> 
                  <Picker.Item label="Amapá" value="2_AMAPÁ" />
                  <Picker.Item label="Tocantis" value="2_TOCANTIS" />
                  <Picker.Item label="Maranhão" value="2_MARANHÃO" />
                  <Picker.Item label="Piauí" value="2_PIAUÍ" />
                  <Picker.Item label="Ceará" value="2_CEARÁ" />
                  <Picker.Item label="Rio Grande do Norte" value="2_RIO GRANDE DO NORTE" />
                  <Picker.Item label="Paraíba" value="2_PARAÍBA" />
                  <Picker.Item label="Pernambuco" value="2_PERNAMBUCO" />
                  <Picker.Item label="Alagoas" value="2_ALAGOAS" />
                  <Picker.Item label="Sergipe" value="2_SERGIPE" />
                  <Picker.Item label="Bahia" value="2_BAHIA" />
                  <Picker.Item label="Minas Gerais" value="2_MINAS GERAIS" />
                  <Picker.Item label="Espírito Santo" value="2_ESPÍRITO SANTO" />
                  <Picker.Item label="Rio de Janeiro" value="2_RIO DE JANEIRO" />
                  <Picker.Item label="São Paulo" value="2_SÃO PAULO" />
                  <Picker.Item label="Paraná" value="2_PARANÁ" />
                  <Picker.Item label="Santa Catarina" value="2_SANTA CATARINA" />
                  <Picker.Item label="Rio Grande do Sul" value="2_RIO GRANDE DO SUL" />
                  <Picker.Item label="Mato Grosso do Sul" value="2_MATO GROSSO DO SUL" />
                  <Picker.Item label="Mato Grosso" value="2_MATO GROSSO" />
                  <Picker.Item label="Goiás" value="2_GOIÁS" />
                  <Picker.Item label="Distrito Federal" value="2_DISTRITO FEDERAL" />
                </Picker>
                <Picker 
                  selectedValue={selectedValue} 
                  style={{ height: 50, width: 250 }} 
                  mode={"dialog"} 
                  onValueChange={handlePickerValues} 
                > 
                  <Picker.Item label="Turno" value="" />
                  <Picker.Item label="Manhã" value="3_SOMENTE MANHÃ" /> 
                  <Picker.Item label="Tarde" value="3_SOMENTE TARDE" /> 
                  <Picker.Item label="Noite" value="3_SOMENTE NOITE" /> 
                  <Picker.Item label="Manhã e Tarde" value="3_MANHÃ E TARDE" /> 
                  <Picker.Item label="Manhã, Tarde e Noite" value="3_MANHÃ, TARDE E NOITE" /> 
                  <Picker.Item label="24 Horas" value="3_24 HORAS" />
                  <Picker.Item label="Turno Intermitente" value="3_TURNOS INTERMITENTES" />
                </Picker>
                <View style={{ flexDirection: 'row' }}>
                  <Pressable
                    style={[stylesFilterScreen.button, stylesFilterScreen.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                    }}
                  >
                    <Text style={stylesFilterScreen.textInternStyle}>OK</Text>
                  </Pressable>
                  <Pressable
                    style={[stylesFilterScreen.button, stylesFilterScreen.buttonClose]}
                    onPress={resetPickerValues}
                  >
                    <Text style={stylesFilterScreen.textInternStyle}>Cancelar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <Modal 
            animationType="slide"
            transparent={true}
            visible={errorModalVisible}
            onRequestClose={() => {
              setErrorModalVisible(!errorModalVisible);
            }}>
            <View style={stylesFilterScreen.centeredView}>
              <View style={stylesFilterScreen.modalView}>
                <Text style={stylesFilterScreen.modalTextError}
                >
                  Estabelecimento não encontrado! Utilize caracteres SEM acentuação
                  <View style={{ flexDirection: 'row' }}>
                    <Pressable
                      style={[stylesFilterScreen.buttonError, stylesFilterScreen.buttonCloseError]}
                      onPress={() => setErrorModalVisible(false)}
                    >
                      <Text style={stylesFilterScreen.textInternStyle}>Fechar</Text>
                    </Pressable>
                  </View>
                </Text>
              </View>
            </View>
          </Modal>

          <View style={styles.grid}>
            {nameCards.map((nameCard,index) => (
              <TouchableOpacity style={styles.gridItem} key={`${nameCard}-${index}`} onPress={() => handleGridItems(index)}>
                  <Image source={imageCards[index]} style={styles.gridItemImage} />
                  <Text style={styles.gridItemText}>{nameCard}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function ListingScreen({ route, navigation }){
  let responseJson = JSON.parse(route.params.result)
  let listingValue = responseJson[0]['listing']
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
          Listagem: {listingValue}
        </Text>
      </View>
      <View style={{marginTop: 215, paddingLeft: 20, paddingRight: 20}} >
        <FlatList
          data={responseJson} style={{ height: '100%' }}
          renderItem={({item, index}) => (
            <TouchableOpacity 
              key={`${item.name}-${index}`}
              onPress={() => navigation.navigate('DisplayScreen', {
                name: item.name,
                unity: item.unity,
                state: item.state,
                neighborhood: item.neighborhood,
                address: item.address,
                phone: item.phone,
                time: item.time
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
  let name = route.params.name
  let unity = route.params.unity
  let state = route.params.state
  let neighborhood = route.params.neighborhood
  let address = route.params.address
  let phone = route.params.phone
  let time = route.params.time

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
              {unity}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>ESTADO</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {state}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>BAIRRO</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {neighborhood}
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
              {phone}
            </Text>
          </DataTable.Cell> 
        </DataTable.Header> 

        <DataTable.Header style={stylesDisplayScreen.tableHeader}> 
          <DataTable.Title>HORÁRIOS</DataTable.Title> 
          <DataTable.Cell style={stylesDisplayScreen.tableCell}>
            <Text style={stylesDisplayScreen.tableText}>
              {time}
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
};

const stylesFilterScreen = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10
  },
  buttonOpen: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 5,
  },
  textInternStyle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  buttonError: {
    borderRadius: 20,
    padding: 10
  },
  buttonCloseError: {
    backgroundColor: "#2196F3",
    marginTop: 20
  },
  modalTextError: {
    color: 'red',
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 15
  }
});

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
})
