import { CST } from "../CST";
import { MenuScene } from "./MenuScene";

/** @type {import("../typings/phaser")} */

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){
    
    }
    preload() {

    }
    create(){
        this.scene.start(CST.SCENES.MENU, "hello from Load Scene");
    }
}
