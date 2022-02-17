import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { LocalStateService } from 'src/app/services/local-state.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [GlobalStateService]
})
export class FirstComponent implements OnInit {

  constructor(public globalState: GlobalStateService, public localState: LocalStateService) { }

  ngOnInit() {
  }

}
