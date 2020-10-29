import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  data;
  p:number=1;
  total;
  constructor(private route: ActivatedRoute,private crud: CrudService) { }

  ngOnInit(): void {
    this.route.queryParams 
    .subscribe(params => {
      console.log(params);  
     
      this.crud.postAll('books/findsearch',params)
      .then((e:any)=>{
          console.log(e);
          this.data = e;
          this.total =e.length;
      })
    }
  );
  }

}
