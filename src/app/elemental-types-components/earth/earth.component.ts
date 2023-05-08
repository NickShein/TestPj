import { Component, OnInit } from '@angular/core';
import { ElementalObject } from '../elemental-object';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  earthElementalObject:ElementalObject = {
    name : 'Earth Elemental',
    imgLink : 'https://w0.peakpx.com/wallpaper/1012/307/HD-wallpaper-castle-age-genesis-the-earth-elemental-earth-elemental-genesis-castle-age-elemental-monster-earth-castle-age-monster.jpg',
    description : "An earth elemental plods forward like a walking hill, club-like arms of jagged stone swinging at its sides. Its head and body consist of dirt and stone, occasionally set with chunks of metal, gems, and bright minerals.The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
