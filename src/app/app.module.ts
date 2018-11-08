import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { GenerateComponent } from './generate/generate.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: WalletComponent },
  { path: 'generate', component: GenerateComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    GenerateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
