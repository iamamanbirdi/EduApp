import React from 'react';
import {AppRegistry, Alert} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Text,
} from 'native-base';
export default class EditScreenTwo extends React.Component {
  static navigationOptions = ({navigation}) => ({});
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Edit Screen 1</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Text>This is EditScreenTwo</Text>
        </Content>
      </Container>
    );
  }
}
