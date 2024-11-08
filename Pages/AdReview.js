import React, { useState, useEffect, useCallback } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Alert,
    SafeAreaView,
    ScrollView,
} from 'react-native';
//import { Image } from 'expo-image';
//import { LinearProgress } from '@rneui/themed';
//import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
//import { Padding, Border, FontFamily, FontSize, Color, } from '../../GlobalStyles';
//import { useSelector, useDispatch } from 'react-redux';
import AdPreviewComponent from 'C:/OneTap/onetapproject/OneTap/Components/AdPreviewComponent.js';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const OptimizedFacebookAdsRevie = () => {
    const navigation = useNavigation();

    const onRegenerateAdButtonClick = useCallback(() => {
        Alert.alert('RegenerateAd', 'Regenerate Ad Button', [
            {
                text: 'Regenerate button click',
                onPress: () => console.log('Regenerate button click pressed'),
            },
        ]);
    }, []);

    const onEditAdButtonClick = useCallback(() => {
        Alert.alert('EditAd', 'Edit Ad Button', [
            {
                text: 'editadclick',
                onPress: () => console.log('editadclick pressed'),
            },
        ]);
    }, []);

    //const adPreviewPayload = useSelector((state) => state.ad);
    //const accessToken = useSelector((state) => state.account.accessToken);
    //console.log('Ads Review Payload:', adPreviewPayload);
    //console.log('Ads Review accessToken:', accessToken);

    // useEffect(() => {
    //     console.log('adPreviewPayload=' + JSON.stringify(adPreviewPayload));

    //     createAdPreview(accessToken, adPreviewPayload)
    //         .then((body) => {
    //             console.log('Ad Preview Body:', body);
    //             // You can now use the body string, for example, to display it in a WebView or store it in state
    //         })
    //         .catch((err) => {
    //             console.error('Failed to create ad preview:', err);
    //             // Handle the error appropriately, e.g., show an error message to the user
    //         });
    // }, []);
    const SliderWireframe = () => {
        return (
          <View style={styles.sliderWireframe}>
            <View style={styles.sliderProgress}></View>
          </View>
        );
    };
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.optimizedFacebookAdsRevie}>
                <View style={styles.buttonsFlexBox}>
                    {/*<Pressable style={styles.iosArrowBack}>
                        <Pressable
                            style={styles.vector}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../../assets/vector4.png')}
                            />
                        </Pressable>
                        <Image
                            style={styles.helpCircleIcon}
                            contentFit="cover"
                            source={require('../../assets/helpcircle2.png')}
                        />
                    </Pressable>*/}
                    {/*<LinearProgress
                        style={[styles.fbprogressbar, styles.headerSpaceBlock]}
                        value={0.9}
                        variant="determinate"
                        color="#8c28d2"
                    />*/}
                    <SliderWireframe />
                    <View style={[styles.header, styles.headerSpaceBlock]}>
                        <Text style={styles.reviewYourAd}>Review your Ad</Text>
                    </View>
                    <View style={[styles.webViewContainer]}>
                        <Text> </Text>
                        <View style={styles.adContainer}>
                            {/* Header with Logo, Texts, and Dots */}
                            <View style={styles.headerContainer}>
                                <View style={styles.logo} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.brandName}>One Tap</Text>
                                    <Text style={styles.sponsoredText}>Sponsored</Text>
                                </View>
                                {/* Three Dots Icon (Right-Aligned) */}
                                <Icon name="more-horiz" style={styles.dotsIcon} size={24} color="#565C65" />
                            </View>
                            
                            {/* Body Text */}
                            <View style={styles.bodyContainer}>
                                <Text style={styles.bodyText}>
                                    Tell people about your business and how the services you offer can help!
                                </Text>
                            </View>
                        </View>
                        <Text></Text>
                        <AdPreviewComponent width = {338}
                            //accessToken={accessToken}
                            //adPreviewPayload={adPreviewPayload}
                        />
                        <View style={styles.footerContainer}>
                            {/* Text and Learn More Button Container */}
                            <View style={styles.infoContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.websiteText}>ONETAPSOCIAL.COM</Text>
                                    <Text style={styles.descriptionText}>
                                        With One Tap you can see a preview of your ads.
                                    </Text>
                                </View>
                                <Pressable style={styles.learnMoreButton}>
                                    <Text style={styles.learnMoreText}>Learn More</Text>
                                </Pressable>
                            </View>
                            <View style={[styles.line, { marginLeft: -10, width: 338, height: 0.5, backgroundColor: 'black' }]} />
                            <Text></Text>
                            {/* Reactions Container */}
                            <View style={styles.reactionsContainer}>
                                <View style={styles.reactionLeft}>
                                    <View style={styles.blackCircle} />
                                    <Text style={styles.reactionText}>88</Text>
                                </View>
                                <Text style={styles.commentText}>12 Comments</Text>
                            </View>
                            <View style={[styles.line, { marginLeft: -10, width: 338, height: 0.5, backgroundColor: 'black' }]} />
                            <Text></Text>
                            {/* Actions Container */}
                            <View style={styles.actionsContainer}>
                                <View style={styles.actionItem}>
                                    {/* Replace with your Like icon */}
                                    <Ionicons name="thumbs-up-outline" style={styles.actionIcon} size={20} color="#484D54" />
                                    <Text style={styles.actionText}>Like</Text>
                                </View>
                                <View style={styles.actionItem}>
                                    {/* Replace with your Comment icon */}
                                    <Ionicons name="chatbox-outline" style={styles.actionIcon} size={20} color="#484D54" />
                                    <Text style={styles.actionText}>Comment</Text>
                                </View>
                                <View style={styles.actionItem}>
                                    {/* Replace with your Share icon */}
                                    <Ionicons name="arrow-redo-outline" style={styles.actionIcon} size={20} color="#484D54" />
                                    <Text style={styles.actionText}>Share</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.regenerateadbuttonParent,
                            styles.headerSpaceBlock,
                        ]}
                    >
                        <Pressable
                            style={[
                                styles.regenerateadbutton,
                                styles.pressableFlexBox,
                            ]}
                            onPress={onRegenerateAdButtonClick}
                        >
                            <Text style={[styles.getStarted, styles.getTypo]}>
                                Regenerate Ad
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.editadbutton,
                                styles.pressableFlexBox,
                            ]}
                            onPress={onEditAdButtonClick}
                        >
                            <Text style={[styles.getStarted, styles.getTypo]}>
                                Edit Ad
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.buttons, styles.buttonsFlexBox]}>
                    {/*<LinearGradient
                        style={styles.continuebutton}
                        locations={[0, 1]}
                        colors={['#b543e4', '#6522a8']}
                    >
                        <Pressable
                            style={[styles.pressable, styles.pressableFlexBox]}
                            onPress={() =>
                                navigation.navigate('OptimizedFacebookAdsCampa')
                            }
                        >
                            <Text style={[styles.getStarted2, styles.getTypo]}>
                                Continue
                            </Text>
                        </Pressable>
                    </LinearGradient>*/}
                    <Pressable
                        style={styles.skipForNowContainer}
                        onPress={() => navigation.navigate('HomeTabs')}
                    >
                        <Text style={styles.skipForNow}>Skip for now</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerSpaceBlock: {
        marginTop: 41,
        alignSelf: 'stretch',
    },
    pressableFlexBox: {
        //paddingVertical: Padding.p_xl,
        justifyContent: 'center',
        //borderRadius: Border.br_5xs,
        flexDirection: 'row',
        overflow: 'hidden',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    getTypo: {
        //fontFamily: FontFamily.sFSubheadlineSemibold,
        fontWeight: '600',
        lineHeight: 14,
        letterSpacing: 0.4,
        //fontSize: FontSize.inputLabel_size,
        textAlign: 'center',
    },
    buttonsFlexBox: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    icon: {
        height: '100%',
        width: '100%',
    },
    vector: {
        width: 11,
        height: 20,
    },
    helpCircleIcon: {
        width: 24,
        height: 24,
        overflow: 'hidden',
    },
    iosArrowBack: {
        justifyContent: 'space-between',
        //paddingHorizontal: Padding.p_4xs,
        //paddingVertical: Padding.p_8xs,
        flexDirection: 'row',
        overflow: 'hidden',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    fbprogressbar: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        height: 13,
    },
    reviewYourAd: {
        //fontSize: FontSize.size_9xl,
        fontWeight: '700',
        //fontFamily: FontFamily.subheading,
        textAlign: 'center',
        alignSelf: 'stretch',
    },
    header: {
        alignItems: 'center',
    },
    fbvimageadIcon: {
        //borderRadius: Border.br_3xs,
        maxWidth: '100%',
        height: 450,
        overflow: 'hidden',
        width: '100%',
    },
    getStarted: {
        //color: Color.button,
        flex: 1,
    },
    regenerateadbutton: {
        paddingHorizontal: 0,
        borderWidth: 1,
        //borderColor: Color.button,
        borderStyle: 'solid',
        //paddingVertical: Padding.p_xl,
        justifyContent: 'center',
        height: 54,
        //borderRadius: Border.br_5xs,
    },
    editadbutton: {
        marginTop: 13,
        paddingHorizontal: 0,
        borderWidth: 1,
        //borderColor: Color.button,
        borderStyle: 'solid',
        //paddingVertical: Padding.p_xl,
        justifyContent: 'center',
        height: 54,
        //borderRadius: Border.br_5xs,
    },
    regenerateadbuttonParent: {
        //paddingHorizontal: Padding.p_16xl,
        paddingVertical: 0,
        alignItems: 'center',
    },
    getStarted2: {
        //color: Color.white,
    },
    pressable: {
        //paddingHorizontal: Padding.p_105xl,
        backgroundColor: 'transparent',
        //paddingVertical: Padding.p_xl,
        justifyContent: 'center',
        //borderRadius: Border.br_5xs,
        height: '100%',
    },
    continuebutton: {
        height: 54,
    },
    skipForNow: {
        //textDecoration: 'underline',
        lineHeight: 21,
        fontWeight: '500',
        //fontFamily: FontFamily.poppinsMedium,
        //color: Color.text - 1,
        textAlign: 'left',
        //fontSize: FontSize.inputLabel_size,
    },
    skipForNowContainer: {
        marginTop: 11,
    },
    buttons: {
        marginTop: 27,
    },
    optimizedFacebookAdsRevie: {
        //backgroundColor: Color.white,
        //paddingHorizontal: Padding.p_8xl,
        //paddingVertical: Padding.p_18xl,
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    scrollView: {
        //paddingTop: Padding.p_4xl_6,
        backgroundColor: 'white',
    },
    webViewContainer: {
        flex: 1,
        width: 339,
        borderWidth: 0.5,
        borderColor: 'black',
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
        width: 300, 
        height: 13, 
        backgroundColor: '#8C28D2', 
        borderRadius: 80, 
        opacity: 1, 
    },
    adContainer: {
        width: 338,
        height: 117,
        padding: 10,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        height: 50, 
        alignItems: 'center',
        marginBottom: 8,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#8C28D2', // Placeholder color for the logo
        marginRight: 10,
        marginTop: -25,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    brandName: {
        color: '#4967AD',
        fontSize: 20,
        fontWeight: 'bold',
    },
    sponsoredText: {
        color: '#565C65',
        fontSize: 16,
    },
    bodyContainer: {
        marginTop: 8,
        height: 52,
    },
    bodyText: {
        color: '#565C65',
        fontSize: 16,
    },
    footerContainer: {
        width: 338,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    textContainer: {
        width: 187,
        height: 79,
    },
    websiteText: {
        color: '#565C65',
        fontSize: 15,
    },
    descriptionText: {
        color: '#000000',
        fontSize: 16,
        marginTop: 4,
    },
    learnMoreButton: {
        width: 99,
        height: 33,
        backgroundColor: '#D9D9DB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    learnMoreText: {
        color: '#565C65',
        fontSize: 14,
        fontWeight: 'bold',
    },
    reactionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 22,
        marginBottom: 10,
    },
    reactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    blackCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#000',
        marginRight: 5,
    },
    reactionText: {
        color: '#565C65',
        fontSize: 18,
    },
    commentText: {
        color: '#565C65',
        fontSize: 18,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 23.16,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        color: 'black',
        fontSize: 16,
    },
    dotsIcon: {
        alignSelf: 'flex-start',
    },
    actionIcon: {
        marginRight: 5,
    },
});

export default OptimizedFacebookAdsRevie;
