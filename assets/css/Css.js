import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const square_size = width / 3;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_top_login: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container_login: {
      flex: 2,
      width:'100%',
      padding: 20,
      paddingTop: 50,
      borderTopLeftRadius: 50,
      backgroundColor: "white",
    },
    container_login2: {
      flex: 2,
      width:'100%',
      padding: 20,
      paddingTop: 50,
      backgroundColor: "white",
      paddingBottom: 100,
    },
    login_input: {
      height: 60,
      borderBottomColor: '#808080', 
      borderBottomWidth: 2, 
      padding: 15,
      color: "#808080",
      fontSize: 20,
    },
    
    logo_login: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      borderRadius: 12,
      opacity: 0.8,
    },
    container_button: {
      height: 60,
      padding: 10,
      marginTop: 20,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: 12,
      justifyContent: 'center',
    },
    text_button: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
    },
    container_signin: {
        marginTop: 10,
    },
    text_signin: {
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: "underline",
        color: "black",
    },
    ForgotPassword: {
      marginTop: 10,
      fontSize: 15,
      textAlign: "right",
      color: "black",
    },
    bg_image: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    keepmeloggedbutton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    forgot_password: {
      fontSize: 20,
      textAlign: "center",
      color: "black",
      marginBottom: 30,
    },
    container_forgot_password: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      padding: 20,
      backgroundColor: "white",
    },
    container_signup: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      padding: 20,
      backgroundColor: "white",
    },
    forgot_email_input: {
      height: 60,
      borderBottomColor: '#808080', 
      borderBottomWidth: 2, 
      padding: 15,
      color: "#808080",
      fontSize: 20,
      marginBottom: 30,
    },
    messageBox: {
      padding: 20,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      backgroundColor: 'green',
    },
    messageText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sign_up_login_input: {
      height: 60,
      borderBottomColor: '#808080', 
      borderBottomWidth: 2, 
      padding: 15,
      color: "#808080",
      fontSize: 20,
      marginBottom: 30,
    },
    container_flex: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container_home: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    squares: {
      width: square_size,
      height: square_size,
      
    },
    container_item_button: {
      width: square_size - 30,
      height: square_size - 30,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon_size: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    container_teste: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      flex: 1,
      width: '100%',
    },
    invalid_login:(text='none')=>({
      color: 'red',
      textAlign: 'center',
      marginBottom: 10,
      display: text,
    }),
    container_square_button:{
      padding: 20,
      margin: 20,
      width: square_size ,
      height: square_size,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container_squares:{
      flexDirection: 'row',
    },
    container_square_text:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    margin_button:{
      marginTop: 20,
    },
    carContainer: {
      marginBottom: 10,
      backgroundColor: 'gray',
      height: 80,
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
    },
    textCarContainer: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
export { styles };