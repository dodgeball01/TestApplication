import React, {Component} from 'react';
import { View,
    StyleSheet,
    TextInput,
    ScrollView,
    ViewStylePropTypes,
    ScrollViewStyle,
    ContentContainerStyle,
    StyleSheetProperties,
} from 'react-native' 

export default class profilePage extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{
                          alignItems: 'center',
                          backgroundColor: 'red',
                          //showsVerticalScrollIndicator: true,
                        }}>
                <TextInput
                    style={{//flex: 1,
                            height: 75,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderColor: 'blue',
                            borderWidth: 5,
                            color: 'blue',
                            width: 350,
                            }}
                    placeholder="Name"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderColor: 'blue',
                            borderWidth: 5,
                            width: 350,
                            }}
                    placeholder="Address"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="Email Address"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 4"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 5"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 6"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 7"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 8"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 9"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 10"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 11"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 12"
                />
                <TextInput
                    style={{//flex: 1,
                            height: 100,
                            fontSize: 30,
                            backgroundColor: '#fff',
                            borderWidth: 5,
                            borderColor: 'blue',
                            width: 350,
                            }}
                    placeholder="input 13"
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
        alignItems: 'center',
    },
    inputName: {
        //flex: 1,
        height: 30,
        backgroundColor: '#040',
        borderColor: 'blue',
        borderWidth: 5,
        color: 'blue'
    },
    inputAddress: {
        flex: 2,
        backgroundColor: '#040',
        borderColor: 'blue',
        borderWidth: 10,
    },
    inputEmail: {
        flex: 3,
        backgroundColor: 'green',
        borderWidth: 1,
    },
    input4: {
        flex: 1,
        backgroundColor: '#000',


    } 
}
)