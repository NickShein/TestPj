import { Component, OnInit } from '@angular/core';
import { ElementalObject } from '../elemental-object';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {
  waterElementalObject:ElementalObject = {
    name : 'Water Elemental',
    imgLink : 'https://e0.pxfuel.com/wallpapers/755/470/desktop-wallpaper-elemental-water-element.jpg',
    description : "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
