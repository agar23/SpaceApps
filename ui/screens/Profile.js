import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, List, ListItem, Card } from 'react-native-elements';


const basicInfo = [
  {
    title: 'Lives in',
    details: 'Nigeria',
    icon: 'pin-drop'
  },
  {
    title: 'Gender',
    details: 'Male',
    icon: 'people'
  },
  {
    title: 'Age',
    details: '22',
    icon: 'date-range'
  },
  {
    title: 'Phone Number',
    details: '+234 453-3834',
    icon: 'phone'
  }
 ]

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  constructor(props) {
    super(props);  
    this.state = {
      name: "John Doe",
      picture: "https://quilllegal.com.au/wp-content/uploads/2016/09/empty-profile.jpg",
      won: 0,
      played: 0,
      credits: 0
    };
  }

  render() {
    return (
      <View style={styles.profile}> 
        <View style={styles.avatarContainer}>
          <Avatar
            containerStyle={styles.avatar}
            avatarStyle={styles.avatarShell}
            xlarge
            rounded
            source={{uri: this.state.picture}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}/>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
          <Card title="Basic Info">
            {
              basicInfo.map((u, i) => {
                return (             
                <ListItem
                  hideChevron 
                  textInput
                  key={i}
                  title={u.title}
                  rightTitle={u.details}
                  leftIcon={{name: u.icon}}
                 />
                );
              })
            }
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: 'column'
  },
  avatarContainer:{
    height: '40%', 
  },
  avatar: {
    marginTop: '5%',
    alignSelf: 'center'
  },
  avatarShell: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 75,
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  list: {
    marginTop: 20, 
    borderTopWidth: 1,
     borderBottomWidth: 1, 
    borderBottomColor: '#cbd2d9'
  }
});
