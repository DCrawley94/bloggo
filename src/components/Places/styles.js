import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#113755',
    flex: 1,
  },
  mainTitle: {
    fontSize: 17,
    fontFamily: 'Nunito_600SemiBold',
    color: '#52B69A',
    textAlign: 'center',
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#52B69A',
    width: 300,
    alignSelf: 'center',
  },

  listContainer: {
    backgroundColor: '#52B69A',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 300,
    borderColor: 'white',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'center',
  },

  carouselContainer: {
    backgroundColor: '#113755',
    justifyContent: 'center',
    marginTop: 120,
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Nunito_600SemiBold',
    color: 'white',
    textAlign: 'center',
  },

  postTitle: {
    fontSize: 15,
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',

    color: '#52B69A',
  },
  info: {
    fontSize: 17,
    fontFamily: 'Nunito_600SemiBold',
    color: '#52b69a',
    textAlign: 'center',
  },
  titleContainer: {
    fontFamily: 'Nunito_600SemiBold',
    backgroundColor: '#52b69a',
    position: 'absolute',
    top: 0,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
  },

  buttonText: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#f9fced',
  },

  input: {
    paddingLeft: 16,
    color: '#1e6091',
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  blogText: {
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 20,
  },
});
