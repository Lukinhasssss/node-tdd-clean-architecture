import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')

    await accountCollection.insertOne(accountData) // Depois de inserido no banco irá adicionar o atributo _id no objeto accountData

    return MongoHelper.map(accountData)
  }
}
