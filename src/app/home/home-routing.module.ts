import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MainPage } from '../main/main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      { path: 'main',
        children: [
        { path: '', loadChildren: '../main/main.module#MainPageModule'}
      ]
    },
    { path: 'education',
        children: [
        { path: '', loadChildren: '../education/education.module#EducationPageModule'}
      ]
    },
    { path: 'experience',
        children: [
        { path: '', loadChildren: '../experience/experience.module#ExperiencePageModule'}
      ]
    },
    { path: 'projects',
        children: [
        { path: '', loadChildren: '../projects/projects.module#ProjectsPageModule'}
      ]
    },
    { path: 'contact',
        children: [
        { path: '', loadChildren: '../contact/contact.module#ContactPageModule'}
      ]
    },
    { path: 'about',
        children: [
        { path: '', loadChildren: '../about/about.module#AboutPageModule'}
      ]
    },
      {
        path: '',
        redirectTo: '/home/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
