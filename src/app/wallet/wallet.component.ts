import { Component, OnInit } from '@angular/core';
import { MurmurService } from '../murmur.service';
import { Router } from '@angular/router';
import * as Eos from 'eosjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor( public ms:MurmurService,public route:Router) { }

  ngOnInit() {
  }
  importing()
  { 
    
     var Pri_key= ((document.getElementById("privateKey") as HTMLInputElement).value);

   
    this.ms.private(Pri_key).then(res => {
     
        if(res)
        {
          this.ms.pritopub(Pri_key).then(pub => {
            alert(pub)
            this.ms.accname('EOS82AkFEUo59euBLbfeYYKk22xJ85tZtqSHgeidKcZdfdnLZSQUC').then(acc => {
               alert(acc)
  
            //   let list_arr = acc["account_names"];
            //   console.log("Accounts: "+list_arr)
            //   if (list_arr.length > 0) {
              
            //   }
            //   else
            //   {
            //     alert("There is no registered Accounts")
            //   }
          })
          })
         this.route.navigate([{outlets: {feed: ['userprofilelist']}}]);
          
        }
        else
        {
          alert("Enter the Valid Key")
        } 
      })
  
  }
}
