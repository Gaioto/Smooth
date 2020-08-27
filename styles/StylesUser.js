import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  botao: {
    alignItems: 'center',
    backgroundColor: 'rgba(111, 220, 236, 0.6)',
    borderRadius: 6,
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginTop: 40,
    width: 100,
  },
  botaoInfo: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'rgba(111, 220, 236, 0.5)',
    borderRadius: 5,
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  botaoText: {
    color: '#0d0d0d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ecedef',
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  containerSmooth: {
    alignItems: 'center',
    backgroundColor: 'rgba(107,217,233,0.2)',
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(116, 116, 116, 0.1)',
    height: 420,
    width: 300,
  },
  containerInfo: {
    alignItems: "center",
    padding: 20
  },
  info: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: 'center'
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
  textFeel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 40
  }
});

export default styles;