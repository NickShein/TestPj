import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisitorsService } from '../visitors.service';
import { Subscription } from 'rxjs';

interface visitorsObject {
  name: string;
  imgLink: string;
  description: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  visitorNumber: number = 0;
  isLoaded: boolean = false;

  visitorSub$: Subscription | null = null;

  constructor(private visitorsService:VisitorsService) { }

  ngOnInit(): void {
    this.visitorSub$ = this.visitorsService.getWebsiteVisitorsValue().subscribe((result)=>{
      this.visitorNumber = result.value;
      this.isLoaded = true;
    });
  }

  ngOnDestroy(): void {
      this.visitorSub$?.unsubscribe();
  }

}
