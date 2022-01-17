// import { DicasFamiliaModule } from './../../shared/widget/dicas-familia/dicas-familia.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '@core/widgets/header/header.module';


// import { DetailComponent } from './detail/detail.component';
// import { WidgetModule } from './../../shared/widget/widget.module';
// import {SaldoModule} from '../../shared/widget/saldo/saldo.module';
// import {SlideIconsModule} from '../../shared/widget/slide-icons/slide-icons.module';
// import {MatSelectModule} from '@angular/material/select';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatInputModule} from '@angular/material/input';
// import {SlideOfertasModule} from '../../shared/widget/slide-ofertas/slide-ofertas.module';

// import { FeedsModule } from './../../shared/widget/feeds/feeds.module';
// import {HeaderLojasCondorModule} from '../../shared/widget/header-lojas-condor/header-lojas-condor.module';
// import {HeaderLojasCondorBuscaModule} from '../../api-products/header-lojas-condor-busca/header-lojas-condor-busca.module';
@NgModule({
  declarations: [HomePage],
  imports: [
    // SaldoModule,
    // FeedsModule,
    FormsModule,
    IonicModule,
    CommonModule,
    HeaderModule,
    HomePageRoutingModule,
    // WidgetModule,
    // MatInputModule,
    // MatSelectModule,
    // SlideIconsModule,
    // DicasFamiliaModule,
    // SlideOfertasModule,
    // MatAutocompleteModule,
    // HeaderLojasCondorModule,
    // HeaderLojasCondorBuscaModule,
    // HeaderLojasCondorBuscaModule,
  ],
})
export class HomePageModule {}
