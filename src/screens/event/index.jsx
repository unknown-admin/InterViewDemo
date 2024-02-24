import {StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {events} from '../../apis/apiKeys';
import {eventsRequest} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {fontSize, hp} from '../../utils/layoutDimentions';

const Events = () => {
  const dispatch = useDispatch();
  const {eventData, user} = useSelector(state => state);

  console.log('eventssss and user', eventData, user);

  useEffect(() => {
    const formData = new FormData();
    let params = {
      url: events,
      data: formData,
    };
    dispatch(eventsRequest(params));
  }, []);

  const emptyComponent = () => {
    return(
      <View>
        <Text>
          Sorry, No data found!
        </Text>
      </View>
    )
  }

  const listHeader = () => {
    return(
      <View
        style={{
          paddingHorizontal: hp(3),
          paddingTop: hp(8),
          backgroundColor: 'white',
          paddingBottom:hp(2),
          marginBottom:hp(2)
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: fontSize(4),
            lineHeight: hp(5),
            color: '#0F0F0F',
          }}>
          Hello {user.user.usr_username}!
        </Text>
        <Text style={{fontWeight: '400', fontSize: fontSize(2.5)}}>
          Are you ready to Dance?
        </Text>
      </View>
    )
  }

  const renderItemList = ({item}) => {
    return(
      <TouchableOpacity style={{backgroundColor:'white', marginTop: hp(2), justifyContent:'center', marginHorizontal: hp(2), borderRadius: hp(1)}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: hp(1)}}>
                <Image
                  source={{uri: item?.event_profile_img}}
                  style={{ width: 80, height: 80, borderRadius: hp(1) }}
                  resizeMode='contain'
                />
            </View>
            <View style={{marginTop: hp(0.5)}}>
              <Text style={{fontWeight:'600', fontSize:fontSize(2.5)}}>
                {item.event_name}
              </Text>
              <Text style={{fontWeight:'600', fontSize:fontSize(1.5)}}>
                  {item.readable_from_date}{'  '}{item.readable_to_date}
              </Text>
            </View>
            <View style={{alignSelf:'flex-start', top:hp(1), marginLeft: hp(2)}}>
            <Text style={{fontWeight:'600', fontSize:fontSize(1.5)}}>
            {item.city}{' '}{item.country}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{alignContent: 'center'}}>
      <FlatList
        data={eventData}
        renderItem={renderItemList}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
};

export default Events;
