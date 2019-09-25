import React from 'react';
import {AppRegistry, View, StatusBar, Image} from 'react-native';
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label,
  Button,
  Text,
} from 'native-base';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.state = {
      user_name: '',
      token: '',
      profile_pic: '',
    };
  }
  onLogout = e => {
    alert('logout' + e);
  };
  get_Response_Info = (error, result) => {
    if (error) {
      //Alert for the Error
      Alert.alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      alert(JSON.stringify(result));
      this.setState({user_name: 'Welcome' + ' ' + result.name});
      this.setState({token: 'User Token: ' + ' ' + result.id});
      this.setState({profile_pic: result.picture.data.url});
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content padder>
          {/* <Image
     source={'https://www.gstatic.com/webp/gallery/1.jpg'}
     style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
  />  <Button iconLeft onPress={this.doFbLogin}>
            <Icon name='home' />
            <Text>Login with Facebook</Text>
          </Button> */}
          <Button
            full
            rounded
            primary
            style={{marginTop: 10}}
            onPress={() => this.props.navigation.navigate('EditScreenOne')}>
            <Text>Goto EditScreen One</Text>
          </Button>
          <LoginButton
            readPermissions={['public_profile']}
            onLoginFinished={(error, result) => {
              if (error) {
                alert('login has error1:' + error);
              } else if (result.isCancelled) {
                alert('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  //alert('token=' + data.accessToken.toString());

                  const processRequest = new GraphRequest(
                    '/me?fields=name,picture.type(large)',
                    null,
                    this.get_Response_Info,
                  );
                  // Start the graph request.
                  new GraphRequestManager().addRequest(processRequest).start();
                });
              }
            }}
            onLogoutFinished={this.onLogout}
          />
        </Content>
      </Container>
    );
  }
}
