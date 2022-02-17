import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { LocalStateService } from 'src/app/services/local-state.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [LocalStateService]
})
export class SecondComponent implements OnInit {

  constructor(public globalState: GlobalStateService, public localState: LocalStateService) { }

  ngOnInit() {
  }

}
