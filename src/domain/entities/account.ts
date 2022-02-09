export type AccountModel = {
  id?: string
  name: string
  phone_number: string
  email: string
  birthday: string
  sex: string
  pet?: []

}

export class UserAccount {
  id?: string
  name: string
  phone_number: string
  email: string
  birthday: string
  sex: string
  pet?: []

  constructor (accountData: AccountModel) {
    this.id = accountData?.id
    this.name = accountData.name
    this.email = accountData.email
    this.phone_number = accountData.phone_number
    this.birthday = accountData.birthday
    this.sex = accountData.sex
    this.pet = accountData?.pet
  }
}
