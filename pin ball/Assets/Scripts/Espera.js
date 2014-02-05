#pragma strict
private var espera: float = 0.0f;
public var siguiente : String = "";

function Start () {

}

/*
 * Tiempo de espera
 */
function Update () {
	espera += Time.deltaTime;
	if(7.0f<espera)
	{
		Application.LoadLevel(siguiente);
	}
	
}

function OnMouseDown(){
	Application.LoadLevel(siguiente);
}