import AsyncStorage from '@react-native-async-storage/async-storage';

const authApi = async ({ method, params }) => {
    try {
        const requestOptions = {
            method: method,
            body: params?.data,
        };
        const response = await fetch(params.url, requestOptions);
        const data = await response.json();
        console.log('data', JSON.stringify(data,null,2));
        if(data?.success){
            await AsyncStorage.setItem('ACCESS_TOKEN', data.data.token);
        }
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const AfterAuth = async ({ method, params }) => {
    try {
        const accessToken = await AsyncStorage.getItem('ACCESS_TOKEN');

        const requestOptions = {
            method: method,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            // body: params?.data,
        };
        console.log('requestOptions', requestOptions);
        const response = await fetch(params.url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



module.exports = {
  loginCall: async params => {
    return await authApi({method: 'POST', params})
      .catch(e => {
        return e;
      });
  },
  eventCall: async params => {
    return await AfterAuth({method: 'POST', params})
      .catch(e => {
        return e;
      });
  },
};
