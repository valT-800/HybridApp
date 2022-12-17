import { View } from "react-native";
import { connect } from "react-redux";
import app from "../../firebaseConfig";
import IconComponent from "../components/IconComponent";

const reference = app
.database()
.ref('ads/')
const updateData = ({ads}) => {
    //reference.update({ads})
    reference.push({ads})
}
const clearData = ()  => {
  reference.remove()
  .then(() => console.log('Database deleted'))
  .catch(()=> console.log('nope'))
}
const signOut = ({ads_list}) => {
    app.auth()
      .signOut()
      .then(() => {
            console.log('Sign out')
            navigate('Login')
        })
        clearData()
        updateData(ads_list)
}

const SignOutComponent=({ads_list})=>{

  return(
    <IconComponent name = "logout" event={() => {signOut(ads_list)}}/>
  )
    
    

}
const mapStateToProps = (state) => {
  return {
    ads_list: state.ads.ads_list,
  }
}
export default connect(mapStateToProps)(SignOutComponent)