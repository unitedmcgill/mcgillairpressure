import { Component, OnInit, NgZone } from '@angular/core';

//import { FileUploader, Headers } from 'ng2-file-upload/ng2-file-upload';

import { ConfigService } from "../services/config.service";

@Component({
  selector: 'app-rebuilds',
  templateUrl: './rebuilds.component.html',
  styleUrls: ['./rebuilds.component.scss']
})
export class RebuildsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
