import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import dispatch from '../store/dispatch.js';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Text> We have {this.props.name} friends!</Text>
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                    onChangeText={(text) => this.props.changeName(text)}
                    value={this.props.name}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(dispatch.mapStateToProps, dispatch.mapDispatchToProps)(Home);
