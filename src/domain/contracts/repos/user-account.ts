
export interface SaveAccountRepository {
  save: (params: SaveAccountRepository.Params) => Promise<SaveAccountRepository.Result>
}

export namespace SaveAccountRepository {
  export type Params = {
    name: string
    phone_number: string
    email: string
    birthday: string
    sex: string

  }

  export type Result = {
    id: string
  }
}
