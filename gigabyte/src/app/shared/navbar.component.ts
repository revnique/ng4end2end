import { Component, OnInit } from '@angular/core';
import { WindowSize} from './windowResize';
import './date';

@Component({
    selector: 'navi-bar',
    template: `
                <div class="top-bar">
                    <div class="top-bar-title">&lt;h1&gt;teq_<span>&nbsp;size:{{size}}</span><span>date&nbsp;size:{{dateString}}</span></div>
                    <div>
                        <ul class="menu">
                            <li class="nav-menu"><a [routerLink]="['/admin']">admin area</a></li>
                        </ul>
                    </div>
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent implements OnInit{
    size:number;
    dateString:string;
    ngOnInit(){
        this.getsize();
        this.dateString = new Date().formatSmallDateTime(true);
    }
    getsize(){
        let d = new WindowSize;
        d.height$.subscribe((h)=>this.size = h);
    }
    

    
}