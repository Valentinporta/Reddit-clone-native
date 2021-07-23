import React from 'react'
import { WebView } from 'react-native-webview'

const PostDetails = ({ route: { params } }) => {
    const { url } = params
    return (
        <WebView
            source={{uri: url}}
        />
    )
}

export default PostDetails
