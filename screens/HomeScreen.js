import React, { useState, useEffect } from 'react';
import {
  Animated, Image, ScrollView, Text,
  TextInput, TouchableOpacity, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buscarUsuario, inserirUsuario, limparBanco, trocaTela, toast } from '../Controller';

import styles from '../styles/StylesHome'
import smoothLogo from '../assets/images/smoothLogo.png'

const HomeScreen = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();

  }, []);

  async function cadastrar() {
    if (username === 'admin' && senha === 'reset') {
      limparBanco();
    } else {
      inserirUsuario(username, senha)
      setUsername('')
      setSenha('')
    }

  }

  async function login() {
    buscarUsuario(username, senha).then(
      _ => {
        if (trocaTela == 1) {
          navigation.navigate('User')
          setUsername('')
          setSenha('')
        }
      })
  }

  return (

    <ScrollView style={styles.background}>

      <View style={styles.login}>

        <TouchableOpacity
          style={styles.containerLogo}
          onPress={() => {toast('Cadastre o usuário "admin" e a senha "reset" para resetar o banco')}}
        >

          <Image
            style={styles.logo}
            source={require = (smoothLogo)}
          >
          </Image>

        </TouchableOpacity>

        <Animated.View style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>

          <Text style={styles.texto}>BEM VINDO AO SMOOTH</Text>

          <TextInput
            style={styles.input}
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder="Digite seu usuário"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            onChangeText={text => setSenha(text)}
            value={senha}
            secureTextEntry={true}
            placeholder="Digite sua senha"
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={login}
          >
            <Text style={styles.botaoText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCadastro}
            onPress={cadastrar}
          >
            <Text style={styles.botaoTextCadastro}>Cadastrar</Text>
          </TouchableOpacity>

        </Animated.View>

      </View>

    </ScrollView>
  );
}

export default HomeScreen;

