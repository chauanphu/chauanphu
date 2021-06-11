import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatSidenavModule} from "@angular/material/sidenav"
import { MatMenuModule } from "@angular/material/menu"
import { MatListModule } from "@angular/material/list"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatExpansionModule } from "@angular/material/expansion"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatTabsModule } from "@angular/material/tabs"
import { MatStepperModule } from "@angular/material/stepper"
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatChipsModule } from "@angular/material/chips"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core"
import { MatDividerModule } from "@angular/material/divider"
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator"
import { MatTooltipModule } from '@angular/material/tooltip';

const Materials = [
  MatAutocompleteModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatSliderModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTabsModule,
  MatStepperModule,
  MatRippleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
]

@NgModule({
  declarations: [],
  imports: [
    Materials
  ],
  exports: [Materials]
})
export class MaterialModule { }
