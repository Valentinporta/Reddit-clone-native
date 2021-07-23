import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

/* THIS COMPONENT DISPLAYS THE INFO THAT EVERY POST CONTAINS */

const Post= (props) => {

    return (

        <View style={styles.container}>
            <Image
            source={{uri: props.thumbnail}}
            style={styles.img}
            resizeMethod='scale'
            />

            <View style={styles.postInfo}>

                <Text style={styles.datePosted}>{props.created}</Text>
            
                <View>
                    <Text numberOfLines={2} style={styles.titleText}>{props.title}</Text>
                </View>

                <View style={styles.bottomRow}>

                    <View>
                        <Text>{props.author}</Text>
                    </View>

                    <View>
                        <Text>{`score: ${props.score}`}</Text>
                    </View>

                    <View>
                        <Text>{`${props.comments} comments`}</Text>
                    </View>

                </View>

            </View>

        </View>

    )
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: width - 20,
        flexShrink: 1,
        maxHeight: 100,
        marginBottom: 20,
        position: 'relative'
    },
    img: {
        width: 80,
        height: 100,
    },
    postInfo: {
        flexShrink: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: width
    },
    datePosted: {
        alignSelf: 'flex-end',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        paddingLeft: 10,
        width: width - 100
    }
})

export default Post
