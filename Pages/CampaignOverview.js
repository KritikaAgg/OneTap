import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { PieChart, LineChart } from 'react-native-gifted-charts';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TopBarComponent />
        <HeaderComponent />
        <Overview />
        <View style={styles.circularProgressWrapper}>
        <CircularProgress />
        </View>
        <Total />
      </ScrollView>
    </SafeAreaView>
  );
}

const TopBarComponent = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.icon}></View>
      <Text style={styles.titleText}>Video Campaign</Text>
      <View style={styles.icon}></View>
    </View>
  );
};

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View style={styles.imagePlaceholder}>
        <PageLogo />
        <TextBlock />
      </View>
    </View>
  );
};

const ChartComponent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const weekData = [
    { value: 50, label: 'Mon' },
    { value: 80, label: 'Tue' },
    { value: 150, label: 'Wed' },
    { value: 250, label: 'Thu' },
    { value: 100, label: 'Fri' },
    { value: 60, label: 'Sat' },
    { value: 120, label: 'Sun' },
  ];

  const monthData = [
    { value: 500, label: 'W1' },
    { value: 700, label: 'W2' },
    { value: 300, label: 'W3' },
    { value: 450, label: 'W4' },
  ]; 

  const yearData = [
    { value: 2000, label: 'Jan' },
    { value: 2500, label: 'Feb' },
    { value: 1800, label: 'Mar' },
    { value: 3000, label: 'Apr' },
    { value: 2200, label: 'May' },
    { value: 2800, label: 'Jun' },
    { value: 3200, label: 'Jul' },
    { value: 3500, label: 'Aug' },
    { value: 2700, label: 'Sep' },
    { value: 2600, label: 'Oct' },
    { value: 2400, label: 'Nov' },
    { value: 2900, label: 'Dec' },
  ];

  const data = selectedPeriod === 'week' ? weekData : selectedPeriod === 'month' ? monthData : yearData;

  const renderLabelComponent = (value) => (
    <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 20, elevation: 5, alignItems: 'center', position: 'absolute', top: -30 }}>
      <Text style={{ color: '#6a0dad', fontWeight: 'bold' }}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.chartContainer}>
      <View style={styles.chartTitleContainer}>
        <Text style={styles.chartTitle}>Clicks</Text>
        <View style={styles.periodToggle}>
          <TouchableOpacity onPress={() => setSelectedPeriod('week')}>
            <Text style={{ color: selectedPeriod === 'week' ? '#A235E5' : 'black' }}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedPeriod('month')}>
            <Text style={{ color: selectedPeriod === 'month' ? '#A235E5' : 'black' }}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedPeriod('year')}>
            <Text style={{ color: selectedPeriod === 'year' ? '#A235E5' : 'black' }}>Year</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LineChart
        data={data}
        width={250}
        height={200}
        initialSpacing={0}
        thickness={2}
        isAnimated
        adjustToWidth={true}
        startFillColor={'#C89AF9'}
        endFillColor={'#ffffff'}
        startOpacity={0.7}
        endOpacity={0.1}
        spacing={40}
        color={'#8B3FFD'}
        yAxisTextStyle={{ color: '#000000' }} 
        stepValue={50}
        showVerticalLines
        verticalLinesColor={'#f0c0e0'}
        showYAxisIndices={false}
        noOfSections={4}
        yAxisColor={'#FFD700'}
        curved
        areaChart
        labelComponent={(value, index) => {
          if (value === 250) {
            return renderLabelComponent(value);
          }
          return null;
        }}
      />
    </View>
  );
};

const Overview = () => {
  return (
    <View style={styles.overview}>
      <Text style={styles.overviewTitle}>Campaign Overview</Text>
      <ChartComponent />
      <CardList />
    </View>
  );
};

const Total = () => {
  return (
    <View style={styles.totalContainer}>
      <Text style={styles.totalSpentText}>Total Spent</Text>
      <ArrowButton />
    </View>
  );
};

const ArrowButton = () => {
  return (
    <View style={styles.acontainer}>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Text style={styles.text}>$40 Today</Text>
        </View>

        <View style={styles.arrowContainer}>
          <View style={styles.arrow} />
        </View>
      </View>
    </View>
  );
};

const CardList = () => {
  return (
    <View style={styles.cardList}>
      <Card1 />
      <Card2 />
      <Card3 />
    </View>
  );
};

const Card1 = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.card1Text}>
        How many people clicked on the ad?
      </Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>76</Text>
        <View style={styles.square}></View>
      </View>
    </View>
  );
};

const Card2 = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.card1Text}> How many people saw my video? </Text>
      <View style={styles.numberContainer2}>
        <Text style={styles.numberText}>1000</Text>
        <View style={styles.square}></View>
      </View>
    </View>
  );
};

const Card3 = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.card1Text}>How much am I spending for completion or 15 seconds of views</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>$0.76</Text>
      </View>
    </View>
  );
};

const PageLogo = () => {
  return <View style={styles.pageLogo}></View>;
};

const TextBlock = () => {
  return (
    <View style={styles.textBlock}>
      <Text style={styles.campaignText}>Ice Cream Summer Campaign</Text>
      <View style={styles.bottomTextBlock}>
        <View style={styles.smallIcon}></View>
        <Text style={styles.postedText}>Posted 7 days ago</Text>
      </View>
    </View>
  );
};

const CircularProgress = () => {
  const pieData = [
    { value: 75, color: '#8C28D2' },
    { value: 100 - 75, color: '#F2E8FF' },
  ];

  return (
    <PieChart
      data={pieData}
      donut
      innerRadius={40}
      radius={50}
      innerCircleColor={'#FFFFFF'}
      strokeWidth={0}
      strokeColor={'#F2E8FF'}
      centerLabelComponent={() => (
        <View style={styles.textContainer}>
          <Text style={styles.centerText}>75%</Text>
        </View>
      )}
      containerStyle={styles.circularProgress}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20, 
    backgroundColor: '#FFFFFF', 
  },
  topBar: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
    zIndex: 2,
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: '#8C28D2',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: '#1C1C1C',
    textAlign: 'center',
  },
  header: {
    width: 375,
    height: 216,
    backgroundColor: 'white',
    position: 'relative',
  },
  imagePlaceholder: {
    width: 375,
    height: 180,
    backgroundColor: '#FFC107',
    position: 'relative',
  },
  pageLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF5722',
    position: 'absolute',
    bottom: 8,
    left: 18,
  },
  textBlock: {
    position: 'absolute',
    bottom: 8,
    left: 60,
  },
  campaignText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  bottomTextBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallIcon: {
    width: 9.31,
    height: 11,
    backgroundColor: '#03A9F4',
    marginRight: 5,
  },
  postedText: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    color: '#FFFFFF',
  },
  circularProgressWrapper: {
    position: 'absolute',
    top: 235,
    left: 270,
    width: 80,
    height: 80,
    zIndex: 3,
  },
  circularProgress: {
    width: 80,
    height: 80,
  },
  centerText: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27,
    color: '#8C28D2',
    textAlign: 'center',
  },
  textContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overview: {
    paddingHorizontal: 16,
    width: 375,
    height: 500,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: '#8826C7',
    textAlign: 'left',
  },
  chartContainer: {
    padding: 10,
    width: 343, 
    marginBottom: 20,
    alignItems: 'flex-start',
    position: 'relative',
    height: 250,  
  },  
  chartTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  periodToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150, 
  },
  cardList: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    width: 343,
    height: 74,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    marginBottom: 12,
  },
  card1Text: {
    width: 230,
    height: 42,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'left',
    color: 'black',
  },
  numberContainer: {
    width: 58.15,
    height: 35,
    backgroundColor: '#F9EFFF',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  numberText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: '#8826C7',
    textAlign: 'right',
    marginRight: 4,
  },
  square: {
    width: 17,
    height: 17,
    backgroundColor: '#8826C7',
  },
  numberContainer2: {
    width: 75,
    height: 35,
    backgroundColor: '#F9EFFF',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  totalContainer: {
    width: 375, 
    height: 78,
    backgroundColor: '#FFFFFF',
    marginTop: 50, 
    paddingHorizontal: 16, 
    alignSelf: 'center', 
  },
  totalSpentText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 27,
    textAlign: 'left',
    color: '#8826C7',
  },
  acontainer: {
    flexDirection: 'row',
    width: 385,
  },
  buttonWrapper: {
    position: 'relative', 
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#8B3FFD', 
    borderRadius: 24, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 320,
    zIndex: 1, 
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  arrowContainer: {
    position: 'absolute', 
    left: 314,
    top: '50%', 
    transform: [{ translateY: -16 }], 
    zIndex: 2, 
  },
  arrow: {
    width: 0,
    height: 0,
    borderTopWidth: 16, 
    borderBottomWidth: 16,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftWidth: 24, 
    borderLeftColor: '#8B3FFD', 
  },
});

