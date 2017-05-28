import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public title = 'app works!';
  private header = 'Privte Header';
  protected footer = 'protected footer';

  func(a: string) {
    return a + 'Hello world';
  }

}
