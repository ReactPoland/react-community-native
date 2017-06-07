import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';
import PropTypes from 'prop-types';
import Articles from './articleContainer';
import ArrayArticels from '../utils/articles';

class ReactWallSceen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    constructor (props) {
        super(props);
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: dataSource.cloneWithRows(['Old Articles'])
        };
    }
    componentWillMount () {
        ArrayArticels.getArticels().then((res) => {
            let articelText = null;
            const listViewArray = res.map((item, i) => {
                if (res[i].content !== null) {
                    articelText = res[i].content.nodes[0].nodes[0].text;
                }
                return { title: res[i].title, text: articelText };
            });
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(listViewArray),
                isLoading:false
            });
        });
    }
    render () {
        return (
            <View style={styles.container}>
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Articles data={rowData} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
});

export default ReactWallSceen;
