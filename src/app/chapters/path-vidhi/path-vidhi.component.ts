import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-path-vidhi',
  templateUrl: './path-vidhi.component.html',
  styleUrls: ['./path-vidhi.component.scss'],
})
export class PathVidhiComponent implements OnInit {
  pathvidhiData:any
  constructor(private _pathVidhi:DemoService) { }

  ngOnInit() {
    this.pathvidhiData = this._pathVidhi.PathVidhiModel.pathvidhi_2
  }

}
