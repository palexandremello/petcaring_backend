import { UserAccount } from '@/domain/entities'
import { AddAccount, setupAddAccount } from '@/domain/use-cases'
import { SaveAccountRepository } from '@/domain/contracts/repos'
import { TokenGenerator } from '@/domain/contracts/crypto'
import { mock, MockProxy } from 'jest-mock-extended'
import { mocked } from 'jest-mock'

jest.mock('@/domain/entities/account')
describe('AddAccount', () => {
  let sut: AddAccount
  let userAccountData: any
  let userAccountRepo: MockProxy<SaveAccountRepository>
  let crypto: MockProxy<TokenGenerator>

  beforeAll(() => {
    userAccountRepo = mock()
    crypto = mock()
    crypto.generateToken.mockResolvedValue('any_generated_token')
    userAccountRepo.save.mockResolvedValue({ id: 'any_account_id' })
    userAccountData = {
      name: 'string',
      phone_number: 'string',
      email: 'string',
      birthday: 'string',
      sex: 'string'
    }
  })
  beforeEach(() => {
    sut = setupAddAccount(userAccountRepo, crypto)
  })

  it('Should call Save with UserAccount', async () => {
    const UserAccountStub = jest.fn().mockImplementation(() => ({
      any: 'any'
    }))
    mocked(UserAccount).mockImplementation(UserAccountStub)
    await sut({
      name: 'string',
      phone_number: 'string',
      email: 'string',
      birthday: 'string',
      sex: 'string'

    })

    expect(userAccountRepo.save).toHaveBeenCalledWith({ any: 'any' })
    expect(userAccountRepo.save).toHaveBeenCalledTimes(1)
  })

  it('should return an AccessToken on success', async () => {
    const authResult = await sut(userAccountData)

    expect(authResult).toEqual({ accessToken: 'any_generated_token' })
  })

  it('Should rethrow if SaveAccountRepository throws', async () => {
    userAccountRepo.save.mockRejectedValueOnce(new Error('save_error'))

    const promise = sut(userAccountData)

    await expect(promise).rejects.toThrow(new Error('save_error'))
  })
})
