import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: "",
            img: require('./src/biscoito.png')
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this)

        this.frases = [
            "A sorte favorece aqueles que persistem com determinação e coragem.",
            "Seja gentil com os outros, pois a bondade sempre retorna multiplicada.",
            "Grandes conquistas começam com pequenos passos e grandes sonhos.",
            "Acredite no poder dos seus sonhos e eles se tornarão sua realidade.",
            "A vida é uma jornada cheia de surpresas maravilhosas. Aproveite cada momento.",
            "O segredo da felicidade está em apreciar o que você tem enquanto busca o que deseja.",
            "A verdadeira sabedoria está em aprender com o passado, viver o presente e construir o futuro."
        ]
    }

    quebraBiscoito() {
        // GERA NUMERO ALEATÓRIO COM BASE NO TAMANHO DA LISTA
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        this.setState({
            textoFrase: ' "' + this.frases[numeroAleatorio] + ' "',
            img: require('./src/biscoitoAberto.png')
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={this.state.img}
                />

                <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
                <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

    img: {
        width:250,
        height:250
    },
    textoFrase:{
        fontSize:20,
        color:'#dd7b22',
        margin:30,
        fontStyle: "italic",
        textAlign: "center"
    },
    botao: {
        width:230,
        height:50,
        borderWidth:2,
        borderColor: '#dd7b22',
        borderRadius:25
    },
    btnArea:{
        flex:1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22',


    }
});

export default App
