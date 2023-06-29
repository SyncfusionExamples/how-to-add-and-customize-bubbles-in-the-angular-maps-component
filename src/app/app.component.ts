import { Component } from '@angular/core';
import * as worldMapData from './worldMap.json';
import { Maps, Bubble} from '@syncfusion/ej2-angular-maps';
Maps.Inject(Bubble);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public bubbleData: object[] = [
    { CountryName:"China", Value:26.069578973425973, Color:"#7F38A0", Population:746662194 },
    { CountryName:"India", Value:18.89685398845257, Color:"#7F38A0", Population:391292635 },
    { CountryName:"United States", Value:14.990417962652455, Color:"#99295D", Population:245436423 },
    { CountryName:"Brazil", Value:10.697262204318639, Color:"#364A98", Population:123927230 },
    { CountryName:"Japan", Value:10.422287570687047, Color:"#7F38A0 ", Population:117528631 },
    { CountryName:"Russia", Value:10.089306526634514, Color:"#2E769F", Population:110003284 },
    { CountryName:"Mexico", Value:8.418801064678872, Color:"#99295D ", Population:75937568 },
    { CountryName:"United Kingdom", Value:7.651679331043155, Color:"#2E769F", Population:62354410 },
    { CountryName:"South Africa", Value:6.6856680708458756, Color:"#816F28", Population:47094267 },
    { CountryName:"Egypt", Value:6.000680715088463, Color:"#816F28", Population:37519531 }
  ]

  public titleSettings: object={
    text: 'Top 10 countries with highest Internet users'
  }

  public layerOptions: object[] = [{
    shapeData: worldMapData,
    shapePropertyPath: 'name',
    shapeDataPath: 'CountryName',
    shapeSettings: {
      fill: '#E5E5E5'
    },
    bubbleSettings:[
      {
        visible: true,
        dataSource: this.bubbleData,
        valuePath: 'Value',
        colorValuePath: 'Color',
        bubbleType: 'Circle',
        // fill: '#37AFAB',
        animationDuration: 1000,
        minRadius: 3,
        maxRadius: 15,
        tooltipSettings:{
          visible: true,
          valuePath: 'Value',
          format: 'Internet Users in ${CountryName} <br> ${Value} '
        },
      },
      // {
      //   visible: true,
      //   dataSource: this.bubbleData,
      //   valuePath: 'Population',
      //   colorValuePath: 'Color',
      //   minRadius: 7,
      //   maxRadius: 25,
      //   opacity: 0.4
      // }
    ]
  }]
}
