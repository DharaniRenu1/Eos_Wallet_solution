import { Component, OnInit } from '@angular/core';
import mnGen from 'mngen';                     
import * as Eos from 'eosjs';
import { Router } from '@angular/router';
import { ngCopy } from 'angular-6-clipboard';
import { MurmurService } from '../murmur.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
public mnemonic : any ;
public private1 : any ;
public public1 : any ;
public name;
  constructor( public router : Router ,public mur:MurmurService) { }

  ngOnInit() { 
 
     
        this.mnemonic = mnGen.list(1, 12, ' ').toString()
        this.private1=Eos.modules.ecc.PrivateKey.fromSeed(this.mnemonic).toString(); 
        this.public1 = Eos.modules.ecc.privateToPublic(this.private1)
       
        
  
  }
  
  copy()
  {

    ngCopy("Account Name : "+this.name+"\nThe Mnemonic : "+this.mnemonic+"\n The Private Key : "+this.private1 +"\n The Public Key : "+this.public1  );
  }
  key_gen() 
  {
    // alert(key_name)
    if(this.name.length == 12){
      this.mur.murmursignup(this.name, this.public1);
    }
  }

}

