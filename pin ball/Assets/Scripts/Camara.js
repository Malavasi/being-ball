﻿#pragma strict

public var vivo : boolean = true;
function Start () {
	
}
/*
 * Si esta en juego se posiciona en la pelota la camara
 */
function Update () {

		transform.position.x = GameObject.Find("Pelota").transform.position.x;
		transform.position.y = GameObject.Find("Pelota").transform.position.y+0.02f;
		transform.position.z = GameObject.Find("Pelota").transform.position.z;
}