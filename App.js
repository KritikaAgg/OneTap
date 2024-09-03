import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.spanText}>OneTap</Text>
    </View>
  );
};
const Frame = () => {
  return (
    <View style={styles.frame}>
      <OptimizationCircle />
      <Title />
      <BudgetProgress />
    </View>
  );
};
const OptimizationCircle = () => {
  const pieData = [
    { value: 100, color: '#FFFFFF' }, 
  ];
  return (
    <PieChart
      data={pieData}
      donut
      innerRadius={98} 
      radius={98.5} 
      innerCircleColor={'#FFFFFF'} 
      strokeWidth={10} 
      strokeColor={'#F2E8FF'} 
      centerLabelComponent={() => (
        <View style={styles.textContainer}>
          <Text style={styles.centerText}>0%</Text>
        </View>
      )}
      containerStyle={styles.optimizationCircle} 
    />
  );
};

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Your Optimization Score is <Text style={styles.spanText}>0%</Text>
      </Text>
    </View>
  );
};

const BudgetProgress = () => {
  return (
    <View style={styles.budgetProgressContainer}>
      <View style={styles.budgetFrame}>
        <Text style={styles.spentText}>
          $100 <Text style={styles.spentSpanText}>Spent</Text>
        </Text>
        <Text style={styles.budgetText}>
          Budget <Text style={styles.budgetAmountText}>$1000</Text>
        </Text>
      </View>
      <SliderWireframe />
    </View>
  );
};

const SliderWireframe = () => {
  return (
    <View style={styles.sliderWireframe}>
      <View style={styles.sliderProgress}></View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Frame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: 339, 
    height: 52, 
    paddingVertical: 14, 
    paddingHorizontal: 0, 
    justifyContent: 'space-between', 
    opacity: 1, 
  },
  frame: {
    width: 339, 
    height: 604, 
    marginTop: 36, 
    opacity: 1, 
    alignItems: 'center',
  },
  optimizationCircle: {
    width: 197.36, 
    height: 197, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 47.6, 
    elevation: 5, 
    opacity: 1, 
  },
  textContainer: {
    width: 85.36, 
    height: 39, 
    backgroundColor: '#1C1C1C', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    //fontFamily: 'Inter-Black', 
    fontSize: 44, 
    fontWeight: '400', 
    lineHeight: 66, 
    textAlign: 'center', 
    color: '#000000', 
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    width: 339, 
    height: 21, 
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1, 
    marginTop: 20, 
  },
  titleText: {
    //fontFamily: 'Inter-Black', 
    fontSize: 14, 
    fontWeight: '400', 
    lineHeight: 21, 
    textAlign: 'center', 
    color: '#000000', 
  },
  spanText: {
    //fontFamily: 'Inter-Black', 
    fontSize: 14, 
    fontWeight: '600', 
    lineHeight: 21, 
    textAlign: 'center', 
    color: '#8826C7', 
  },
  budgetProgressContainer: {
    width: 339, 
    height: 41, 
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1, 
    marginTop: 10, 
    backgroundColor: '#FFFFFF'
  },
  budgetFrame: {
    width: 339, 
    height: 18, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    opacity: 1, 
  },
  spentText: {
    width: 169.5, 
    height: 18, 
    //fontFamily: 'Inter-Black', 
    fontSize: 14, 
    fontWeight: '500', 
    lineHeight: 21, 
    textAlign: 'left', 
    backgroundColor: '#FFFFFF', 
    color: '#000000', 
  },
  spentSpanText: {
    //fontFamily: 'Inter-Black', 
    fontSize: 14,
    fontWeight: '400', 
    lineHeight: 21, 
    textAlign: 'left', 
    color: '#000000', 
  },
  budgetText: {
    width: 169.5,
    height: 18, 
    //fontFamily: 'Inter-Black', 
    fontSize: 12, 
    fontWeight: '500', 
    lineHeight: 13, 
    letterSpacing: 0.07, 
    textAlign: 'right',
    backgroundColor: '#FFFFFF', 
    color: '#000000', 
  },
  budgetAmountText: {
    //fontFamily: 'Poppins', 
    fontSize: 12, 
    fontWeight: '500', 
    lineHeight: 13,
    lineHeight: 13, 
    letterSpacing: 0.07, 
    textAlign: 'right', 
    color: '#8826C7', 
  },
  sliderWireframe: {
    width: 339, 
    height: 13, 
    backgroundColor: '#E2B4F480', 
    borderRadius: 80, 
    marginTop: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 5, 
    opacity: 1, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderProgress: {
    width: 49, 
    height: 13, 
    backgroundColor: '#8C28D2', 
    borderRadius: 80, 
    opacity: 1, 
  },
});