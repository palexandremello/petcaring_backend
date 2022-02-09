import { UserAccount } from '@/domain/entities'

describe('Account', () => {
  it('Should create with user account data only', () => {
    const userAccountData = {
      name: 'string',
      phone_number: 'string',
      email: 'string',
      birthday: 'string',
      sex: 'string'
    }

    const sut = new UserAccount(userAccountData)
    expect(sut).toEqual(userAccountData)
  })
})
