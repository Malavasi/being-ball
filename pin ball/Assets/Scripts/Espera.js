#pragma strict
var espera: float = 0.0f;
var nomas : boolean = false;

function Start () {

}

/*
 * Pone la presentacion de las imagenes iniciales
 */
function Update () {
	espera += Time.deltaTime;
	if(espera<14.0f && 7.0f<espera)
	{
		transform.localPosition = new Vector3(-30,14.98,-35); 
	}
	
	if(16.0f<espera && !nomas)
	{
		transform.localPosition = new Vector3(-30,14.98,-21); 
		nomas = true;
	}
	
}