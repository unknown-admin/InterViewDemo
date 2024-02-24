import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {hp, wp, fontSize} from '../../utils/layoutDimentions';
import CTextInput from '../../component/CTextInput';
import {apple, google, facebook} from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../apis/apiKeys';
import { loginRequest } from '../../redux/actions';
import { AppContext } from '../../navigation/appContext';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => (state.user));
  const { setIsLoggedIn  } = useContext(AppContext);
  
  const [userName, setUserName] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');

  useEffect(()=> {
    if(user !== null){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  },[user])

  const onPressSignin = () => {
    const formData = new FormData();
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName || !password) {
      alert('username and password is required.');
      return;
    } else if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    } else if (!passwordRegex.test(password)) {
      alert(
        'Password must contain at least one capital letter, one number, and one special character.',
      );
      return;
    }
    if (!usernameRegex.test(userName)) {
      alert('Invalid email format.');
      return;
    } else {
      formData.append('email', userName);
      formData.append('password', password);
      let params = {
        url : login,
        data: formData,
      }
      dispatch(loginRequest(params))
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: '40%',
          backgroundColor: '#e5e5e5',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: hp(2),
        }}>
        <Text style={{fontSize: fontSize(10), color: 'black'}}>Plie</Text>
        <Image
          source={{
            uri: 'https://picsum.photos/id/237/200/300',
          }}
          style={{width: 80, height: 80, marginBottom: hp(4)}}
          resizeMode="contain"
          alt="Image not found"
        />
      </View>
      <View style={{paddingHorizontal: hp(5)}}>
        <View style={{marginTop: hp(4), gap: hp(0.8)}}>
          <CTextInput
            title={'Email'}
            placeholder={'email@email.com'}
            value={userName}
            onChangeText={setUserName}
          />
          <CTextInput
            title={'Password'}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: 'flex-end',
              top: hp(0.5),
              color: '#828282',
              fontSize: hp(1.3),
              fontWeight: '400',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginTop: hp(3),
            backgroundColor: '#21D393',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: hp(1),
            borderRadius: hp(1),
          }}
          onPress={onPressSignin}>
          <Text style={{fontSize: hp(1.7), fontWeight: '600', color: 'white'}}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginTop: hp(2),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: hp(1.3), fontWeight: '400', color: 'black'}}>
            Not a member? Sign Up Here
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            top: hp(5),
          }}>
          <View
            style={{
              flex: 1,
              height: hp(0.15),
              backgroundColor: 'black',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              paddingHorizontal: hp(1),
              fontSize: fontSize(2),
              alignSelf: 'center',
              color: 'black',
            }}>
            or Sign in with:
          </Text>
          <View
            style={{
              flex: 1,
              height: hp(0.15),
              backgroundColor: 'black',
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Google login')}>
            <Image source={google} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Apple login')}>
            <Image source={apple} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Facebook login')}>
            <Image source={facebook} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: hp(3),
    marginTop: hp(9),
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});
