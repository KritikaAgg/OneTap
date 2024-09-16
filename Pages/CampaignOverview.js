import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarComponent />
      <HeaderComponent />
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
        <View style={styles.metric}>
          <CircularProgress />  
        </View>
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    width: 375,
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
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
    backgroundColor: '#E0E0E0',
  },
  imagePlaceholder: {
    width: 375,
    height: 154,
    backgroundColor: '#FFC107',  
    position: 'relative',
  },
  pageLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF5722',  
    position: 'absolute',
    bottom: 0,
    left: 18,
  },
  textBlock: {
    position: 'absolute',
    bottom: 0,
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
  metric: {
    width: 80,   
    height: 80,   
    position: 'absolute',
    top: 130,    
    left: 270,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularProgress: {
    width: 80,
    height: 80,
  },
  centerText: {
    fontSize: 14,  
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
});
