import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline'
import IosAddCircle from 'react-ionicons/lib/IosAddCircle'
import IosAdd from 'react-ionicons/lib/IosAdd'
import IosAlertOutline from 'react-ionicons/lib/IosAlertOutline'
import IosAlert from 'react-ionicons/lib/IosAlert'
import IosAmericanFootballOutline from 'react-ionicons/lib/IosAmericanFootballOutline'
import IosAmericanFootball from 'react-ionicons/lib/IosAmericanFootball'
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline'
import IosAnalytics from 'react-ionicons/lib/IosAnalytics'
import IosApertureOutline from 'react-ionicons/lib/IosApertureOutline'
import IosAperture from 'react-ionicons/lib/IosAperture'
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline'
import IosApps from 'react-ionicons/lib/IosApps'
import IosAppstoreOutline from 'react-ionicons/lib/IosAppstoreOutline'
import IosAppstore from 'react-ionicons/lib/IosAppstore'
import IosArchiveOutline from 'react-ionicons/lib/IosArchiveOutline'
import IosArchive from 'react-ionicons/lib/IosArchive'
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'
import IosArrowDropdownCircle from 'react-ionicons/lib/IosArrowDropdownCircle'
import IosArrowDropdown from 'react-ionicons/lib/IosArrowDropdown'
import IosArrowDropleftCircle from 'react-ionicons/lib/IosArrowDropleftCircle'
import IosArrowDropleft from 'react-ionicons/lib/IosArrowDropleft'
import IosArrowDroprightCircle from 'react-ionicons/lib/IosArrowDroprightCircle'
import IosArrowDropright from 'react-ionicons/lib/IosArrowDropright'
import IosArrowDropupCircle from 'react-ionicons/lib/IosArrowDropupCircle'
import IosArrowDropup from 'react-ionicons/lib/IosArrowDropup'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'
import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack'
import IosArrowRoundDown from 'react-ionicons/lib/IosArrowRoundDown'
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward'
import IosArrowRoundUp from 'react-ionicons/lib/IosArrowRoundUp'
import IosArrowUp from 'react-ionicons/lib/IosArrowUp'
import IosAtOutline from 'react-ionicons/lib/IosAtOutline'
import IosAt from 'react-ionicons/lib/IosAt'
import IosAttach from 'react-ionicons/lib/IosAttach'
import IosBackspaceOutline from 'react-ionicons/lib/IosBackspaceOutline'
import IosBackspace from 'react-ionicons/lib/IosBackspace'
import IosBasketOutline from 'react-ionicons/lib/IosBasketOutline'
import IosBasket from 'react-ionicons/lib/IosBasket'
import IosBatteryCharging from 'react-ionicons/lib/IosBatteryCharging'
import IosBatteryDead from 'react-ionicons/lib/IosBatteryDead'
import IosBatteryFull from 'react-ionicons/lib/IosBatteryFull'
import IosBeakerOutline from 'react-ionicons/lib/IosBeakerOutline'
import IosBeaker from 'react-ionicons/lib/IosBeaker'
import IosBeerOutline from 'react-ionicons/lib/IosBeerOutline'
import IosBeer from 'react-ionicons/lib/IosBeer'
import IosBicycle from 'react-ionicons/lib/IosBicycle'
import IosBluetooth from 'react-ionicons/lib/IosBluetooth'
import IosBoatOutline from 'react-ionicons/lib/IosBoatOutline'
import IosBoat from 'react-ionicons/lib/IosBoat'
import IosBonfireOutline from 'react-ionicons/lib/IosBonfireOutline'
import IosBonfire from 'react-ionicons/lib/IosBonfire'
import IosBookmarkOutline from 'react-ionicons/lib/IosBookmarkOutline'
import IosBookmark from 'react-ionicons/lib/IosBookmark'
import IosBowtieOutline from 'react-ionicons/lib/IosBowtieOutline'
import IosBowtie from 'react-ionicons/lib/IosBowtie'
import IosBrushOutline from 'react-ionicons/lib/IosBrushOutline'
import IosBrush from 'react-ionicons/lib/IosBrush'
import IosBugOutline from 'react-ionicons/lib/IosBugOutline'
import IosBug from 'react-ionicons/lib/IosBug'
import IosBuildOutline from 'react-ionicons/lib/IosBuildOutline'
import IosBuild from 'react-ionicons/lib/IosBuild'
import IosBulbOutline from 'react-ionicons/lib/IosBulbOutline'
import IosBulb from 'react-ionicons/lib/IosBulb'
import IosBusOutline from 'react-ionicons/lib/IosBusOutline'
import IosBus from 'react-ionicons/lib/IosBus'
import IosCafeOutline from 'react-ionicons/lib/IosCafeOutline'
import IosCafe from 'react-ionicons/lib/IosCafe'
import IosCalendarOutline from 'react-ionicons/lib/IosCalendarOutline'
import IosCallOutline from 'react-ionicons/lib/IosCallOutline'
import IosCall from 'react-ionicons/lib/IosCall'
import IosCarOutline from 'react-ionicons/lib/IosCarOutline'
import IosCar from 'react-ionicons/lib/IosCar'
import IosCardOutline from 'react-ionicons/lib/IosCardOutline'
import IosCard from 'react-ionicons/lib/IosCard'
import IosCashOutline from 'react-ionicons/lib/IosCashOutline'
import IosCash from 'react-ionicons/lib/IosCash'
import IosChatbubblesOutline from 'react-ionicons/lib/IosChatbubblesOutline'
import IosChatbubbles from 'react-ionicons/lib/IosChatbubbles'
import IosCheckboxOutline from 'react-ionicons/lib/IosCheckboxOutline'
import IosCheckbox from 'react-ionicons/lib/IosCheckbox'
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import IosCheckmarkCircle from 'react-ionicons/lib/IosCheckmarkCircle'
import IosCheckmark from 'react-ionicons/lib/IosCheckmark'
import IosClipboardOutline from 'react-ionicons/lib/IosClipboardOutline'
import IosClipboard from 'react-ionicons/lib/IosClipboard'
import IosClockOutline from 'react-ionicons/lib/IosClockOutline'
import IosClock from 'react-ionicons/lib/IosClock'
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline'
import IosCloseCircle from 'react-ionicons/lib/IosCloseCircle'
import IosClose from 'react-ionicons/lib/IosClose'
import IosClosedCaptioningOutline from 'react-ionicons/lib/IosClosedCaptioningOutline'
import IosClosedCaptioning from 'react-ionicons/lib/IosClosedCaptioning'
import IosCloudCircleOutline from 'react-ionicons/lib/IosCloudCircleOutline'
import IosCloudCircle from 'react-ionicons/lib/IosCloudCircle'
import IosCloudDoneOutline from 'react-ionicons/lib/IosCloudDoneOutline'
import IosCloudDone from 'react-ionicons/lib/IosCloudDone'
import IosCloudDownloadOutline from 'react-ionicons/lib/IosCloudDownloadOutline'
import IosCloudDownload from 'react-ionicons/lib/IosCloudDownload'
import IosCloudOutline from 'react-ionicons/lib/IosCloudOutline'
import IosCloudUploadOutline from 'react-ionicons/lib/IosCloudUploadOutline'
import IosCloudUpload from 'react-ionicons/lib/IosCloudUpload'
import IosCloud from 'react-ionicons/lib/IosCloud'
import IosCloudyNightOutline from 'react-ionicons/lib/IosCloudyNightOutline'
import IosCloudyNight from 'react-ionicons/lib/IosCloudyNight'
import IosCloudyOutline from 'react-ionicons/lib/IosCloudyOutline'
import IosCloudy from 'react-ionicons/lib/IosCloudy'
import IosCodeDownload from 'react-ionicons/lib/IosCodeDownload'
import IosCodeWorking from 'react-ionicons/lib/IosCodeWorking'
import IosCode from 'react-ionicons/lib/IosCode'
import IosCogOutline from 'react-ionicons/lib/IosCogOutline'
import IosCog from 'react-ionicons/lib/IosCog'
import IosColorFillOutline from 'react-ionicons/lib/IosColorFillOutline'
import IosColorFill from 'react-ionicons/lib/IosColorFill'
import IosColorPaletteOutline from 'react-ionicons/lib/IosColorPaletteOutline'
import IosColorPalette from 'react-ionicons/lib/IosColorPalette'
import IosColorWandOutline from 'react-ionicons/lib/IosColorWandOutline'
import IosColorWand from 'react-ionicons/lib/IosColorWand'
import IosCompassOutline from 'react-ionicons/lib/IosCompassOutline'
import IosCompass from 'react-ionicons/lib/IosCompass'
import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline'
import IosConstruct from 'react-ionicons/lib/IosConstruct'
import IosContactOutline from 'react-ionicons/lib/IosContactOutline'
import IosContact from 'react-ionicons/lib/IosContact'
import IosContactsOutline from 'react-ionicons/lib/IosContactsOutline'
import IosContacts from 'react-ionicons/lib/IosContacts'
import IosContract from 'react-ionicons/lib/IosContract'
import IosContrast from 'react-ionicons/lib/IosContrast'
import IosCreateOutline from 'react-ionicons/lib/IosCreateOutline'
import IosCreate from 'react-ionicons/lib/IosCreate'
import IosCropOutline from 'react-ionicons/lib/IosCropOutline'
import IosCrop from 'react-ionicons/lib/IosCrop'
import IosCubeOutline from 'react-ionicons/lib/IosCubeOutline'
import IosCube from 'react-ionicons/lib/IosCube'
import IosCutOutline from 'react-ionicons/lib/IosCutOutline'
import IosCut from 'react-ionicons/lib/IosCut'
import IosDesktopOutline from 'react-ionicons/lib/IosDesktopOutline'
import IosDesktop from 'react-ionicons/lib/IosDesktop'
import IosDiscOutline from 'react-ionicons/lib/IosDiscOutline'
import IosDisc from 'react-ionicons/lib/IosDisc'
import IosDocumentOutline from 'react-ionicons/lib/IosDocumentOutline'
import IosDocument from 'react-ionicons/lib/IosDocument'
import IosDoneAll from 'react-ionicons/lib/IosDoneAll'
import IosEaselOutline from 'react-ionicons/lib/IosEaselOutline'
import IosEasel from 'react-ionicons/lib/IosEasel'
import IosEggOutline from 'react-ionicons/lib/IosEggOutline'
import IosEgg from 'react-ionicons/lib/IosEgg'
import IosExitOutline from 'react-ionicons/lib/IosExitOutline'
import IosExit from 'react-ionicons/lib/IosExit'
import IosExpand from 'react-ionicons/lib/IosExpand'
import IosEyeOffOutline from 'react-ionicons/lib/IosEyeOffOutline'
import IosEyeOff from 'react-ionicons/lib/IosEyeOff'
import IosFemale from 'react-ionicons/lib/IosFemale'
import IosFiling from 'react-ionicons/lib/IosFiling'
import IosFingerPrint from 'react-ionicons/lib/IosFingerPrint'
import IosFlameOutline from 'react-ionicons/lib/IosFlameOutline'
import IosFlame from 'react-ionicons/lib/IosFlame'
import IosFlashOutline from 'react-ionicons/lib/IosFlashOutline'
import IosFlash from 'react-ionicons/lib/IosFlash'
import IosFlaskOutline from 'react-ionicons/lib/IosFlaskOutline'
import IosFlask from 'react-ionicons/lib/IosFlask'
import IosFlowerOutline from 'react-ionicons/lib/IosFlowerOutline'
import IosFlower from 'react-ionicons/lib/IosFlower'
import IosFolderOpenOutline from 'react-ionicons/lib/IosFolderOpenOutline'
import IosFolderOpen from 'react-ionicons/lib/IosFolderOpen'
import IosFunnelOutline from 'react-ionicons/lib/IosFunnelOutline'
import IosFunnel from 'react-ionicons/lib/IosFunnel'
import IosGitBranch from 'react-ionicons/lib/IosGitBranch'
import IosGitCommit from 'react-ionicons/lib/IosGitCommit'
import IosGitCompare from 'react-ionicons/lib/IosGitCompare'
import IosGitMerge from 'react-ionicons/lib/IosGitMerge'
import IosGitNetwork from 'react-ionicons/lib/IosGitNetwork'
import IosGitPullRequest from 'react-ionicons/lib/IosGitPullRequest'
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline'
import IosGlobe from 'react-ionicons/lib/IosGlobe'
import IosGridOutline from 'react-ionicons/lib/IosGridOutline'
import IosGrid from 'react-ionicons/lib/IosGrid'
import IosHammerOutline from 'react-ionicons/lib/IosHammerOutline'
import IosHammer from 'react-ionicons/lib/IosHammer'
import IosHandOutline from 'react-ionicons/lib/IosHandOutline'
import IosHand from 'react-ionicons/lib/IosHand'
import IosHappyOutline from 'react-ionicons/lib/IosHappyOutline'
import IosHappy from 'react-ionicons/lib/IosHappy'
import IosHeadsetOutline from 'react-ionicons/lib/IosHeadsetOutline'
import IosHeadset from 'react-ionicons/lib/IosHeadset'
import IosHelpBuoyOutline from 'react-ionicons/lib/IosHelpBuoyOutline'
import IosHelpBuoy from 'react-ionicons/lib/IosHelpBuoy'
import IosHelpCircleOutline from 'react-ionicons/lib/IosHelpCircleOutline'
import IosHelpCircle from 'react-ionicons/lib/IosHelpCircle'
import IosHelp from 'react-ionicons/lib/IosHelp'
import IosIceCreamOutline from 'react-ionicons/lib/IosIceCreamOutline'
import IosIceCream from 'react-ionicons/lib/IosIceCream'
import IosImageOutline from 'react-ionicons/lib/IosImageOutline'
import IosImage from 'react-ionicons/lib/IosImage'
import IosImagesOutline from 'react-ionicons/lib/IosImagesOutline'
import IosImages from 'react-ionicons/lib/IosImages'
import IosInformationCircleOutline from 'react-ionicons/lib/IosInformationCircleOutline'
import IosInformationCircle from 'react-ionicons/lib/IosInformationCircle'
import IosInformation from 'react-ionicons/lib/IosInformation'
import IosIonic from 'react-ionicons/lib/IosIonic'
import IosIonitronOutline from 'react-ionicons/lib/IosIonitronOutline'
import IosIonitron from 'react-ionicons/lib/IosIonitron'
import IosJetOutline from 'react-ionicons/lib/IosJetOutline'
import IosJet from 'react-ionicons/lib/IosJet'
import IosKeyOutline from 'react-ionicons/lib/IosKeyOutline'
import IosKey from 'react-ionicons/lib/IosKey'
import IosLaptop from 'react-ionicons/lib/IosLaptop'
import IosLeafOutline from 'react-ionicons/lib/IosLeafOutline'
import IosLeaf from 'react-ionicons/lib/IosLeaf'
import IosLinkOutline from 'react-ionicons/lib/IosLinkOutline'
import IosLink from 'react-ionicons/lib/IosLink'
import IosListBoxOutline from 'react-ionicons/lib/IosListBoxOutline'
import IosListBox from 'react-ionicons/lib/IosListBox'
import IosList from 'react-ionicons/lib/IosList'
import IosLocateOutline from 'react-ionicons/lib/IosLocateOutline'
import IosLocate from 'react-ionicons/lib/IosLocate'
import IosLockOutline from 'react-ionicons/lib/IosLockOutline'
import IosLock from 'react-ionicons/lib/IosLock'
import IosLogIn from 'react-ionicons/lib/IosLogIn'
import IosLogOut from 'react-ionicons/lib/IosLogOut'
import IosMagnetOutline from 'react-ionicons/lib/IosMagnetOutline'
import IosMagnet from 'react-ionicons/lib/IosMagnet'
import IosMailOpenOutline from 'react-ionicons/lib/IosMailOpenOutline'
import IosMailOpen from 'react-ionicons/lib/IosMailOpen'
import IosMailOutline from 'react-ionicons/lib/IosMailOutline'
import IosMail from 'react-ionicons/lib/IosMail'
import IosMale from 'react-ionicons/lib/IosMale'
import IosManOutline from 'react-ionicons/lib/IosManOutline'
import IosMan from 'react-ionicons/lib/IosMan'
import IosMapOutline from 'react-ionicons/lib/IosMapOutline'
import IosMap from 'react-ionicons/lib/IosMap'
import IosMedalOutline from 'react-ionicons/lib/IosMedalOutline'
import IosMedal from 'react-ionicons/lib/IosMedal'
import IosMegaphoneOutline from 'react-ionicons/lib/IosMegaphoneOutline'
import IosMegaphone from 'react-ionicons/lib/IosMegaphone'
import IosMenuOutline from 'react-ionicons/lib/IosMenuOutline'
import IosMenu from 'react-ionicons/lib/IosMenu'
import IosMicOffOutline from 'react-ionicons/lib/IosMicOffOutline'
import IosMicOff from 'react-ionicons/lib/IosMicOff'
import IosMicOutline from 'react-ionicons/lib/IosMicOutline'
import IosMic from 'react-ionicons/lib/IosMic'
import IosMicrophoneOutline from 'react-ionicons/lib/IosMicrophoneOutline'
import IosMicrophone from 'react-ionicons/lib/IosMicrophone'
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline'
import IosMoon from 'react-ionicons/lib/IosMoon'
import IosMove from 'react-ionicons/lib/IosMove'
import IosMusicalNoteOutline from 'react-ionicons/lib/IosMusicalNoteOutline'
import IosMusicalNote from 'react-ionicons/lib/IosMusicalNote'
import IosMusicalNotesOutline from 'react-ionicons/lib/IosMusicalNotesOutline'
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes'
import IosNoSmokingOutline from 'react-ionicons/lib/IosNoSmokingOutline'
import IosNoSmoking from 'react-ionicons/lib/IosNoSmoking'
import IosNotificationsOffOutline from 'react-ionicons/lib/IosNotificationsOffOutline'
import IosNotificationsOff from 'react-ionicons/lib/IosNotificationsOff'
import IosNotificationsOutline from 'react-ionicons/lib/IosNotificationsOutline'
import IosNotifications from 'react-ionicons/lib/IosNotifications'
import IosNuclearOutline from 'react-ionicons/lib/IosNuclearOutline'
import IosNuclear from 'react-ionicons/lib/IosNuclear'
import IosOpenOutline from 'react-ionicons/lib/IosOpenOutline'
import IosOpen from 'react-ionicons/lib/IosOpen'
import IosOptionsOutline from 'react-ionicons/lib/IosOptionsOutline'
import IosOptions from 'react-ionicons/lib/IosOptions'
import IosOutletOutline from 'react-ionicons/lib/IosOutletOutline'
import IosOutlet from 'react-ionicons/lib/IosOutlet'
import IosPaperOutline from 'react-ionicons/lib/IosPaperOutline'
import IosPaperPlaneOutline from 'react-ionicons/lib/IosPaperPlaneOutline'
import IosPaperPlane from 'react-ionicons/lib/IosPaperPlane'
import IosPaper from 'react-ionicons/lib/IosPaper'
import IosPartlySunnyOutline from 'react-ionicons/lib/IosPartlySunnyOutline'
import IosPartlySunny from 'react-ionicons/lib/IosPartlySunny'
import IosPawOutline from 'react-ionicons/lib/IosPawOutline'
import IosPaw from 'react-ionicons/lib/IosPaw'
import IosPersonAddOutline from 'react-ionicons/lib/IosPersonAddOutline'
import IosPersonAdd from 'react-ionicons/lib/IosPersonAdd'
import IosPhoneLandscape from 'react-ionicons/lib/IosPhoneLandscape'
import IosPhonePortrait from 'react-ionicons/lib/IosPhonePortrait'
import IosPinOutline from 'react-ionicons/lib/IosPinOutline'
import IosPin from 'react-ionicons/lib/IosPin'
import IosPintOutline from 'react-ionicons/lib/IosPintOutline'
import IosPint from 'react-ionicons/lib/IosPint'
import IosPizzaOutline from 'react-ionicons/lib/IosPizzaOutline'
import IosPizza from 'react-ionicons/lib/IosPizza'
import IosPlaneOutline from 'react-ionicons/lib/IosPlaneOutline'
import IosPlane from 'react-ionicons/lib/IosPlane'
import IosPlanetOutline from 'react-ionicons/lib/IosPlanetOutline'
import IosPlanet from 'react-ionicons/lib/IosPlanet'
import IosPodiumOutline from 'react-ionicons/lib/IosPodiumOutline'
import IosPodium from 'react-ionicons/lib/IosPodium'
import IosPowerOutline from 'react-ionicons/lib/IosPowerOutline'
import IosPower from 'react-ionicons/lib/IosPower'
import IosPricetagOutline from 'react-ionicons/lib/IosPricetagOutline'
import IosPricetag from 'react-ionicons/lib/IosPricetag'
import IosPrintOutline from 'react-ionicons/lib/IosPrintOutline'
import IosPrint from 'react-ionicons/lib/IosPrint'
import IosPulseOutline from 'react-ionicons/lib/IosPulseOutline'
import IosPulse from 'react-ionicons/lib/IosPulse'
import IosQrScanner from 'react-ionicons/lib/IosQrScanner'
import IosQuoteOutline from 'react-ionicons/lib/IosQuoteOutline'
import IosQuote from 'react-ionicons/lib/IosQuote'
import IosRadioButtonOff from 'react-ionicons/lib/IosRadioButtonOff'
import IosRadioButtonOn from 'react-ionicons/lib/IosRadioButtonOn'
import IosRadioOutline from 'react-ionicons/lib/IosRadioOutline'
import IosRadio from 'react-ionicons/lib/IosRadio'
import IosRainyOutline from 'react-ionicons/lib/IosRainyOutline'
import IosRainy from 'react-ionicons/lib/IosRainy'
import IosRefreshCircleOutline from 'react-ionicons/lib/IosRefreshCircleOutline'
import IosRefreshCircle from 'react-ionicons/lib/IosRefreshCircle'
import IosRefresh from 'react-ionicons/lib/IosRefresh'
import IosRemoveCircleOutline from 'react-ionicons/lib/IosRemoveCircleOutline'
import IosRemoveCircle from 'react-ionicons/lib/IosRemoveCircle'
import IosRemove from 'react-ionicons/lib/IosRemove'
import IosReorder from 'react-ionicons/lib/IosReorder'
import IosRepeat from 'react-ionicons/lib/IosRepeat'
import IosResize from 'react-ionicons/lib/IosResize'
import IosRestaurantOutline from 'react-ionicons/lib/IosRestaurantOutline'
import IosRestaurant from 'react-ionicons/lib/IosRestaurant'
import IosReturnLeft from 'react-ionicons/lib/IosReturnLeft'
import IosReturnRight from 'react-ionicons/lib/IosReturnRight'
import IosRibbonOutline from 'react-ionicons/lib/IosRibbonOutline'
import IosRibbon from 'react-ionicons/lib/IosRibbon'
import IosRoseOutline from 'react-ionicons/lib/IosRoseOutline'
import IosRose from 'react-ionicons/lib/IosRose'
import IosSadOutline from 'react-ionicons/lib/IosSadOutline'
import IosSad from 'react-ionicons/lib/IosSad'
import IosSchoolOutline from 'react-ionicons/lib/IosSchoolOutline'
import IosSchool from 'react-ionicons/lib/IosSchool'
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline'
import IosSearch from 'react-ionicons/lib/IosSearch'
import IosSendOutline from 'react-ionicons/lib/IosSendOutline'
import IosSend from 'react-ionicons/lib/IosSend'
import IosSettingsOutline from 'react-ionicons/lib/IosSettingsOutline'
import IosSettings from 'react-ionicons/lib/IosSettings'
import IosShareAltOutline from 'react-ionicons/lib/IosShareAltOutline'
import IosShareAlt from 'react-ionicons/lib/IosShareAlt'
import IosShareOutline from 'react-ionicons/lib/IosShareOutline'
import IosShare from 'react-ionicons/lib/IosShare'
import IosShirtOutline from 'react-ionicons/lib/IosShirtOutline'
import IosShirt from 'react-ionicons/lib/IosShirt'
import IosShuffle from 'react-ionicons/lib/IosShuffle'
import IosSkipBackwardOutline from 'react-ionicons/lib/IosSkipBackwardOutline'
import IosSkipBackward from 'react-ionicons/lib/IosSkipBackward'
import IosSkipForwardOutline from 'react-ionicons/lib/IosSkipForwardOutline'
import IosSkipForward from 'react-ionicons/lib/IosSkipForward'
import IosSnowOutline from 'react-ionicons/lib/IosSnowOutline'
import IosSnow from 'react-ionicons/lib/IosSnow'
import IosSquareOutline from 'react-ionicons/lib/IosSquareOutline'
import IosSquare from 'react-ionicons/lib/IosSquare'
import IosStatsOutline from 'react-ionicons/lib/IosStatsOutline'
import IosStats from 'react-ionicons/lib/IosStats'
import IosSubwayOutline from 'react-ionicons/lib/IosSubwayOutline'
import IosSubway from 'react-ionicons/lib/IosSubway'
import IosSunnyOutline from 'react-ionicons/lib/IosSunnyOutline'
import IosSunny from 'react-ionicons/lib/IosSunny'
import IosSwap from 'react-ionicons/lib/IosSwap'
import IosSwitchOutline from 'react-ionicons/lib/IosSwitchOutline'
import IosSwitch from 'react-ionicons/lib/IosSwitch'
import IosSync from 'react-ionicons/lib/IosSync'
import IosTabletLandscape from 'react-ionicons/lib/IosTabletLandscape'
import IosTabletPortrait from 'react-ionicons/lib/IosTabletPortrait'
import IosTextOutline from 'react-ionicons/lib/IosTextOutline'
import IosText from 'react-ionicons/lib/IosText'
import IosThermometerOutline from 'react-ionicons/lib/IosThermometerOutline'
import IosThermometer from 'react-ionicons/lib/IosThermometer'
import IosThumbsDownOutline from 'react-ionicons/lib/IosThumbsDownOutline'
import IosThumbsDown from 'react-ionicons/lib/IosThumbsDown'
import IosThumbsUpOutline from 'react-ionicons/lib/IosThumbsUpOutline'
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp'
import IosThunderstormOutline from 'react-ionicons/lib/IosThunderstormOutline'
import IosThunderstorm from 'react-ionicons/lib/IosThunderstorm'
import IosTimeOutline from 'react-ionicons/lib/IosTimeOutline'
import IosTime from 'react-ionicons/lib/IosTime'
import IosTrainOutline from 'react-ionicons/lib/IosTrainOutline'
import IosTrain from 'react-ionicons/lib/IosTrain'
import IosTransgender from 'react-ionicons/lib/IosTransgender'
import IosTrendingDown from 'react-ionicons/lib/IosTrendingDown'
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp'
import IosTrophyOutline from 'react-ionicons/lib/IosTrophyOutline'
import IosTrophy from 'react-ionicons/lib/IosTrophy'
import IosUmbrellaOutline from 'react-ionicons/lib/IosUmbrellaOutline'
import IosUmbrella from 'react-ionicons/lib/IosUmbrella'
import IosUnlockOutline from 'react-ionicons/lib/IosUnlockOutline'
import IosUnlock from 'react-ionicons/lib/IosUnlock'
import IosVolumeDown from 'react-ionicons/lib/IosVolumeDown'
import IosVolumeMute from 'react-ionicons/lib/IosVolumeMute'
import IosVolumeOff from 'react-ionicons/lib/IosVolumeOff'
import IosVolumeUp from 'react-ionicons/lib/IosVolumeUp'
import IosWalk from 'react-ionicons/lib/IosWalk'
import IosWarningOutline from 'react-ionicons/lib/IosWarningOutline'
import IosWarning from 'react-ionicons/lib/IosWarning'
import IosWatch from 'react-ionicons/lib/IosWatch'
import IosWaterOutline from 'react-ionicons/lib/IosWaterOutline'
import IosWater from 'react-ionicons/lib/IosWater'
import IosWifiOutline from 'react-ionicons/lib/IosWifiOutline'
import IosWifi from 'react-ionicons/lib/IosWifi'
import IosWineOutline from 'react-ionicons/lib/IosWineOutline'
import IosWine from 'react-ionicons/lib/IosWine'
import IosWomanOutline from 'react-ionicons/lib/IosWomanOutline'
import IosWoman from 'react-ionicons/lib/IosWoman'
import LogoAndroid from 'react-ionicons/lib/LogoAndroid'
import LogoAngular from 'react-ionicons/lib/LogoAngular'
import LogoApple from 'react-ionicons/lib/LogoApple'
import LogoBitcoin from 'react-ionicons/lib/LogoBitcoin'
import LogoBuffer from 'react-ionicons/lib/LogoBuffer'
import LogoChrome from 'react-ionicons/lib/LogoChrome'
import LogoCodepen from 'react-ionicons/lib/LogoCodepen'
import LogoCss3 from 'react-ionicons/lib/LogoCss3'
import LogoDesignernews from 'react-ionicons/lib/LogoDesignernews'
import LogoDribbble from 'react-ionicons/lib/LogoDribbble'
import LogoDropbox from 'react-ionicons/lib/LogoDropbox'
import LogoEuro from 'react-ionicons/lib/LogoEuro'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoFoursquare from 'react-ionicons/lib/LogoFoursquare'
import LogoFreebsdDevil from 'react-ionicons/lib/LogoFreebsdDevil'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoGoogle from 'react-ionicons/lib/LogoGoogle'
import LogoGoogleplus from 'react-ionicons/lib/LogoGoogleplus'
import LogoHackernews from 'react-ionicons/lib/LogoHackernews'
import LogoHtml5 from 'react-ionicons/lib/LogoHtml5'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoJavascript from 'react-ionicons/lib/LogoJavascript'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoMarkdown from 'react-ionicons/lib/LogoMarkdown'
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import LogoOctocat from 'react-ionicons/lib/LogoOctocat'
import LogoPinterest from 'react-ionicons/lib/LogoPinterest'
import LogoPlaystation from 'react-ionicons/lib/LogoPlaystation'
import LogoPython from 'react-ionicons/lib/LogoPython'
import LogoReddit from 'react-ionicons/lib/LogoReddit'
import LogoRss from 'react-ionicons/lib/LogoRss'
import LogoSass from 'react-ionicons/lib/LogoSass'
import LogoSkype from 'react-ionicons/lib/LogoSkype'
import LogoSnapchat from 'react-ionicons/lib/LogoSnapchat'
import LogoSteam from 'react-ionicons/lib/LogoSteam'
import LogoTumblr from 'react-ionicons/lib/LogoTumblr'
import LogoTux from 'react-ionicons/lib/LogoTux'
import LogoTwitch from 'react-ionicons/lib/LogoTwitch'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoUsd from 'react-ionicons/lib/LogoUsd'
import LogoVimeo from 'react-ionicons/lib/LogoVimeo'
import LogoWhatsapp from 'react-ionicons/lib/LogoWhatsapp'
import LogoWindows from 'react-ionicons/lib/LogoWindows'
import LogoWordpress from 'react-ionicons/lib/LogoWordpress'
import LogoXbox from 'react-ionicons/lib/LogoXbox'
import LogoYahoo from 'react-ionicons/lib/LogoYahoo'
import LogoYen from 'react-ionicons/lib/LogoYen'
import LogoYoutube from 'react-ionicons/lib/LogoYoutube'
import MdAddCircle from 'react-ionicons/lib/MdAddCircle'
import MdAdd from 'react-ionicons/lib/MdAdd'
import MdAlarm from 'react-ionicons/lib/MdAlarm'
import MdAlbums from 'react-ionicons/lib/MdAlbums'
import MdAlert from 'react-ionicons/lib/MdAlert'
import MdAmericanFootball from 'react-ionicons/lib/MdAmericanFootball'
import MdAnalytics from 'react-ionicons/lib/MdAnalytics'
import MdAperture from 'react-ionicons/lib/MdAperture'
import MdApps from 'react-ionicons/lib/MdApps'
import MdAppstore from 'react-ionicons/lib/MdAppstore'
import MdArchive from 'react-ionicons/lib/MdArchive'
import MdArrowBack from 'react-ionicons/lib/MdArrowBack'
import MdArrowDown from 'react-ionicons/lib/MdArrowDown'
import MdArrowDropdownCircle from 'react-ionicons/lib/MdArrowDropdownCircle'
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'
import MdArrowDropleftCircle from 'react-ionicons/lib/MdArrowDropleftCircle'
import MdArrowDropleft from 'react-ionicons/lib/MdArrowDropleft'
import MdArrowDroprightCircle from 'react-ionicons/lib/MdArrowDroprightCircle'
import MdArrowDropright from 'react-ionicons/lib/MdArrowDropright'
import MdArrowDropupCircle from 'react-ionicons/lib/MdArrowDropupCircle'
import MdArrowDropup from 'react-ionicons/lib/MdArrowDropup'
import MdArrowForward from 'react-ionicons/lib/MdArrowForward'
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowRoundBack'
import MdArrowRoundDown from 'react-ionicons/lib/MdArrowRoundDown'
import MdArrowRoundForward from 'react-ionicons/lib/MdArrowRoundForward'
import MdArrowRoundUp from 'react-ionicons/lib/MdArrowRoundUp'
import MdArrowUp from 'react-ionicons/lib/MdArrowUp'
import MdAt from 'react-ionicons/lib/MdAt'
import MdAttach from 'react-ionicons/lib/MdAttach'
import MdBackspace from 'react-ionicons/lib/MdBackspace'
import MdBarcode from 'react-ionicons/lib/MdBarcode'
import MdBaseball from 'react-ionicons/lib/MdBaseball'
import MdBasket from 'react-ionicons/lib/MdBasket'
import MdBasketball from 'react-ionicons/lib/MdBasketball'
import MdBatteryCharging from 'react-ionicons/lib/MdBatteryCharging'
import MdBatteryDead from 'react-ionicons/lib/MdBatteryDead'
import MdBatteryFull from 'react-ionicons/lib/MdBatteryFull'
import MdBeaker from 'react-ionicons/lib/MdBeaker'
import MdBeer from 'react-ionicons/lib/MdBeer'
import MdBicycle from 'react-ionicons/lib/MdBicycle'
import MdBluetooth from 'react-ionicons/lib/MdBluetooth'
import MdBoat from 'react-ionicons/lib/MdBoat'
import MdBody from 'react-ionicons/lib/MdBody'
import MdBonfire from 'react-ionicons/lib/MdBonfire'
import MdBook from 'react-ionicons/lib/MdBook'
import MdBookmark from 'react-ionicons/lib/MdBookmark'
import MdBookmarks from 'react-ionicons/lib/MdBookmarks'
import MdBowtie from 'react-ionicons/lib/MdBowtie'
import MdBriefcase from 'react-ionicons/lib/MdBriefcase'
import MdBrowsers from 'react-ionicons/lib/MdBrowsers'
import MdBrush from 'react-ionicons/lib/MdBrush'
import MdBug from 'react-ionicons/lib/MdBug'
import MdBuild from 'react-ionicons/lib/MdBuild'
import MdBulb from 'react-ionicons/lib/MdBulb'
import MdBus from 'react-ionicons/lib/MdBus'
import MdCafe from 'react-ionicons/lib/MdCafe'
import MdCalculator from 'react-ionicons/lib/MdCalculator'
import MdCalendar from 'react-ionicons/lib/MdCalendar'
import MdCall from 'react-ionicons/lib/MdCall'
import MdCamera from 'react-ionicons/lib/MdCamera'
import MdCar from 'react-ionicons/lib/MdCar'
import MdCard from 'react-ionicons/lib/MdCard'
import MdCart from 'react-ionicons/lib/MdCart'
import MdCash from 'react-ionicons/lib/MdCash'
import MdChatboxes from 'react-ionicons/lib/MdChatboxes'
import MdChatbubbles from 'react-ionicons/lib/MdChatbubbles'
import MdCheckboxOutline from 'react-ionicons/lib/MdCheckboxOutline'
import MdCheckbox from 'react-ionicons/lib/MdCheckbox'
import MdCheckmarkCircleOutline from 'react-ionicons/lib/MdCheckmarkCircleOutline'
import MdCheckmarkCircle from 'react-ionicons/lib/MdCheckmarkCircle'
import MdCheckmark from 'react-ionicons/lib/MdCheckmark'
import MdClipboard from 'react-ionicons/lib/MdClipboard'
import MdClock from 'react-ionicons/lib/MdClock'
import MdCloseCircle from 'react-ionicons/lib/MdCloseCircle'
import MdClose from 'react-ionicons/lib/MdClose'
import MdClosedCaptioning from 'react-ionicons/lib/MdClosedCaptioning'
import MdCloudCircle from 'react-ionicons/lib/MdCloudCircle'
import MdCloudDone from 'react-ionicons/lib/MdCloudDone'
import MdCloudDownload from 'react-ionicons/lib/MdCloudDownload'
import MdCloudOutline from 'react-ionicons/lib/MdCloudOutline'
import MdCloudUpload from 'react-ionicons/lib/MdCloudUpload'
import MdCloud from 'react-ionicons/lib/MdCloud'
import MdCloudyNight from 'react-ionicons/lib/MdCloudyNight'
import MdCloudy from 'react-ionicons/lib/MdCloudy'
import MdCodeDownload from 'react-ionicons/lib/MdCodeDownload'
import MdCodeWorking from 'react-ionicons/lib/MdCodeWorking'
import MdCode from 'react-ionicons/lib/MdCode'
import MdCog from 'react-ionicons/lib/MdCog'
import MdColorFill from 'react-ionicons/lib/MdColorFill'
import MdColorFilter from 'react-ionicons/lib/MdColorFilter'
import MdColorPalette from 'react-ionicons/lib/MdColorPalette'
import MdColorWand from 'react-ionicons/lib/MdColorWand'
import MdCompass from 'react-ionicons/lib/MdCompass'
import MdConstruct from 'react-ionicons/lib/MdConstruct'
import MdContact from 'react-ionicons/lib/MdContact'
import MdContacts from 'react-ionicons/lib/MdContacts'
import MdContract from 'react-ionicons/lib/MdContract'
import MdContrast from 'react-ionicons/lib/MdContrast'
import MdCopy from 'react-ionicons/lib/MdCopy'
import MdCreate from 'react-ionicons/lib/MdCreate'
import MdCrop from 'react-ionicons/lib/MdCrop'
import MdCube from 'react-ionicons/lib/MdCube'
import MdCut from 'react-ionicons/lib/MdCut'
import MdDesktop from 'react-ionicons/lib/MdDesktop'
import MdDisc from 'react-ionicons/lib/MdDisc'
import MdDocument from 'react-ionicons/lib/MdDocument'
import MdDoneAll from 'react-ionicons/lib/MdDoneAll'
import MdDownload from 'react-ionicons/lib/MdDownload'
import MdEasel from 'react-ionicons/lib/MdEasel'
import MdEgg from 'react-ionicons/lib/MdEgg'
import MdExit from 'react-ionicons/lib/MdExit'
import MdExpand from 'react-ionicons/lib/MdExpand'
import MdEyeOff from 'react-ionicons/lib/MdEyeOff'
import MdEye from 'react-ionicons/lib/MdEye'
import MdFastforward from 'react-ionicons/lib/MdFastforward'
import MdFemale from 'react-ionicons/lib/MdFemale'
import MdFiling from 'react-ionicons/lib/MdFiling'
import MdFilm from 'react-ionicons/lib/MdFilm'
import MdFingerPrint from 'react-ionicons/lib/MdFingerPrint'
import MdFlag from 'react-ionicons/lib/MdFlag'
import MdFlame from 'react-ionicons/lib/MdFlame'
import MdFlash from 'react-ionicons/lib/MdFlash'
import MdFlask from 'react-ionicons/lib/MdFlask'
import MdFlower from 'react-ionicons/lib/MdFlower'
import MdFolderOpen from 'react-ionicons/lib/MdFolderOpen'
import MdFolder from 'react-ionicons/lib/MdFolder'
import MdFootball from 'react-ionicons/lib/MdFootball'
import MdFunnel from 'react-ionicons/lib/MdFunnel'
import MdGameControllerA from 'react-ionicons/lib/MdGameControllerA'
import MdGameControllerB from 'react-ionicons/lib/MdGameControllerB'
import MdGitBranch from 'react-ionicons/lib/MdGitBranch'
import MdGitCommit from 'react-ionicons/lib/MdGitCommit'
import MdGitCompare from 'react-ionicons/lib/MdGitCompare'
import MdGitMerge from 'react-ionicons/lib/MdGitMerge'
import MdGitNetwork from 'react-ionicons/lib/MdGitNetwork'
import MdGitPullRequest from 'react-ionicons/lib/MdGitPullRequest'
import MdGlasses from 'react-ionicons/lib/MdGlasses'
import MdGlobe from 'react-ionicons/lib/MdGlobe'
import MdGrid from 'react-ionicons/lib/MdGrid'
import MdHammer from 'react-ionicons/lib/MdHammer'
import MdHand from 'react-ionicons/lib/MdHand'
import MdHappy from 'react-ionicons/lib/MdHappy'
import MdHeadset from 'react-ionicons/lib/MdHeadset'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHelpBuoy from 'react-ionicons/lib/MdHelpBuoy'
import MdHelpCircle from 'react-ionicons/lib/MdHelpCircle'
import MdHelp from 'react-ionicons/lib/MdHelp'
import MdHome from 'react-ionicons/lib/MdHome'
import MdIceCream from 'react-ionicons/lib/MdIceCream'
import MdImage from 'react-ionicons/lib/MdImage'
import MdImages from 'react-ionicons/lib/MdImages'
import MdInfinite from 'react-ionicons/lib/MdInfinite'
import MdInformationCircle from 'react-ionicons/lib/MdInformationCircle'
import MdInformation from 'react-ionicons/lib/MdInformation'
import MdIonic from 'react-ionicons/lib/MdIonic'
import MdIonitron from 'react-ionicons/lib/MdIonitron'
import MdJet from 'react-ionicons/lib/MdJet'
import MdKey from 'react-ionicons/lib/MdKey'
import MdKeypad from 'react-ionicons/lib/MdKeypad'
import MdLaptop from 'react-ionicons/lib/MdLaptop'
import MdLeaf from 'react-ionicons/lib/MdLeaf'
import MdLink from 'react-ionicons/lib/MdLink'
import MdListBox from 'react-ionicons/lib/MdListBox'
import MdList from 'react-ionicons/lib/MdList'
import MdLocate from 'react-ionicons/lib/MdLocate'
import MdLock from 'react-ionicons/lib/MdLock'
import MdLogIn from 'react-ionicons/lib/MdLogIn'
import MdLogOut from 'react-ionicons/lib/MdLogOut'
import MdMagnet from 'react-ionicons/lib/MdMagnet'
import MdMailOpen from 'react-ionicons/lib/MdMailOpen'
import MdMail from 'react-ionicons/lib/MdMail'
import MdMale from 'react-ionicons/lib/MdMale'
import MdMan from 'react-ionicons/lib/MdMan'
import MdMap from 'react-ionicons/lib/MdMap'
import MdMedal from 'react-ionicons/lib/MdMedal'
import MdMedical from 'react-ionicons/lib/MdMedical'
import MdMedkit from 'react-ionicons/lib/MdMedkit'
import MdMegaphone from 'react-ionicons/lib/MdMegaphone'
import MdMenu from 'react-ionicons/lib/MdMenu'
import MdMicOff from 'react-ionicons/lib/MdMicOff'
import MdMic from 'react-ionicons/lib/MdMic'
import MdMicrophone from 'react-ionicons/lib/MdMicrophone'
import MdMoon from 'react-ionicons/lib/MdMoon'
import MdMore from 'react-ionicons/lib/MdMore'
import MdMove from 'react-ionicons/lib/MdMove'
import MdMusicalNote from 'react-ionicons/lib/MdMusicalNote'
import MdMusicalNotes from 'react-ionicons/lib/MdMusicalNotes'
import MdNavigate from 'react-ionicons/lib/MdNavigate'
import MdNoSmoking from 'react-ionicons/lib/MdNoSmoking'
import MdNotificationsOff from 'react-ionicons/lib/MdNotificationsOff'
import MdNotificationsOutline from 'react-ionicons/lib/MdNotificationsOutline'
import MdNotifications from 'react-ionicons/lib/MdNotifications'
import MdNuclear from 'react-ionicons/lib/MdNuclear'
import MdNutrition from 'react-ionicons/lib/MdNutrition'
import MdOpen from 'react-ionicons/lib/MdOpen'
import MdOptions from 'react-ionicons/lib/MdOptions'
import MdOutlet from 'react-ionicons/lib/MdOutlet'
import MdPaperPlane from 'react-ionicons/lib/MdPaperPlane'
import MdPaper from 'react-ionicons/lib/MdPaper'
import MdPartlySunny from 'react-ionicons/lib/MdPartlySunny'
import MdPause from 'react-ionicons/lib/MdPause'
import MdPaw from 'react-ionicons/lib/MdPaw'
import MdPeople from 'react-ionicons/lib/MdPeople'
import MdPersonAdd from 'react-ionicons/lib/MdPersonAdd'
import MdPerson from 'react-ionicons/lib/MdPerson'
import MdPhoneLandscape from 'react-ionicons/lib/MdPhoneLandscape'
import MdPhonePortrait from 'react-ionicons/lib/MdPhonePortrait'
import MdPhotos from 'react-ionicons/lib/MdPhotos'
import MdPie from 'react-ionicons/lib/MdPie'
import MdPin from 'react-ionicons/lib/MdPin'
import MdPint from 'react-ionicons/lib/MdPint'
import MdPizza from 'react-ionicons/lib/MdPizza'
import MdPlane from 'react-ionicons/lib/MdPlane'
import MdPlanet from 'react-ionicons/lib/MdPlanet'
import MdPlay from 'react-ionicons/lib/MdPlay'
import MdPodium from 'react-ionicons/lib/MdPodium'
import MdPower from 'react-ionicons/lib/MdPower'
import MdPricetag from 'react-ionicons/lib/MdPricetag'
import MdPricetags from 'react-ionicons/lib/MdPricetags'
import MdPrint from 'react-ionicons/lib/MdPrint'
import MdPulse from 'react-ionicons/lib/MdPulse'
import MdQrScanner from 'react-ionicons/lib/MdQrScanner'
import MdQuote from 'react-ionicons/lib/MdQuote'
import MdRadioButtonOff from 'react-ionicons/lib/MdRadioButtonOff'
import MdRadioButtonOn from 'react-ionicons/lib/MdRadioButtonOn'
import MdRadio from 'react-ionicons/lib/MdRadio'
import MdRainy from 'react-ionicons/lib/MdRainy'
import MdRecording from 'react-ionicons/lib/MdRecording'
import MdRedo from 'react-ionicons/lib/MdRedo'
import MdRefreshCircle from 'react-ionicons/lib/MdRefreshCircle'
import MdRefresh from 'react-ionicons/lib/MdRefresh'
import MdRemoveCircle from 'react-ionicons/lib/MdRemoveCircle'
import MdRemove from 'react-ionicons/lib/MdRemove'
import MdReorder from 'react-ionicons/lib/MdReorder'
import MdRepeat from 'react-ionicons/lib/MdRepeat'
import MdResize from 'react-ionicons/lib/MdResize'
import MdRestaurant from 'react-ionicons/lib/MdRestaurant'
import MdReturnLeft from 'react-ionicons/lib/MdReturnLeft'
import MdReturnRight from 'react-ionicons/lib/MdReturnRight'
import MdReverseCamera from 'react-ionicons/lib/MdReverseCamera'
import MdRewind from 'react-ionicons/lib/MdRewind'
import MdRibbon from 'react-ionicons/lib/MdRibbon'
import MdRose from 'react-ionicons/lib/MdRose'
import MdSad from 'react-ionicons/lib/MdSad'
import MdSchool from 'react-ionicons/lib/MdSchool'
import MdSearch from 'react-ionicons/lib/MdSearch'
import MdSend from 'react-ionicons/lib/MdSend'
import MdSettings from 'react-ionicons/lib/MdSettings'
import MdShareAlt from 'react-ionicons/lib/MdShareAlt'
import MdShare from 'react-ionicons/lib/MdShare'
import MdShirt from 'react-ionicons/lib/MdShirt'
import MdShuffle from 'react-ionicons/lib/MdShuffle'
import MdSkipBackward from 'react-ionicons/lib/MdSkipBackward'
import MdSkipForward from 'react-ionicons/lib/MdSkipForward'
import MdSnow from 'react-ionicons/lib/MdSnow'
import MdSpeedometer from 'react-ionicons/lib/MdSpeedometer'
import MdSquareOutline from 'react-ionicons/lib/MdSquareOutline'
import MdSquare from 'react-ionicons/lib/MdSquare'
import MdStarHalf from 'react-ionicons/lib/MdStarHalf'
import MdStarOutline from 'react-ionicons/lib/MdStarOutline'
import MdStar from 'react-ionicons/lib/MdStar'
import MdStats from 'react-ionicons/lib/MdStats'
import MdStopwatch from 'react-ionicons/lib/MdStopwatch'
import MdSubway from 'react-ionicons/lib/MdSubway'
import MdSunny from 'react-ionicons/lib/MdSunny'
import MdSwap from 'react-ionicons/lib/MdSwap'
import MdSwitch from 'react-ionicons/lib/MdSwitch'
import MdSync from 'react-ionicons/lib/MdSync'
import MdTabletLandscape from 'react-ionicons/lib/MdTabletLandscape'
import MdTabletPortrait from 'react-ionicons/lib/MdTabletPortrait'
import MdTennisball from 'react-ionicons/lib/MdTennisball'
import MdText from 'react-ionicons/lib/MdText'
import MdThermometer from 'react-ionicons/lib/MdThermometer'
import MdThumbsDown from 'react-ionicons/lib/MdThumbsDown'
import MdThumbsUp from 'react-ionicons/lib/MdThumbsUp'
import MdThunderstorm from 'react-ionicons/lib/MdThunderstorm'
import MdTime from 'react-ionicons/lib/MdTime'
import MdTimer from 'react-ionicons/lib/MdTimer'
import MdTrain from 'react-ionicons/lib/MdTrain'
import MdTransgender from 'react-ionicons/lib/MdTransgender'
import MdTrash from 'react-ionicons/lib/MdTrash'
import MdTrendingDown from 'react-ionicons/lib/MdTrendingDown'
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp'
import MdTrophy from 'react-ionicons/lib/MdTrophy'
import MdUmbrella from 'react-ionicons/lib/MdUmbrella'
import MdUndo from 'react-ionicons/lib/MdUndo'
import MdUnlock from 'react-ionicons/lib/MdUnlock'
import MdVideocam from 'react-ionicons/lib/MdVideocam'
import MdVolumeDown from 'react-ionicons/lib/MdVolumeDown'
import MdVolumeMute from 'react-ionicons/lib/MdVolumeMute'
import MdVolumeOff from 'react-ionicons/lib/MdVolumeOff'
import MdVolumeUp from 'react-ionicons/lib/MdVolumeUp'
import MdWalk from 'react-ionicons/lib/MdWalk'
import MdWarning from 'react-ionicons/lib/MdWarning'
import MdWatch from 'react-ionicons/lib/MdWatch'
import MdWater from 'react-ionicons/lib/MdWater'
import MdWifi from 'react-ionicons/lib/MdWifi'
import MdWine from 'react-ionicons/lib/MdWine'
import MdWoman from 'react-ionicons/lib/MdWoman'
import IosAlarmOutline from 'react-ionicons/lib/IosAlarmOutline'
import IosAlarm from 'react-ionicons/lib/IosAlarm'
import IosAlbumsOutline from 'react-ionicons/lib/IosAlbumsOutline'
import IosAlbums from 'react-ionicons/lib/IosAlbums'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'
import IosBarcodeOutline from 'react-ionicons/lib/IosBarcodeOutline'
import IosBarcode from 'react-ionicons/lib/IosBarcode'
import IosBaseballOutline from 'react-ionicons/lib/IosBaseballOutline'
import IosBaseball from 'react-ionicons/lib/IosBaseball'
import IosBasketballOutline from 'react-ionicons/lib/IosBasketballOutline'
import IosBasketball from 'react-ionicons/lib/IosBasketball'
import IosBodyOutline from 'react-ionicons/lib/IosBodyOutline'
import IosBody from 'react-ionicons/lib/IosBody'
import IosBookOutline from 'react-ionicons/lib/IosBookOutline'
import IosBook from 'react-ionicons/lib/IosBook'
import IosBookmarksOutline from 'react-ionicons/lib/IosBookmarksOutline'
import IosBookmarks from 'react-ionicons/lib/IosBookmarks'
import IosBriefcaseOutline from 'react-ionicons/lib/IosBriefcaseOutline'
import IosBriefcase from 'react-ionicons/lib/IosBriefcase'
import IosBrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline'
import IosBrowsers from 'react-ionicons/lib/IosBrowsers'
import IosCalculatorOutline from 'react-ionicons/lib/IosCalculatorOutline'
import IosCalculator from 'react-ionicons/lib/IosCalculator'
import IosCalendar from 'react-ionicons/lib/IosCalendar'
import IosCameraOutline from 'react-ionicons/lib/IosCameraOutline'
import IosCamera from 'react-ionicons/lib/IosCamera'
import IosCartOutline from 'react-ionicons/lib/IosCartOutline'
import IosCart from 'react-ionicons/lib/IosCart'
import IosChatboxesOutline from 'react-ionicons/lib/IosChatboxesOutline'
import IosChatboxes from 'react-ionicons/lib/IosChatboxes'
import IosColorFilterOutline from 'react-ionicons/lib/IosColorFilterOutline'
import IosColorFilter from 'react-ionicons/lib/IosColorFilter'
import IosCopyOutline from 'react-ionicons/lib/IosCopyOutline'
import IosCopy from 'react-ionicons/lib/IosCopy'
import IosDownloadOutline from 'react-ionicons/lib/IosDownloadOutline'
import IosDownload from 'react-ionicons/lib/IosDownload'
import IosEyeOutline from 'react-ionicons/lib/IosEyeOutline'
import IosEye from 'react-ionicons/lib/IosEye'
import IosFastforwardOutline from 'react-ionicons/lib/IosFastforwardOutline'
import IosFastforward from 'react-ionicons/lib/IosFastforward'
import IosFilingOutline from 'react-ionicons/lib/IosFilingOutline'
import IosFilmOutline from 'react-ionicons/lib/IosFilmOutline'
import IosFilm from 'react-ionicons/lib/IosFilm'
import IosFlagOutline from 'react-ionicons/lib/IosFlagOutline'
import IosFlag from 'react-ionicons/lib/IosFlag'
import IosFolderOutline from 'react-ionicons/lib/IosFolderOutline'
import IosFolder from 'react-ionicons/lib/IosFolder'
import IosFootballOutline from 'react-ionicons/lib/IosFootballOutline'
import IosFootball from 'react-ionicons/lib/IosFootball'
import IosGameControllerAOutline from 'react-ionicons/lib/IosGameControllerAOutline'
import IosGameControllerA from 'react-ionicons/lib/IosGameControllerA'
import IosGameControllerBOutline from 'react-ionicons/lib/IosGameControllerBOutline'
import IosGameControllerB from 'react-ionicons/lib/IosGameControllerB'
import IosGlassesOutline from 'react-ionicons/lib/IosGlassesOutline'
import IosGlasses from 'react-ionicons/lib/IosGlasses'
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline'
import IosHeart from 'react-ionicons/lib/IosHeart'
import IosHomeOutline from 'react-ionicons/lib/IosHomeOutline'
import IosHome from 'react-ionicons/lib/IosHome'
import IosInfiniteOutline from 'react-ionicons/lib/IosInfiniteOutline'
import IosInfinite from 'react-ionicons/lib/IosInfinite'
import IosIonicOutline from 'react-ionicons/lib/IosIonicOutline'
import IosKeypadOutline from 'react-ionicons/lib/IosKeypadOutline'
import IosKeypad from 'react-ionicons/lib/IosKeypad'
import IosMedicalOutline from 'react-ionicons/lib/IosMedicalOutline'
import IosMedical from 'react-ionicons/lib/IosMedical'
import IosMedkitOutline from 'react-ionicons/lib/IosMedkitOutline'
import IosMedkit from 'react-ionicons/lib/IosMedkit'
import IosMoreOutline from 'react-ionicons/lib/IosMoreOutline'
import IosMore from 'react-ionicons/lib/IosMore'
import IosNavigateOutline from 'react-ionicons/lib/IosNavigateOutline'
import IosNavigate from 'react-ionicons/lib/IosNavigate'
import IosNutritionOutline from 'react-ionicons/lib/IosNutritionOutline'
import IosNutrition from 'react-ionicons/lib/IosNutrition'
import IosPauseOutline from 'react-ionicons/lib/IosPauseOutline'
import IosPause from 'react-ionicons/lib/IosPause'
import IosPeopleOutline from 'react-ionicons/lib/IosPeopleOutline'
import IosPeople from 'react-ionicons/lib/IosPeople'
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline'
import IosPerson from 'react-ionicons/lib/IosPerson'
import IosPhotosOutline from 'react-ionicons/lib/IosPhotosOutline'
import IosPhotos from 'react-ionicons/lib/IosPhotos'
import IosPieOutline from 'react-ionicons/lib/IosPieOutline'
import IosPie from 'react-ionicons/lib/IosPie'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'
import IosPlay from 'react-ionicons/lib/IosPlay'
import IosPricetagsOutline from 'react-ionicons/lib/IosPricetagsOutline'
import IosPricetags from 'react-ionicons/lib/IosPricetags'
import IosRecordingOutline from 'react-ionicons/lib/IosRecordingOutline'
import IosRecording from 'react-ionicons/lib/IosRecording'
import IosRedoOutline from 'react-ionicons/lib/IosRedoOutline'
import IosRedo from 'react-ionicons/lib/IosRedo'
import IosReverseCameraOutline from 'react-ionicons/lib/IosReverseCameraOutline'
import IosReverseCamera from 'react-ionicons/lib/IosReverseCamera'
import IosRewindOutline from 'react-ionicons/lib/IosRewindOutline'
import IosRewind from 'react-ionicons/lib/IosRewind'
import IosSpeedometerOutline from 'react-ionicons/lib/IosSpeedometerOutline'
import IosSpeedometer from 'react-ionicons/lib/IosSpeedometer'
import IosStarHalf from 'react-ionicons/lib/IosStarHalf'
import IosStarOutline from 'react-ionicons/lib/IosStarOutline'
import IosStar from 'react-ionicons/lib/IosStar'
import IosStopwatchOutline from 'react-ionicons/lib/IosStopwatchOutline'
import IosStopwatch from 'react-ionicons/lib/IosStopwatch'
import IosTennisballOutline from 'react-ionicons/lib/IosTennisballOutline'
import IosTennisball from 'react-ionicons/lib/IosTennisball'
import IosTimerOutline from 'react-ionicons/lib/IosTimerOutline'
import IosTimer from 'react-ionicons/lib/IosTimer'
import IosTrashOutline from 'react-ionicons/lib/IosTrashOutline'
import IosTrash from 'react-ionicons/lib/IosTrash'
import IosUndoOutline from 'react-ionicons/lib/IosUndoOutline'
import IosUndo from 'react-ionicons/lib/IosUndo'
import IosVideocamOutline from 'react-ionicons/lib/IosVideocamOutline'
import IosVideocam from 'react-ionicons/lib/IosVideocam'

import styles from './iconsContainer.css'
import iconsName from './icons.constant.js'

const components = { IosAddCircleOutline: IosAddCircleOutline,
  IosAddCircle: IosAddCircle,
  IosAdd: IosAdd,
  IosAlertOutline: IosAlertOutline,
  IosAlert: IosAlert,
  IosAmericanFootballOutline: IosAmericanFootballOutline,
  IosAmericanFootball: IosAmericanFootball,
  IosAnalyticsOutline: IosAnalyticsOutline,
  IosAnalytics: IosAnalytics,
  IosApertureOutline: IosApertureOutline,
  IosAperture: IosAperture,
  IosAppsOutline: IosAppsOutline,
  IosApps: IosApps,
  IosAppstoreOutline: IosAppstoreOutline,
  IosAppstore: IosAppstore,
  IosArchiveOutline: IosArchiveOutline,
  IosArchive: IosArchive,
  IosArrowDown: IosArrowDown,
  IosArrowDropdownCircle: IosArrowDropdownCircle,
  IosArrowDropdown: IosArrowDropdown,
  IosArrowDropleftCircle: IosArrowDropleftCircle,
  IosArrowDropleft: IosArrowDropleft,
  IosArrowDroprightCircle: IosArrowDroprightCircle,
  IosArrowDropright: IosArrowDropright,
  IosArrowDropupCircle: IosArrowDropupCircle,
  IosArrowDropup: IosArrowDropup,
  IosArrowForward: IosArrowForward,
  IosArrowRoundBack: IosArrowRoundBack,
  IosArrowRoundDown: IosArrowRoundDown,
  IosArrowRoundForward: IosArrowRoundForward,
  IosArrowRoundUp: IosArrowRoundUp,
  IosArrowUp: IosArrowUp,
  IosAtOutline: IosAtOutline,
  IosAt: IosAt,
  IosAttach: IosAttach,
  IosBackspaceOutline: IosBackspaceOutline,
  IosBackspace: IosBackspace,
  IosBasketOutline: IosBasketOutline,
  IosBasket: IosBasket,
  IosBatteryCharging: IosBatteryCharging,
  IosBatteryDead: IosBatteryDead,
  IosBatteryFull: IosBatteryFull,
  IosBeakerOutline: IosBeakerOutline,
  IosBeaker: IosBeaker,
  IosBeerOutline: IosBeerOutline,
  IosBeer: IosBeer,
  IosBicycle: IosBicycle,
  IosBluetooth: IosBluetooth,
  IosBoatOutline: IosBoatOutline,
  IosBoat: IosBoat,
  IosBonfireOutline: IosBonfireOutline,
  IosBonfire: IosBonfire,
  IosBookmarkOutline: IosBookmarkOutline,
  IosBookmark: IosBookmark,
  IosBowtieOutline: IosBowtieOutline,
  IosBowtie: IosBowtie,
  IosBrushOutline: IosBrushOutline,
  IosBrush: IosBrush,
  IosBugOutline: IosBugOutline,
  IosBug: IosBug,
  IosBuildOutline: IosBuildOutline,
  IosBuild: IosBuild,
  IosBulbOutline: IosBulbOutline,
  IosBulb: IosBulb,
  IosBusOutline: IosBusOutline,
  IosBus: IosBus,
  IosCafeOutline: IosCafeOutline,
  IosCafe: IosCafe,
  IosCalendarOutline: IosCalendarOutline,
  IosCallOutline: IosCallOutline,
  IosCall: IosCall,
  IosCarOutline: IosCarOutline,
  IosCar: IosCar,
  IosCardOutline: IosCardOutline,
  IosCard: IosCard,
  IosCashOutline: IosCashOutline,
  IosCash: IosCash,
  IosChatbubblesOutline: IosChatbubblesOutline,
  IosChatbubbles: IosChatbubbles,
  IosCheckboxOutline: IosCheckboxOutline,
  IosCheckbox: IosCheckbox,
  IosCheckmarkCircleOutline: IosCheckmarkCircleOutline,
  IosCheckmarkCircle: IosCheckmarkCircle,
  IosCheckmark: IosCheckmark,
  IosClipboardOutline: IosClipboardOutline,
  IosClipboard: IosClipboard,
  IosClockOutline: IosClockOutline,
  IosClock: IosClock,
  IosCloseCircleOutline: IosCloseCircleOutline,
  IosCloseCircle: IosCloseCircle,
  IosClose: IosClose,
  IosClosedCaptioningOutline: IosClosedCaptioningOutline,
  IosClosedCaptioning: IosClosedCaptioning,
  IosCloudCircleOutline: IosCloudCircleOutline,
  IosCloudCircle: IosCloudCircle,
  IosCloudDoneOutline: IosCloudDoneOutline,
  IosCloudDone: IosCloudDone,
  IosCloudDownloadOutline: IosCloudDownloadOutline,
  IosCloudDownload: IosCloudDownload,
  IosCloudOutline: IosCloudOutline,
  IosCloudUploadOutline: IosCloudUploadOutline,
  IosCloudUpload: IosCloudUpload,
  IosCloud: IosCloud,
  IosCloudyNightOutline: IosCloudyNightOutline,
  IosCloudyNight: IosCloudyNight,
  IosCloudyOutline: IosCloudyOutline,
  IosCloudy: IosCloudy,
  IosCodeDownload: IosCodeDownload,
  IosCodeWorking: IosCodeWorking,
  IosCode: IosCode,
  IosCogOutline: IosCogOutline,
  IosCog: IosCog,
  IosColorFillOutline: IosColorFillOutline,
  IosColorFill: IosColorFill,
  IosColorPaletteOutline: IosColorPaletteOutline,
  IosColorPalette: IosColorPalette,
  IosColorWandOutline: IosColorWandOutline,
  IosColorWand: IosColorWand,
  IosCompassOutline: IosCompassOutline,
  IosCompass: IosCompass,
  IosConstructOutline: IosConstructOutline,
  IosConstruct: IosConstruct,
  IosContactOutline: IosContactOutline,
  IosContact: IosContact,
  IosContactsOutline: IosContactsOutline,
  IosContacts: IosContacts,
  IosContract: IosContract,
  IosContrast: IosContrast,
  IosCreateOutline: IosCreateOutline,
  IosCreate: IosCreate,
  IosCropOutline: IosCropOutline,
  IosCrop: IosCrop,
  IosCubeOutline: IosCubeOutline,
  IosCube: IosCube,
  IosCutOutline: IosCutOutline,
  IosCut: IosCut,
  IosDesktopOutline: IosDesktopOutline,
  IosDesktop: IosDesktop,
  IosDiscOutline: IosDiscOutline,
  IosDisc: IosDisc,
  IosDocumentOutline: IosDocumentOutline,
  IosDocument: IosDocument,
  IosDoneAll: IosDoneAll,
  IosEaselOutline: IosEaselOutline,
  IosEasel: IosEasel,
  IosEggOutline: IosEggOutline,
  IosEgg: IosEgg,
  IosExitOutline: IosExitOutline,
  IosExit: IosExit,
  IosExpand: IosExpand,
  IosEyeOffOutline: IosEyeOffOutline,
  IosEyeOff: IosEyeOff,
  IosFemale: IosFemale,
  IosFiling: IosFiling,
  IosFingerPrint: IosFingerPrint,
  IosFlameOutline: IosFlameOutline,
  IosFlame: IosFlame,
  IosFlashOutline: IosFlashOutline,
  IosFlash: IosFlash,
  IosFlaskOutline: IosFlaskOutline,
  IosFlask: IosFlask,
  IosFlowerOutline: IosFlowerOutline,
  IosFlower: IosFlower,
  IosFolderOpenOutline: IosFolderOpenOutline,
  IosFolderOpen: IosFolderOpen,
  IosFunnelOutline: IosFunnelOutline,
  IosFunnel: IosFunnel,
  IosGitBranch: IosGitBranch,
  IosGitCommit: IosGitCommit,
  IosGitCompare: IosGitCompare,
  IosGitMerge: IosGitMerge,
  IosGitNetwork: IosGitNetwork,
  IosGitPullRequest: IosGitPullRequest,
  IosGlobeOutline: IosGlobeOutline,
  IosGlobe: IosGlobe,
  IosGridOutline: IosGridOutline,
  IosGrid: IosGrid,
  IosHammerOutline: IosHammerOutline,
  IosHammer: IosHammer,
  IosHandOutline: IosHandOutline,
  IosHand: IosHand,
  IosHappyOutline: IosHappyOutline,
  IosHappy: IosHappy,
  IosHeadsetOutline: IosHeadsetOutline,
  IosHeadset: IosHeadset,
  IosHelpBuoyOutline: IosHelpBuoyOutline,
  IosHelpBuoy: IosHelpBuoy,
  IosHelpCircleOutline: IosHelpCircleOutline,
  IosHelpCircle: IosHelpCircle,
  IosHelp: IosHelp,
  IosIceCreamOutline: IosIceCreamOutline,
  IosIceCream: IosIceCream,
  IosImageOutline: IosImageOutline,
  IosImage: IosImage,
  IosImagesOutline: IosImagesOutline,
  IosImages: IosImages,
  IosInformationCircleOutline: IosInformationCircleOutline,
  IosInformationCircle: IosInformationCircle,
  IosInformation: IosInformation,
  IosIonic: IosIonic,
  IosIonitronOutline: IosIonitronOutline,
  IosIonitron: IosIonitron,
  IosJetOutline: IosJetOutline,
  IosJet: IosJet,
  IosKeyOutline: IosKeyOutline,
  IosKey: IosKey,
  IosLaptop: IosLaptop,
  IosLeafOutline: IosLeafOutline,
  IosLeaf: IosLeaf,
  IosLinkOutline: IosLinkOutline,
  IosLink: IosLink,
  IosListBoxOutline: IosListBoxOutline,
  IosListBox: IosListBox,
  IosList: IosList,
  IosLocateOutline: IosLocateOutline,
  IosLocate: IosLocate,
  IosLockOutline: IosLockOutline,
  IosLock: IosLock,
  IosLogIn: IosLogIn,
  IosLogOut: IosLogOut,
  IosMagnetOutline: IosMagnetOutline,
  IosMagnet: IosMagnet,
  IosMailOpenOutline: IosMailOpenOutline,
  IosMailOpen: IosMailOpen,
  IosMailOutline: IosMailOutline,
  IosMail: IosMail,
  IosMale: IosMale,
  IosManOutline: IosManOutline,
  IosMan: IosMan,
  IosMapOutline: IosMapOutline,
  IosMap: IosMap,
  IosMedalOutline: IosMedalOutline,
  IosMedal: IosMedal,
  IosMegaphoneOutline: IosMegaphoneOutline,
  IosMegaphone: IosMegaphone,
  IosMenuOutline: IosMenuOutline,
  IosMenu: IosMenu,
  IosMicOffOutline: IosMicOffOutline,
  IosMicOff: IosMicOff,
  IosMicOutline: IosMicOutline,
  IosMic: IosMic,
  IosMicrophoneOutline: IosMicrophoneOutline,
  IosMicrophone: IosMicrophone,
  IosMoonOutline: IosMoonOutline,
  IosMoon: IosMoon,
  IosMove: IosMove,
  IosMusicalNoteOutline: IosMusicalNoteOutline,
  IosMusicalNote: IosMusicalNote,
  IosMusicalNotesOutline: IosMusicalNotesOutline,
  IosMusicalNotes: IosMusicalNotes,
  IosNoSmokingOutline: IosNoSmokingOutline,
  IosNoSmoking: IosNoSmoking,
  IosNotificationsOffOutline: IosNotificationsOffOutline,
  IosNotificationsOff: IosNotificationsOff,
  IosNotificationsOutline: IosNotificationsOutline,
  IosNotifications: IosNotifications,
  IosNuclearOutline: IosNuclearOutline,
  IosNuclear: IosNuclear,
  IosOpenOutline: IosOpenOutline,
  IosOpen: IosOpen,
  IosOptionsOutline: IosOptionsOutline,
  IosOptions: IosOptions,
  IosOutletOutline: IosOutletOutline,
  IosOutlet: IosOutlet,
  IosPaperOutline: IosPaperOutline,
  IosPaperPlaneOutline: IosPaperPlaneOutline,
  IosPaperPlane: IosPaperPlane,
  IosPaper: IosPaper,
  IosPartlySunnyOutline: IosPartlySunnyOutline,
  IosPartlySunny: IosPartlySunny,
  IosPawOutline: IosPawOutline,
  IosPaw: IosPaw,
  IosPersonAddOutline: IosPersonAddOutline,
  IosPersonAdd: IosPersonAdd,
  IosPhoneLandscape: IosPhoneLandscape,
  IosPhonePortrait: IosPhonePortrait,
  IosPinOutline: IosPinOutline,
  IosPin: IosPin,
  IosPintOutline: IosPintOutline,
  IosPint: IosPint,
  IosPizzaOutline: IosPizzaOutline,
  IosPizza: IosPizza,
  IosPlaneOutline: IosPlaneOutline,
  IosPlane: IosPlane,
  IosPlanetOutline: IosPlanetOutline,
  IosPlanet: IosPlanet,
  IosPodiumOutline: IosPodiumOutline,
  IosPodium: IosPodium,
  IosPowerOutline: IosPowerOutline,
  IosPower: IosPower,
  IosPricetagOutline: IosPricetagOutline,
  IosPricetag: IosPricetag,
  IosPrintOutline: IosPrintOutline,
  IosPrint: IosPrint,
  IosPulseOutline: IosPulseOutline,
  IosPulse: IosPulse,
  IosQrScanner: IosQrScanner,
  IosQuoteOutline: IosQuoteOutline,
  IosQuote: IosQuote,
  IosRadioButtonOff: IosRadioButtonOff,
  IosRadioButtonOn: IosRadioButtonOn,
  IosRadioOutline: IosRadioOutline,
  IosRadio: IosRadio,
  IosRainyOutline: IosRainyOutline,
  IosRainy: IosRainy,
  IosRefreshCircleOutline: IosRefreshCircleOutline,
  IosRefreshCircle: IosRefreshCircle,
  IosRefresh: IosRefresh,
  IosRemoveCircleOutline: IosRemoveCircleOutline,
  IosRemoveCircle: IosRemoveCircle,
  IosRemove: IosRemove,
  IosReorder: IosReorder,
  IosRepeat: IosRepeat,
  IosResize: IosResize,
  IosRestaurantOutline: IosRestaurantOutline,
  IosRestaurant: IosRestaurant,
  IosReturnLeft: IosReturnLeft,
  IosReturnRight: IosReturnRight,
  IosRibbonOutline: IosRibbonOutline,
  IosRibbon: IosRibbon,
  IosRoseOutline: IosRoseOutline,
  IosRose: IosRose,
  IosSadOutline: IosSadOutline,
  IosSad: IosSad,
  IosSchoolOutline: IosSchoolOutline,
  IosSchool: IosSchool,
  IosSearchOutline: IosSearchOutline,
  IosSearch: IosSearch,
  IosSendOutline: IosSendOutline,
  IosSend: IosSend,
  IosSettingsOutline: IosSettingsOutline,
  IosSettings: IosSettings,
  IosShareAltOutline: IosShareAltOutline,
  IosShareAlt: IosShareAlt,
  IosShareOutline: IosShareOutline,
  IosShare: IosShare,
  IosShirtOutline: IosShirtOutline,
  IosShirt: IosShirt,
  IosShuffle: IosShuffle,
  IosSkipBackwardOutline: IosSkipBackwardOutline,
  IosSkipBackward: IosSkipBackward,
  IosSkipForwardOutline: IosSkipForwardOutline,
  IosSkipForward: IosSkipForward,
  IosSnowOutline: IosSnowOutline,
  IosSnow: IosSnow,
  IosSquareOutline: IosSquareOutline,
  IosSquare: IosSquare,
  IosStatsOutline: IosStatsOutline,
  IosStats: IosStats,
  IosSubwayOutline: IosSubwayOutline,
  IosSubway: IosSubway,
  IosSunnyOutline: IosSunnyOutline,
  IosSunny: IosSunny,
  IosSwap: IosSwap,
  IosSwitchOutline: IosSwitchOutline,
  IosSwitch: IosSwitch,
  IosSync: IosSync,
  IosTabletLandscape: IosTabletLandscape,
  IosTabletPortrait: IosTabletPortrait,
  IosTextOutline: IosTextOutline,
  IosText: IosText,
  IosThermometerOutline: IosThermometerOutline,
  IosThermometer: IosThermometer,
  IosThumbsDownOutline: IosThumbsDownOutline,
  IosThumbsDown: IosThumbsDown,
  IosThumbsUpOutline: IosThumbsUpOutline,
  IosThumbsUp: IosThumbsUp,
  IosThunderstormOutline: IosThunderstormOutline,
  IosThunderstorm: IosThunderstorm,
  IosTimeOutline: IosTimeOutline,
  IosTime: IosTime,
  IosTrainOutline: IosTrainOutline,
  IosTrain: IosTrain,
  IosTransgender: IosTransgender,
  IosTrendingDown: IosTrendingDown,
  IosTrendingUp: IosTrendingUp,
  IosTrophyOutline: IosTrophyOutline,
  IosTrophy: IosTrophy,
  IosUmbrellaOutline: IosUmbrellaOutline,
  IosUmbrella: IosUmbrella,
  IosUnlockOutline: IosUnlockOutline,
  IosUnlock: IosUnlock,
  IosVolumeDown: IosVolumeDown,
  IosVolumeMute: IosVolumeMute,
  IosVolumeOff: IosVolumeOff,
  IosVolumeUp: IosVolumeUp,
  IosWalk: IosWalk,
  IosWarningOutline: IosWarningOutline,
  IosWarning: IosWarning,
  IosWatch: IosWatch,
  IosWaterOutline: IosWaterOutline,
  IosWater: IosWater,
  IosWifiOutline: IosWifiOutline,
  IosWifi: IosWifi,
  IosWineOutline: IosWineOutline,
  IosWine: IosWine,
  IosWomanOutline: IosWomanOutline,
  IosWoman: IosWoman,
  LogoAndroid: LogoAndroid,
  LogoAngular: LogoAngular,
  LogoApple: LogoApple,
  LogoBitcoin: LogoBitcoin,
  LogoBuffer: LogoBuffer,
  LogoChrome: LogoChrome,
  LogoCodepen: LogoCodepen,
  LogoCss3: LogoCss3,
  LogoDesignernews: LogoDesignernews,
  LogoDribbble: LogoDribbble,
  LogoDropbox: LogoDropbox,
  LogoEuro: LogoEuro,
  LogoFacebook: LogoFacebook,
  LogoFoursquare: LogoFoursquare,
  LogoFreebsdDevil: LogoFreebsdDevil,
  LogoGithub: LogoGithub,
  LogoGoogle: LogoGoogle,
  LogoGoogleplus: LogoGoogleplus,
  LogoHackernews: LogoHackernews,
  LogoHtml5: LogoHtml5,
  LogoInstagram: LogoInstagram,
  LogoJavascript: LogoJavascript,
  LogoLinkedin: LogoLinkedin,
  LogoMarkdown: LogoMarkdown,
  LogoNodejs: LogoNodejs,
  LogoOctocat: LogoOctocat,
  LogoPinterest: LogoPinterest,
  LogoPlaystation: LogoPlaystation,
  LogoPython: LogoPython,
  LogoReddit: LogoReddit,
  LogoRss: LogoRss,
  LogoSass: LogoSass,
  LogoSkype: LogoSkype,
  LogoSnapchat: LogoSnapchat,
  LogoSteam: LogoSteam,
  LogoTumblr: LogoTumblr,
  LogoTux: LogoTux,
  LogoTwitch: LogoTwitch,
  LogoTwitter: LogoTwitter,
  LogoUsd: LogoUsd,
  LogoVimeo: LogoVimeo,
  LogoWhatsapp: LogoWhatsapp,
  LogoWindows: LogoWindows,
  LogoWordpress: LogoWordpress,
  LogoXbox: LogoXbox,
  LogoYahoo: LogoYahoo,
  LogoYen: LogoYen,
  LogoYoutube: LogoYoutube,
  MdAddCircle: MdAddCircle,
  MdAdd: MdAdd,
  MdAlarm: MdAlarm,
  MdAlbums: MdAlbums,
  MdAlert: MdAlert,
  MdAmericanFootball: MdAmericanFootball,
  MdAnalytics: MdAnalytics,
  MdAperture: MdAperture,
  MdApps: MdApps,
  MdAppstore: MdAppstore,
  MdArchive: MdArchive,
  MdArrowBack: MdArrowBack,
  MdArrowDown: MdArrowDown,
  MdArrowDropdownCircle: MdArrowDropdownCircle,
  MdArrowDropdown: MdArrowDropdown,
  MdArrowDropleftCircle: MdArrowDropleftCircle,
  MdArrowDropleft: MdArrowDropleft,
  MdArrowDroprightCircle: MdArrowDroprightCircle,
  MdArrowDropright: MdArrowDropright,
  MdArrowDropupCircle: MdArrowDropupCircle,
  MdArrowDropup: MdArrowDropup,
  MdArrowForward: MdArrowForward,
  MdArrowRoundBack: MdArrowRoundBack,
  MdArrowRoundDown: MdArrowRoundDown,
  MdArrowRoundForward: MdArrowRoundForward,
  MdArrowRoundUp: MdArrowRoundUp,
  MdArrowUp: MdArrowUp,
  MdAt: MdAt,
  MdAttach: MdAttach,
  MdBackspace: MdBackspace,
  MdBarcode: MdBarcode,
  MdBaseball: MdBaseball,
  MdBasket: MdBasket,
  MdBasketball: MdBasketball,
  MdBatteryCharging: MdBatteryCharging,
  MdBatteryDead: MdBatteryDead,
  MdBatteryFull: MdBatteryFull,
  MdBeaker: MdBeaker,
  MdBeer: MdBeer,
  MdBicycle: MdBicycle,
  MdBluetooth: MdBluetooth,
  MdBoat: MdBoat,
  MdBody: MdBody,
  MdBonfire: MdBonfire,
  MdBook: MdBook,
  MdBookmark: MdBookmark,
  MdBookmarks: MdBookmarks,
  MdBowtie: MdBowtie,
  MdBriefcase: MdBriefcase,
  MdBrowsers: MdBrowsers,
  MdBrush: MdBrush,
  MdBug: MdBug,
  MdBuild: MdBuild,
  MdBulb: MdBulb,
  MdBus: MdBus,
  MdCafe: MdCafe,
  MdCalculator: MdCalculator,
  MdCalendar: MdCalendar,
  MdCall: MdCall,
  MdCamera: MdCamera,
  MdCar: MdCar,
  MdCard: MdCard,
  MdCart: MdCart,
  MdCash: MdCash,
  MdChatboxes: MdChatboxes,
  MdChatbubbles: MdChatbubbles,
  MdCheckboxOutline: MdCheckboxOutline,
  MdCheckbox: MdCheckbox,
  MdCheckmarkCircleOutline: MdCheckmarkCircleOutline,
  MdCheckmarkCircle: MdCheckmarkCircle,
  MdCheckmark: MdCheckmark,
  MdClipboard: MdClipboard,
  MdClock: MdClock,
  MdCloseCircle: MdCloseCircle,
  MdClose: MdClose,
  MdClosedCaptioning: MdClosedCaptioning,
  MdCloudCircle: MdCloudCircle,
  MdCloudDone: MdCloudDone,
  MdCloudDownload: MdCloudDownload,
  MdCloudOutline: MdCloudOutline,
  MdCloudUpload: MdCloudUpload,
  MdCloud: MdCloud,
  MdCloudyNight: MdCloudyNight,
  MdCloudy: MdCloudy,
  MdCodeDownload: MdCodeDownload,
  MdCodeWorking: MdCodeWorking,
  MdCode: MdCode,
  MdCog: MdCog,
  MdColorFill: MdColorFill,
  MdColorFilter: MdColorFilter,
  MdColorPalette: MdColorPalette,
  MdColorWand: MdColorWand,
  MdCompass: MdCompass,
  MdConstruct: MdConstruct,
  MdContact: MdContact,
  MdContacts: MdContacts,
  MdContract: MdContract,
  MdContrast: MdContrast,
  MdCopy: MdCopy,
  MdCreate: MdCreate,
  MdCrop: MdCrop,
  MdCube: MdCube,
  MdCut: MdCut,
  MdDesktop: MdDesktop,
  MdDisc: MdDisc,
  MdDocument: MdDocument,
  MdDoneAll: MdDoneAll,
  MdDownload: MdDownload,
  MdEasel: MdEasel,
  MdEgg: MdEgg,
  MdExit: MdExit,
  MdExpand: MdExpand,
  MdEyeOff: MdEyeOff,
  MdEye: MdEye,
  MdFastforward: MdFastforward,
  MdFemale: MdFemale,
  MdFiling: MdFiling,
  MdFilm: MdFilm,
  MdFingerPrint: MdFingerPrint,
  MdFlag: MdFlag,
  MdFlame: MdFlame,
  MdFlash: MdFlash,
  MdFlask: MdFlask,
  MdFlower: MdFlower,
  MdFolderOpen: MdFolderOpen,
  MdFolder: MdFolder,
  MdFootball: MdFootball,
  MdFunnel: MdFunnel,
  MdGameControllerA: MdGameControllerA,
  MdGameControllerB: MdGameControllerB,
  MdGitBranch: MdGitBranch,
  MdGitCommit: MdGitCommit,
  MdGitCompare: MdGitCompare,
  MdGitMerge: MdGitMerge,
  MdGitNetwork: MdGitNetwork,
  MdGitPullRequest: MdGitPullRequest,
  MdGlasses: MdGlasses,
  MdGlobe: MdGlobe,
  MdGrid: MdGrid,
  MdHammer: MdHammer,
  MdHand: MdHand,
  MdHappy: MdHappy,
  MdHeadset: MdHeadset,
  MdHeartOutline: MdHeartOutline,
  MdHeart: MdHeart,
  MdHelpBuoy: MdHelpBuoy,
  MdHelpCircle: MdHelpCircle,
  MdHelp: MdHelp,
  MdHome: MdHome,
  MdIceCream: MdIceCream,
  MdImage: MdImage,
  MdImages: MdImages,
  MdInfinite: MdInfinite,
  MdInformationCircle: MdInformationCircle,
  MdInformation: MdInformation,
  MdIonic: MdIonic,
  MdIonitron: MdIonitron,
  MdJet: MdJet,
  MdKey: MdKey,
  MdKeypad: MdKeypad,
  MdLaptop: MdLaptop,
  MdLeaf: MdLeaf,
  MdLink: MdLink,
  MdListBox: MdListBox,
  MdList: MdList,
  MdLocate: MdLocate,
  MdLock: MdLock,
  MdLogIn: MdLogIn,
  MdLogOut: MdLogOut,
  MdMagnet: MdMagnet,
  MdMailOpen: MdMailOpen,
  MdMail: MdMail,
  MdMale: MdMale,
  MdMan: MdMan,
  MdMap: MdMap,
  MdMedal: MdMedal,
  MdMedical: MdMedical,
  MdMedkit: MdMedkit,
  MdMegaphone: MdMegaphone,
  MdMenu: MdMenu,
  MdMicOff: MdMicOff,
  MdMic: MdMic,
  MdMicrophone: MdMicrophone,
  MdMoon: MdMoon,
  MdMore: MdMore,
  MdMove: MdMove,
  MdMusicalNote: MdMusicalNote,
  MdMusicalNotes: MdMusicalNotes,
  MdNavigate: MdNavigate,
  MdNoSmoking: MdNoSmoking,
  MdNotificationsOff: MdNotificationsOff,
  MdNotificationsOutline: MdNotificationsOutline,
  MdNotifications: MdNotifications,
  MdNuclear: MdNuclear,
  MdNutrition: MdNutrition,
  MdOpen: MdOpen,
  MdOptions: MdOptions,
  MdOutlet: MdOutlet,
  MdPaperPlane: MdPaperPlane,
  MdPaper: MdPaper,
  MdPartlySunny: MdPartlySunny,
  MdPause: MdPause,
  MdPaw: MdPaw,
  MdPeople: MdPeople,
  MdPersonAdd: MdPersonAdd,
  MdPerson: MdPerson,
  MdPhoneLandscape: MdPhoneLandscape,
  MdPhonePortrait: MdPhonePortrait,
  MdPhotos: MdPhotos,
  MdPie: MdPie,
  MdPin: MdPin,
  MdPint: MdPint,
  MdPizza: MdPizza,
  MdPlane: MdPlane,
  MdPlanet: MdPlanet,
  MdPlay: MdPlay,
  MdPodium: MdPodium,
  MdPower: MdPower,
  MdPricetag: MdPricetag,
  MdPricetags: MdPricetags,
  MdPrint: MdPrint,
  MdPulse: MdPulse,
  MdQrScanner: MdQrScanner,
  MdQuote: MdQuote,
  MdRadioButtonOff: MdRadioButtonOff,
  MdRadioButtonOn: MdRadioButtonOn,
  MdRadio: MdRadio,
  MdRainy: MdRainy,
  MdRecording: MdRecording,
  MdRedo: MdRedo,
  MdRefreshCircle: MdRefreshCircle,
  MdRefresh: MdRefresh,
  MdRemoveCircle: MdRemoveCircle,
  MdRemove: MdRemove,
  MdReorder: MdReorder,
  MdRepeat: MdRepeat,
  MdResize: MdResize,
  MdRestaurant: MdRestaurant,
  MdReturnLeft: MdReturnLeft,
  MdReturnRight: MdReturnRight,
  MdReverseCamera: MdReverseCamera,
  MdRewind: MdRewind,
  MdRibbon: MdRibbon,
  MdRose: MdRose,
  MdSad: MdSad,
  MdSchool: MdSchool,
  MdSearch: MdSearch,
  MdSend: MdSend,
  MdSettings: MdSettings,
  MdShareAlt: MdShareAlt,
  MdShare: MdShare,
  MdShirt: MdShirt,
  MdShuffle: MdShuffle,
  MdSkipBackward: MdSkipBackward,
  MdSkipForward: MdSkipForward,
  MdSnow: MdSnow,
  MdSpeedometer: MdSpeedometer,
  MdSquareOutline: MdSquareOutline,
  MdSquare: MdSquare,
  MdStarHalf: MdStarHalf,
  MdStarOutline: MdStarOutline,
  MdStar: MdStar,
  MdStats: MdStats,
  MdStopwatch: MdStopwatch,
  MdSubway: MdSubway,
  MdSunny: MdSunny,
  MdSwap: MdSwap,
  MdSwitch: MdSwitch,
  MdSync: MdSync,
  MdTabletLandscape: MdTabletLandscape,
  MdTabletPortrait: MdTabletPortrait,
  MdTennisball: MdTennisball,
  MdText: MdText,
  MdThermometer: MdThermometer,
  MdThumbsDown: MdThumbsDown,
  MdThumbsUp: MdThumbsUp,
  MdThunderstorm: MdThunderstorm,
  MdTime: MdTime,
  MdTimer: MdTimer,
  MdTrain: MdTrain,
  MdTransgender: MdTransgender,
  MdTrash: MdTrash,
  MdTrendingDown: MdTrendingDown,
  MdTrendingUp: MdTrendingUp,
  MdTrophy: MdTrophy,
  MdUmbrella: MdUmbrella,
  MdUndo: MdUndo,
  MdUnlock: MdUnlock,
  MdVideocam: MdVideocam,
  MdVolumeDown: MdVolumeDown,
  MdVolumeMute: MdVolumeMute,
  MdVolumeOff: MdVolumeOff,
  MdVolumeUp: MdVolumeUp,
  MdWalk: MdWalk,
  MdWarning: MdWarning,
  MdWatch: MdWatch,
  MdWater: MdWater,
  MdWifi: MdWifi,
  MdWine: MdWine,
  MdWoman: MdWoman,
  IosAlarmOutline: IosAlarmOutline,
  IosAlarm: IosAlarm,
  IosAlbumsOutline: IosAlbumsOutline,
  IosAlbums: IosAlbums,
  IosArrowBack: IosArrowBack,
  IosBarcodeOutline: IosBarcodeOutline,
  IosBarcode: IosBarcode,
  IosBaseballOutline: IosBaseballOutline,
  IosBaseball: IosBaseball,
  IosBasketballOutline: IosBasketballOutline,
  IosBasketball: IosBasketball,
  IosBodyOutline: IosBodyOutline,
  IosBody: IosBody,
  IosBookOutline: IosBookOutline,
  IosBook: IosBook,
  IosBookmarksOutline: IosBookmarksOutline,
  IosBookmarks: IosBookmarks,
  IosBriefcaseOutline: IosBriefcaseOutline,
  IosBriefcase: IosBriefcase,
  IosBrowsersOutline: IosBrowsersOutline,
  IosBrowsers: IosBrowsers,
  IosCalculatorOutline: IosCalculatorOutline,
  IosCalculator: IosCalculator,
  IosCalendar: IosCalendar,
  IosCameraOutline: IosCameraOutline,
  IosCamera: IosCamera,
  IosCartOutline: IosCartOutline,
  IosCart: IosCart,
  IosChatboxesOutline: IosChatboxesOutline,
  IosChatboxes: IosChatboxes,
  IosColorFilterOutline: IosColorFilterOutline,
  IosColorFilter: IosColorFilter,
  IosCopyOutline: IosCopyOutline,
  IosCopy: IosCopy,
  IosDownloadOutline: IosDownloadOutline,
  IosDownload: IosDownload,
  IosEyeOutline: IosEyeOutline,
  IosEye: IosEye,
  IosFastforwardOutline: IosFastforwardOutline,
  IosFastforward: IosFastforward,
  IosFilingOutline: IosFilingOutline,
  IosFilmOutline: IosFilmOutline,
  IosFilm: IosFilm,
  IosFlagOutline: IosFlagOutline,
  IosFlag: IosFlag,
  IosFolderOutline: IosFolderOutline,
  IosFolder: IosFolder,
  IosFootballOutline: IosFootballOutline,
  IosFootball: IosFootball,
  IosGameControllerAOutline: IosGameControllerAOutline,
  IosGameControllerA: IosGameControllerA,
  IosGameControllerBOutline: IosGameControllerBOutline,
  IosGameControllerB: IosGameControllerB,
  IosGlassesOutline: IosGlassesOutline,
  IosGlasses: IosGlasses,
  IosHeartOutline: IosHeartOutline,
  IosHeart: IosHeart,
  IosHomeOutline: IosHomeOutline,
  IosHome: IosHome,
  IosInfiniteOutline: IosInfiniteOutline,
  IosInfinite: IosInfinite,
  IosIonicOutline: IosIonicOutline,
  IosKeypadOutline: IosKeypadOutline,
  IosKeypad: IosKeypad,
  IosMedicalOutline: IosMedicalOutline,
  IosMedical: IosMedical,
  IosMedkitOutline: IosMedkitOutline,
  IosMedkit: IosMedkit,
  IosMoreOutline: IosMoreOutline,
  IosMore: IosMore,
  IosNavigateOutline: IosNavigateOutline,
  IosNavigate: IosNavigate,
  IosNutritionOutline: IosNutritionOutline,
  IosNutrition: IosNutrition,
  IosPauseOutline: IosPauseOutline,
  IosPause: IosPause,
  IosPeopleOutline: IosPeopleOutline,
  IosPeople: IosPeople,
  IosPersonOutline: IosPersonOutline,
  IosPerson: IosPerson,
  IosPhotosOutline: IosPhotosOutline,
  IosPhotos: IosPhotos,
  IosPieOutline: IosPieOutline,
  IosPie: IosPie,
  IosPlayOutline: IosPlayOutline,
  IosPlay: IosPlay,
  IosPricetagsOutline: IosPricetagsOutline,
  IosPricetags: IosPricetags,
  IosRecordingOutline: IosRecordingOutline,
  IosRecording: IosRecording,
  IosRedoOutline: IosRedoOutline,
  IosRedo: IosRedo,
  IosReverseCameraOutline: IosReverseCameraOutline,
  IosReverseCamera: IosReverseCamera,
  IosRewindOutline: IosRewindOutline,
  IosRewind: IosRewind,
  IosSpeedometerOutline: IosSpeedometerOutline,
  IosSpeedometer: IosSpeedometer,
  IosStarHalf: IosStarHalf,
  IosStarOutline: IosStarOutline,
  IosStar: IosStar,
  IosStopwatchOutline: IosStopwatchOutline,
  IosStopwatch: IosStopwatch,
  IosTennisballOutline: IosTennisballOutline,
  IosTennisball: IosTennisball,
  IosTimerOutline: IosTimerOutline,
  IosTimer: IosTimer,
  IosTrashOutline: IosTrashOutline,
  IosTrash: IosTrash,
  IosUndoOutline: IosUndoOutline,
  IosUndo: IosUndo,
  IosVideocamOutline: IosVideocamOutline,
  IosVideocam: IosVideocam }

class IconsContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchIcon: '',
      iconsFiltered: iconsName,
      filterSelected: 'all'
    }
  }

  render() {
    return (
      <div className="iconsContainerSection">
        <h2>Icons</h2>
          <p style={{color: 'black'}}><strong>NOTE:</strong> This icons are for react-ionicons v3 that uses ionicons v3.
            If you are looking for react-ionicons v1 check out this: <a href="http://ionicons.com/">Ionicons</a>
          </p>
          <SelectField
            floatingLabelText="Filter by type"
            value={this.state.filterSelected}
            onChange={this.handleFilter.bind(this)}
          >
          <MenuItem value={'all'} primaryText="All" />
          <MenuItem value={'ios'} primaryText="iOS" />
          <MenuItem value={'outline'} primaryText="iOS-Outline" />
          <MenuItem value={'md'} primaryText="Material design" />
          <MenuItem value={'logo'} primaryText="Logos" />
        </SelectField>
        <br/>
        <TextField
          floatingLabelText="Search icon..."
          value={this.state.searchIcon}
          onChange={this.handleSearchIcon.bind(this)}
        />
        <div className="iconsContainer">
            {this.state.iconsFiltered.map((icon, key) => (
              <div className="icon" key={key}>
                {this._getIcon(icon)}
                <div>
                  <span className="iconName">{this.toCamelCase(icon)}</span>
                </div>
              </div>
              ))}
        </div>
      </div>
    )
  }

  handleSearchIcon(event) {
    this.setState({searchIcon: event.target.value})
    if (!this.filterSelected || this.filterSelected === 'all') {
      let icons = iconsName.filter(icon => icon.indexOf(event.target.value) > -1)
      this.setState({iconsFiltered: icons })
    } else {
      let icons = this.state.iconsFiltered.filter(icon => icon.indexOf(event.target.value) > -1)
      this.setState({iconsFiltered: icons })
    }

  }

  toCamelCase(string) {
    let camelCased = string.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
  }

  handleFilter(event, index, value) {
    this.setState({ filterSelected: value })
    if (value !== 'all') {
      let icons = iconsName.filter(icon => icon.indexOf(value) > -1)
      this.setState({ iconsFiltered: icons })
    } else {
      this.setState({ iconsFiltered: iconsName })
    }
  }

  _getIcon(icon) {
    let IconComponent = components[this.toCamelCase(icon)]
    return <IconComponent/>
  }

}

export default IconsContainer
