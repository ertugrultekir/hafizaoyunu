import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { RouterPropType } from '../Routers/RouterPropType'


interface Props extends RouterPropType<"GirisEkrani"> {

}
interface State {

}
export default class GirisEkrani extends Component<Props, State> {
    state = {}

    render() {
        return (
            <View>
                <Text>Giriş Ekranı</Text>
                <Button
                    title="Test"
                    onPress={() => this.props.navigation?.reset({
                        // index: 0,
                        routes: [
                            {
                                name: 'SeviyeliOyun',
                                params: undefined,
                            },
                        ],
                    })}
                />
            </View>
        )
    }
}
