#pragma strict

function Start () {

}
/*
 * Vuelve al menu principal
 */
function Update () {
	if(Input.GetKeyDown("escape"))
	{
		Application.LoadLevel("pin ball");
	}
}