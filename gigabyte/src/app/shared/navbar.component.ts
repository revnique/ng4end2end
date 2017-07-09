import { Component } from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
                <div class="top-bar">
                    <div class="top-bar-title">&lt;h1&gt;teq_</div>
                    <div>
                        <ul class="menu">
                            <li class="nav-menu"><a [routerLink]="['/admin']">admin area</a></li>
                        </ul>
                    </div>
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent {}