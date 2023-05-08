import { Component, OnInit } from '@angular/core';
import { ElementalObject } from '../elemental-object';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit {
  windElementalObject:ElementalObject = {
    name : 'Wind Elemental',
    imgLink : 'https://w0.peakpx.com/wallpaper/588/893/HD-wallpaper-elemental-girl-element-ghost-girl-wind-elemental-clouds-abstract-sky.jpg',
    description : "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
