import { getSdkError } from '@walletconnect/utils'

import WalletConnect from '@/utils/WalletConnect'

const useWalletConnect = () => {
  const subscribe = async () => {
    const wallet = await WalletConnect.create()

    wallet.on('session_delete', (proposal) => {
      console.log({ session_delete: proposal })
    })

    wallet.on('session_request', (proposal) => {
      console.log({ session_request: proposal })
    })

    wallet.on('session_proposal', (proposal) => {
      console.log({ session_update: proposal })
    })
  }

  const disconnect = async (topic: string) => {
    const wallet = await WalletConnect.create()

    wallet.disconnectSession({
      topic,
      reason: getSdkError('USER_DISCONNECTED'),
    })
  }

  return {
    subscribe,
    disconnect,
  }
}

export default useWalletConnect
