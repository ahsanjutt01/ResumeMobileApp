import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home', loadChildren: './home/home.module#HomePageModule'
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'education',
  //   loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  // },
  // {
  //   path: 'experience',
  //   loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
  // },
  // {
  //   path: 'projects',
  //   loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
