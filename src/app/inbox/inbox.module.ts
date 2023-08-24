import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    PlaceholderComponent,
    EmailShowComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailFormComponent,
    EmailCreateComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ],
  exports:[
    NotFoundComponent,
    HomeComponent,
    PlaceholderComponent,
    EmailShowComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailFormComponent,
    EmailCreateComponent
  ]
})
export class InboxModule { }
