import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from './../comics/comic/shared/comics-api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-comic-form',
  templateUrl: './search-comic-form.component.html',
  styleUrls: ['./search-comic-form.component.css']
})
export class SearchComicFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
