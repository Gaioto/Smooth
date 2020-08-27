import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/StylesAbout'
import smoothLogo from '../assets/images/smoothLogo.png'

const AboutScreen = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require = (smoothLogo)}
      >
      </Image>

      <View style={styles.containerSmooth}>

        <Text style={styles.texto}>
          Sobre nós
        </Text>

        <View style={styles.containerInfo}>
          <Text style={styles.info}>
            Nós somos a GeneralDevelopment, um grupo criado para a solução de problemas utilizando tecnologia.
          </Text>
          <Text style={styles.nomes}>Rodrigo Ribeiro</Text>
          <Text style={styles.nomes}>Marcelo De Oliveira</Text>
          <Text style={styles.nomes}>Luiz Guilherme</Text>
          <Text style={styles.nomes}>Henrique Gois</Text>
          <Text style={styles.nomes}>contato@generaldevelopment.com</Text>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('User')}
        >
          <Text style={styles.botaoText}>Voltar</Text>
        </TouchableOpacity>

      </View>




    </View>

  );
}

export default AboutScreen;
