import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutComponent } from './component/about/about.component';
import { TodoComponent } from './features/todo/todo.component';
import { CounterComponent } from './components/counter/counter.component';
import { WatchlistComponent } from './features/watchlist/watchlist.component';
import { BooklistComponent } from './features/booklist/booklist.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'watchlist',
    component: WatchlistComponent
  },
  {
    path: 'booklist',
    component: BooklistComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
