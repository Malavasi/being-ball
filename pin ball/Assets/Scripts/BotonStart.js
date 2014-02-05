#pragma strict

public var escenario : String; 
public var camara : Camara;
public var moneda : AudioClip;
private var iniciar : boolean = false;
private var tiempo : float = 0.0f;

function Awake()
{
	camara = FindObjectOfType(Camara);
}

/*
 * Reproduce el sonido de inicio
 */
function OnMouseDown()
{
	if(moneda)
	{
		audio.PlayOneShot(moneda);
	}
	iniciar = true;
}

/*
 * Da tiempo para reproducir el sonido
 */
function Update()
{
	if(iniciar)
	{
		tiempo += Time.deltaTime;
	}
	if(tiempo>2.3)
	{
		//aplication load
	}
	
}

/*
 *Agranda el boton 
 */
function OnMouseOver()
{
	if(transform.localScale.x < 0.30)
	{
		transform.localScale.x += 0.03;
   		transform.localScale.z += 0.03;
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