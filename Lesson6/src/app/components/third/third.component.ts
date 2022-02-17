import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { LocalStateService } from 'src/app/services/local-state.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  providers: [LocalStateService]
})
export class ThirdComponent implements OnInit {

  constructor(public globalState: GlobalStateService, public localState: LocalStateService) { }

  ngOnInit() {
  }

}
