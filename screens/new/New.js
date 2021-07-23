import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Post from '../../components/post/Post';
import axios from 'axios';
import AppLoading from 'expo-app-loading'
import timestamp from 'unix-timestamp'

/* THIS COMPONENT CONTAINS THE LOGIC FOR DISPLAYING THE POSTS FROM THE "NEW" TAB */

const New = ({navigation}) => {
  const [info, setInfo] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  var moment = require('moment')
  moment().format()

  // Function for refreshing the ViewScroll component
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
        setRefreshing(false)
    }, 1500)
})

  // Function for sorting the data by Date posted from newest to oldest
  const dateSort = (data) => {
    return data.sort((a, b) => {
        if (Number(a.created.split(' ')[0]) > Number(b.created.split(' ')[0])) return 1
        if (Number(b.created.split(' ')[0]) > Number(a.created.split(' ')[0])) return -1
        return 0
    })
}

  // Here I handle the data I fetch from the API and use it to set the state
  const handleReq = async () => {
    await axios.get('https://api.reddit.com/r/pics/hot.json').then(res => {  
      const response = res.data.data.children.map(el => ({
        url: el.data.url_overridden_by_dest,
        author: el.data.author,
        created: moment(timestamp.toDate(el.data.created_utc)).fromNow(),
        title: el.data.title,
        thumbnail: el.data.thumbnail,
        score: el.data.score,
        num_comments: el.data.num_comments
      }))
      setInfo(dateSort(response))
    })
  }

  // Cleanup effect to remove warning
  useEffect(() => {
    return () => {
    }
  }, [])

  // If the data has been successfully fetched I display the posts
  if (loaded) {
    return (
      <ScrollView style={styles.container} refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
        {info.map((item, i) => 
            <TouchableOpacity key={i} onPress={() => navigation.navigate('PostDetails', {url: item.url})}>
                <Post
                    url={item.url}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    created={item.created}
                    author={item.author}
                    score={item.score}
                    comments={item.num_comments}
                />
            </TouchableOpacity>)}
      </ScrollView>
    );
  } else {
    // if not, the AppLoading component will display an error message
    return (
      <AppLoading
        startAsync={() => handleReq()}
        onFinish={() => setLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
  },
});

export default New
