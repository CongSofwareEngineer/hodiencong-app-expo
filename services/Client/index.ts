import fetcher from '@/config/api'

class ClientService {
  async login(userName: string, password: string) {
    const res = fetcher({
      url: '/auth/login',
      method: 'POST',
      body: {
        userName,
        password,
      },
      auth: false,
    })

    return res
  }
}

export default new ClientService()
