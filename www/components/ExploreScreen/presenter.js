import React from 'react';
import {AppRegistry, View, StatusBar} from 'react-native';
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

export default class ExploreScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Item floatingLabel style={{marginTop: 20}}>
            <Label>ExploreScreen</Label>
            <Input />
          </Item>
          <Button
            rounded
            danger
            style={{marginTop: 20, alignSelf: 'center'}}
            onPress={() => navigate('Profile')}>
            <Text>Goto Jade Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
