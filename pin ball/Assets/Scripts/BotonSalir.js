#pragma strict

/*
 *Finaliza la aplicacion
 */
function OnMouseDown()
{
	Application.Quit();
}

/*
 *Agranda el boton 
 */
function OnMouseOver()
{
	if(transform.localScale.x < 0.30)
	{
		transform.localScale.x += 0.06;
   		transform.localScale.z += 0.06;
   	}
}
/*
 * Devuelve la imagen al tamaño original
 */
function OnMouseExit()
{
	transform.localScale.x = 0.2;
    transform.localScale.z = 0.1;
}