import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { ToastAndroid } from 'react-native';


const toast = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
    );
};

var trocaTela;

async function inserirUsuario(username, senha) {
    const usuario = {
        username, senha
    }

    const json = await AsyncStorage.getItem(username);

    if (username === "" && senha === "") {
        return toast('Por favor preencha os campos!')
    } else {
        if (json != null) {
            return toast('Usuário já cadastrado no sistema')
        } else {
            await AsyncStorage.mergeItem(usuario.username, JSON.stringify(usuario));
            return toast('Usuário cadastrado no sistema')
        }
    }
}

async function buscarUsuario(username, senha) {
    const json = await AsyncStorage.getItem(username);
    const user = JSON.parse(json)

    trocaTela = 0;

    if (username === "" && senha === "") {
        return toast('Por favor preencha os campos!')
    } else {
        if (user === null) {
            return toast('Usuário não cadastrado no sistema!')
        } else {
            if (user.username === username && user.senha === senha) {
                trocaTela = 1;
            } else {
                return toast('Usuário ou senha incorretos!')
            }
        }
    }
    trocaTela;
}

const limparBanco = async (callback = null) => {
    try {
        await AsyncStorage.clear(callback);
        return toast('Banco resetado')
    } catch (e) {
        throw new Error('Erro ao tentar apagar os usuários!')
    }
}

export { buscarUsuario, inserirUsuario, limparBanco, toast, trocaTela};