
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  background: {
    backgroundColor: '#ecedef',
    flex: 1,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'rgba(111, 220, 236, 0.6)',
    borderRadius: 6,
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 42,
    justifyContent: 'center',
    marginTop: 30,
    width: 100,
  },
  botaoCadastro: {
    alignItems: 'center',
    backgroundColor: 'rgba(235, 236, 236, 0.6)',
    borderRadius: 6,
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 42,
    justifyContent: 'center',
    marginTop: 20,
    width: 100,
  },
  botaoTextCadastro: {
    color: '#0d0d0d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoText: {
    color: '#0d0d0d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#badce1',
    borderRadius: 16,
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(116, 116, 116, 0.4)',
    flex: 1,
    height: 380,
    marginBottom: 60,
    padding: 20,
    width: 300,
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    backgroundColor: '#ebebeb',
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    marginTop: 30,
    paddingLeft: 10,
    width: 240,
  },
  login: {
    alignItems: 'center'
  },
  logo: {
    marginTop: 60,
    width: 200,
    height: 200
  },
  texto: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    color: '#262626',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5, 
  },
  water: {
    color: 'rgba(116, 116, 116, 0.8)',
    fontSize: 14,
  },
});

export default styles;
