import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  // selector: 'app-root',
  selector:'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LabTwoAngular';
  @ViewChild (ProductComponent) productChild:any;

  buttonHandler(){
    this.productChild.renderValues();
  }
}
