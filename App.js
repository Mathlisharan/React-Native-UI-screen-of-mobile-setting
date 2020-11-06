import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default class ListIconExample extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Content>

          <ListItem icon>
            <Left>
              <Button><AntDesign name="phone" size={16} color="white" /></Button>
            </Left>
            <Body><Text>About Phone</Text></Body>
            <Right><Text> MIUI Global 12.0.1 </Text><Icon active name="arrow-forward" /></Right>
          </ListItem>


          <ListItem icon>
            <Left>
              <Button><AntDesign name="arrowup" size={18} color="orange" /></Button>
            </Left>
            <Body><Text>System apps updater</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><FontAwesome name="check" size={20} color="lightgreen" /></Button>
            </Left>
            <Body><Text>Security status</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>


          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="sim-card" size={20} color="yellow" /></Button>
            </Left>
            <Body><Text>SIM cards & mobile networks</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><FontAwesome name="wifi" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Wi-Fi</Text></Body>
            <Right><Text>Off</Text><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}><Icon active name="bluetooth" /></Button>
            </Left>
            <Body><Text>Bluetooth</Text></Body>
            <Right><Text>Off</Text><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><AntDesign name="sharealt" size={20} color="orange" /></Button>
            </Left>
            <Body><Text>Connecting & Sharing</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}><Icon active name="lock" /></Button>
            </Left>
            <Body><Text>Lock screen</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="wb-sunny" size={20} color="yellow" /></Button>
            </Left>
            <Body><Text>Display</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><AntDesign name="sound" size={20} color="lightgreen" /></Button>
            </Left>
            <Body><Text>Sound & Vibration</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><Entypo name="notification" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Notification</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}><Icon active name="home" /></Button>
            </Left>
            <Body><Text>Home Screen</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="wallpaper" size={20} color="voilet" /></Button>
            </Left>
            <Body><Text>Wallpaper</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><FontAwesome name="paint-brush" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Themes</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><Ionicons name="ios-finger-print" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Password & Securtiy</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="security" size={20} color="grey" /></Button>
            </Left>
            <Body><Text>Privacy Protection</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><FontAwesome name="battery" size={18} color="lightgreen" /></Button>
            </Left>
            <Body><Text>Battery & Performance</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}><Icon active name="apps" /></Button>
            </Left>
            <Body><Text>Apps</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><Entypo name="dots-three-horizontal" size={20} color="grey" /></Button>
            </Left>
            <Body><Text>Additional settings</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="control-point" size={20} color="lightgreen" /></Button>
            </Left>
            <Body><Text>Digital Wellbeing & parental controls</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="featured-video" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Speacial features</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialCommunityIcons name="account" size={20} color="orange" /></Button>
            </Left>
            <Body><Text>Mi Account</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><AntDesign name="google" size={20} color="white" /></Button>
            </Left>
            <Body><Text>Google</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="sync" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Account & sync</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><Ionicons name="md-eye" size={20} color="skyblue" /></Button>
            </Left>
            <Body><Text>Privacy</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><MaterialIcons name="location-on" size={20} color="orange" /></Button>
            </Left>
            <Body><Text>Location</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button><EvilIcons name="question" size={20} color="white" /></Button>
            </Left>
            <Body><Text>Service & Feedback</Text></Body>
            <Right><Icon active name="arrow-forward" /></Right>
          </ListItem>






        </Content>
      </Container>
    );
  }
}
