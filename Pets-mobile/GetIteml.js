import React from "react";
import axios from "axios";
import { StyleSheet,View,Text,SafeAreaView,Image  } from 'react-native';
import { Card } from 'react-native-paper';


export default class GEtItems extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
      this.componentDidMount = this.componentDidMount.bind(this)
    }
}
