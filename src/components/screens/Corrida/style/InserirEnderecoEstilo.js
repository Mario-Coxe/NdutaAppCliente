import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,

  },
  destinationInputContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 2,
  },
  suggestionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  suggestionText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#000'
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
    marginTop: 60
  },
  modalInput: {
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    height: 45,
    color: '#000'
  },




  modalContentInput: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 170,
  },
  NomeUser: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  favorite: {
    flexDirection: 'row',
    marginTop: 40,
    right: -35,
    color: '#000'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -60,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom: -20,
    marginTop: 70,
    color: '#000',
    fontSize: 12
  },
  button: {
    backgroundColorp: '#D6001B',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonTextp: {
    color: '#333',
    textAlign: 'center',
    fontSize: 16,
  },
  modalContainerp: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContentp: {
    // backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 70,
  },
  optionsContainerp: {
    paddingBottom: 35,
    height: 100
  },
  optionContainerp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 15,
    // borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    marginTop: 15,
    marginBottom: -15,
    height: 90,
    width: 135
  },
  selectedOptionContainerp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    marginTop: 15,
    marginBottom: -15,
    height: 90,
    width: 135
  },
  optionImageContainerp: {
    borderRadius: 20,
    padding: 10,
    width: 80,
    
  },
  optionImagep: {
    height: 65,
    width: 75,
    left: 40,
    marginBottom: -30

  },
  optionTextContainerp: {
    marginLeft: 3,

  },
  optionNamep: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    left: -80,
    marginBottom: 20
  },
  optionTypep: {
    fontSize: 14,
    color: '#A5A5A5',
  },
  optionPricep: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    
    left: -80,
    marginTop: -20
  },
  optionWaitTimep: {
    fontSize: 14,
    color: '#000',
    marginBottom: 40,
    marginVertical: -35,
    left: 10
  },
  button: {
    backgroundColorp: '#D6001B',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonTextp: {
    color: '#333',
    textAlign: 'center',
    fontSize: 16,
  },
});