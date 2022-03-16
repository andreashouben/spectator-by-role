import {byRole, createComponentFactory, Spectator} from '@ngneat/spectator/jest'
import { AppComponent } from './app.component';

describe('AppComponent', () => {
 let spectator: Spectator<AppComponent>

 const createComponent = createComponentFactory({
   component: AppComponent
 })

 beforeEach(() =>{
   spectator = createComponent()
 })

 it('should find a button', () =>{
   const button = spectator.query(byRole('button', {name: /new button/i}))

   expect(button).toBeTruthy()
 })

 
});
