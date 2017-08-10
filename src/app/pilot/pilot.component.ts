import { Component, OnInit, NgZone } from '@angular/core';

//import { FileUploader, Headers } from 'ng2-file-upload/ng2-file-upload';

import { ConfigService } from "../services/config.service";

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
