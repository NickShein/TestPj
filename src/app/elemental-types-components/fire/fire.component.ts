import { Component, OnInit } from '@angular/core';
import { ElementalObject } from '../elemental-object';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  fireElementalObject:ElementalObject = {
    name : 'Fire Elemental',
    imgLink : 'https://e0.pxfuel.com/wallpapers/50/411/desktop-wallpaper-fire-elemental.jpg',
    description : 'A fire elemental is a vaguely humanoid shape made entirely of flickering flame.[2] Its "arms" are arbitrary appendages which appear to flicker out only to spring again from its body. It has no facial features except for two patches of blue fire, which resemble eyes.[3] A typical large fire elemental around 16 feet tall, weighing only 4 lbs. The smallest variety stands at 4 feet, while powerful elder fire elementals have been known as tall as 40 feet,[1] with a rare few colossal primal fire elementals even greater than that.[4] Some fire elemental creatures closely resemble animals or other creatures familiar to the Material Plane.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
