import { Core } from '@walletconnect/core'
import { WalletKit } from '@reown/walletkit'
import messaging from '@react-native-firebase/messaging'
const WalletConnect = {
  create: async () => {
    const core = new Core({
      projectId: process.env.PROJECT_ID,
    })
    const walletKit = await WalletKit.init({
      core,
      metadata: {
        name: 'Demo React Native Wallet',
        description: 'Demo RN Wallet to interface with Dapps',
        url: 'www.walletconnect.com',
        icons: ['https://your_wallet_icon.png'],
        redirect: {
          native: 'yourwalletscheme://',
        },
      },
    })

    await walletKit.registerDeviceToken({
      token: await messaging().getToken(), // device token
      clientId: await walletKit.core.crypto.getClientId(), // your instance clientId
      notificationType: 'fcm', // notification type
      enableEncrypted: true, // flag that enabled detailed notifications
    })

    return walletKit
  },
}

export default WalletConnect
