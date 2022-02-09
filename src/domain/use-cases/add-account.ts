import { AccessToken, UserAccount } from '@/domain/entities'
import { TokenGenerator } from '@/domain/contracts/crypto'
import { SaveAccountRepository } from '@/domain/contracts/repos'

type Setup = (
  userAccountRepo: SaveAccountRepository,
  crypto: TokenGenerator
) => AddAccount

type Input = {
  name: string
  phone_number: string
  email: string
  birthday: string
  sex: string

}
type Output = { accessToken: string}

export type AddAccount = (params: Input) => Promise<Output>

export const setupAddAccount: Setup = (userAccountRepo, crypto) => async params => {
  const account = new UserAccount(params)
  const { id } = await userAccountRepo.save(account)
  const accessToken = await crypto.generateToken({ key: id, expirationInMs: AccessToken.expirationInMs })
  return { accessToken }
}
