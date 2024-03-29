import { IUser } from '../../utils/TypeScript'

export const AUTH = 'AUTH'

export interface IAuth {
  token?: string
  user?: IUser
  error?: unknown
}

export interface IAuthType{
  type: typeof AUTH
  payload: IAuth
}