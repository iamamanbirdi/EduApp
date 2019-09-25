import React from 'react';
import {StatusBar, View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';
import TabBarNavigator from '../TabBar';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        {/* <StatusBar backgroundColor="#f2f7ff" barStyle="light-content" /> */}
        <Header>
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right>
            <Button>
              <Icon name="search" />
            </Button>
            <Button>
              <Icon name="heart" />
            </Button>
            <Button>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <TabBarNavigator />
      </Container>
    );
  }
}
