import { bootstrapApplication } from '@angular/platform-browser';
import { TasksComponent } from './app/pages/tasks.component/tasks.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication( TasksComponent, {
  providers: [provideHttpClient()]
}).catch((err) => console.error(err));
