import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { workoutActions } from '../../state/workout';
import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';
import { Card } from '../../components/common/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: colors.backgroundColor
  },
  text: {
	color: colors.primaryText,
  }
});

class WorkoutScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Workout',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};

	_keyExtractor = (item, idx) => '' + idx;

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={this.props.workout.workouts}
					keyExtractor={this._keyExtractor}
					renderItem={({item}) => {
						return (
							<Card onPress={() => {}}>
								<Text>{item.name}</Text>
							</Card>
						)
					}} />
			</SafeAreaView>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		workout: state.workout
	};
};

const mapDispatchToProps = (dispatch) => {
	return { 
    	actions: bindActionCreators(workoutActions, dispatch) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);
