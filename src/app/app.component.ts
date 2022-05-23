import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'basic-app';
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title){}
      ngOnInit() {
 
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
          )
          .subscribe(() => {
     
            var rt = this.getChild(this.activatedRoute)
     
            rt.data.subscribe((data: { title: string; }) => {
              console.log(data);
              this.titleService.setTitle(data.title)})
          })
     
      }
     
      getChild(activatedRoute: ActivatedRoute):any {
        if (activatedRoute.firstChild) {
          return this.getChild(activatedRoute.firstChild);
        } else {
          return activatedRoute;
        }
      }
      
    }

