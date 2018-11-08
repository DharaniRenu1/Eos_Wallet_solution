import { Injectable } from '@angular/core';
import * as Eos from 'eosjs';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MurmurService {

  constructor() { }
  public async private(privKey): Promise<any>{
    const { ecc } = Eos.modules    
     return  new Promise((resolve, reject) => {
      alert(privKey)
     const bool = ecc.isValidPrivate(privKey) === true
    console.log('is privKey valid? --> ', bool)
    resolve(bool)
  })as Promise<any>;
  }


  public async pritopub(privKey): Promise<any>{
    const { ecc } = Eos.modules    
   return new Promise((resolve, reject) => {
      const pubKey = ecc.privateToPublic(privKey)
        console.log('pubKey: ', pubKey)
        resolve(pubKey)
    
  })as Promise<any>;
  }




 murmursignup(accname,pubKey)
{
  const config = {
    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
    httpEndpoint: 'http://dev03.cryptolions.io:8890',
    keyProvider: ['5J9UnE6rZ4EixYMoqsz1MVv3oUt5EXamitwozKRDb7AbkkCmhro'],
    authorization: 'amitmaurya12@active', //@active for activeKey, @owner for Owner key
    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
    // verbose: false // verbose logging such as API activity
  };
  const { ecc } = Eos.modules 
  const eos = Eos(config)


    eos.transaction('murmursignup', contract => {
      let data = accname + "-" + pubKey;
      alert("data"+ data);
      contract.getaccount(data);
    }, config)
  

  
}

  public async accname(pubKey): Promise<string>{

    const config = {
      chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
      httpEndpoint: 'http://dev03.cryptolions.io:8890',
      keyProvider: ['5J9UnE6rZ4EixYMoqsz1MVv3oUt5EXamitwozKRDb7AbkkCmhro'],
      authorization: 'amitmaurya12@active', //@active for activeKey, @owner for Owner key
      sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
      broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
      // verbose: false // verbose logging such as API activity
    };
    const { ecc } = Eos.modules 
    const eos = Eos(config)
    
    return new Promise((resolve, reject) => {
  
      eos.getKeyAccounts(pubKey, (error, result) => {
     
      if (error) reject("error")
      resolve(result)
      console.log("the result is"+result)

    // array of account names, can be multiples
    // output example: { account_names: [ 'itamnetwork1', ... ] }
    })

  })as Promise<string>;

}

 
}
