import { CST } from "../CST";

/** @type {import("../typings/phaser")} */

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(data){
        console.log(data);
        console.log("I GOT IT");
    }
    create(){

    }
}