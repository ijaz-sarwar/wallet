import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import StylesCard from '../assets/styling/StyleCard.js';
export default class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchCats();
    }

    fetchCats() {
        this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>
        <View style={StylesCard.container}>
            <Image style={StylesCard.image} source={{ uri: data.item.url }} />
            <View style={{ display: "flex", flexDirection: 'row', }}>
                <TouchableOpacity style={{ paddingLeft: 10 }}>
                    <Icon name="like1" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 10 }}>
                    <Text>like</Text>
                </TouchableOpacity>

            </View>


        </View>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "#800080",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
        return (
            <SafeAreaView>

                <FlatList
                    data={this.state.data}
                    renderItem={item => this.renderItemComponent(item)}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={this.ItemSeparator}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}

                />

            </SafeAreaView>)
    }
}

