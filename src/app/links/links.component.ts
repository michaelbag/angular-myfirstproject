import { Component, OnInit } from '@angular/core';
import { LinksList } from './links-list';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links = LinksList;
  tagFilter: string[];

  constructor() { }

  ngOnInit() {
  }

}