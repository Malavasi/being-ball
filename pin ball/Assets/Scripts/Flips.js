#pragma strict


public class Flips extends MonoBehaviour{
public var Tecla : String = "m";
public var Tecla2 : String = "z";
public var Sonido: AudioClip = null;

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
		}
	}
	if(Input.GetKeyDown(Tecla2))
	{
		animation.Play("FlipR");
		if(Sonido)
		{
			audio.PlayOneShot(Sonido);
		}
	}
}
}