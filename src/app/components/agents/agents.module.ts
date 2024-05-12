import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsRoutingModule } from './agents-routing.module';
import { ManageUserModule } from '../manage-user/manage-user.module';
import { NgxPrintModule } from 'ngx-print';

import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddAgentWizardComponent } from './add-agent-wizard/add-agent-wizard.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { AllAgentComponent } from './all-agent/all-agent.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AgentDetailsComponent } from './agent-profile/agent-details/agent-details.component';


@NgModule({
  declarations: [
    AgentProfileComponent,
    AddAgentComponent,
    AddAgentWizardComponent,
    EditAgentComponent,
    AllAgentComponent,
    InvoiceComponent,
    AgentDetailsComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule,
    ManageUserModule,
    NgxPrintModule
  ]
})
export class AgentsModule { }
