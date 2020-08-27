import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/StylesUser'

const UserScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.textFeel}>F e e l   t h e   S M O O T H !</Text>

      <View style={styles.containerSmooth}>

        <Text style={styles.texto}>
          Bem vindo ao SMOOTH
        </Text>

        <View style={styles.containerInfo}>
          <Text style={styles.info}>
            Nosso projeto consiste em um sistema moderno de recrutamento e
            seleção de pessoal da área de serviços, especificamente o comércio varejista.
            Utilizando óculos de realidade virtual, os candidatos terão condições de vivenciar os desafios da vaga proposta,
            identificando se são capazes de executar tarefas básicas exigidas, e os recrutadores terão dados analíticos desses candidatos,
            além de um rankeamento dos perfis mais compatíveis com os requisitos pré-determinados pela equipe de RH junto ao gestor da vaga.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoInfo}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.botaoText}>Sobre nós</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.botaoText}>Deslogar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default UserScreen;
