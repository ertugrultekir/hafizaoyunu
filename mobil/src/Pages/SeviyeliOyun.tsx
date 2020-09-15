import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native'
import { RouterPropType } from '../Routers/RouterPropType'


const ekranBoyutlari = Dimensions.get("window")
interface Props extends RouterPropType<"SeviyeliOyun"> {

}
interface State {

}
export default class SeviyeliOyun extends Component<Props, State> {
    state = {}
    rndSayilar: Array<number> = []
    tiklananSonRakam: number = 0

    BtnSayiOnPress = (index: number) => {
        if (this.rndSayilar[this.tiklananSonRakam] === index) {
            if (this.tiklananSonRakam === 0) {
                style = {
                    ...style,
                    butonIciText: {
                        ...style.butonIciText,
                        color: "lightcyan"
                    },
                    sayiGizliButonlarMainTouchable: {
                        ...style.sayiGizliButonlarMainTouchable,
                        backgroundColor: "lightcyan"
                    },
                }
            }
            this.tiklananSonRakam += 1
            this.forceUpdate()
        }
        else {
            Alert.alert("Kaybettiniz :/", "Yanlış rakam!")
        }
    }

    BtnBosAlanOnPress = () => {
        Alert.alert("Boş bir alana tıkladınız!")
    }

    render() {
        const items = []

        if (this.rndSayilar.length === 0) {
            for (let i = 0; i < 9; i++) {
                let sayi = Math.floor(Math.random() * 48)
                if (this.rndSayilar.length > 0) {
                    let k = 0
                    for (; k < this.rndSayilar.length; k++) {
                        if (this.rndSayilar[k] === sayi) {
                            sayi = Math.floor(Math.random() * 48)
                            k = -1
                        }
                        else if (k + 1 === this.rndSayilar.length) {
                            this.rndSayilar.push(sayi)
                            break;
                        }
                    }
                }
                else {
                    this.rndSayilar.push(sayi)
                }
            }
        }

        for (let i = 0; i < 48; i++) {
            items.push(
                <TouchableOpacity style={style.kapaliButonlarMainTouchable} key={i} onPress={this.BtnBosAlanOnPress} activeOpacity={1}>
                    <Text style={style.butonIciText}></Text>
                </TouchableOpacity>
            )
        }

        for (let i = 0; i < this.rndSayilar.length + 1; i++) {
            if (this.tiklananSonRakam > i) {
                items[this.rndSayilar[i]] = <TouchableOpacity
                    style={[style.sayiGizliButonlarMainTouchable, { backgroundColor: "midnightblue" }]}
                    key={this.rndSayilar[i]}
                    onPress={() => this.BtnSayiOnPress(this.rndSayilar[i])}
                    activeOpacity={1}
                >
                    <Text style={[style.butonIciText, { color: "lightblue" }]}>{i + 1}</Text>
                </TouchableOpacity>
            }
            else {
                items[this.rndSayilar[i]] = <TouchableOpacity
                    style={style.sayiGizliButonlarMainTouchable}
                    key={this.rndSayilar[i]}
                    onPress={() => this.BtnSayiOnPress(this.rndSayilar[i])}
                    activeOpacity={1}
                >
                    <Text style={style.butonIciText}>{i + 1}</Text>
                </TouchableOpacity>
            }
        }
        return (
            <ScrollView>
                <View style={style.butonlarMainView}>
                    {
                        items
                    }
                </View>

                <View style={style.ipucuMainView}>
                    <TouchableOpacity style={style.ipucuMainTouchable}>
                        <Image
                            source={require("../Images/idea.png")}
                            style={style.ipucuImage}
                        />
                        <Text>1/2</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}


let style = StyleSheet.create({
    butonlarMainView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
    butonIciText: {
        color: "lightblue",
        fontSize: 28,
    },
    kapaliButonlarMainTouchable: {
        backgroundColor: "midnightblue",
        width: ekranBoyutlari.width / 6,
        height: ekranBoyutlari.width / 6,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
    },
    sayiGizliButonlarMainTouchable: {
        backgroundColor: "midnightblue",
        width: ekranBoyutlari.width / 6,
        height: ekranBoyutlari.width / 6,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
    },
    ipucuMainView: {
        width: 150,
        height: 50,
        marginLeft: 20,
        marginVertical: 30,
    },
    ipucuMainTouchable: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "silver",
        elevation: 3,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    ipucuImage: {
        width: 30,
        height: 30,
        marginRight: 20,
        marginTop: 5,
    }
})