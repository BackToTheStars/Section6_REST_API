/** @type {import("../typings/phaser")} */
import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";

let game = new Phaser.Game({
    width: 300,
    height:300,
    scene:[
        LoadScene, MenuScene
    ]
});
