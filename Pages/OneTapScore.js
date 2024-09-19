import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.iconPlaceholder}></View>
      <Text style={styles.spanText}>OneTap</Text>
      <View style={styles.iconPlaceholder}></View>
    </View>
  );
};
const Campaigns = () => {
  return (
    <View style={styles.campaignContainer}>
      <View style={styles.topCampaignContainer}>
        <View style={styles.campaignsTextContainer}>
          <Text style={styles.campaignsText}>Campaigns</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.optimizationScoreText}>OneTap Score</Text>
          <Text style={styles.lowHighText}>Low - High</Text>
        </View>
      </View>

      <View style={styles.bottomCampaignContainer}></View>
    </View>
  );
};
const Frame = () => {
  return (
    <View style={styles.frame}>
      <OptimizationCircle />
      <Title />
      <BudgetProgress />
      <Campaigns />
      <Button />
    </View>
  );
};
const Button = () => {
  return(
    <View style={styles.buttonContainer}>
      <View style={styles.button}></View>
    </View>
  )
}
const OptimizationCircle = () => {
  const pieData = [
    { value: 10, color: '#8C28D2' },  
    { value: 100, color: '#F2E8FF' },
  ];

  return (
    <PieChart
      data={pieData}
      donut
      innerRadius={85}  
      radius={100}      
      innerCircleColor={'#FFFFFF'}
      strokeWidth={0}
      strokeColor={'#F2E8FF'}
      centerLabelComponent={() => (
        <View style={styles.textContainer}>
          <Text style={styles.centerText}>10%</Text>
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
        Your OneTap Score is <Text style={styles.spanText}>0%</Text>
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

const ContinueButton = () => {
  return (
    <View style={styles.bottombuttonContainer}>
      <View style={styles.bottombutton}>
        <Text style={styles.continueText}>Continue</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Frame />
      <ContinueButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    width: 339, 
    height: 70, 
    paddingVertical: 10, 
    paddingHorizontal: 0, 
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', 
    opacity: 1, 
  },
  iconPlaceholder: {
    width: 20,  
    height: 20, 
    backgroundColor: '#8826C7', 
  },
  spanText: {
    //fontFamily: 'Inter-Black', 
    fontSize: 22, 
    fontWeight: '700', 
    textAlign: 'center', 
    color: '#8826C7', 
  },
  frame: {
    width: 339, 
    height: 604, 
    marginTop: 36, 
    opacity: 1, 
    alignItems: 'center',
    paddingBottom: 80,
  },
  optimizationCircle: {
    width: 197.36, 
    height: 197, 
    justifyContent: 'center',
    alignItems: 'center', 
    opacity: 1, 
  },
  textContainer: {
    width: 85.36, 
    height: 39, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    //fontFamily: 'Inter-Black', 
    fontSize: 44, 
    fontWeight: '400', 
    lineHeight: 45, 
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
    marginTop: 40, 
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
    marginTop: 40, 
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
  campaignContainer: {
    width: 339,
    height: 129,
    justifyContent: 'space-between', 
    marginTop: 30, 
    backgroundColor: '#FFFFFF',
  },
  topCampaignContainer: {
    width: '100%',
    height: 49, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2, 
  },
  campaignsTextContainer: {
    width: 160, 
    height: 30, 
    justifyContent: 'center',
  },
  campaignsText: {
    //fontFamily: 'Poppins',
    fontSize: 30, 
    fontWeight: '600',
    lineHeight: 30,
    textAlign: 'left',
    color: '#000000', 
  },
  rightContainer: {
    width: 169.5,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
  },
  optimizationScoreText: {
    //fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'right',
    color: '#000000', 
    
  },
  lowHighText: {
    //fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'right',
    color: '#8826C7', 
  },
  bottomCampaignContainer: {
    width: '100%',
    height: 49, 
    backgroundColor: '#E2B4F4', 
    marginTop: 2, 
  },
  buttonContainer: {
    width: '100%',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  button: {
    width: 72,
    height: 72,
    backgroundColor: '#8826C7', 
    opacity: 1, 
  },
  bottombuttonContainer: {
    width: 339, 
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1, 
    marginTop: 10, 
  },
  bottombutton: {
    width: '100%', 
    height: 54,
    backgroundColor: '#B543E4', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    opacity: 1, 
  },
  continueText: {
    width: 69,
    height: 14,
    //fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: 0.03,
    textAlign: 'center',
    color: 'white',
    opacity: 1,
  },
});