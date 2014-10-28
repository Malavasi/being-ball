#pragma strict


public class Flips extends MonoBehaviour{
public var Tecla : String = "m";
public var Tecla2 : String = "z";
public var Sonido: AudioClip = null;
private var inicioL: float = 0.0f;
private var inicioR: float = 0.0f;
public var izq: boolean = false;
public var der: boolean = false;

static function M () : Flips {
    return FindObjectOfType(Flips);
 }

function Start () {
	
}

/*
 *Reprodice el sonido de un flip ademas de su propia animacion
 */
function Update () {
	if(Input.GetKeyDown(Tecla))
	{
		animation.Play("FlipL");
		if(Sonido)
		{
			audio.PlayOneShot(Sonido);
			izq = true;
		}
	}
	if(Input.GetKeyDown(Tecla2))
	{
		animation.Play("FlipR");
		if(Sonido)
		{
			audio.PlayOneShot(Sonido);
			der = true;
		}
	}
	if(inicioL>0.5f)
	{
		izq = false;
		inicioL =0.0f;
	}
	if(inicioR>0.5f)
	{
		der = false;
		inicioR =0.0f;
	}
	if(der)
	{
		inicioR += Time.deltaTime;
	}
	if(izq)
	{
		inicioL += Time.deltaTime;
	}
}

}