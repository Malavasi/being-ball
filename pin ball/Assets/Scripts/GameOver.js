#pragma strict

public var sonidoDerrota : AudioClip;
private var derrota = false;
private var tiempo :float = 0.0f;
private var pelota : GameObject;
private var camara : Camara;


/**
  *Detecta si la bola entro a zona de derrota
  */
function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == "Pelota")
	{
		audio.PlayOneShot (sonidoDerrota);
		derrota = true;
		pelota = collision.gameObject;
	}
}


function Awake(){
	camara = FindObjectOfType(Camara);
}

/**
  * Da tiempo para que el sonido pueda reproducirse
  */
function Update(){
	if(derrota)
	{
		tiempo+=Time.deltaTime;
	}
	if (2<tiempo)
	{
		camara.vivo = false;
		pelota.transform.localPosition = new Vector3(-7.91,2.04,2.54);
		tiempo = 0.0f;
		derrota = false;
	}

}