import { byRole, createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ButtonComponent } from './button.component';


describe('ButtonComponent', () => {
  let spectator: Spectator<ButtonComponent>
  const createComponent = createComponentFactory({
    component: ButtonComponent
  })

  beforeEach(async ()=>{
    spectator = createComponent()
  })

  it('should find the button', () =>{
    console.log(spectator.query(byRole('button')))
  })
});
