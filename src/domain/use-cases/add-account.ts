import { AccountModel } from '@/domain/entities'

type AddAccountModel = {
  name: string
  phone_number: string
  email: string
  birthday: string
  sex: string

}

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
