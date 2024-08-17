import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Welcome = ({navigation}) =>{

    const navigate = () => {
        navigation.navigate('Home');
    }

    return(
       <ScrollView>
            <View style={styles.container}>
                <View style={{marginTop:150}}>
                    <Image style={{width:332, height:237}}
                        source={require('../assets/Images/Logo.png')}
                    />
                </View>

                <View>
                    <Text style={styles.bookShop}>Book Store {'\n'}Management System</Text>
                </View>

                <View style={{width:'90%'}}>
                    <Text style={styles.lorem}>
                    Welcome to a world of timeless text! Book store has been the trusted standard of the printing and 
                    typesetting industry since the 1500s. 
                    Explore, discover, and enjoy the journey through this classic placeholder text.

                    </Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                    <TouchableOpacity style={styles.btnTouch} onPress ={navigate}>
                            <Text style={styles.btnSing}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CECCCC',
      alignItems: 'center',
    },

    bookShop:{
        marginTop:10,
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    },

    lorem:{
        marginTop:10,
        fontSize:18,
        textAlign:'center',
        color:'black',
    },

    btnTouch:{
        marginTop:100,
        width:'90%', 
        height:50, 
        backgroundColor:'black', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15,
        
    },

    btnSing:{
        color:'white', 
        fontSize:20, 
        fontWeight:'bold',
        
    }
  });

export default Welcome;