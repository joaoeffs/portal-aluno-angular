// sidebar.module.ts
import { NgModule } from '@angular/core';
import { SideBarComponent } from './sidebar.component';
// ... Importações adicionais

@NgModule({
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
  // ... Outras configurações do módulo
})
export class SideBarModule { }
